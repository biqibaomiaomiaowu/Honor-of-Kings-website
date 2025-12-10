export const equipmentData = {
    attack: [
        {
            id: 1,
            name: '铁剑',
            price: 275,
            icon: 'imgs/equipment/tiejian.webp',
            stats: { '物理攻击': 20 }
        },
        {
            id: 2,
            name: '匕首',
            price: 300,
            icon: 'imgs/equipment/bishou.webp',
            stats: { '攻击速度': '10%' }
        },
        {
            id: 3,
            name: '搏击拳套',
            price: 300,
            icon: 'imgs/equipment/bojiquantao.webp',
            stats: { '暴击率': '8%' }
        },
        {
            id: 4,
            name: '吸血之镰',
            price: 300,
            icon: 'imgs/equipment/xixuezhilian.webp',
            stats: { '物理吸血': '8%' }
        },
        {
            id: 5,
            name: '附魔之羽',
            price: 300,
            icon: 'imgs/equipment/fumozhiyu.webp',
            stats: { '移速': '5%' }
        },
        {
            id: 6,
            name: '迅捷长矛',
            price: 760,
            icon: 'imgs/equipment/xunjiechangmao.webp',
            stats: { '物理攻击': 35, '移速': '7.5%' },
            materials: [
                'imgs/equipment/tiejian.webp',
                'imgs/equipment/fumozhiyu.webp'
            ]
        },
        {
            id: 7,
            name: '雷鸣刃',
            price: 820,
            icon: 'imgs/equipment/leimingren.webp',
            stats: { '物理攻击': 35, '暴击率': '12%' },
            materials: [
                'imgs/equipment/tiejian.webp',
                'imgs/equipment/bojiquantao.webp'
            ]
        },
        {
            id: 8,
            name: '风暴巨剑',
            price: 850,
            icon: 'imgs/equipment/fengbaojujian.webp',
            stats: { '物理攻击': 75 },
            materials: [
                'imgs/equipment/tiejian.webp',
                'imgs/equipment/tiejian.webp'
            ]
        },
        {
            id: 9,
            name: '日冕',
            price: 760,
            icon: 'imgs/equipment/rimian.webp',
            stats: { '物理攻击': 35, '最大生命': 450 },
            materials: [
                'imgs/equipment/tiejian.webp',
                'imgs/equipment/hongmanao.webp'
            ]
        },
        {
            id: 10,
            name: '狂暴双刃',
            price: 760,
            icon: 'imgs/equipment/kuangbaoshuangren.webp',
            stats: { '攻击速度': '15%', '移速': '7.5%' },
            materials: [
                'imgs/equipment/bishou.webp',
                'imgs/equipment/fumozhiyu.webp'
            ]
        },
        {
            id: 11,
            name: '陨星',
            price: 760,
            icon: 'imgs/equipment/yunxing.webp',
            stats: { '物理攻击': 35, '冷却缩减': '7.5%' },
            materials: [
                'imgs/equipment/tiejian.webp',
                'imgs/equipment/yuanliujiejing.webp'
            ]
        },
        {
            id: 12,
            name: '速击之枪',
            price: 800,
            icon: 'imgs/equipment/sujizhiqiang.webp',
            stats: { '物理攻击': 35, '攻击速度': '15%' },
            materials: [
                'imgs/equipment/bishou.webp',
                'imgs/equipment/tiejian.webp'
            ]
        },
        {
            id: 13,
            name: '精钢锻刀',
            price: 850,
            icon: 'imgs/equipment/jinggangduandao.webp',
            stats: { '攻击速度': '15%', '最大生命': 450 },
            materials: [
                'imgs/equipment/bishou.webp',
                'imgs/equipment/hongmanao.webp'
            ]
        },
        {
            id: 14,
            name: '血魂刃',
            price: 800,
            icon: 'imgs/equipment/xuehunren.webp',
            stats: { '物理攻击': 35, '物理吸血': '12%' },
            materials: [
                'imgs/equipment/xixuezhilian.webp',
                'imgs/equipment/tiejian.webp'
            ]
        },
        {
            id: 15,
            name: '穿云弓',
            price: 800,
            icon: 'imgs/equipment/chuanyungong.webp',
            stats: { '攻击速度': '15%', '暴击率': '12%' },
            materials: [
                'imgs/equipment/bishou.webp',
                'imgs/equipment/bojiquantao.webp'
            ]
        },
        {
            id: 16,
            name: '名刀·司命',
            price: 2060,
            icon: 'imgs/equipment/mingdaosiming.webp',
            stats: { '物理攻击': 75, '攻击速度': '15%', '最大生命': 500 },
            materials: [
                'imgs/equipment/fengbaojujian.webp',
                'imgs/equipment/jinggangduandao.webp'
            ],
            passives: [
                {
                    type: '被动-暗幕',
                    description: '受到致命伤害时不会立刻死亡，获得短暂无敌并增加15%攻速和移速，持续1秒（远程英雄为0.75秒），该效果购买携带后每5秒增加0.01秒持续时长，最多提升0.5秒（冷却时间：120秒）'
                }
            ]
        },
        {
            id: 17,
            name: '碎星锤',
            price: 2080,
            icon: 'imgs/equipment/suixingchui.webp',
            stats: { '物理攻击': 90, '最大生命': 700, '移速': '7.5%' },
            materials: [
                'imgs/equipment/rimian.webp',
                'imgs/equipment/xunjiechangmao.webp'
            ],
            passives: [
                {
                    type: '被动-破甲',
                    description: '增加30%物理穿透'
                }
            ]
        },
        {
            id: 18,
            name: '破魔刀',
            price: 2060,
            icon: 'imgs/equipment/pomodao.webp',
            stats: { '物理攻击': 90, '法术防御': 150, '最大生命': 600 },
            materials: [
                'imgs/equipment/fengbaojujian.webp',
                'imgs/equipment/shenyindoupeng.webp'
            ],
            passives: [
                {
                    type: '被动-破魔',
                    description: '获得(50%Ad)法术防御，最多不超过250点'
                }
            ]
        },
        {
            id: 19,
            name: '寒霜侵袭',
            price: 2040,
            icon: 'imgs/equipment/hanshuangqinxi.webp',
            stats: { '物理攻击': 70, '攻击速度': '25%', '最大生命': 750 },
            materials: [
                'imgs/equipment/rimian.webp',
                'imgs/equipment/sujizhiqiang.webp'
            ],
            passives: [
                {
                    type: '被动-寒霜',
                    description: '普攻和技能减少5%~10%移速，持续1.5秒，可叠加2层'
                },
                {
                    type: '被动-冻伤',
                    description: '普攻和技能对目标额外造成135~270（+45%额外Ad）物理伤害（冷却时间：3秒）'
                }
            ]
        },
        {
            id: 20,
            name: '制裁之刃',
            price: 2080,
            icon: 'imgs/equipment/zhicaizhiren.webp',
            stats: { '物理攻击': 100, '攻击速度': '20%', '物理吸血': '20% ' },
            materials: [
                'imgs/equipment/xuehunren.webp',
                'imgs/equipment/sujizhiqiang.webp'
            ],
            passives: [
                {
                    type: '被动-回魂',
                    description: '自身生命低于30%时，5秒内累计回复375~750点生命（冷却时间：20秒）'
                },
                {
                    type: '被动-重伤',
                    description: '普攻/技能命中敌人后降低其35%生命回复和吸血效果，持续2.5秒'
                }
            ]
        },
        {
            id: 21,
            name: '纯净苍穹',
            price: 2140,
            icon: 'imgs/equipment/chunjingcangqiong.webp',
            stats: { '物理攻击': 80, '冷却缩减': '10%', '物理防御': 150 },
            materials: [
                'imgs/equipment/yunxing.webp',
                'imgs/equipment/jingjihushou.webp'
            ],
            passives: [
                {
                    type: '被动-残废',
                    description: '技能对首个命中的敌方英雄造成10%~20%减速，并使其对自己的伤害降低20%，持续3秒（冷却时间：8秒）'
                },
                {
                    type: '主动-驱散',
                    description: '获得30%减伤，持续3秒（冷却时间：75秒）'
                }
            ]
        },
        {
            id: 22,
            name: '末世',
            price: 2100,
            icon: 'imgs/equipment/moshi.webp',
            stats: { '物理攻击': 40, '攻击速度': '20%', '物理吸血': '20%', '最大生命': 500 },
            materials: [
                'imgs/equipment/xuehunren.webp',
                'imgs/equipment/jinggangduandao.webp'
            ],
            passives: [
                {
                    type: '被动-破败',
                    description: '普攻额外造成目标80~160（+7%目标额外Hp）的物理伤害'
                }
            ]
        },
        {
            id: 23,
            name: '泣血之刃',
            price: 2020,
            icon: 'imgs/equipment/qixuezhiren.webp',
            stats: { '物理攻击': 85, '物理吸血': '25%', '最大生命': 500 },
            materials: [
                'imgs/equipment/xuehunren.webp',
                'imgs/equipment/rimian.webp'
            ],
            passives: [
                {
                    type: '被动-养战',
                    description: '增加25%物理技能吸血'
                }
            ]
        },
        {
            id: 24,
            name: '无尽战刃',
            price: 2110,
            icon: 'imgs/equipment/wujinzhanren.webp',
            stats: { '物理攻击': 120, '暴击率': '20%' },
            materials: [
                'imgs/equipment/fengbaojujian.webp',
                'imgs/equipment/leimingren.webp'
            ],
            passives: [
                {
                    type: '被动-无尽',
                    description: '获得20%暴击效果，每2%暴击增加1%暴击效果，最多不超过50%'
                }
            ]
        },
        {
            id: 25,
            name: '宗师之力',
            price: 2100,
            icon: 'imgs/equipment/zongshizhili.webp',
            stats: { '物理攻击': 55, '攻击速度': '15%', '暴击率': '20% ', '最大生命': 600 },
            materials: [
                'imgs/equipment/leimingren.webp',
                'imgs/equipment/jinggangduandao.webp'
            ],
            passives: [
                {
                    type: '被动-强击',
                    description: '使用技能后增加12%移速，持续2秒，并使5秒内的下次普攻额外造成（80%Ad)物理伤害（冷却时间：3秒）'
                }
            ]
        },
        {
            id: 26,
            name: '闪电匕首',
            price: 2040,
            icon: 'imgs/equipment/shandianbishou.webp',
            stats: { '物理攻击': 40, '攻击速度': '35%', '移速': '7.5% ' },
            materials: [
                'imgs/equipment/sujizhiqiang.webp',
                'imgs/equipment/kuangbaoshuangren.webp'
            ],
            passives: [
                {
                    type: '被动-电弧',
                    description: '普攻额外造成40~80法术伤害，每3次普攻会释放一次连锁闪电，造成160~400法术伤害'
                }
            ]
        },
        {
            id: 27,
            name: '影刃',
            price: 2040,
            icon: 'imgs/equipment/yingren.webp',
            stats: { '物理攻击': 45, '攻击速度': '35%', '暴击率': '20% ', '移速': '7.5%' },
            materials: [
                'imgs/equipment/leimingren.webp',
                'imgs/equipment/kuangbaoshuangren.webp'
            ],
            passives: [
                {
                    type: '被动-暴风',
                    description: '暴击后增加20%攻速和5%移速，持续3.5秒'
                }
            ]
        },
        {
            id: 28,
            name: '暗影战斧',
            price: 2090,
            icon: 'imgs/equipment/anyingzhanfu.webp',
            stats: { '物理攻击': 80, '冷却缩减': '10%', '最大生命': 500 },
            materials: [
                'imgs/equipment/yunxing.webp',
                'imgs/equipment/rimian.webp'
            ],
            passives: [
                {
                    type: '被动-切割',
                    description: '增加90~180物理穿透'
                }
            ]
        },
        {
            id: 29,
            name: '强者破军',
            price: 2540,
            icon: 'imgs/equipment/qiangzhepojun.webp',
            stats: { '物理攻击': 150, '冷却缩减': '5%' },
            materials: [
                'imgs/equipment/fengbaojujian.webp',
                'imgs/equipment/fengbaojujian.webp'
            ],
            passives: [
                {
                    type: '被动-破军',
                    description: '对生命值低于50%的敌人造成额外30%的伤害'
                }
            ]
        },
        {
            id: 30,
            name: '逐日之弓',
            price: 2100,
            icon: 'imgs/equipment/zhurizhigong.webp',
            stats: { '物理攻击': 40, '攻击速度': '20%', '暴击率': '15% ', '移速': '7.5%' },
            materials: [
                'imgs/equipment/chuanyungong.webp',
                'imgs/equipment/xunjiechangmao.webp'
            ],
            passives: [
                {
                    type: '被动-精准',
                    description: '普攻伤害提升25点（远程英雄使用时该效果翻倍）'
                },
                {
                    type: '主动-逐日',
                    description: '增加自己125点普攻射程和20%移速，持续5秒（增加射程效果仅远程英雄生效）（冷却时间：75秒）'
                }
            ]
        },
        {
            id: 31,
            name: '忍者破晓',
            price: 2570,
            icon: 'imgs/equipment/renzhepoxiao.webp',
            stats: { '物理攻击': 75, '攻击速度': '30%', '暴击率': '15% ' },
            materials: [
                'imgs/equipment/chuanyungong.webp',
                'imgs/equipment/sujizhiqiang.webp'
            ],
            passives: [
                {
                    type: '被动-破甲',
                    description: '增加15%物理穿透（远程英雄使用时效果翻倍）'
                },
                {
                    type: '被动-破晓',
                    description: '普攻伤害提升25点（远程英雄使用时效果翻倍）'
                }
            ]
        },
        {
            id: 32,
            name: '逐风',
            price: 2080,
            icon: 'imgs/equipment/zhufeng.webp',
            stats: { '物理攻击': 50, '攻击速度': '30%', '最大生命': 600 },
            materials: [
                'imgs/equipment/sujizhiqiang.webp',
                'imgs/equipment/jinggangduandao.webp'
            ],
            passives: [
                {
                    type: '被动-逐风',
                    description: '普攻和技能命中增加2%攻速、移速与伤害，持续2.5秒，最多叠加5层'
                }
            ]
        },
        {
            id: 33,
            name: '迅疾·日渊',
            price: 3320,
            icon: 'imgs/equipment/xunjiriyuan.webp',
            stats: { '物理攻击': 40, '攻击速度': '20%', '暴击率': '15% ', '移速': '7.5%' },
            materials: [
                'imgs/equipment/zhurizhigong.webp',
                'imgs/equipment/yuanchuyizhu.webp'
            ],
            passives: [
                {
                    type: '被动-精准',
                    description: '普攻伤害提升25点（远程英雄使用时该效果翻倍）'
                },
                {
                    type: '主动-逐日',
                    description: '增加125点普攻射程和40%移速，期间普攻会向目标附近的1个目标造成30%额外伤害，持续5秒（增加射程和额外伤害效果仅远程英雄生效）（冷却时间：75秒）'
                }
            ]
        },
        {
            id: 34,
            name: '不动·天穹',
            price: 3280,
            icon: 'imgs/equipment/budongtianqiong.webp',
            stats: { '物理攻击': 80, '冷却缩减': '10%', '物理防御': 150 },
            materials: [
                'imgs/equipment/chunjingcangqiong.webp',
                'imgs/equipment/yuanchuyizhu.webp'
            ],
            passives: [
                {
                    type: '被动-残废',
                    description: '技能对首个命中的敌方英雄造成10%~20%减速，并使其对自己的伤害降低20%，持续3秒（冷却时间：8秒）'
                },
                {
                    type: '主动-驱散',
                    description: '解除所有控制，获得35%减伤，增加30%移速并无视地形阻挡，持续3秒，期间击杀敌方英雄可刷新效果持续时间（冷却时间：75秒）'
                }
            ]
        }
    ],
    defense: [
        {
            id: 35,
            name: '红玛瑙',
            price: 300,
            icon: 'imgs/equipment/hongmanao.webp',
            stats: { '最大生命': 300 },
        },
        {
            id: 36,
            name: '布甲',
            price: 275,
            icon: 'imgs/equipment/bujia.webp',
            stats: { '物理防御': 100 },
        },
        {
            id: 37,
            name: '抗魔披风',
            price: 275,
            icon: 'imgs/equipment/kangmopifeng.webp',
            stats: { '法术防御': 100 },
        },
        {
            id: 38,
            name: '急速铠甲',
            price: 800,
            icon: 'imgs/equipment/jisukaijia.webp',
            stats: { '冷却缩减': '7.5%', '最大生命': 450 },
            materials: [
                'imgs/equipment/hongmanao.webp',
                'imgs/equipment/yuanliujiejing.webp'
            ]
        },
        {
            id: 39,
            name: '力量腰带',
            price: 850,
            icon: 'imgs/equipment/liliangyaodai.webp',
            stats: { '最大生命': 900 },
            materials: [
                'imgs/equipment/hongmanao.webp',
                'imgs/equipment/hongmanao.webp'
            ]
        },
        {
            id: 40,
            name: '神隐斗篷',
            price: 800,
            icon: 'imgs/equipment/shenyindoupeng.webp',
            stats: { '法术防御': 150, '最大生命': 450 },
            materials: [
                'imgs/equipment/hongmanao.webp',
                'imgs/equipment/kangmopifeng.webp'
            ]
        },
        {
            id: 41,
            name: '雪山圆盾',
            price: 750,
            icon: 'imgs/equipment/xueshanyuandun.webp',
            stats: { '冷却缩减': '7.5%', '物理防御': 150 },
            materials: [
                'imgs/equipment/bujia.webp',
                'imgs/equipment/yuanliujiejing.webp'
            ]
        },
        {
            id: 42,
            name: '守护者之铠',
            price: 800,
            icon: 'imgs/equipment/shouhuzhezhikai.webp',
            stats: { '物理防御': 150, '最大生命': 450 },
            materials: [
                'imgs/equipment/bujia.webp',
                'imgs/equipment/hongmanao.webp'
            ]
        },
        {
            id: 43,
            name: '玛瑙护心镜',
            price: 800,
            icon: 'imgs/equipment/manaohuxinjing.webp',
            stats: { '最大生命': 450, '移速': '7.5%' },
            materials: [
                'imgs/equipment/hongmanao.webp',
                'imgs/equipment/fumozhiyu.webp'
            ]
        },
        {
            id: 44,
            name: '荆棘护手',
            price: 750,
            icon: 'imgs/equipment/jingjihushou.webp',
            stats: { '物理攻击': 35, '物理防御': 150 },
            materials: [
                'imgs/equipment/bujia.webp',
                'imgs/equipment/tiejian.webp'
            ]
        },
        {
            id: 45,
            name: '天地石',
            price: 800,
            icon: 'imgs/equipment/tiandishi.webp',
            stats: { '物理防御': 150, '法术防御': 150 },
            materials: [
                'imgs/equipment/bujia.webp',
                'imgs/equipment/kangmopifeng.webp'
            ]
        },
        {
            id: 46,
            name: '反伤刺甲',
            price: 2020,
            icon: 'imgs/equipment/fanshangcijia.webp',
            stats: { '物理攻击': 45, '物理防御': 300, '最大生命': 700 },
            materials: [
                'imgs/equipment/jingjihushou.webp',
                'imgs/equipment/shouhuzhezhikai.webp'
            ],
            passives: [
                {
                    type: '主动-反刺',
                    description: '3秒内进入反刺状态，将受到的35%伤害以真实伤害回敬给对方（随距离衰减至多50%）（冷却时间：75秒）'
                }
            ]
        },
        {
            id: 47,
            name: '血魔之怒',
            price: 2180,
            icon: 'imgs/equipment/xuemozhinu.webp',
            stats: { '物理攻击': 75, '最大生命': 900 },
            materials: [
                'imgs/equipment/fengbaojujian.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '被动-狂怒',
                    description: '普攻额外造成（1.5%Hp）物理伤害，当自身生命低于50%时，该伤害提升25%~50%'
                },
                {
                    type: '主动-血怒',
                    description: '逐渐扣除30%当前生命，逐渐获得累计（40%Hp）护盾，持续4秒（冷却时间：75秒）'
                }
            ]
        },
        {
            id: 48,
            name: '冰霜冲击',
            price: 2030,
            icon: 'imgs/equipment/bingshuangchongji.webp',
            stats: { '冷却缩减': '7.5%', '物理防御': 150, '最大生命': 900 },
            materials: [
                'imgs/equipment/shouhuzhezhikai.webp',
                'imgs/equipment/jisukaijia.webp'
            ],
            passives: [
                {
                    type: '被动-冰甲',
                    description: '提升10%韧性，当自身受到除压制外的硬控后，获得（10%Hp）护盾，持续5秒（冷却时间：15秒）'
                },
                {
                    type: '主动-冲击',
                    description: '在自身450范围内生成霜冻领域，造成30%~60%减速，0.75秒后对敌人造成100~200法术伤害和0.75秒冻结（冷却时间：75秒）'
                }
            ]
        },
        {
            id: 49,
            name: '原初遗珠',
            price: 800,
            icon: 'imgs/equipment/yuanchuyizhu.webp',
            stats: { '物理防御': 150, '法术防御': 150 },
            passives: [
                {
                    type: '效果',
                    description: '贤者的庇护虽已损坏，但其能量内核在原初之息的浸染下拥有了强化装备的效果(20分钟后开放购买)'
                }
            ]
        },
        {
            id: 50,
            name: '怒龙剑盾',
            price: 2040,
            icon: 'imgs/equipment/nulongjiandun.webp',
            stats: { '物理防御': 180, '法术防御': 90, '最大生命': 1350 },
            materials: [
                'imgs/equipment/liliangyaodai.webp',
                'imgs/equipment/shouhuzhezhikai.webp'
            ],
            passives: [
                {
                    type: '被动-重创',
                    description: '普攻与技能对兵线和野怪造成7%Hp的物理伤害，同时恢复伤害效果50%的生命（远程攻击减半）（冷却时间：2秒）'
                },
                {
                    type: '被动-神力',
                    description: '普攻与技能对敌方英雄和防御塔造成3.5%Hp的物理伤害（远程攻击减半）（冷却时间：2秒）'
                }
            ]
        },
        {
            id: 51,
            name: '红莲斗篷',
            price: 2040,
            icon: 'imgs/equipment/hongliandoupeng.webp',
            stats: { '物理防御': 150, '法术防御': 150, '最大生命': 1100 },
            materials: [
                'imgs/equipment/shouhuzhezhikai.webp',
                'imgs/equipment/shenyindoupeng.webp'
            ],
            passives: [
                {
                    type: '被动-业炎',
                    description: '每秒灼烧375范围内的敌人并造成1.5%Hp法术伤害（对小兵和野怪造成双倍伤害）'
                },
                {
                    type: '被动-重伤',
                    description: '灼烧效果命中敌人后降低其35%生命回复和吸血效果，持续2.5秒'
                }
            ]
        },
        {
            id: 52,
            name: '霸者重装',
            price: 2450,
            icon: 'imgs/equipment/bazhezhongzhuang.webp',
            stats: { '物理防御': 160, '法术防御': 80, '最大生命': 1800 },
            materials: [
                'imgs/equipment/liliangyaodai.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '被动-天命',
                    description: '提高4%生命'
                },
                {
                    type: '被动-复苏',
                    description: '每秒回复0.5%最大生命，三秒内没有受到敌方英雄或防御塔攻击时回复效果翻倍'
                }
            ]
        },
        {
            id: 53,
            name: '旭日初光',
            price: 2040,
            icon: 'imgs/equipment/xurichuguang.webp',
            stats: { '冷却缩减': '10%', '物理防御': 210, '最大生命': 900 },
            materials: [
                'imgs/equipment/xueshanyuandun.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '被动-初光',
                    description: '使用普攻或技能对敌方英雄造成伤害时，为自己和附近血量最低友方英雄提供（250~500+4%Hp）护盾，附近没有友方英雄时护盾值提升50%，持续3秒（近战/远程冷却时间：10/12.5秒）'
                }
            ]
        },
        {
            id: 54,
            name: '不祥征兆',
            price: 2020,
            icon: 'imgs/equipment/buxiangzhengzhao.webp',
            stats: { '物理防御': 300, '最大生命': 1200 },
            materials: [
                'imgs/equipment/shouhuzhezhikai.webp',
                'imgs/equipment/shouhuzhezhikai.webp'
            ],
            passives: [
                {
                    type: '被动-寒铁',
                    description: '受到攻击后，减少攻击者20%~40%攻速和7.5%~15%移速，持续2.5秒（每个目标冷却时间：3秒）'
                }
            ]
        },
        {
            id: 55,
            name: '不死鸟之眼',
            price: 2020,
            icon: 'imgs/equipment/businiaozhiyan.webp',
            stats: { '物理防御': 90, '法术防御': 180, '最大生命': 1350 },
            materials: [
                'imgs/equipment/liliangyaodai.webp',
                'imgs/equipment/shenyindoupeng.webp'
            ],
            passives: [
                {
                    type: '被动-血统',
                    description: '每损失10%生命，生命回复效果增加5%'
                }
            ]
        },
        {
            id: 56,
            name: '魔女斗篷',
            price: 2020,
            icon: 'imgs/equipment/monvdoupeng.webp',
            stats: { '法术防御': 300, '最大生命': 1100 },
            materials: [
                'imgs/equipment/shenyindoupeng.webp',
                'imgs/equipment/shenyindoupeng.webp'
            ],
            passives: [
                {
                    type: '被动-迷雾',
                    description: '每15秒获得400~800（+7%额外Hp）吸收法术伤害护盾'
                },
                {
                    type: '被动-魔女',
                    description: '15%额外法术防御转化为物理防御'
                }
            ]
        },
        {
            id: 57,
            name: '极寒风暴',
            price: 2040,
            icon: 'imgs/equipment/jihanfengbao.webp',
            stats: { '冷却缩减': '20%', '物理防御': 240, '最大生命': 600 },
            materials: [
                'imgs/equipment/jisukaijia.webp',
                'imgs/equipment/xueshanyuandun.webp'
            ],
            passives: [
                {
                    type: '被动-冰心',
                    description: '受到单次伤害超过当前生命值10%时，向敌人方向发射寒冰冲击，对范围内敌人造成130~260点法术伤害，并降低范围内敌人15%攻速和15%~30%移速，持续2秒（冷却时间：2秒）'
                }
            ]
        },
        {
            id: 58,
            name: '贤者的庇护',
            price: 2280,
            icon: 'imgs/equipment/xianzhedebihu.webp',
            stats: { '冷却缩减': '5%', '物理防御': 150, '法术防御': 150, '最大生命': 900 },
            materials: [
                'imgs/equipment/tiandishi.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '被动-复生',
                    description: '死亡后2秒原地复活，并获得2000~3000点生命值，该效果每局游戏最多触发2次（冷却时间：150秒）'
                }
            ]
        },
        {
            id: 59,
            name: '爆裂之甲',
            price: 2050,
            icon: 'imgs/equipment/baoliezhijia.webp',
            stats: { '物理攻击': 35, '物理防御': 210, '最大生命': 900 },
            materials: [
                'imgs/equipment/jingjihushou.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '被动-无畏',
                    description: '每次受到伤害后，自身增加1%伤害与1%移速（受到英雄伤害叠加2层），持续3秒，最多10层'
                }
            ]
        },
        {
            id: 60,
            name: '永夜守护',
            price: 2020,
            icon: 'imgs/equipment/yongyeshouhu.webp',
            stats: { '法术防御': 210, '最大生命': 1000, '移速': '7.5% ' },
            materials: [
                'imgs/equipment/shenyindoupeng.webp',
                'imgs/equipment/manaohuxinjing.webp'
            ],
            passives: [
                {
                    type: '被动-守护',
                    description: '3秒内受到伤害超过30%最大生命时，会在接下来的3秒内累计回复（320+8%Hp)生命（冷却时间：7秒）'
                }
            ]
        },
        {
            id: 61,
            name: '冰痕之握',
            price: 2060,
            icon: 'imgs/equipment/binghenzhiwo.webp',
            stats: { '物理攻击': 60, '冷却缩减': '10%', '物理防御': 300 },
            materials: [
                'imgs/equipment/jingjihushou.webp',
                'imgs/equipment/xueshanyuandun.webp'
            ],
            passives: [
                {
                    type: '被动-强击',
                    description: '使用技能后，5秒内的下次普攻对范围内敌人额外造成210~420物理伤害，并减少15%~30%移速（远程攻击减速效果减半），持续0.5秒（冷却时间：1.2秒）'
                }
            ]
        },
        {
            id: 62,
            name: '侵掠·怒魂',
            price: 3300,
            icon: 'imgs/equipment/qinlvenuhun.webp',
            stats: { '物理攻击': 75, '最大生命': 900 },
            materials: [
                'imgs/equipment/xuemozhinu.webp',
                'imgs/equipment/yuanchuyizhu.webp'
            ],
            passives: [
                {
                    type: '被动-狂怒',
                    description: '普攻额外造成(1.5%Hp）物理伤害，自身生命低于50%时，该伤害提升37.5%~75%'
                },
                {
                    type: '主动-血怒',
                    description: '逐渐扣除30%当前生命，逐渐获得积累（50%Hp）护盾，持续4秒。在此期间对周围敌人每秒造成（4%Hp）法术伤害（伤害对野怪上限为200点）（冷却时间：75秒）。'
                }
            ]
        },
        {
            id: 63,
            name: '徐行·凛冬',
            price: 3190,
            icon: 'imgs/equipment/xuxinglindong.webp',
            stats: { '冷却缩减': '7.5%', '物理防御': 150, '最大生命': 900 },
            materials: [
                'imgs/equipment/bingshuangchongji.webp',
                'imgs/equipment/yuanchuyizhu.webp'
            ],
            passives: [
                {
                    type: '被动-冰甲',
                    description: '提升10%韧性，当自身受到除压制外的硬控后，获得（10%Hp）护盾，持续5秒（冷却时间：15秒）'
                },
                {
                    type: '主动-冲击',
                    description: '在自身600范围内生成霜冻领域，造成极限减速，0.75秒后对敌人造成100~200法术伤害和0.75秒冻结（冷却时间：75秒）'
                }
            ]
        }
    ],
    magic: [
        {
            id: 64,
            name: '咒术典籍',
            price: 275,
            icon: 'imgs/equipment/zhoushudianji.webp',
            stats: { '法术攻击': 35 }
        },
        {
            id: 65,
            name: '蓝宝石',
            price: 275,
            icon: 'imgs/equipment/lanbaoshi.webp',
            stats: { '最大法力': 400 }
        },
        {
            id: 66,
            name: '秘法残页',
            price: 300,
            icon: 'imgs/equipment/mifacanye.webp',
            stats: { '法术吸血': '8%' }
        },
        {
            id: 67,
            name: '元流结晶',
            price: 300,
            icon: 'imgs/equipment/yuanliujiejing.webp',
            stats: { '冷却缩减': '5%' }
        },
        {
            id: 68,
            name: '圣者法典',
            price: 800,
            icon: 'imgs/equipment/shengzhefadian.webp',
            stats: { '法术攻击': 60, '冷却缩减': '7.5%' },
            materials: [
                'imgs/equipment/zhoushudianji.webp',
                'imgs/equipment/yuanliujiejing.webp'
            ]
        },
        {
            id: 69,
            name: '大棒',
            price: 820,
            icon: 'imgs/equipment/dabang.webp',
            stats: { '法术攻击': 120 },
            materials: [
                'imgs/equipment/zhoushudianji.webp',
                'imgs/equipment/zhoushudianji.webp'
            ]
        },
        {
            id: 70,
            name: '血族之书',
            price: 800,
            icon: 'imgs/equipment/xuezuzhishu.webp',
            stats: { '法术吸血': '12%', '法术攻击': 60 },
            materials: [
                'imgs/equipment/zhoushudianji.webp',
                'imgs/equipment/mifacanye.webp'
            ]
        },
        {
            id: 71,
            name: '魔道之石',
            price: 800,
            icon: 'imgs/equipment/modaozhishi.webp',
            stats: { '法术攻击': 60, '移速': '7.5%' },
            materials: [
                'imgs/equipment/zhoushudianji.webp',
                'imgs/equipment/fumozhiyu.webp'
            ]
        },
        {
            id: 72,
            name: '云灵木',
            price: 840,
            icon: 'imgs/equipment/yunlingmu.webp',
            stats: { '法术攻击': 60, '最大生命': 450 },
            materials: [
                'imgs/equipment/zhoushudianji.webp',
                'imgs/equipment/hongmanao.webp'
            ]
        },
        {
            id: 73,
            name: '辉月',
            price: 2080,
            icon: 'imgs/equipment/huiyue.webp',
            stats: { '法术吸血': '12%', '法术攻击': 160, '冷却缩减': '7.5% ' },
            materials: [
                'imgs/equipment/xuezuzhishu.webp',
                'imgs/equipment/shengzhefadian.webp'
            ],
            passives: [
                {
                    type: '主动-月之守护',
                    description: '免疫所有效果，不能移动、攻击和使用技能，持续1.5秒（冷却时间：75秒）'
                }
            ]
        },
        {
            id: 74,
            name: '炽热支配',
            price: 2040,
            icon: 'imgs/equipment/chirezhipei.webp',
            stats: { '法术吸血': '12%', '法术攻击': 150, '移速': '7.5% ' },
            materials: [
                'imgs/equipment/xuezuzhishu.webp',
                'imgs/equipment/modaozhishi.webp'
            ],
            passives: [
                {
                    type: '被动-法力护盾',
                    description: '血量低于30%时立即解除自身控制，同时获得（500~1000+1.0Ap+7.5%额外Hp) 护盾，护盾持续期间提升30%移速，持续4秒（冷却时间：90秒）'
                }
            ]
        },
        {
            id: 75,
            name: '日暮之流',
            price: 2040,
            icon: 'imgs/equipment/rimuzhiliu.webp',
            stats: { '法术攻击': 160, '冷却缩减': '10%', '最大生命': 500 },
            materials: [
                'imgs/equipment/yunlingmu.webp',
                'imgs/equipment/shengzhefadian.webp'
            ],
            passives: [
                {
                    type: '被动-净魔',
                    description: '对英雄造成伤害会获得20~40点法术穿透，持续4秒，该效果可叠加6层'
                }
            ]
        },
        {
            id: 76,
            name: '金色圣剑',
            price: 2070,
            icon: 'imgs/equipment/jinseshengjian.webp',
            stats: { '攻击速度': '20%', '法术攻击': 150, '移速': '7.5% ' },
            materials: [
                'imgs/equipment/dabang.webp',
                'imgs/equipment/kuangbaoshuangren.webp'
            ],
            passives: [
                {
                    type: '被动-精准',
                    description: '普攻伤害提升60点'
                },
                {
                    type: '被动-圣剑',
                    description: '普攻命中后获得10%攻速，持续5秒，可叠加2层，叠满后普攻会额外造成（30%Ap)法术伤害（冷却时间：0.2秒）'
                }
            ]
        },
        {
            id: 77,
            name: '梦魇之牙',
            price: 2040,
            icon: 'imgs/equipment/mengyanzhiya.webp',
            stats: { '法术攻击': 240, '冷却缩减': '7.5%', '移速': '7.5% ' },
            materials: [
                'imgs/equipment/modaozhishi.webp',
                'imgs/equipment/shengzhefadian.webp'
            ],
            passives: [
                {
                    type: '被动-重伤',
                    description: '普攻/技能命中敌人后降低其35%生命回复和吸血效果，持续2.5秒'
                }
            ]
        },
        {
            id: 78,
            name: '圣杯',
            price: 2020,
            icon: 'imgs/equipment/shengbei.webp',
            stats: { '法术攻击': 150, '攻冷却缩减': '15%', '最大生命': 500 },
            materials: [
                'imgs/equipment/shengzhefadian.webp',
                'imgs/equipment/jisukaijia.webp'
            ],
            passives: [
                {
                    type: '被动-法力源泉',
                    description: '每秒回复1.5%最大法力和0.5%最大生命，如果法力值已满，每秒额外回复0.5%最大生命'
                }
            ]
        },
        {
            id: 79,
            name: '虚无法杖',
            price: 2040,
            icon: 'imgs/equipment/xuwufazhang.webp',
            stats: { '法术攻击': 210, '冷却缩减': '5%', '最大生命': 500 },
            materials: [
                'imgs/equipment/yunlingmu.webp',
                'imgs/equipment/dabang.webp'
            ],
            passives: [
                {
                    type: '被动-破灭',
                    description: '增加45%法术穿透'
                }
            ]
        },
        {
            id: 80,
            name: '博学者之怒',
            price: 2140,
            icon: 'imgs/equipment/boxuezhezhinu.webp',
            stats: { '法术攻击': 210 },
            materials: [
                'imgs/equipment/dabang.webp',
                'imgs/equipment/dabang.webp'
            ],
            passives: [
                {
                    type: '被动-毁灭',
                    description: '增加30%法术攻击'
                }
            ]
        },
        {
            id: 81,
            name: '回响之杖',
            price: 2100,
            icon: 'imgs/equipment/huixiangzhizhang.webp',
            stats: { '法术攻击': 210, '移速': '7.5%' },
            materials: [
                'imgs/equipment/modaozhishi.webp',
                'imgs/equipment/dabang.webp'
            ],
            passives: [
                {
                    type: '被动-回响',
                    description: '技能命中后触发范围爆炸，造成（140~280+28%Ap)法术伤害（冷却时间：5秒）'
                }
            ]
        },
        {
            id: 82,
            name: '痛苦面具',
            price: 2080,
            icon: 'imgs/equipment/tongkumianju.webp',
            stats: { '法术攻击': 100, '冷却缩减': '7.5%', '最大生命': 900 },
            materials: [
                'imgs/equipment/yunlingmu.webp',
                'imgs/equipment/jisukaijia.webp'
            ],
            passives: [
                {
                    type: '被动-折磨',
                    description: '技能命中后，目标在3秒内受到4次3%当前生命的法术伤害（伤害对野怪上限为200点）（冷却时间：3秒）'
                }
            ]
        },
        {
            id: 83,
            name: '巫术法杖',
            price: 2080,
            icon: 'imgs/equipment/wushufazhang.webp',
            stats: { '法术攻击': 180, '最大法力': 300, '最大生命': 600, '移速': '7.5%' },
            materials: [
                'imgs/equipment/modaozhishi.webp',
                'imgs/equipment/yunlingmu.webp'
            ],
            passives: [
                {
                    type: '被动-强击',
                    description: '使用技能后，5秒内下次普攻额外造成（180~360+40%Ap)法术伤害(冷却时间：2.5秒）'
                }
            ]
        },
        {
            id: 84,
            name: '时之预言',
            price: 2150,
            icon: 'imgs/equipment/shizhiyuyan.webp',
            stats: { '法术攻击': 140, '最大法力': 450, '最大生命': 900 },
            materials: [
                'imgs/equipment/dabang.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '被动-英勇奖赏',
                    description: '英雄升级后会在3秒内回复20%最大生命和最大法力，满级后每隔45秒触发一次该效果'
                },
                {
                    type: '被动-预言',
                    description: '获得50~100(+10%Ap)的物理防御与法术防御'
                }
            ]
        },
        {
            id: 85,
            name: '破茧之衣',
            price: 2120,
            icon: 'imgs/equipment/pojianzhiyi.webp',
            stats: { '法术攻击': 120, '最大生命': 900 },
            materials: [
                'imgs/equipment/yunlingmu.webp',
                'imgs/equipment/yunlingmu.webp'
            ],
            passives: [
                {
                    type: '被动-破茧',
                    description: '获得20~40+2%额外Hp的法术攻击(上限100)'
                },
                {
                    type: '被动-净魔',
                    description: '获得30~60+3%额外Hp的法术穿透(上限150)'
                }
            ]
        },
        {
            id: 86,
            name: '贤者天书',
            price: 2610,
            icon: 'imgs/equipment/xianzhetianshu.webp',
            stats: { '法术攻击': 350, '冷却缩减': '10%' },
            materials: [
                'imgs/equipment/dabang.webp',
                'imgs/equipment/shengzhefadian.webp'
            ],
            passives: [
                {
                    type: '被动-刻印',
                    description: '每100法术攻击可提升0.5%增伤比例和0.5%减伤比例'
                }
            ]
        },
        {
            id: 87,
            name: '噬神之书',
            price: 2060,
            icon: 'imgs/equipment/shishenzhishu.webp',
            stats: { '法术吸血': '24%', '法术攻击': 160, '最大生命': 750 },
            materials: [
                'imgs/equipment/xuezuzhishu.webp',
                'imgs/equipment/xuezuzhishu.webp'
            ],
            passives: [
                {
                    type: '被动-法术转化',
                    description: '每2%法术吸血额外提供1%冷却缩减'
                }
            ]
        },
        {
            id: 88,
            name: '凝冰之息',
            price: 2100,
            icon: 'imgs/equipment/ningbingzhixi.webp',
            stats: { '法术攻击': 180, '冷却缩减': '7.5%', '最大生命': 500 },
            materials: [
                'imgs/equipment/dabang.webp',
                'imgs/equipment/jisukaijia.webp'
            ],
            passives: [
                {
                    type: '被动-凝冰',
                    description: '普攻与技能首次命中目标时会减少5%~10%移速（最大叠加2层），持续1.5秒'
                },
                {
                    type: '被动-冻伤',
                    description: '普攻与技能对目标额外造成（75~150+15%Ap)法术伤害（冷却时间：3秒）'
                }
            ]
        },
        {
            id: 89,
            name: '难知·月神',
            price: 3340,
            icon: 'imgs/equipment/nanzhiyueshen.webp',
            stats: { '法术吸血': '12%', '法术攻击': 160, '冷却缩减': '7.5% ' },
            materials: [
                'imgs/equipment/huiyue.webp',
                'imgs/equipment/yuanchuyizhu.webp'
            ],
            passives: [
                {
                    type: '主动-月之守护',
                    description: '免疫所有效果，不能移动、攻击和使用技能，持续1.5秒，随后在2秒内增加60%持续衰减的移速，并累计回复(1000+100%Ap)生命（冷却时间：75秒）'
                }
            ]
        }
    ],
    boots: [
        {
            id: 90,
            name: '神速之靴',
            price: 250,
            icon: 'imgs/equipment/shensuzhixue.webp',
            passives: [
                {
                    type: '被动',
                    description: '获得30移速'
                }
            ]
        },
        {
            id: 91,
            name: '影忍之足',
            price: 700,
            icon: 'imgs/equipment/yingrenzhizu.webp',
            stats: { '物理防御': 100, '法术防御': 50 },
            materials: [
                'imgs/equipment/shensuzhixue.webp',
                'imgs/equipment/bujia.webp'
            ],
            passives: [
                {
                    type: '被动-神速',
                    description: '获得50移速'
                },
                {
                    type: '被动-防护',
                    description: '减少6%~12%受到的物理伤害'
                }
            ]
        },
        {
            id: 92,
            name: '抵抗之靴',
            price: 700,
            icon: 'imgs/equipment/dikangzhixue.webp',
            stats: { '物理防御': 50, '法术防御': 100 },
            materials: [
                'imgs/equipment/shensuzhixue.webp',
                'imgs/equipment/kangmopifeng.webp'
            ],
            passives: [
                {
                    type: '被动-神速',
                    description: '获得50移速'
                },
                {
                    type: '被动-坚韧',
                    description: '获得25%韧性'
                }
            ]
        },
        {
            id: 93,
            name: '冷静之靴',
            price: 700,
            icon: 'imgs/equipment/lengjingzhixue.webp',
            stats: { '冷却缩减': '15%' },
            materials: [
                'imgs/equipment/shensuzhixue.webp',
                'imgs/equipment/yuanliujiejing.webp'
            ],
            passives: [
                {
                    type: '被动-神速',
                    description: '获得50移速'
                },
                {
                    type: '被动-静谧',
                    description: '召唤师技能冷却恢复速度加快10%~20%'
                }
            ]
        },
        {
            id: 94,
            name: '秘法之靴',
            price: 700,
            icon: 'imgs/equipment/mifazhixue.webp',
            stats: { '最大法力': 400 },
            materials: [
                'imgs/equipment/shensuzhixue.webp',
                'imgs/equipment/lanbaoshi.webp'
            ],
            passives: [
                {
                    type: '被动-神速',
                    description: '获得50移速'
                },
                {
                    type: '被动-法术精通',
                    description: '获得60~120法术穿透，每5秒回复10点法力'
                }
            ]
        },
        {
            id: 95,
            name: '急速战靴',
            price: 700,
            icon: 'imgs/equipment/jisuzhanxue.webp',
            stats: { '攻击速度': '20%' },
            materials: [
                'imgs/equipment/shensuzhixue.webp',
                'imgs/equipment/bishou.webp'
            ],
            passives: [
                {
                    type: '被动-神速',
                    description: '获得50移速'
                },
                {
                    type: '被动-急速恢复',
                    description: '近战/远程英雄每次普攻回复20~40/30~60点生命'
                }
            ]
        },
        {
            id: 96,
            name: '疾步之靴',
            price: 700,
            icon: 'imgs/equipment/jibuzhixue.webp',
            stats: { '最大生命': 300 },
            materials: [
                'imgs/equipment/shensuzhixue.webp',
                'imgs/equipment/hongmanao.webp'
            ],
            passives: [
                {
                    type: '被动-神速 II',
                    description: '获得70移速'
                },
                {
                    type: '被动-神行',
                    description: '5秒未进入战斗后增加35~70移速'
                }
            ]
        }
    ],
    jungle: [
        {
            id: 97,
            name: '狩猎宽刃',
            price: 250,
            icon: 'imgs/equipment/shouliekuanren.webp',
            passives: [
                {
                    type: '被动-狩猎',
                    description: '普攻/技能命中后，野怪每0.5秒70~140点法术伤害(远程英雄伤害减半),持续2秒'
                },
                {
                    type: '提示',
                    description: '1.4分钟前：不参与兵线分配，单独获得50%金币/经验\n2.10分钟前：对兵线伤害降低25%\n3.携带惩击才可购买，受野怪伤害降低25%,获得来自野怪的经验提升20%',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 98,
            name: '游击弯刀',
            price: 700,
            icon: 'imgs/equipment/youjiwandao.webp',
            stats: { '法术攻击': 40 },
            passives: [
                {
                    type: '被动-狩猎',
                    description: '普攻/技能命中后，野怪每0.5秒受到70~140+(0.45%目标Hp)法术伤害（远程攻击减半，对英雄伤害生效10%），持续2秒'
                },
                {
                    type: '被动-奖赏',
                    description: '自己或700范围内友方击杀野怪会增加自身6点法术攻击，可叠加15层',
                },
                {
                    type: '提示',
                    description: '1.4分钟前：不参与兵线分配，单独获得50%金币/经验\n2.10分钟前：对兵线伤害降低25%\n3.携带惩击才可购买，受野怪伤害降低25%，获得来自野怪的经验提升30%、金币提升20%',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 99,
            name: '追击刀锋',
            price: 700,
            icon: 'imgs/equipment/zhuijidaofeng.webp',
            stats: { '物理攻击': 25 },
            passives: [
                {
                    type: '被动-狩猎',
                    description: '普攻/技能命中后，野怪每0.5秒受到70~140+(0.45%目标Hp)法术伤害（远程攻击减半，对英雄伤害生效10%），持续2秒'
                },
                {
                    type: '被动-奖赏',
                    description: '自己或700范围内友方击杀野怪会增加自身3点物理攻击，可叠加15层',
                },
                {
                    type: '提示',
                    description: '1.4分钟前：不参与兵线分配，单独获得50%金币/经验\n2.10分钟前：对兵线伤害降低25%\n3.携带惩击才可购买，受野怪伤害降低25%，获得来自野怪的经验提升30%、金币提升20%',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 100,
            name: '巡守利斧',
            price: 700,
            icon: 'imgs/equipment/xunshoulifu.webp',
            stats: { '最大生命': 400 },
            passives: [
                {
                    type: '被动-狩猎',
                    description: '普攻/技能命中后，野怪每0.5秒受到70~140+(0.45%目标Hp)法术伤害（远程攻击减半，对英雄伤害生效10%），持续2秒'
                },
                {
                    type: '被动-奖赏',
                    description: '自己或700范围内友方击杀野怪会增加自身30点最大生命，可叠加15层',
                },
                {
                    type: '提示',
                    description: '1.4分钟前：不参与兵线分配，单独获得50%金币/经验\n2.10分钟前：对兵线伤害降低25%\n3.携带惩击才可购买，受野怪伤害降低25%，获得来自野怪的经验提升30%、金币提升20%',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 101,
            name: '符文大剑',
            price: 2100,
            icon: 'imgs/equipment/fuwendajian.webp',
            stats: { '法术攻击': 130, '冷却缩减': '10%', "移速": '5%' },
            materials: [
                'imgs/equipment/youjiwandao.webp',
                'imgs/equipment/shengzhefadian.webp'
            ],
            passives: [
                {
                    type: '被动-狩猎',
                    description: '普攻/技能命中后，野怪每0.5秒受到90~180+(0.6%目标Hp)法术伤害（远程攻击减半，对英雄伤害生效25%），持续2秒'
                },
                {
                    type: '被动-奖赏',
                    description: '自己或700范围内友方击杀野怪会增加自身6点法术攻击和0.2%冷却缩减，可叠加25层',
                },
                {
                    type: '提示',
                    description: '1.10分钟前：对兵线伤害降低25%\n2.携带惩击才可购买，受野怪伤害降低25%,获得来自野怪的经验提升30%、金币提升20%',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 102,
            name: '贪婪之噬',
            price: 2100,
            icon: 'imgs/equipment/tanlanzhishi.webp',
            stats: { '物理攻击': 90, '冷却缩减': '7.5%', "移速": '5%' },
            materials: [
                'imgs/equipment/zhuijidaofeng.webp',
                'imgs/equipment/yunxing.webp'
            ],
            passives: [
                {
                    type: '被动-狩猎',
                    description: '普攻/技能命中后，野怪每0.5秒受到90~180+(0.6%目标Hp)法术伤害（远程攻击减半，对英雄伤害生效25%），持续2秒'
                },
                {
                    type: '被动-奖赏',
                    description: '自己或700范围内友方击杀野怪会增加自身3点物理攻击和0.2%冷却缩减，可叠加25层',
                },
                {
                    type: '提示',
                    description: '1.10分钟前：对兵线伤害降低25%\n2.携带惩击才可购买，受野怪伤害降低25%,获得来自野怪的经验提升30%、金币提升20%',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 103,
            name: '巨人之握',
            price: 2100,
            icon: 'imgs/equipment/jurenzhiwo.webp',
            stats: { '冷却缩减': '5%', '最大生命': 1200, "移速": '5%' },
            materials: [
                'imgs/equipment/xunshoulifu.webp',
                'imgs/equipment/jisukaijia.webp'
            ],
            passives: [
                {
                    type: '被动-狩猎',
                    description: '普攻/技能命中后，野怪每0.5秒受到90~180+(0.6%目标Hp)法术伤害（远程攻击减半，对英雄伤害生效25%），持续2秒'
                },
                {
                    type: '被动-奖赏',
                    description: '自己或700范围内友方击杀野怪会增加自身30点最大生命和0.2%冷却缩减，可叠加25层',
                },
                {
                    type: '提示',
                    description: '1.10分钟前：对兵线伤害降低25%\n2.携带惩击才可购买，受野怪伤害降低25%,获得来自野怪的经验提升30%、金币提升20%',
                    needLineBreak: true
                }
            ]
        }
    ],
    support: [
        {
            id: 104,
            name: '学识宝石',
            price: 300,
            icon: 'imgs/equipment/xueshibaoshi.webp',
            stats: { '移速': '5%' },
            passives: [
                {
                    type: '被动-游击',
                    description: '每3秒增加自身5经验，增加队伍中经济最低的英雄5金币',
                },
                {
                    type: '提示',
                    description: '不与队友分配野怪/小兵收益，单独获得25%~50%金币和经验（20分钟到达上限）',
                }
            ]
        },
        {
            id: 105,
            name: '近卫',
            price: 850,
            icon: 'imgs/equipment/jinwei.webp',
            stats: { '最大生命': 500, '移速': '5%' },
            materials: [
                'imgs/equipment/xueshibaoshi.webp',
                'imgs/equipment/hongmanao.webp'
            ],
            passives: [
                {
                    type: '被动-守护光环',
                    description: '增加自身36-72物理防御，法术防御和0.4%Hp每5秒回血，并对800范围友方造成50%效果',
                },
                {
                    type: '被动-奖赏',
                    description: '增加200-400最大生命值，增加15-30主攻属性（1主攻属性=1物理攻击或2法术攻击）',
                },
                {
                    type: '被动-游击',
                    description: '每3秒增加自身5经验，增加队伍中经济最低的英雄5金币',
                },
                {
                    type: '提示',
                    description: '1.不与队友分配野怪/小兵收益，单独获得25%~50%金币和经验（20分钟到达上限）\n2.如果兵线经济没有被获取，则其中50%会掉落在地面，拾取金币上限450，且可全图吸取一枚金币（冷却时间：15秒）',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 106,
            name: '极影',
            price: 850,
            icon: 'imgs/equipment/jiying.webp',
            stats: { '最大生命': 500, '移速': '5%' },
            materials: [
                'imgs/equipment/xueshibaoshi.webp',
                'imgs/equipment/hongmanao.webp'
            ],
            passives: [
                {
                    type: '被动-迅捷光环',
                    description: '增加自身12%攻速，9%冷却和10每5秒回蓝，并对800范围友方造成50%效果',
                },
                {
                    type: '被动-奖赏',
                    description: '增加200-400最大生命值，增加15-30主攻属性（1主攻属性=1物理攻击或2法术攻击）',
                },
                {
                    type: '被动-游击',
                    description: '每3秒增加自身5经验，增加队伍中经济最低的英雄5金币',
                },
                {
                    type: '提示',
                    description: '1.不与队友分配野怪/小兵收益，单独获得25%~50%金币和经验（20分钟到达上限）\n2.如果兵线经济没有被获取，则其中50%会掉落在地面，拾取金币上限450，且可全图吸取一枚金币（冷却时间：15秒）',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 107,
            name: '极影·救赎',
            price: 2080,
            icon: 'imgs/equipment/jiyingjiushu.webp',
            stats: { '最大生命': 1200, '移速': '7.5%' },
            materials: [
                'imgs/equipment/jiying.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '主动-救援',
                    description: '范围内友方英雄立即获得（240~480+10%Hp）护盾，持续4秒（冷却时间:60秒）（游走装主动技能队伍共享冷却）',
                },
                {
                    type: '被动-迅捷光环',
                    description: '增加自身20%攻速，15%冷却和15每5秒回蓝，并对800范围友方造成50%效果',
                },
                {
                    type: '被动-奖赏',
                    description: '增加400-800最大生命值，增加25-50主攻属性（1主攻属性=1物理攻击或2法术攻击）',
                },
                {
                    type: '被动-游击',
                    description: '每3秒增加自身6经验，增加队伍中经济最低的英雄6金币',
                },
                {
                    type: '提示',
                    description: '1.不与队友分配野怪/小兵收益，单独获得25%~50%金币和经验（20分钟到达上限）\n2.如果兵线经济没有被获取，则其中50%会掉落在地面，拾取金币上限600，且可全图吸取一枚金币（冷却时间：10秒）',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 108,
            name: '极影·星泉',
            price: 2080,
            icon: 'imgs/equipment/jiyingxingquan.webp',
            stats: { '最大生命': 1200, '移速': '7.5%' },
            materials: [
                'imgs/equipment/jiying.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '主动-星芒',
                    description: '与范围内的一名友方英雄（默认为血量最低）建立链接，5秒内回复双方（500~1060+20%Hp）生命与25%最大法力，链接超过一定范围断开，攻击或者受到敌方英雄攻击后回复效果只生效20%。每50秒储备一次[星芒]，最多可储备2次（冷却时间:5秒）（游走装主动技能队伍共享冷却）',
                },
                {
                    type: '被动-迅捷光环',
                    description: '增加自身20%攻速，15%冷却和15每5秒回蓝，并对800范围友方造成50%效果',
                },
                {
                    type: '被动-奖赏',
                    description: '增加400-800最大生命值，增加25-50主攻属性（1主攻属性=1物理攻击或2法术攻击）',
                },
                {
                    type: '被动-游击',
                    description: '每3秒增加自身6经验，增加队伍中经济最低的英雄6金币',
                },
                {
                    type: '提示',
                    description: '1.不与队友分配野怪/小兵收益，单独获得25%~50%金币和经验（20分钟到达上限）\n2.如果兵线经济没有被获取，则其中50%会掉落在地面，拾取金币上限600，且可全图吸取一枚金币（冷却时间：10秒）',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 109,
            name: '极影·奔狼',
            price: 2080,
            icon: 'imgs/equipment/jiyingbenlang.webp',
            stats: { '最大生命': 1200, '移速': '7.5%' },
            materials: [
                'imgs/equipment/jiying.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '主动-奔腾号令',
                    description: '范围内友方英雄2秒内逐渐增加移速，最高增加100%~200%移速，持续5秒，途径未加速的友军英雄时会将当前状态同步给友军，攻击或受到敌方英雄攻击时保留20%加速效果（冷却时间:90秒）（游走装主动技能队伍共享冷却）',
                },
                {
                    type: '被动-迅捷光环',
                    description: '增加自身20%攻速，15%冷却和15每5秒回蓝，并对800范围友方造成50%效果',
                },
                {
                    type: '被动-奖赏',
                    description: '增加400-800最大生命值，增加25-50主攻属性（1主攻属性=1物理攻击或2法术攻击）',
                },
                {
                    type: '被动-游击',
                    description: '每3秒增加自身6经验，增加队伍中经济最低的英雄6金币',
                },
                {
                    type: '提示',
                    description: '1.不与队友分配野怪/小兵收益，单独获得25%~50%金币和经验（20分钟到达上限）\n2.如果兵线经济没有被获取，则其中50%会掉落在地面，拾取金币上限600，且可全图吸取一枚金币（冷却时间：10秒）',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 110,
            name: '极影·形昭',
            price: 2080,
            icon: 'imgs/equipment/jiyingxingzhao.webp',
            stats: { '最大生命': 1200, '移速': '7.5%' },
            materials: [
                'imgs/equipment/jiying.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '主动-见影',
                    description: '释放一道探照光波，对1200范围内的敌方造成4次伤害，每次造成当前生命3%伤害并附带25%~50%减速，探照光波会在范围内继续残留2秒，期间也会提供视野并短暂暴露隐身单位，同时对进入的敌人造成伤害和减速（冷却时间:75秒，没有命中目标会返还75%冷却时间）（游走装主动技能队伍共享冷却）',
                },
                {
                    type: '被动-迅捷光环',
                    description: '增加自身20%攻速，15%冷却和15每5秒回蓝，并对800范围友方造成50%效果',
                },
                {
                    type: '被动-奖赏',
                    description: '增加400-800最大生命值，增加25-50主攻属性（1主攻属性=1物理攻击或2法术攻击）',
                },
                {
                    type: '被动-游击',
                    description: '每3秒增加自身6经验，增加队伍中经济最低的英雄6金币',
                },
                {
                    type: '提示',
                    description: '1.不与队友分配野怪/小兵收益，单独获得25%~50%金币和经验（20分钟到达上限）\n2.如果兵线经济没有被获取，则其中50%会掉落在地面，拾取金币上限600，且可全图吸取一枚金币（冷却时间：10秒）',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 111,
            name: '近卫·救赎',
            price: 2080,
            icon: 'imgs/equipment/jinweijiushu.webp',
            stats: { '最大生命': 1200, '移速': '7.5%' },
            materials: [
                'imgs/equipment/jinwei.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '主动-救援',
                    description: '范围内友方英雄立即获得（240~480+10%Hp）护盾，持续4秒（冷却时间:60秒）（游走装主动技能队伍共享冷却）',
                },
                {
                    type: '被动-守护光环',
                    description: '增加自身65~130物理防御，法术防御和+0.6%Hp每5秒回血，对800范围友方造成50%效果',
                },
                {
                    type: '被动-奖赏',
                    description: '增加400-800最大生命值，增加25-50主攻属性（1主攻属性=1物理攻击或2法术攻击）',
                },
                {
                    type: '被动-游击',
                    description: '每3秒增加自身6经验，增加队伍中经济最低的英雄6金币',
                },
                {
                    type: '提示',
                    description: '1.不与队友分配野怪/小兵收益，单独获得25%~50%金币和经验（20分钟到达上限）\n2.如果兵线经济没有被获取，则其中50%会掉落在地面，拾取金币上限600，且可全图吸取一枚金币（冷却时间：10秒）',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 112,
            name: '近卫·星泉',
            price: 2080,
            icon: 'imgs/equipment/jinweixingquan.webp',
            stats: { '最大生命': 1200, '移速': '7.5%' },
            materials: [
                'imgs/equipment/jinwei.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '主动-星芒',
                    description: '与范围内的一名友方英雄（默认为血量最低）建立链接，5秒内回复双方（500~1060+20%Hp）生命与25%最大法力，链接超过一定范围断开，攻击或者受到敌方英雄攻击后回复效果只生效20%。每50秒储备一次[星芒]，最多可储备2次（冷却时间:5秒）（游走装主动技能队伍共享冷却）',
                },
                {
                    type: '被动-守护光环',
                    description: '增加自身65~130物理防御，法术防御和+0.6%Hp每5秒回血，对800范围友方造成50%效果',
                },
                {
                    type: '被动-奖赏',
                    description: '增加400-800最大生命值，增加25-50主攻属性（1主攻属性=1物理攻击或2法术攻击）',
                },
                {
                    type: '被动-游击',
                    description: '每3秒增加自身6经验，增加队伍中经济最低的英雄6金币',
                },
                {
                    type: '提示',
                    description: '1.不与队友分配野怪/小兵收益，单独获得25%~50%金币和经验（20分钟到达上限）\n2.如果兵线经济没有被获取，则其中50%会掉落在地面，拾取金币上限600，且可全图吸取一枚金币（冷却时间：10秒）',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 113,
            name: '近卫·奔狼',
            price: 2080,
            icon: 'imgs/equipment/jinweibenlang.webp',
            stats: { '最大生命': 1200, '移速': '7.5%' },
            materials: [
                'imgs/equipment/jinwei.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '主动-奔腾号令',
                    description: '范围内友方英雄2秒内逐渐增加移速，最高增加100%~200%移速，持续5秒，途径未加速的友军英雄时会将当前状态同步给友军，攻击或受到敌方英雄攻击时保留20%加速效果（冷却时间:90秒）（游走装主动技能队伍共享冷却）',
                },
                {
                    type: '被动-守护光环',
                    description: '增加自身65~130物理防御，法术防御和+0.6%Hp每5秒回血，对800范围友方造成50%效果',
                },
                {
                    type: '被动-奖赏',
                    description: '增加400-800最大生命值，增加25-50主攻属性（1主攻属性=1物理攻击或2法术攻击）',
                },
                {
                    type: '被动-游击',
                    description: '每3秒增加自身6经验，增加队伍中经济最低的英雄6金币',
                },
                {
                    type: '提示',
                    description: '1.不与队友分配野怪/小兵收益，单独获得25%~50%金币和经验（20分钟到达上限）\n2.如果兵线经济没有被获取，则其中50%会掉落在地面，拾取金币上限600，且可全图吸取一枚金币（冷却时间：10秒）',
                    needLineBreak: true
                }
            ]
        },
        {
            id: 114,
            name: '近卫·形昭',
            price: 2080,
            icon: 'imgs/equipment/jinweixingzhao.webp',
            stats: { '最大生命': 1200, '移速': '7.5%' },
            materials: [
                'imgs/equipment/jinwei.webp',
                'imgs/equipment/liliangyaodai.webp'
            ],
            passives: [
                {
                    type: '主动-见影',
                    description: '释放一道探照光波，对1200范围内的敌方造成4次伤害，每次造成当前生命3%伤害并附带25%~50%减速，探照光波会在范围内继续残留2秒，期间也会提供视野并短暂暴露隐身单位，同时对进入的敌人造成伤害和减速（冷却时间:75秒，没有命中目标会返还75%冷却时间）（游走装主动技能队伍共享冷却）',
                },
                {
                    type: '被动-守护光环',
                    description: '增加自身65~130物理防御，法术防御和+0.6%Hp每5秒回血，对800范围友方造成50%效果',
                },
                {
                    type: '被动-奖赏',
                    description: '增加400-800最大生命值，增加25-50主攻属性（1主攻属性=1物理攻击或2法术攻击）',
                },
                {
                    type: '被动-游击',
                    description: '每3秒增加自身6经验，增加队伍中经济最低的英雄6金币',
                },
                {
                    type: '提示',
                    description: '1.不与队友分配野怪/小兵收益，单独获得25%~50%金币和经验（20分钟到达上限）\n2.如果兵线经济没有被获取，则其中50%会掉落在地面，拾取金币上限600，且可全图吸取一枚金币（冷却时间：10秒）',
                    needLineBreak: true
                }
            ]
        }
    ]
};

export const recommendedBuilds = [
    {
        hero: '后羿',
        heroAvatar: './imgs/heroes/houyi/houyi.webp',
        items: [
            'imgs/equipment/jisuzhanxue.webp', 
            'imgs/equipment/yingren.webp', 
            'imgs/equipment/wujinzhanren.webp', 
            'imgs/equipment/renzhepoxiao.webp', 
            'imgs/equipment/zhurizhigong.webp', 
            'imgs/equipment/moshi.webp'
        ],
        description: '后羿的经典出装，拉满攻速与暴击伤害，后期可根据敌方阵容调整防御装备'
    },
    {
        hero: '海月',
        heroAvatar: './imgs/heroes/haiyue/haiyue.webp',
        items: [
            'imgs/equipment/mifazhixue.webp', 
            'imgs/equipment/mengyanzhiya.webp', 
            'imgs/equipment/boxuezhezhinu.webp', 
            'imgs/equipment/xianzhetianshu.webp', 
            'imgs/equipment/rimuzhiliu.webp', 
            'imgs/equipment/shishenzhishu.webp'
        ],
        description: '海月的爆发流出装，高额法术强度配合穿透，瞬间秒杀敌方脆皮'
    }
];
