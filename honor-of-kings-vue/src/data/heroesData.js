export const roles = [
    { key: 'all', name: '全部' },
    { key: 'tank', name: '坦克' },
    { key: 'warrior', name: '战士' },
    { key: 'mage', name: '法师' },
    { key: 'assassin', name: '刺客' },
    { key: 'marksman', name: '射手' },
    { key: 'support', name: '辅助' }
];

export const heroesData = [
    {
        id: 1,
        name: '露娜',
        role: ['mage','assassin'],
        roleText: '法师/刺客',
        image:'./imgs/heroes/luna/luna.jpg',
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
        image: './imgs/heroes/libai/libai.jpeg',
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
        image: './imgs/heroes/diaochan/diaochan.jpg',
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
        role: 'assassin',
        roleText: '刺客',
        image: './imgs/heroes/sunwukong/sunwukong.jpg',
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
        image: './imgs/heroes/yase/yase.png',
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
        image: './imgs/heroes/houyi/houyi.webp',
        description: '半神之弓，拥有强大的持续输出能力和全图支援能力',
        stats: { attack: 92, defense: 40, magic: 20, difficulty: 50 },
        skills: [
            { name: '惩戒射击', description: '后羿的普攻命中敌人后增加自身攻击速度，可叠加3层' },
            { name: '多重箭矢', description: '后羿强化普攻，单目标高额伤，另两敌半伤。 ' },
            { name: '落日余晖', description: '显敌视野，范围法伤，减速边缘减半' },
            { name: '灼日之矢', description: '远距晕眩，爆炸范围伤敌减速' }
        ]
    },
    {
        id: 7,
        name: '蔡文姬',
        role: ['support','mage'],
        roleText: '辅助/法师',
        image: './imgs/heroes/caiwenji/caiwenji.png',
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
        image: './imgs/heroes/hanxin/hanxin.webp',
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
        image: './imgs/heroes/zhangfei/zhangfei.png',
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
        image: './imgs/heroes/liushan/liushan.png',
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
        image: './imgs/heroes/zhuangzhou/zhuangzhou.png',
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
        image: './imgs/heroes/niumo/niumo.png',
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
        image: './imgs/heroes/zhongkui/zhongkui.jpg',
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
        image: './imgs/heroes/yao/yao.png',
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
        image: './imgs/heroes/wangzhaojun/wangzhaojun.png',
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
        image: './imgs/heroes/xishi/xishi.png',
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
        image: './imgs/heroes/luban/luban.png',
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
        image: './imgs/heroes/ailin/ailin.png',
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
        image: './imgs/heroes/gongsunli/gongsunli.jpeg',
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
        image: './imgs/heroes/bailishouyue/bailishouyue.jpg',
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
        image: './imgs/heroes/sunshangxiang/sunshangxiang.webp',
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
        image: './imgs/heroes/gongbenwuzang/gongbenwuzang.png',
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
        image: './imgs/heroes/change/change.jpg',
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
        image: './imgs/heroes/pangu/pangu.png',
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
        image: './imgs/heroes/kai/kai.jpg',
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
        image: './imgs/heroes/lan/lan.jpg',
        description: '潜水突袭收割，多段位移，高爆发刺客  ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '狩猎', description: '当敌人的生命值低于30%，会被澜视作“猎物”。澜的技能和普攻对“猎物”额外造成7.5%~15%真实伤害' },
            { name: '破浪', description: '下潜加速，河道常驻，猎物近则爆发追击   ' },
            { name: '断空', description: '双割伤获印回血，追击减CD，潜有位移' },
            { name: '处决', description: '下潜处决免投匕，拖敌破控高伤减CD  ' }
        ]
    },
    {
        id: 27,
        name: '海月',
        role: 'mage',
        roleText: '法师',
        image: '/imgs/heroes/haiyue/haiyue.webp',
        description: '幻境法师，操纵月华，大招致命  ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '别月', description: '海月耗月盘放技能，命中叠印触发效果 ' },
            { name: '瞬华', description: '海月释放月光，造成法术伤害，印记触发额外真伤' },
            { name: '流光', description: '海月发三法球，有伤害护盾移速，印记触发晕眩 ' },
            { name: '幻海映月', description: '海月链接英雄，免伤入幻境，减冷却可拉距   ' }
        ]
    },
    {
        id: 28,
        name: '少司缘',
        role: ['mage','support'],
        roleText: '法师/辅助',
        image: '/imgs/heroes/shaosiyuan/shaosiyuan.png',
        description: '辅助法师，牵线搭桥，掌控姻缘之线  ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
             { name: '吟行', description: '7.5 - 6秒强化普攻，达成业绩奖金币减CD  ' },
            { name: '两同心', description: '祝友“良缘”回血，触发赐福再回并加速 ' },
            { name: '怨离别', description: '警示“冤缘”显形伤害，化解定身降伤减速  ' },
            { name: '因缘际会', description: '大招施“缘”，友回血敌伤，被动增伤回血' }
        ]
    },
    {
        id: 29,
        name: '海诺',
        role: 'mage',
        roleText: '法师',
        image: '/imgs/heroes/hainuo/hainuo.png',
        description: '海诺输出极高，可远程近战，大招回溯战场   ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '命运洞察', description: '海诺双态战斗，命中叠印，远近伤害各异' },
            { name: '命刃·追芒/旋击', description: '海诺命中减冷，远掷杖伤近挥刃，回血减速  ' },
            { name: '命途行游', description: '海诺穿行，近敌近战远敌远程，增益随敌提升' },
            { name: '命运回溯', description: '海诺开领域减伤回血，延迟伤敌回溯自身塔 ' }
           
        ]
    },
    {
        id: 30,
        name: '朵莉亚',
        role:  ['mage','support'],
        roleText: '法师/辅助',
        image: '/imgs/heroes/duoliya/duoliya.jpg',
        description: '人鱼公主朵莉亚，辅助能续航还可重置技能    ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '人鱼之赐', description: '水域化人鱼，减控回血，赐契约助队友 ' },
            { name: '欢歌', description: '朵莉亚声波扩散伤敌减速，水域释放有击退晕   ' },
            { name: '逐浪', description: '朵莉亚跃起造水域回血，水中释放减冷却 ' },
            { name: '天籁', description: '朵莉亚刷新友军技能，收益共享，冷却灵活  ' }
           
        ]
    },
    {
        id: 31,
        name: '桑启',
        role:  ['mage','support'],
        roleText: '法师/辅助',
        image: '/imgs/heroes/sangqi/sangqi.jpg',
        description: '萌趣桑启，治愈队友，种树助力战场    ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '萤火庇护', description: '桑启普攻召萤伤敌显形，无敌蓄力自回血  ' },
            { name: '桑木为引', description: '桑启引萤火伤敌击飞，有友则治疗队友    ' },
            { name: '乘风启程', description: '桑启飞草放萤，伤敌显形或为友回血，可充能  ' },
            { name: '萤火微光', description: '桑启召光之草丛，发射萤火伤敌或疗友   ' }
           
        ]
    },
    {
        id: 32,
        name: '上官婉儿',
        role:  'mage',
        roleText: '法师',
        image: '/imgs/heroes/shangguanwaner/shangguanwaner.png',
        description: '婉儿墨舞长空，笔力惊鸿，大招收割战场',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '笔阵', description: '婉儿普攻强化，笔力碰撞伤敌，触之回血   ' },
            { name: '篆法·疾势', description:'婉儿挥笔伤敌，远距爆炸再添一次伤害 ' },
            { name: '飞白·藏锋', description: '婉儿书写伤敌减速，笔势可储，冷却可变   ' },
            { name: '章草·横鳞', description: '婉儿冲刺伤敌，多段冲刺高空打击，减冷却    ' }
           
        ]
    },
    {
        id: 33,
        name: '米莱狄',
        role:  'mage',
        roleText: '法师',
        image: '/imgs/heroes/milaidi/milaidi.png',
        description: '米莱狄召唤机械，远程消耗，推塔能力超强 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '机械仆从', description: '米莱狄召仆从，合体升级，攻敌爆塔有伤害' },
            { name: '空中力量', description:'米莱狄指挥飞行器伤敌，分身可减速目标' },
            { name: '强制入侵', description: '米莱狄区域召仆伤敌，技能冷却可储三组     ' },
            { name: '浩劫磁场', description: '米莱狄大招标记眩晕，增仆速，死敌召三仆 ' }
           
        ]
    },
    {
        id: 34,
        name: '张良',
        role:  'mage',
        roleText: '法师',
        image: '/imgs/heroes/zhangliang/zhangliang.png',
        description: '张良乃法师谋士，控场强，善用法阵制敌取胜  ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '言灵·咒令', description: '被动：1.5秒内连伤，1.2秒满叠，真伤随级增 ' },
            { name: '言灵·壁垒', description:'召唤壁垒，触之伤晕减速，再触衰减' },
            { name: '言灵·命数', description: '召唤侵蚀法阵，多存持续伤敌，阵中提移速供视野' },
            { name: '言灵·操纵', description: '大招抓敌压制2.2秒，结束生区伤敌晕眩  ' }
           
        ]
    },
    {
        id: 35,
        name: '杨玉环',
        role:  'mage',
        roleText: '法师',
        image: '/imgs/heroes/yangyuhuan/yangyuhuan.png',
        description: '音波法师，治疗/输出双形态，团队增益核心',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '惊鸿调', description: '切换曲调，破阵伤敌，清平为友军及自身回血 ' },
            { name: '霓裳曲', description:'音波伤敌减速，普攻强化，兵野额外伤 ' },
            { name: '胡旋乐', description: '提速后范围晕眩，附可观法术伤害' },
            { name: '长恨歌', description: '无敌解控，群体治疗并对敌造成伤害' }
           
        ]
    },
    {
        id: 36,
        name: '明世隐',
        role:   ['mage','support'],
        roleText: '法师/辅助',
        image: '/imgs/heroes/mingshiyin/mingshiyin.png',
        description: '明世隐牵人增伤或承伤，团队辅助利器 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '大吉大利', description: '被动：普攻强化伤敌，回血，非英雄回复减半' },
            { name: '临卦·无忧', description:'连友增益，触链伤敌，自身属性提升 ' },
            { name: '师卦·飞翼', description: '链敌减防伤敌，自增防，暴露视野' },
            { name: '泰卦·长生', description: '链敌伤真，链友回生，双连抽取，死返冷却' }
           
        ]
    },
    {
        id: 37,
        name: '女娲',
        role: 'mage',
        roleText: '法师',
        image: '/imgs/heroes/nvwa/nvwa.png',
        description: '多维度施法，远程消耗与控场兼备法师 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '寰宇神识', description: '女娲提升10~20%视野、普攻与技能释放范围' },
            { name: '神晖：缔造', description:'能量击退，十字阵伤，触壁爆炸增伤 ' },
            { name: '神晖：融聚', description: '造矩阵阻敌，合成爆炸，多存多控' },
            { name: '神晖：降临', description: '裂地传送，护己伤敌，法强提速' },
            { name: '神晖：诛灭', description: '能量直伤，遇矩阵空间触发爆炸' }
        ]
    },
    {
        id: 38,
        name: '狂铁',
        role:  ['warrior','tank'],
        roleText: '战士/坦克',
        image: '/imgs/heroes/kuangtie/kuangtie.png',
        description: '狂铁战士，能量战斗，近敌输出控制强推 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '无畏战车', description: '普攻技能充能，满能强化，附带回复' },
            { name: '碎裂之刃', description:'双挥回血，充能伤害与回复倍增 ' },
            { name: '强袭风暴', description: '冲锋强化普攻，充能击晕减速' },
            { name: '力场压制', description: '砸地减速生盾，充能增伤，电弧窃速' }
        ]
    },
    {
        id: 39,
        name: '梦奇',
        role:  ['mage','tank'],
        roleText: '法师/坦克',
        image: '/imgs/heroes/mengqi/mengqi.jpg',
        description: '梦奇体型可变，近战远程切换，能抗能打 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '食梦', description: '技获质量增攻防，战斗非战耗有别' },
            { name: '梦境萦绕', description:'护盾伤敌增质量，普攻减CD ' },
            { name: '梦力泡泡', description: '泡泡减速回收增质，久飞爆弹高伤' },
            { name: '梦境环游', description: '环游获质伤敌，停环击飞，霸体可控' }
        ]
    },
    {
        id: 40,
        name: '廉颇',
        role: 'tank',
        roleText: '坦克',
        image: '/imgs/heroes/lianpo/lianpo.webp',
        description: '廉颇，肉盾坦克，强控开团，抗伤搅乱战局 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '勇士之魂', description: '战斗提战意减伤增攻速，脱战回血' },
            { name: '爆裂冲撞', description:'冲锋击飞，普攻三击附加高额伤 ' },
            { name: '熔岩重击', description: '护盾减伤崩地伤敌，拉怪刷新一技能' },
            { name: '天崩地裂', description: '三技能跳砸连击，伤害递增且带控，可接一技能' }
        ]
    },
    {
        id: 41,
        name: '白起',
        role: 'tank',
        roleText: '坦克',
        image: '/imgs/heroes/baiqi/baiqi.png',
        description: '坦克战神，嘲讽强控，团战搅局能手 ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '反击之镰', description: '受创增暗影之力，提移速与治疗效果' },
            { name: '血之回响', description:'蓄力旋镰伤敌回血，被动受伤概率触发，蓄满三倍收益' },
            { name: '死神之镰', description: '唤镰拉敌，造成法伤减速，被动对残血目标额外增伤30%' },
            { name: '傲慢嘲讽', description: '满能跳砸，高额法术伤害，依血量增时嘲讽' }
        ]
    },
    {
        id: 42,
        name: '鲁班大师',
        role: ['tank','support'],
        roleText: '坦克/辅助',
        image: '/imgs/heroes/lubandashi/lubandashi.jpg',
        description: '鲁班大师，机械操控，牵引队友，强控开团能手  ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '稷下科技', description: '施法叠盾四层，五秒强击附带法伤' },
            { name: '助推跳跃', description:'跳跃落地展力场，击飞敌人并造成法伤' },
            { name: '助手驰援', description: '施盾连队友，队友交互位移伤敌，未用返30%冷却' },
            { name: '强力收纳', description: '扇形连敌，扯回爆炸，多目标伤害递减' }
        ]
    },
    {
        id: 43,
        name: '猪八戒',
        role:'tank',
        roleText: '坦克',
        image: '/imgs/heroes/zhubajie/zhubajie.jpg',
        description: '肉坦能抗，耙击回血，控制拉扯搅乱战局   ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '毫发无伤', description: '损血暂存，伤敌40%残血转真血，普攻附额外物理伤' },
            { name: '肉弹蹦床', description:'两段跳砸伤敌击飞，霸体免控，多敌衰减小兵增伤' },
            { name: '倒打一耙', description: '耙击减速，嵌墙撞敌晕眩，普攻可拉回目标' },
            { name: '圈养时刻', description: '筑墙拦敌，施法霸体，起墙瞬间高额伤' }
        ]
    },
    {
        id: 44,
        name: '孙权',
        role:'marksman',
        roleText: '射手',
        image: '/imgs/heroes/sunquan/sunquan.webp',
        description: '双刀突进，强化连击，破甲续航团战强   ',
        stats: { attack: 88, defense: 50, magic: 25, difficulty: 90 },
        skills: [
            { name: '坐断东南', description: '普攻技能施印记降敌伤，攻速提施法，满层解锁大招。' },
            { name: '麾召千锋', description:'军旗掷地减速伤敌，破阵箭雨高频打击' },
            { name: '疾弦骤羽', description: '常规疾弦加速锁敌，破阵近距减攻间隔，能耗有别。' },
            { name: '麾旌破阵', description: '孙权执旗追敌挥旗攻击，末击倍伤后退，进入破阵状态' }
        ]
    },
];
 