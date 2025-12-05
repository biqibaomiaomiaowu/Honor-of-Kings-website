<template>
  <section class="game-modes">
    <h2 class="modes-title">适配游戏模式</h2>
    <div class="modes-grid">
      <div class="mode-card">
        <img src="/imgs/map/pipei.jpg" alt="5v5模式" class="mode-image">
        <div class="mode-info">
          <h3 class="mode-name">5v5经典对战</h3>
          <p class="mode-description">
            最核心的MOBA对战模式，5v5团队协作，通过推塔、打野、团战积累优势，最终摧毁敌方水晶获胜，考验团队配合与策略布局。
          </p>
        </div>
      </div>

      <div class="mode-card">
        <img src="/imgs/map/paiwei.jpg" alt="排位赛" class="mode-image">
        <div class="mode-info">
          <h3 class="mode-name">排位赛</h3>
          <p class="mode-description">
            基于王者峡谷的竞技模式，玩家通过胜利提升段位，匹配实力相近的对手，是展示个人技术与团队协作的最高舞台。
          </p>
        </div>
      </div>

      <div class="mode-card">
        <img src="/imgs/map/dianfengsai.jpg" alt="巅峰赛" class="mode-image">
        <div class="mode-info">
          <h3 class="mode-name">巅峰赛</h3>
          <p class="mode-description">
            高段位玩家专属的竞技模式，无铭文公平对战，仅使用王者峡谷地图，胜负直接影响巅峰积分，是顶尖玩家的终极对决。
          </p>
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
