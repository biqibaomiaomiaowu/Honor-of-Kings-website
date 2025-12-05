<template>
  <div class="map-info">
    <div class="info-card">
      <h3 class="info-title">
        <i class="fas fa-chess-king"></i>
        基地与水晶
      </h3>
      <div class="info-content">
        <ul class="info-list">
          <li><i class="fas fa-shield-alt"></i>基地是胜利的关键，摧毁敌方基地即可获得胜利</li>
          <li><i class="fas fa-cog"></i>水晶会不断产生小兵推进战线</li>
          <li><i class="fas fa-home"></i>在基地范围内可以快速回复生命值和法力值</li>
          <li><i class="fas fa-shopping-cart"></i>商店位于基地内，可购买装备强化英雄</li>
        </ul>
      </div>
    </div>

    <div class="info-card">
      <h3 class="info-title">
        <i class="fas fa-tower"></i>
        防御塔
      </h3>
      <div class="info-content">
        <ul class="info-list">
          <li><i class="fas fa-crosshairs"></i>每路有3座外塔，提供视野和防御</li>
          <li><i class="fas fa-bolt"></i>防御塔攻击会随时间增加伤害</li>
          <li><i class="fas fa-users"></i>防御塔优先攻击小兵和召唤物</li>
          <li><i class="fas fa-coins"></i>摧毁防御塔获得金币和经验奖励</li>
        </ul>
      </div>
    </div>

    <div class="info-card">
      <h3 class="info-title">
        <i class="fas fa-tree"></i>
        野区资源
      </h3>
      <div class="info-content">
        <ul class="info-list">
          <li><i class="fas fa-dragon"></i>暴君：提供团队金币和经验</li>
          <li><i class="fas fa-crown"></i>主宰：提供主宰先锋推进</li>
          <li><i class="fas fa-ghost"></i>暗影暴君：提供强力BUFF效果</li>
          <li><i class="fas fa-fire"></i>红蓝BUFF：提供持续增益效果</li>
        </ul>
      </div>
    </div>
  </div>
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
