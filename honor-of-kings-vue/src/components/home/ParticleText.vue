<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: '王者荣耀'
  },
  fontSize: {
    type: Number,
    default: 100
  },
  color: {
    type: String,
    default: '#ffd700' // 金色
  }
});

const canvasRef = ref(null);
let ctx = null;
let particles = [];
let animationId = null;
let mouse = { x: null, y: null, radius: 15 }; // 交互半径缩小为原来的1/4 (60 -> 15)

// 粒子类
class Particle {
  constructor(x, y, targetX, targetY) {
    this.targetX = targetX;
    this.targetY = targetY;
    // 初始位置
    // this.x = Math.random() * canvasRef.value.width;
    // this.y = Math.random() * canvasRef.value.height;
    
    this.size = Math.random() * 1 + 0.5; // 粒子更小 (1.5+1 -> 1+0.5)
    this.color = props.color;
    
    // 轨道参数
    this.angle = Math.random() * Math.PI * 2; // 当前轨道角度
    this.currentRadius = Math.random() * 200 + 100; // 初始爆炸半径
    // 飞行速度降低为原来的一半
    this.orbitSpeed = (Math.random() * 0.02 + 0.01) * (Math.random() < 0.5 ? 1 : -1); 
    
    this.ease = 0.025; // 缓动速度也减半

    // 初始位置：直接设置在轨道上，避免出现矩形分布的视觉效果
    this.x = this.targetX + Math.cos(this.angle) * this.currentRadius;
    this.y = this.targetY + Math.sin(this.angle) * this.currentRadius;
  }

  draw() {
    ctx.fillStyle = this.color;
    // 优化：使用 fillRect 替代 arc，大幅提升性能
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    // 1. 鼠标交互 (星系扰动)
    // 计算鼠标到粒子"归宿点"的距离
    let dx = mouse.x - this.targetX;
    let dy = mouse.y - this.targetY;
    let dist = Math.sqrt(dx * dx + dy * dy);
    
    let targetRadius = 0; // 默认归位（半径为0）
    
    // 如果鼠标靠近，粒子会扩散并加速旋转
    // 交互范围随 mouse.radius 缩小
    if (dist < mouse.radius + 20) { 
        targetRadius = 30; // 扩散半径也相应减小
        this.angle += this.orbitSpeed * 3; // 旋转加速
    } else {
        this.angle += this.orbitSpeed; // 正常旋转
    }
    
    // 2. 半径缓动
    this.currentRadius += (targetRadius - this.currentRadius) * this.ease;
    
    // 3. 计算位置 (极坐标转笛卡尔坐标)
    // 粒子围绕 targetX, targetY 旋转
    this.x = this.targetX + Math.cos(this.angle) * this.currentRadius;
    this.y = this.targetY + Math.sin(this.angle) * this.currentRadius;
  }
}

const init = () => {
  if (!canvasRef.value) return;
  
  const canvas = canvasRef.value;
  ctx = canvas.getContext('2d');
  
  // 设置画布大小
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  
  particles = [];
  
  // 自适应字体大小
  let fontSize = props.fontSize;
  if (canvas.width < 800) {
    fontSize = Math.min(props.fontSize, canvas.width / 5);
  }

  // 绘制文字以获取像素数据
  ctx.font = `bold ${fontSize}px "Microsoft YaHei", sans-serif`;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // 在画布中心绘制文字
  ctx.fillText(props.text, canvas.width / 2, canvas.height / 2);
  
  // 获取像素数据
  const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  // 扫描像素数据生成粒子
  // step 决定粒子密度，值越小粒子越密
  // 优化：增加采样步长，减少粒子总数 (2 -> 4)
  const step = 1; 
  
  for (let y = 0; y < textCoordinates.height; y += step) {
    for (let x = 0; x < textCoordinates.width; x += step) {
      // 检查 alpha 通道 (每4个值一组: r, g, b, a)
      const index = (y * 4 * textCoordinates.width) + (x * 4) + 3;
      if (textCoordinates.data[index] > 128) {
        particles.push(new Particle(x, y, x, y));
      }
    }
  }
  
  // 清除文字，准备开始动画
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
const animate = () => {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
  
  // 优化：移除昂贵的 shadowBlur，保留 lighter 混合模式
  // ctx.shadowBlur = 4; // 移除以提升性能
  // ctx.shadowColor = props.color;
  ctx.globalCompositeOperation = 'lighter';
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].draw();
    particles[i].update();
  }
  
  ctx.globalCompositeOperation = 'source-over';
  
  animationId = requestAnimationFrame(animate);
};

const handleMouseMove = (e) => {
  // 使用 offsetX/Y 自动处理滚动和容器偏移，无需手动计算 getBoundingClientRect
  mouse.x = e.offsetX;
  mouse.y = e.offsetY;
};

const handleMouseLeave = () => {
  mouse.x = null;
  mouse.y = null;
};

const handleResize = () => {
  if (canvasRef.value) {
    init();
  }
};

onMounted(() => {
  // 延迟一点初始化，确保字体加载和布局完成
  setTimeout(() => {
    if (canvasRef.value) {
        init();
        animate();
    }
  }, 100);
  
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('resize', handleResize);
});

// 监听属性变化重新初始化
watch(() => props.text, init);
</script>

<template>
  <div class="particle-text-container">
    <canvas 
      ref="canvasRef" 
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    ></canvas>
  </div>
</template>

<style scoped>
.particle-text-container {
  width: 100%;
  height: 200px; /* 根据字体大小调整 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* 添加遮罩，使上下边缘的粒子淡出，避免硬切割导致的矩形感 */
  mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
  