<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue';
import * as echarts from 'echarts';

// 响应式数据
const searchQuery = ref('');
const currentFilter = ref('all');
const showModal = ref(false);
const selectedHero = ref(null);
const statsChart = ref(null);

// 英雄角色分类
const roles = ref([
    { key: 'all', name: '全部' },
    { key: 'tank', name: '坦克' },
    { key: 'warrior', name: '战士' },
    { key: 'assassin', name: '刺客' },
    { key: 'mage', name: '法师' },
    { key: 'marksman', name: '射手' },
    { key: 'support', name: '辅助' }
]);

// 英雄数据
const heroesData = ref([
    {
        id: 1,
        name: '露娜',
        role: ['mage','assassin'],
        roleText: '法师/刺客',
        image:'/imgs/heroes/luna/luna.jpg',
        description: '月光之女，拥有强大的突进能力和持续输出能力',
        stats: { attack: 85, defense: 60, magic: 70, difficulty: 80 },
        skills: [
            { name: '月光之舞', description: '露娜的普攻和技能会标记敌人，标记达到3层时会触发月光之舞效果' },
            { name: '弦月斩', description: '露娜向指定方向挥出剑气，对路径上的敌人造成伤害并标记' },
            { name: '炙热剑芒', description: '露娜向指定方向冲锋，对路径上的敌人造成伤害并眩晕' },
            { name: '新月突击', description: '露娜对指定敌人发起突击，造成大量伤害并刷新技能冷却' }
        ]
    },
    {
        id: 2,
        name: '李白',
        role: 'assassin',
        roleText: '刺客',
        image: '/imgs/heroes/libai/libai.jpeg',
        description: '青莲剑仙，以华丽的剑法和灵活的位移著称',
        stats: { attack: 90, defense: 45, magic: 30, difficulty: 85 },
        skills: [
            { name: '侠客行', description: '李白的普攻会减少技能冷却时间' },
            { name: '将进酒', description: '李白向指定方向突进，对路径上的敌人造成伤害' },
            { name: '神来之笔', description: '李白以自身为中心化剑为青莲剑阵，对范围内敌人造成伤害' },
            { name: '青莲剑歌', description: '李白化身为剑气，对指定方向范围内的敌人飞速穿梭斩击' }
        ]
    },
    {
        id: 3,
        name: '貂蝉',
        role: 'mage',
        roleText: '法师',
        image: '/imgs/heroes/diaochan/diaochan.jpg',
        description: '闭月羞花，拥有美丽的舞姿和强大的法术伤害',
        stats: { attack: 40, defense: 50, magic: 95, difficulty: 75 },
        skills: [
            { name: '语·花印', description: '貂蝉的技能命中会为目标叠加花之印记，持续8秒' },
            { name: '落·红雨', description: '貂蝉向前挥出花球并收回，每段造成法术伤害' },
            { name: '缘·心结', description: '貂蝉瞬间消失，并立即出现在指定方向的终点' },
            { name: '绽·风华', description: '貂蝉绽放风华，原地结成法阵，造成法术伤害' }
        ]
    },
    {
        id: 4,
        name: '孙悟空',
        role: 'warrior',
        roleText: '刺客',
        image: '/imgs/heroes/sunwukong/sunwukong.jpg',
        description: '齐天大圣，拥有超强的爆发力和生存能力',
        stats: { attack: 88, defense: 70, magic: 25, difficulty: 60 },
        skills: [
            { name: '大圣神威', description: '孙悟空的普攻和技能命中敌人会强化下一次普攻' },
            { name: '护身咒法', description: '孙悟空念起护身咒，护身咒可为孙悟空抵挡一次敌方技能' },
            { name: '斗战冲锋', description: '孙悟空朝指定方向冲锋，命中敌人造成物理伤害' },
            { name: '如意金箍', description: '孙悟空将金箍棒变大直插入地，对范围内敌人造成物理伤害' }
        ]
    },
    {
        id: 5,
        name: '亚瑟',
        role: ['tank','warrior'],
        roleText: '坦克/战士',
        image: '/imgs/heroes/yase/yase.png',
        description: '圣骑之力，新手友好的坦克英雄，拥有稳定的控制能力',
        stats: { attack: 65, defense: 85, magic: 30, difficulty: 30 },
        skills: [
            { name: '圣光守护', description: '亚瑟获得圣光守护，每2秒恢复2%的最大生命值' },
            { name: '誓约之盾', description: '亚瑟短时间内提高移动速度，下一次普攻造成额外伤害' },
            { name: '回旋打击', description: '亚瑟在身边召唤圣盾，持续对周围敌人造成伤害' },
            { name: '圣剑裁决', description: '亚瑟向敌方英雄跳跃，造成目标最大生命值百分比伤害' }
        ]
    },
    {
        id: 6,
        name: '后羿',
        role: 'marksman',
        roleText: '射手',
        image: '/imgs/heroes/houyi/houyi.webp',
        description: '半神之弓，拥有强大的持续输出能力和全图支援能力',
        stats: { attack: 92, defense: 40, magic: 20, difficulty: 50 },
        skills: [
            { name: '惩戒射击', description: '后羿的普攻命中敌人后增加自身攻击速度，可叠加3层' },
            { name: '炙日之矢', description: '后羿向前方射出火焰箭，击中敌方英雄时造成物理伤害' },
            { name: '燎原箭雨', description: '后羿向前方扇形区域射出箭矢，每支箭矢造成物理伤害' },
            { name: '火鸟之翼', description: '后羿向前方射出火焰鸟，对路径上的敌人造成物理伤害' }
        ]
    },
    {
        id: 7,
        name: '蔡文姬',
        role: ['support','mage'],
        roleText: '辅助/法师',
        image: '/imgs/heroes/caiwenji/caiwenji.png',
        description: '天籁弦音，拥有强大的治疗能力和控制技能',
        stats: { attack: 35, defense: 55, magic: 80, difficulty: 40 },
        skills: [
            { name: '长歌行', description: '蔡文姬受到伤害后短暂提高移动速度' },
            { name: '思无邪', description: '蔡文姬演奏乐曲，为自身和周围的友方英雄恢复生命值' },
            { name: '胡笳乐', description: '蔡文姬向指定方向弹奏音波，音波会向外飞出并造成法术伤害' },
            { name: '忘忧曲', description: '蔡文姬释放琴音，为范围内友方英雄恢复生命值并提高物理防御' }
        ]
    },
    {
        id: 8,
        name: '韩信',
        role: 'assassin',
        roleText: '刺客',
        image: '/imgs/heroes/hanxin/hanxin.webp',
        description: '国士无双，拥有多段位移和高爆发能力',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '杀意之枪', description: '韩信的第四次普攻会击飞目标' },
            { name: '无情冲锋', description: '韩信持枪冲锋后挑飞目标，对其造成物理伤害' },
            { name: '背水一战', description: '韩信向后跳跃并使下一次普攻变为横扫' },
            { name: '国士无双', description: '韩信朝指定方向乱舞四次长枪，对命中的敌人造成物理伤害' }
        ]
    },
    {
        id: 9,
        name: '张飞',
        role: ['tank','support'],
        roleText: '坦克/辅助',
        image: '/imgs/heroes/zhangfei/zhangfei.png',
        description: '强力坦克，开团硬控，大招变身护盾保护队友',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '黑暗潜能', description: '张飞变身前，每次普攻会增加3点狂意。张飞变身后，施放技能会使得周围的地面震动，附近的敌人将会减少25~50%移速，持续2秒。' },
            { name: '画地为牢', description: '张飞挥扫蛇矛对敌人造成580/696/812/928/1044/1160(+145%物理攻击)物理伤害，命中敌方英雄时会将其击退。命中敌方单位会增加3点狂意。' },
            { name: '守护机关', description: '张飞向指定区域跳跃，落地时启动机关印记给范围内友军生成625/750/875/1000/1125/1250(+12.5％额外生命值)护盾(至多5人)。释放技能会增加3点狂意，每给一位友方英雄生成一个护盾可额外增加1点狂意。' },
            { name: '狂兽血性', description: '张飞开团怒吼击退眩晕，获得护盾霸体，变身强化普攻。' }
        ]
    },
    {
        id: 10,
        name: '刘禅',
        role: ['tank','support'],
        roleText: '坦克/辅助',
        image: '/imgs/heroes/liushan/liushan.png',
        description: '机关干扰者，连续控制开团，旋转大招群伤。',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '磁力屏障', description: '刘禅被动：技能对机关造成伤害并干扰1.2秒，掠夺零件回复生命（随等级成长）。' },
            { name: '小霸王护盾', description: '刘禅开盾冲锋获护盾加速，强化普攻击飞敌人。' },
            { name: '机关魔爪', description: '刘禅魔爪范围眩晕1秒，造成物理伤害。' },
            { name: '暴走熊猫', description: '刘禅旋转攻击持续伤害减速，期间可释放其他技能。' }
        ]
    },
    {
        id: 11,
        name: '庄周',
        role: ['tank','support'],
        roleText: '坦克/辅助',
        image: '/imgs/heroes/zhuangzhou/zhuangzhou.png',
        description: '解控辅助，群体免控，大招守护队友安危',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '自然意志', description: '庄周被动：免控解控+15%减伤移速，6秒自动回血（随额外生命成长）。' },
            { name: '化蝶', description: '庄周化蝶飞行，路径敌人受法术伤害与高额减速。' },
            { name: '蝴蝶效应', description: '庄周蝴蝶扇动，附近敌伤友增移速，可叠加，被动触发。' },
            { name: '天人合一', description: '庄周大招：幻域解控免控，队友获护盾持续1.5秒' }
        ]
    },
    {
        id: 12,
        name: '牛魔',
        role: ['tank','support'],
        roleText: '坦克/辅助',
        image: '/imgs/heroes/niumo/niumo.png',
        description: '坚盾战神，抗伤控场，为团队冲锋陷阵',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '强力援护', description: '当800范围内有友方英雄时，为自身和范围内生命值最低的友方英雄提供110点双抗加成。' },
            { name: '咆哮之斧', description: '牛魔横劈大斧伤敌标记，印记叠层增额外伤害' },
            { name: '横行霸道', description: '牛魔冲锋破敌，高额伤击飞减移速一秒' },
            { name: '山崩地裂', description: '牛魔蓄力劈地，大范围击飞破法，裂地持续伤敌减速' }
        ]
    },
    {
        id: 13,
        name: '钟馗',
        role: ['tank','support'],
        roleText: '坦克/辅助',
        image: '/imgs/heroes/zhongkui/zhongkui.jpg',
        description: '勾锁拉敌，大招强控，威慑力十足守团战',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '制裁仪式', description: '伤逾十成爆敌身，亡后三秒再燃幽冥威' },
            { name: '虚空清道者', description: '钟馗锤地伤敌减速，内圈高伤加印锁敌' },
            { name: '湮灭之锁', description: '钟馗钩锁拉敌致伤并标记，助战叠层增生命' },
            { name: '轮回吞噬', description: '钟馗开躯十六吞，高额伤敌附晕，吞噬获护盾' }
        ]
    },
    {
        id: 14,
        name: '瑶',
        role: ['mage','support'],
        roleText: '法师/辅助',
        image: '/imgs/heroes/yao/yao.png',
        description: '灵鹿附体,可附身加盾，解控变鹿减速敌人',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '山鬼·白鹿', description: '瑶受硬控化鹿灵，免控减速，技能冷却刷新' },
            { name: '若有人兮', description: '举杖击退，跟踪打击带击飞显形，多态有增益' },
            { name: '风飒木萧', description: '5秒群攻敌，附身增距，鹿灵可跳跃。' },
            { name: '独立兮山之上', description: '附身赐真盾，技能强减CD，脱附返半 。' }
        ]
    },
    {
        id: 15,
        name: '王昭君',
        role: 'mage',
        roleText: '法师',
        image: '/imgs/heroes/wangzhaojun/wangzhaojun.png',
        description: '冰盾控场法师，冰冻减速联动，大招暴风雪。',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '冰封之心', description: '脱战获冰盾，普攻化锥，技能附减速效果' },
            { name: '凋零冰晶', description: '冰晶绽放高伤加冰冷，施法获视野2秒。' },
            { name: '禁锢寒霜', description: '寒霜延迟冻敌，对冻敌额外施法伤。' },
            { name: '凛冬已至', description: '暴风雪五秒伤敌附冷效，召唤刷新护盾 。' }
        ]
    },
    {
        id: 16,
        name: '西施',
        role: 'mage',
        roleText: '法师',
        image: '/imgs/heroes/xishi/xishi.png',
        description: '灵动西施，妙舞操幻纱，以智控敌乱战场 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '少女的把戏', description: '西施技能伤害随距增，每100增5%，至多提40% ' },
            { name: '纱缚之印', description: '西施扔法器伤敌聚拢，纱缚印控敌，非英雄双倍 ' },
            { name: '幻纱之灵', description: '西施抛球遇野停，多段减伤，中心爆炸双倍' },
            { name: '心无旁骛', description: '西施强化视野8秒，双技优化，提速，可提前关大' }
        ]
    },
    {
        id: 17,
        name: '鲁班七号',
        role: 'marksman',
        roleText: '射手',
        image: '/imgs/heroes/luban/luban.png',
        description: '火力射手，火力倾泻战场，收割实力强劲 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '火力压制', description: '鲁班七号五普或技能后扫射，三次伤害分敌增减' },
            { name: '河豚手雷', description: '鲁班手雷：高额物理伤，减速控敌并获视野 ' },
            { name: '无敌鲨嘴炮', description: '鲁班七号发射火箭，击退敌人，附已损生命法术伤' },
            { name: '空中支援', description: '鲁班召飞艇支援14秒，投弹伤敌减速，照亮视野 ' }
        ]
    },
    {
        id: 18,
        name: '艾琳',
        role: 'marksman',
        roleText: '射手',
        image: '/imgs/heroes/ailin/ailin.png',
        description: '法伤射手，技能穿梭，持续输出战场强控 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '精灵舞步', description: '艾琳：普攻获能飞行，强普双伤，取优穿透吸血' },
            { name: '叶舞·致意', description: '艾琳月桂叶：命中叠加印记，环伤减速，法攻减冷却  ' },
            { name: '旋舞·轻语', description: '艾琳：受祝福回能双印，免减速增攻速3秒 ' },
            { name: '月桂之舞·盛放', description: '艾琳：能量叠印，6层解锁大招，伤敌减冷却可关 ' }
        ]
    },
    {
        id: 19,
        name: '公孙离',
        role: 'marksman',
        roleText: '射手',
        image: '/imgs/heroes/gongsunli/gongsunli.jpeg',
        description: '伞舞灵动，多段位移，高爆发射手典范 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '晚云落', description: '公孙离：印记群伤，伞位回返，移速攻速追伤可存。' },
            { name: '岑中归月', description: '阿离向指定方向瞬步，并将纸伞留在原地（如果纸伞在阿离手中）  ' },
            { name: '霜叶舞', description: '阿离旋伞两段法术伤，击落飞行物破敌招。 ' },
            { name: '孤鹜断霞', description: '阿离击退敌人，法术伤掷伞，伤害随技能等级递增。 ' }
        ]
    },
    {
        id: 20,
        name: '百里守约',
        role: ['marksman','assassin'],
        roleText: '射手/刺客',
        image: '/imgs/heroes/bailishouyue/bailishouyue.jpg',
        description: '超远狙击破防，陷阱控场，偷袭收割能手 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '瞄准', description: '百里守约：伏击增伤穿甲，暴击提升技能伤害' },
            { name: '静谧之眼', description: '守约布视野装置，300秒探测，多敌占速失；非战隐匿提攻速移速 。  ' },
            { name: '狂风之息', description: '百里守约：狙击高额伤减速，充能速受攻速影响 ' },
            { name: '逃脱', description: '百里守约：后跳射击减速，双移速效果，增普攻射程。 ' }
        ]
    },
    {
        id: 21,
        name: '孙尚香',
        role: 'marksman',
        roleText: '射手',
        image: '/imgs/heroes/sunshangxiang/sunshangxiang.webp',
        description: '翻滚强化炮击，高爆输出，灵活射手典范 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '活力迸发', description: '被动：孙尚香每次普通攻击命中敌人都会减少0.5秒翻滚突袭的冷却时间。' },
            { name: '翻滚突袭', description: '孙尚香翻滚强化射击，近敌提速，普攻重置增距  ' },
            { name: '红莲爆弹', description: '爆弹减速减甲标记，普攻对标增伤破防 ' },
            { name: '究极弩炮', description: '蓄力弩炮，首敌高额伤，爆破范围递减 ' }
        ]
    },
    {
        id: 22,
        name: '宫本武藏',
        role: ['warrior','assassin'],
        roleText: '战士/刺客',
        image: '/imgs/heroes/gongbenwuzang/gongbenwuzang.png',
        description: '无双突进强控，技能衔接，高爆发战士 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '二天一流', description: '技能蓄势，普攻强化，多伤减CD破敌 。' },
            { name: '空明斩', description: '空明斩剑气伤敌减速，释放霸体抗控。  ' },
            { name: '神速', description: '宫本武藏冲刺破敌，命中获盾减CD，高机动性刺客' },
            { name: '一决生死', description: '大招突进击飞，减伤霸体，迟滞目标回复 ' }
        ]
    },
    {
        id: 23,
        name: '嫦娥',
        role: ['warrior','mage'],
        roleText: '战士/法师',
        image: '/imgs/heroes/change/change.jpg',
        description: '蓝量换血伤，技能爆发强，清线守塔佳 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '月盈', description: '移动普攻攒强化，减速回蓝，满蓝转回血。' },
            { name: '月辰', description: '推球定身英雄，穿插减时，获普攻移速。  ' },
            { name: '月璇', description: '双涡旋伤耗法回血，吸附兵线减伤可控。' },
            { name: '月芒', description: '弹幕倾泻增移速，耗蓝换伤回血，可续放技能。 ' }
        ]
    },
    {
        id: 24,
        name: '盘古',
        role: 'warrior',
        roleText: '战士',
        image: '/imgs/heroes/pangu/pangu.png',
        description: '斧刃撕裂减甲，枪形态突进，近战强控 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '盘古斧', description: '斧碎化臂，斧伤流血，臂击范围高额伤' },
            { name: '狂怒突袭', description: '跃地强普冲锋，斧臂双态攻速增，冷却减半  ' },
            { name: '压制之握', description: '缴械标记敌，攻击高额伤减速，普攻回血强' },
            { name: '开天辟地', description: '劈裂缴械减速，霸体变臂，多击衰减 。 ' }
        ]
    },
    {
        id: 25,
        name: '铠',
        role: ['warrior','tank'],
        roleText: '战士/坦克',
        image: '/imgs/heroes/kai/kai.jpg',
        description: '一刀流战士，大招增伤霸体，近战收割强手 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '修罗之魂', description: '铠的普攻和【极刃风暴】只命中一个目标时将会额外造成50%伤害。' },
            { name: '回旋之刃', description: '掷刃弹射减速，回血减CD，攻速移速双增。  ' },
            { name: '极刃风暴', description: '双斩击飞，强化普攻冲锋，脱战续航提移速' },
            { name: '不灭魔躯', description: '大招召唤魔铠强化属性，持续伤可提前关  ' }
        ]
    },
    {
        id: 26,
        name: '澜',
        role: ['warrior','assassin'],
        roleText: '战士/刺客',
        image: '/imgs/heroes/lan/lan.jpg',
        description: '潜水突袭收割，多段位移，高爆发刺客  ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '狩猎', description: '当敌人的生命值低于30%，会被澜视作“猎物”。澜的技能和普攻对“猎物”额外造成7.5%~15%真实伤害' },
            { name: '破浪', description: '下潜加速，河道常驻，猎物近则爆发追击   ' },
            { name: '断空', description: '双割伤获印回血，追击减CD，潜有位移' },
            { name: '处决', description: '下潜处决免投匕，拖敌破控高伤减CD  ' }
        ]
    },
]);

// 计算属性：过滤英雄
const filteredHeroes = computed(() => {
    let result = heroesData.value;
    
    // 按角色筛选
    if (currentFilter.value !== 'all') {
        result = result.filter(hero => {
            if (Array.isArray(hero.role)) {
                return hero.role.includes(currentFilter.value);
            }
            return hero.role === currentFilter.value;
        });
    }
    
    // 按搜索词筛选
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        result = result.filter(hero => 
            hero.name.toLowerCase().includes(query)
        );
    }
    
    return result;
});

// 方法：切换筛选条件
const changeFilter = (role) => {
    currentFilter.value = role;
};

// 方法：显示英雄详情
const showHeroDetail = (hero) => {
    selectedHero.value = hero;
    showModal.value = true;
    
    // 在模态框显示后渲染图表
    nextTick(() => {
        renderStatsChart(hero.stats);
    });
};

// 方法：关闭模态框
const closeModal = () => {
    showModal.value = false;
};

// 方法：渲染属性雷达图
const renderStatsChart = (stats) => {
    if (!statsChart.value) return;
    
    const myChart = echarts.init(statsChart.value);

    const option = {
        backgroundColor: 'transparent',
        radar: {
            indicator: [
                { name: '攻击', max: 100 },
                { name: '防御', max: 100 },
                { name: '法术', max: 100 },
                { name: '难度', max: 100 }
            ],
            axisName: {
                color: '#ffd700'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 215, 0, 0.3)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 215, 0, 0.5)'
                }
            }
        },
        series: [{
            type: 'radar',
            data: [{
                value: [stats.attack, stats.defense, stats.magic, stats.difficulty],
                name: '英雄属性',
                areaStyle: {
                    color: 'rgba(255, 215, 0, 0.3)'
                },
                lineStyle: {
                    color: '#ffd700'
                },
                itemStyle: {
                    color: '#ffd700'
                }
            }]
        }]
    };

    myChart.setOption(option);
};

// 生命周期：组件挂载后
onMounted(() => {
    // 添加滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // 停止观察已显示的元素，避免重复触发
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 观察英雄卡片
    const observeHeroCards = () => {
        nextTick(() => {
            document.querySelectorAll('.hero-card').forEach(card => {
                // 仅对未初始化的卡片设置初始状态
                if (!card.dataset.observed) {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    card.style.transition = 'all 0.6s ease';
                    card.dataset.observed = 'true'; // 标记已观察
                    observer.observe(card);
                }
            });
        });
    };
    
    // 初始观察
    observeHeroCards();
    
    // 监听过滤结果变化，重新观察新渲染的卡片
    watch(filteredHeroes, () => {
        // 稍微延迟以确保DOM更新
        setTimeout(observeHeroCards, 100);
    });
});
</script>

<template>
    <div class="heroes-page">
        <main class="main-content">
            <div class="page-header">
                <h1 class="page-title">英雄介绍</h1>
                <p class="page-subtitle">探索王者峡谷中的每一位英雄，了解他们的故事与技能</p>
            </div>

            <div class="search-filter-section">
                <div class="search-box">
                    <input 
                        type="text" 
                        class="search-input" 
                        placeholder="搜索英雄名称..." 
                        v-model="searchQuery"
                    >
                </div>
                <div class="filter-buttons">
                    <button 
                        v-for="role in roles" 
                        :key="role.key"
                        class="filter-btn" 
                        :class="{ active: currentFilter === role.key }"
                        @click="changeFilter(role.key)"
                    >
                        {{ role.name }}
                    </button>
                </div>
            </div>

            <div class="heroes-container">
                <div 
                    v-for="hero in filteredHeroes" 
                    :key="hero.id"
                    class="hero-card"
                    @click="showHeroDetail(hero)"
                >
                    <div class="hero-image-container">
                        <img :src="hero.image" :alt="hero.name" class="hero-image">
                        <div class="hero-overlay"></div>
                    </div>
                    <div class="hero-info">
                        <h3 class="hero-name">{{ hero.name }}</h3>
                        <span class="hero-role">{{ hero.roleText }}</span>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <div class="stat-value">{{ hero.stats.attack }}</div>
                                <div class="stat-label">攻击</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">{{ hero.stats.defense }}</div>
                                <div class="stat-label">防御</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">{{ hero.stats.magic }}</div>
                                <div class="stat-label">法术</div>
                            </div>
                        </div>
                        <p class="hero-description">{{ hero.description }}</p>
                    </div>
                </div>
            </div>

            <div class="no-results" v-if="filteredHeroes.length === 0">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                <h3>未找到匹配的英雄</h3>
                <p>请尝试其他搜索条件</p>
            </div>
        </main>

        <!-- 英雄详情模态框 -->
        <div class="modal" v-if="showModal" @click.self="closeModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">{{ selectedHero.name }}</h2>
                    <button class="close-btn" @click="closeModal">&times;</button>
                </div>
                <div class="hero-detail-grid">
                    <div>
                        <img :src="selectedHero.image" :alt="selectedHero.name" class="hero-detail-image">
                    </div>
                    <div>
                        <div class="hero-stats-chart" ref="statsChart"></div>
                    </div>
                </div>
                <div class="hero-skills">
                    <h3 class="skills-title">技能介绍</h3>
                    <div class="skill-item" v-for="skill in selectedHero.skills" :key="skill.name">
                        <div class="skill-name">{{ skill.name }}</div>
                        <div class="skill-description">{{ skill.description }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.heroes-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0d1117 100%);
    color: #ffffff;
    padding-top: 80px; /* Add padding for fixed navbar */
}

.main-content {
    padding: 2rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.page-header {
    text-align: center;
    margin-bottom: 3rem;
}

.page-title {
    font-size: 3rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 1rem;
}

.page-subtitle {
    font-size: 1.2rem;
    color: #b0b0b0;
}

.search-filter-section {
    background: rgba(26, 35, 50, 0.8);
    padding: 2rem;
    border-radius: 15px;
    margin-bottom: 2rem;
    border: 1px solid rgba(255, 215, 0, 0.2);
}

.search-box {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.search-input {
    flex: 1;
    padding: 1rem;
    background: rgba(15, 20, 25, 0.8);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 8px;
    color: #ffffff;
    font-size: 1rem;
    min-width: 250px;
}

.search-input::placeholder {
    color: #888;
}

.search-input:focus {
    outline: none;
    border-color: #ffd700;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

.filter-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}

.filter-btn {
    padding: 0.8rem 1.5rem;
    background: rgba(15, 20, 25, 0.8);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 25px;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.filter-btn:hover, .filter-btn.active {
    background: #ffd700;
    color: #0f1419;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.heroes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

.hero-card {
    background: rgba(26, 35, 50, 0.9);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 215, 0, 0.2);
    cursor: pointer;
    position: relative;
}

.hero-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: #ffd700;
}

.hero-image-container {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.hero-card:hover .hero-image {
    transform: scale(1.1);
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%);
}

.hero-info {
    padding: 1.5rem;
}

.hero-name {
    font-size: 1.4rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 0.5rem;
}

.hero-role {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    background: rgba(255, 107, 53, 0.2);
    color: #ff6b35;
    border-radius: 15px;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.stat-item {
    text-align: center;
    padding: 0.5rem;
    background: rgba(15, 20, 25, 0.5);
    border-radius: 8px;
}

.stat-value {
    font-size: 1.1rem;
    font-weight: bold;
    color: #ffd700;
}

.stat-label {
    font-size: 0.8rem;
    color: #888;
}

.hero-description {
    color: #b0b0b0;
    font-size: 0.9rem;
    line-height: 1.4;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2000;
    backdrop-filter: blur(5px);
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(26, 35, 50, 0.95);
    border-radius: 20px;
    padding: 2rem;
    max-width: 800px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    border: 1px solid rgba(255, 215, 0, 0.3);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.modal-title {
    font-size: 2rem;
    font-weight: bold;
    color: #ffd700;
}

.close-btn {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close-btn:hover {
    color: #ffd700;
}

.hero-detail-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

.hero-detail-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 15px;
}

.hero-stats-chart {
    height: 300px;
}

.hero-skills {
    margin-top: 2rem;
}

.skills-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 1rem;
}

.skill-item {
    background: rgba(15, 20, 25, 0.5);
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.skill-name {
    font-weight: bold;
    color: #ff6b35;
    margin-bottom: 0.5rem;
}

.skill-description {
    color: #b0b0b0;
    font-size: 0.9rem;
}

.loading {
    text-align: center;
    padding: 2rem;
    color: #ffd700;
}

.no-results {
    text-align: center;
    padding: 3rem;
    color: #888;
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2rem;
    }
    
    .search-box {
        flex-direction: column;
    }
    
    .filter-buttons {
        justify-content: flex-start;
    }
    
    .heroes-container {
        grid-template-columns: 1fr;
    }
    
    .hero-detail-grid {
        grid-template-columns: 1fr;
    }
    
    .modal-content {
        width: 95%;
        padding: 1rem;
    }
}
</style>