<template>
  <section class="game-modes">
    <h2 class="modes-title">游戏模式</h2>
    <div class="modes-grid">
      <div class="mode-card">
        <img src="/imgs/map/5v5.png" alt="5v5" class="mode-image">
        <div class="mode-info">
          <div class="mode-name">5v5 王者峡谷</div>
          <div class="mode-description">
            最经典的竞技模式，三路兵线，野区资源，团队配合是取胜关键。
          </div>
        </div>
      </div>

      <div class="mode-card">
        <img src="/imgs/map/3v3.jpg" alt="3v3" class="mode-image">
        <div class="mode-info">
          <div class="mode-name">3v3 长平攻防战</div>
          <div class="mode-description">
            单路对抗，节奏更快，更注重个人操作和小规模团战配合。
          </div>
        </div>
      </div>

      <div class="mode-card">
        <img src="/imgs/map/1v1.png" alt="1v1" class="mode-image">
        <div class="mode-info">
          <div class="mode-name">1v1 墨家机关道</div>
          <div class="mode-description">
            单挑模式，纯粹的个人实力比拼，是练习英雄操作的最佳场所。
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.game-modes {
    margin-bottom: 3rem;
}

.modes-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 1.5rem;
}

.modes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
}

.mode-card {
    background: rgba(26, 35, 50, 0.8);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 215, 0, 0.2);
}

.mode-card:hover {
    transform: translateY(-5px);
    border-color: #ffd700;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.mode-image {
    width: 100%;
    height: 160px;
    object-fit: cover;
}

.mode-info {
    padding: 1.2rem;
}

.mode-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 0.5rem;
}

.mode-description {
    color: #b0b0b0;
    font-size: 0.95rem;
    line-height: 1.4;
}
</style>
