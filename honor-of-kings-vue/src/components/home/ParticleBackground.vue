<script setup>
import { ref, onMounted } from 'vue';
import * as PIXI from 'pixi.js';

const particlesContainer = ref(null);

const initParticles = async () => {
    if (!particlesContainer.value) return;

    const pixiApp = new PIXI.Application();
    
    await pixiApp.init({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x000000,
        backgroundAlpha: 0,
        resizeTo: window
    });
    
    particlesContainer.value.appendChild(pixiApp.canvas);
    
    const particleContainer = new PIXI.Container();
    pixiApp.stage.addChild(particleContainer);
    
    const particles = [];
    for (let i = 0; i < 50; i++) {
        const particle = new PIXI.Graphics();
        particle.beginFill(0xffd700, 0.3);
        particle.drawCircle(0, 0, Math.random() * 3 + 1);
        particle.endFill();
        
        particle.x = Math.random() * pixiApp.screen.width;
        particle.y = Math.random() * pixiApp.screen.height;
        particle.vx = (Math.random() - 0.5) * 2;
        particle.vy = (Math.random() - 0.5) * 2;
        
        particles.push(particle);
        particleContainer.addChild(particle);
    }
    
    pixiApp.ticker.add(() => {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0) particle.x = pixiApp.screen.width;
            if (particle.x > pixiApp.screen.width) particle.x = 0;
            if (particle.y < 0) particle.y = pixiApp.screen.height;
            if (particle.y > pixiApp.screen.height) particle.y = 0;
        });
    });
};

onMounted(() => {
    initParticles().catch(err => console.error('Pixi init failed:', err));
});
</script>

<template>
    <div ref="particlesContainer" id="particles-container"></div>
</template>

<style scoped>
#particles-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none; /* 防止遮挡点击 */
}
</style>