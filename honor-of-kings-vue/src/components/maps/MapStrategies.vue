<template>
  <section class="strategic-points">
    <h2 class="points-title">战略要地</h2>
    <div class="points-grid">
      <div class="point-card">
        <div class="point-icon">
          <i class="fas fa-road"></i>
        </div>
        <div class="point-name">分路</div>
        <div class="point-description">
          上路（对抗路）、中路、下路（发育路），三条主要进攻路线，连接双方基地。
        </div>
      </div>

      <div class="point-card">
        <div class="point-icon">
          <i class="fas fa-tree"></i>
        </div>
        <div class="point-name">野区</div>
        <div class="point-description">
          分布在分路之间，提供野怪资源和Buff，是打野英雄的主要活动区域。
        </div>
      </div>

      <div class="point-card">
        <div class="point-icon">
          <i class="fas fa-water"></i>
        </div>
        <div class="point-name">河道</div>
        <div class="point-description">
          贯穿地图中心，连接三路和野区，是爆发团战和争夺中立生物的关键区域。
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.strategic-points {
    margin-bottom: 3rem;
}

.points-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 1.5rem;
}

.points-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.point-card {
    background: rgba(26, 35, 50, 0.8);
    padding: 1.5rem;
    border-radius: 15px;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 215, 0, 0.2);
}

.point-card:hover {
    transform: translateY(-10px);
    border-color: #ffd700;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.point-icon {
    font-size: 2.5rem;
    color: #ffd700;
    margin-bottom: 0.8rem;
}

.point-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 0.8rem;
}

.point-description {
    color: #b0b0b0;
    line-height: 1.5;
}
</style>
