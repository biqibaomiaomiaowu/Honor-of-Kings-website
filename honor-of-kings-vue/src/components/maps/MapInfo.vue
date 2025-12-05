<template>
  <section class="map-info">
    <div class="info-card">
      <div class="info-title">
        <i class="fas fa-ruler-combined"></i>
        地图规格
      </div>
      <div class="info-content">
        <ul class="info-list">
          <li><i class="fas fa-check"></i> 对角线距离：约 12000 码</li>
          <li><i class="fas fa-check"></i> 基地距离：约 8000 码</li>
          <li><i class="fas fa-check"></i> 河道宽度：约 800 码</li>
        </ul>
      </div>
    </div>

    <div class="info-card">
      <div class="info-title">
        <i class="fas fa-trophy"></i>
        胜利条件
      </div>
      <div class="info-content">
        <ul class="info-list">
          <li><i class="fas fa-check"></i> 摧毁敌方水晶</li>
          <li><i class="fas fa-check"></i> 敌方投降</li>
        </ul>
      </div>
    </div>

    <div class="info-card">
      <div class="info-title">
        <i class="fas fa-users"></i>
        对战规模
      </div>
      <div class="info-content">
        <ul class="info-list">
          <li><i class="fas fa-check"></i> 5 vs 5 团队竞技</li>
          <li><i class="fas fa-check"></i> 分路对抗 + 野区资源争夺</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.map-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.info-card {
    background: rgba(15, 20, 25, 0.6);
    padding: 1.5rem;
    border-radius: 15px;
    border: 1px solid rgba(255, 215, 0, 0.2);
    transition: all 0.3s ease;
}

.info-card:hover {
    transform: translateY(-5px);
    border-color: #ffd700;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.info-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.info-content {
    color: #e0e0e0;
    line-height: 1.6;
}

.info-list {
    list-style: none;
    padding: 0;
}

.info-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.info-list li:last-child {
    border-bottom: none;
}

.info-list li i {
    color: #ff6b35;
    width: 20px;
}
</style>
