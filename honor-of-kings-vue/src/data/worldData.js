export const factions = [
    {
        id: 1,
        name: '长安城',
        image: '/imgs/world/changan.webp',
        description: '繁华的中心都城，科技与魔法完美融合的文明中心。在这里，古老的智慧与现代的创新交相辉映。',
        heroes: ['李白', '狄仁杰', '李元芳', '武则天']
    },
    {
        id: 2,
        name: '稷下学院',
        image: '/imgs/world/jixiaxueyuan.jpg',
        description: '培养英雄的摇篮，汇聚了整个大陆最优秀的人才。三位贤者在这里传授着古老的智慧。',
        heroes: ['诸葛亮', '司马懿', '周瑜', '元歌']
    },
    {
        id: 3,
        name: '云梦泽',
        image: '/imgs/world/yunmengze.webp',
        description: '神歌森林梦幻神秘，神陨战后古云梦新生。千年后虽成乐土，但虚幻枯萎与反叛似引风暴 ',
        heroes: ['少司缘', '影', '大司命', '云中君']
    },
    {
        id: 4,
        name: '海都',
        image: '/imgs/world/haidu.webp',
        description: '阿尔卡纳叛乱终结旧神遭诅咒，建海都繁华，海都人爱冒险，盼通东方解咒  ',
        heroes: ['海诺', '朵莉亚', '米莱狄', '露娜']
    },
    {
        id: 5,
        name: '建木',
        image: '/imgs/world/jianmu.png',
        description: '上古神明居此建倒悬都市，“十方天枢”停摆引紊流，归山族抗灾盼归天。  ',
        heroes: ['妲己', '姜子牙', '盘古', '女娲']
    },
    {
        id: 6,
        name: '沙海',
        image: '/imgs/world/shahai.webp',
        description: '神陨后云中成荒漠，“船帮”崛起。沙民苦寻真王，盼指引沙漠走出厄运、重启辉煌   ',
        heroes: ['戈娅']
    }
];

export const timelineEvents = [
    { year: '太古时期', title: '科技文明的巅峰', description: '人类文明达到前所未有的高度，科技与魔法完美结合，创造了无数奇迹。' },
    { year: '大灾变', title: '文明的崩溃', description: '未知的灾难降临，辉煌的文明在一夜之间崩塌，世界回归原始状态。' },
    { year: '复兴时代', title: '新文明的崛起', description: '幸存者在废墟上重建文明，新的国家和势力逐渐形成，魔法重新觉醒。' },
    { year: '王者时代', title: '英雄辈出', description: '各路英雄豪杰涌现，为了理想、荣耀和信念，在王者大陆上书写传奇。' }
];

export const heroStories = [
    {
        id: 1,
        title: '月光之女',
        image: '/imgs/world/luna.jpg',
        description: '露娜身为古老的魔道家族后裔，继承了月光的力量。她与兄长铠的纠葛，以及与孙悟空的相遇，构成了一段跨越时空的传奇故事。'
    },
    {
        id: 2,
        title: '青莲剑仙',
        image: '/imgs/heroes/libai/libai.jpeg',
        description: '李白是长安城中最负盛名的剑客，他的剑法如诗如画，却背负着不为人知的过去。在剑与酒的世界里，他寻找着真正的自我。'
    },
    {
        id: 3,
        title: '闭月羞花',
        image: '/imgs/heroes/diaochan/diaochan.jpg',
        description: '貂蝉是稷下学院最优秀的学生之一，她掌握着古老的花之魔法。在乱世之中，她用自己的方式守护着心中的正义。'
    },
    {
        id: 4,
        title: '齐天大圣',
        image: '/imgs/heroes/sunwukong/sunwukong.jpg',
        description: '孙悟空来自神秘的东方，拥有不可思议的力量。他在王者大陆上寻找着战斗的意义，每一次战斗都让他更接近真相。'
    }
];

export const relationships = [
    {
        id: 1,
        avatars: [
            '/imgs/world/sunce.webp',
            '/imgs/world/daqiao.webp'
        ],
        type: '宿命羁绊',
        description: '孙策为江东霸业征战，勇猛无畏；大乔温柔支持，默默相伴。战场双防提升，如坚固防线相守。 他们的爱情在硝烟中绽放，成为彼此最坚强的后盾。'
    },
    {
        id: 2,
        avatars: [
            '/imgs/world/yangjian.webp',
            '/imgs/world/houyi.webp'
        ],
        type: '亦敌亦友',
        description: '杨戬与后羿曾为天界主神候选人，相互讥讽。因延误人间救援神力衰退，被迫合作。濒死觉悟后互信，触发「日曜之辉」。 '
    },
    {
        id: 3,
        avatars: [
            '/imgs/world/sunshangxiang.webp',
            '/imgs/world/luban.webp'
        ],
        type: '同门师兄妹',
        description: '孙尚香与鲁班七号是同门，感情深厚。故事中鲁班七号为护师妹不顾安危。游戏里，二者皆为射手，孙尚香输出灵活，鲁班七号火力强大。 '
    }
];
