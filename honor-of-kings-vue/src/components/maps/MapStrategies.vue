<template>
  <section class="strategic-points">
    <h2 class="points-title">战略要点</h2>
    <div class="points-grid">
      <div class="point-card">
        <div class="point-icon">
          <i class="fas fa-crosshairs"></i>
        </div>
        <h3 class="point-name">河道控制</h3>
        <p class="point-description">
          河道是连接各路的重要通道，控制河道视野可以获得敌方动向信息，为团战和支援创造有利条件。
        </p>
      </div>

      <div class="point-card">
        <div class="point-icon">
          <i class="fas fa-eye"></i>
        </div>
        <h3 class="point-name">视野控制</h3>
        <p class="point-description">
          在关键位置布置守卫，掌握敌方英雄位置信息，避免被gank，同时为团队提供决策依据。
        </p>
      </div>

      <div class="point-card">
        <div class="point-icon">
          <i class="fas fa-users"></i>
        </div>
        <h3 class="point-name">团战位置</h3>
        <p class="point-description">
          选择合适的团战位置，利用地形优势，发挥英雄特长，是取得团战胜利的关键因素。
        </p>
      </div>

      <div class="point-card">
        <div class="point-icon">
          <i class="fas fa-route"></i>
        </div>
        <h3 class="point-name">游走路线</h3>
        <p class="point-description">
          掌握各路之间的游走路线，快速支援队友，形成多打少的局面，建立优势。
        </p>
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
