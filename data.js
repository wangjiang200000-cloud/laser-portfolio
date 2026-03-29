// 精选6个作品 (Works) - 使用实际文件夹名
const featured = [
{f:"2024山东枣庄楼体mapping",t:"山东枣庄楼体Mapping",v:["https://weixin.qq.com/sph/AfyTALOlu"]},
{f:"2025凤阳洪武门激光楼体mapping",t:"凤阳洪武门激光楼体Mapping",v:["https://weixin.qq.com/sph/AatXqeOh8"]},
{f:"2025泉州清源山激光山体秀",t:"泉州清源山激光山体秀",v:["https://weixin.qq.com/sph/AJG0xVGv5"]},
{f:"2025滁州琅琊山激光山体秀",t:"滁州琅琊山激光山体秀",v:["https://weixin.qq.com/sph/A0WELB1xx"]},
{f:"2022嘉兴东悦府激光楼体mapping",t:"嘉兴东悦府激光楼体Mapping",v:["https://weixin.qq.com/sph/AFwbi50J7","https://weixin.qq.com/sph/AiEFR85p6"]},
{f:"2021赣县文昌阁激光楼体mapping",t:"赣县文昌阁激光楼体Mapping",v:["https://weixin.qq.com/sph/ACeMutGx7"]}
];

// 更多作品 - 使用实际文件夹名
const moreWorks = [
{f:"2020合肥旭辉铂悦天汇激光楼体mapping",t:"合肥旭辉铂悦天汇激光楼体Mapping",v:["https://weixin.qq.com/sph/A6mzXuDSL"]},
{f:"2021六安振兴激光楼体mapping",t:"六安振兴激光楼体Mapping",v:["https://weixin.qq.com/sph/AclIJtjC0"]},
{f:"2021宣城激光楼体mapping",t:"宣城激光楼体Mapping",v:["https://v.douyin.com/UmPK5Te3uFA/"]},
{f:"2021常州漫山花海激光楼体mapping",t:"常州漫山花海激光楼体Mapping",v:["https://v.douyin.com/HYTCaw7lXOE/"]},
{f:"2022丹阳眼镜城激光楼体mapping",t:"丹阳眼镜城激光楼体Mapping",v:["https://weixin.qq.com/sph/A2xeMcwvj"]},
{f:"2022厦门湖畔九境激光楼体mapping",t:"厦门湖畔九境激光楼体Mapping",v:["https://v.douyin.com/xepVPWBz87s/"]},
{f:"2022山东德州激光楼体mapping",t:"山东德州激光楼体Mapping",v:["https://weixin.qq.com/sph/AHyrBkFo3"]},
{f:"2023休宁齐云山激光山体秀",t:"休宁齐云山激光山体秀",v:["https://v.douyin.com/7sxsEQ-lz9Q/"]},
{f:"2023合肥银泰跨年夜",t:"合肥银泰跨年夜",v:["https://weixin.qq.com/sph/Apg2IefkV","https://weixin.qq.com/sph/AclIJtjC0"]},
{f:"2023山东莱芜激光楼体mapping",t:"山东莱芜激光楼体Mapping",v:["https://v.douyin.com/blFArruFqD8/"]},
{f:"2023榆林城市之光激光楼体mapping",t:"榆林城市之光激光楼体Mapping",v:["https://weixin.qq.com/sph/ADouZRsRo"]},
{f:"2023湖北神农架激光山体秀",t:"湖北神农架激光山体秀",v:["https://weixin.qq.com/sph/AhyAm3FxX","https://weixin.qq.com/sph/AvF44FXty"]},
{f:"2024 舟山楼体激光mapping",t:"舟山楼体激光Mapping",v:["https://weixin.qq.com/sph/A6b41bobe"]},
{f:"2024丹寨·龙泉山激光山体秀",t:"丹寨·龙泉山激光山体秀",v:["https://v.douyin.com/FBDNS7jQ42g/"]},
{f:"2024亳州荣徽云峰荟激光楼体mapping",t:"亳州荣徽云峰荟激光楼体Mapping",v:["https://weixin.qq.com/sph/AaMkYTXwh"]},
{f:"创意玩法",t:"创意玩法",v:["https://weixin.qq.com/sph/AMnpLUxJA"]},
{f:"激光舞-太极琴侠",t:"激光舞-太极琴侠",v:["https://weixin.qq.com/sph/AXYvIpVGL","https://weixin.qq.com/sph/AOUp0GMKO"]},
{f:"激光镜面舞",t:"激光镜面舞",v:[]}
];

// 合并所有作品
const allWorks = [...featured, ...moreWorks];

// 封面图片映射
const coverImages = {
"2020合肥旭辉铂悦天汇激光楼体mapping":"mmexport1599363582903.jpg",
"2021六安振兴激光楼体mapping":"WechatImg_287032_20260329151708.jpg",
"2021宣城激光楼体mapping":"IMG_20210919_224017.jpg",
"2021常州漫山花海激光楼体mapping":"WechatImg_286979_20260329151636.jpg",
"2021赣县文昌阁激光楼体mapping":"IMG_20210722_042615.jpg",
"2021墨雨激光楼体mapping":"IMG_20210722_042615.jpg",
"2022丹阳眼镜城激光楼体mapping":"IMG_20220812_023602.jpg",
"2022厦门湖畔九境激光楼体mapping":"WechatImg_286959_20260329151625.jpg",
"2022嘉兴东悦府激光楼体mapping":"WechatImg_286965_20260329151627.jpg",
"2022山东德州激光楼体mapping":"WechatImg_286972_20260329151631.jpg",
"2023休宁齐云山激光山体秀":"WechatImg_286933_20260329151405.jpg",
"2023合肥银泰跨年夜":"WechatImg_286894_20260329151120.jpg",
"2023山东莱芜激光楼体mapping":"IMG_20230620_235841.jpg",
"2023榆林城市之光激光楼体mapping":"IMG_20230506_000850.jpg",
"2023湖北神农架激光山体秀":"IMG_20230907_203127.jpg",
"2024 舟山楼体激光mapping":"IMG_20240726_212913.jpg",
"2024丹寨·龙泉山激光山体秀":"WechatImg_286876_20260329150830.jpg",
"2024亳州荣徽云峰荟激光楼体mapping":"WechatImg_286950_20260329151620.jpg",
"2024山东枣庄楼体mapping":"IMG_20240915_013959.jpg",
"2025凤阳洪武门激光楼体mapping":"WechatImg_287021_20260329151702.jpg",
"2025泉州清源山激光山体秀":"WechatImg_286914_20260329151244.jpg",
"2025滁州琅琊山激光山体秀":"WechatImg_287041_20260329151714.jpg",
"2025豪新奇幻激光山体秀":"WechatImg_287051_20260329151720.jpg",
"2025合肥朱星杰大型楼体mapping":"WechatImg_287015_20260329151656.jpg",
"2025豪奇电器琅琊山激光山体秀":"WechatImg_287003_20260329151649.jpg",
"创意玩法":"mmexport1604839263942.jpg",
"激光舞-太极琴侠":"WechatImg_287015_20260329151656.jpg",
"激光镜面舞":"WechatImg_287003_20260329151649.jpg"
};

// 所有图片映射
const allImages = {
"2020合肥旭辉铂悦天汇激光楼体mapping":["mmexport1599363582903.jpg","mmexport1599363614477.jpg","mmexport1599363634358.jpg","mmexport1599363658021.jpg","mmexport1599363676956.jpg","mmexport1599363696847.jpg","mmexport1599363773049.jpg"],
"2021六安振兴激光楼体mapping":["WechatImg_287032_20260329151708.jpg","WechatImg_287033_20260329151708.jpg","WechatImg_287034_20260329151708.jpg","WechatImg_287035_20260329151709.jpg","WechatImg_287038_20260329151711.jpg"],
"2021宣城激光楼体mapping":["IMG_20210919_224017.jpg","IMG_20210919_224032.jpg","mmexport1632130871943.jpg","mmexport1632130874673.jpg","mmexport1632130877420.jpg","mmexport1632130880103.jpg","mmexport1632130882564.jpg","mmexport1632130884801.jpg","WechatImg_286997_20260329151645.jpg","WechatImg_286998_20260329151646.jpg","WechatImg_286999_20260329151647.jpg","WechatImg_287000_20260329151648.jpg","WechatImg_287001_20260329151648.jpg","WechatImg_287002_20260329151649.jpg","WechatImg_287004_20260329151649.jpg"],
"2021常州漫山花海激光楼体mapping":["WechatImg_286979_20260329151636.jpg","WechatImg_286980_20260329151635.jpg","WechatImg_286981_20260329151637.jpg","WechatImg_286982_20260329151638.jpg","WechatImg_286983_20260329151638.jpg","WechatImg_286985_20260329151639.jpg"],
"2021赣县文昌阁激光楼体mapping":["IMG_20210722_042615.jpg","mmexport1627122400357.jpg","mmexport1627122412070.jpg","mmexport1627221263822.jpg","mmexport1627221275055.jpg","mmexport1627221280889.jpg","mmexport1627221283702.jpg","mmexport1627221286645.jpg","mmexport38fcf8e798f400f772dd87126ca611f3_1627140990380.jpeg","mmexport47d78450fa0944bc6beee22d7848a3d3_1627140913300.jpeg","mmexport5ec345dd6760132fa06d16c23cb88c32_1627140955023.jpeg","mmexport669a5a3a5388ff8a023064c88f90dbfe_1627141006704.jpeg","mmexport722bbc9d2f1443b57a43158745732ec2_1627140935935.jpeg","mmexport8cf55512ccbed304050e799026264bb7_1627140896246.jpeg","mmexportac64af09944fc7122dd16402a4c72033_1627140997355.jpeg","mmexportafcd63945e8e73eec1a899e9701a2e09_1627140974815.jpeg","mmexportb7ae5bef305655b991368743cd2b789a_1627140966697.jpeg","mmexportdae3990bb1dc0e35e861897c3a56802b_1627140982829.jpeg","mmexportfb84f7628af81968a350043e4b3fe588_1627140925531.jpeg"],
"2021墨雨激光楼体mapping":["IMG_20210722_042615.jpg","mmexport1627122400357.jpg","mmexport1627122412070.jpg","mmexport1627221263822.jpg","mmexport1627221275055.jpg","mmexport1627221280889.jpg","mmexport1627221283702.jpg","mmexport1627221286645.jpg","mmexport1627482221030.mp4","mmexport38fcf8e798f400f772dd87126ca611f3_1627140990380.jpeg","mmexport47d78450fa0944bc6beee22d7848a3d3_1627140913300.jpeg","mmexport5ec345dd6760132fa06d16c23cb88c32_1627140955023.jpeg","mmexport669a5a3a5388ff8a023064c88f90dbfe_1627141006704.jpeg","mmexport722bbc9d2f1443b57a43158745732ec2_1627140935935.jpeg","mmexport8cf55512ccbed304050e799026264bb7_1627140896246.jpeg","mmexportac64af09944fc7122dd16402a4c72033_1627140997355.jpeg","mmexportafcd63945e8e73eec1a899e9701a2e09_1627140974815.jpeg","mmexportb7ae5bef305655b991368743cd2b789a_1627140966697.jpeg","mmexportdae3990bb1dc0e35e861897c3a56802b_1627140982829.jpeg","mmexportfb84f7628af81968a350043e4b3fe588_1627140925531.jpeg"],
"2022丹阳眼镜城激光楼体mapping":["IMG_20220812_023602.jpg","IMG_20220812_200552.jpg","IMG_20220812_201058.jpg","IMG_20220813_194409.jpg","IMG_20220813_194416.jpg","IMG_20220813_194424.jpg","IMG_20220813_194430.jpg"],
"2022厦门湖畔九境激光楼体mapping":["WechatImg_286959_20260329151625.jpg","WechatImg_286960_20260329151625.jpg","WechatImg_286961_20260329151624.jpg","WechatImg_286962_20260329151626.jpg","WechatImg_286963_20260329151626.jpg","WechatImg_286964_20260329151627.jpg"],
"2022嘉兴东悦府激光楼体mapping":["WechatImg_286965_20260329151627.jpg","WechatImg_286966_20260329151627.jpg","WechatImg_286967_20260329151628.jpg","WechatImg_286968_20260329151628.jpg","WechatImg_286969_20260329151629.jpg","WechatImg_286970_20260329151630.jpg","WechatImg_286971_20260329151630.jpg"],
"2022山东德州激光楼体mapping":["WechatImg_286972_20260329151631.jpg","WechatImg_286973_20260329151631.jpg","WechatImg_286974_20260329151633.jpg","WechatImg_286975_20260329151632.jpg","WechatImg_286976_20260329151632.jpg"],
"2023休宁齐云山激光山体秀":["WechatImg_286933_20260329151405.jpg","WechatImg_286934_20260329151409.jpg","WechatImg_286935_20260329151413.jpg","WechatImg_286936_20260329151417.jpg","WechatImg_286937_20260329151420.jpg","WechatImg_286938_20260329151425.jpg"],
"2023合肥银泰跨年夜":["WechatImg_286894_20260329151120.jpg","WechatImg_286895_20260329151125.jpg","WechatImg_286896_20260329151130.jpg","WechatImg_286897_20260329151133.jpg","WechatImg_286898_20260329151137.jpg","WechatImg_286899_20260329151140.jpg","WechatImg_286901_20260329151144.jpg","WechatImg_286902_20260329151149.jpg","WechatImg_286903_20260329151152.jpg","WechatImg_286904_20260329151158.jpg","WechatImg_286905_20260329151201.jpg","WechatImg_286906_20260329151205.jpg","WechatImg_286907_20260329151214.jpg","WechatImg_286908_20260329151218.jpg","WechatImg_286909_20260329151222.jpg","WechatImg_286910_20260329151226.jpg","WechatImg_286912_20260329151231.jpg"],
"2023山东莱芜激光楼体mapping":["IMG_20230620_235841.jpg","IMG_20230621_231119.jpg","IMG_20230621_231142.jpg","WechatImg_286954_20260329151622.jpg","WechatImg_286955_20260329151623.jpg","WechatImg_286956_20260329151623.jpg","WechatImg_286957_20260329151624.jpg","WechatImg_286958_20260329151624.jpg"],
"2023榆林城市之光激光楼体mapping":["IMG_20230506_000850.jpg","IMG_20230506_000922.jpg","IMG_20230506_000938.jpg","IMG_20230506_000943.jpg","IMG_20230506_001021.jpg","IMG_20230507_044221.jpg","IMG_20230507_044306.jpg","IMG_20230507_044812.jpg","IMG_20230507_044825.jpg","IMG_20230507_045002.jpg","IMG_20230507_045042.jpg","IMG_20230507_045104.jpg","IMG_20230507_045136.jpg","IMG_20230507_045208.jpg","IMG_20230507_045250.jpg","IMG_20230507_045319.jpg","IMG_20230507_045402.jpg","IMG_20230507_045452.jpg"],
"2023湖北神农架激光山体秀":["IMG_20230907_203127.jpg","IMG_20230907_220106.jpg","IMG_20230907_220156.jpg","IMG_20230908_010447.jpg","IMG_20230908_012740.jpg","IMG_20230908_021510.jpg","IMG_20230908_021523.jpg","IMG_20230910_031944.jpg","IMG_20230910_032010.jpg","IMG_20230910_032018.jpg","IMG_20230910_032028.jpg","IMG_20230910_032038.jpg","IMG_20230910_032049.jpg","IMG_20230910_032058.jpg","IMG_20230910_034101.jpg","IMG_20230910_034109.jpg","IMG_20230910_034116.jpg","IMG_20230910_034121.jpg","IMG_20230910_034131.jpg","IMG_20230910_034137.jpg","IMG_20230910_034148.jpg","IMG_20230910_034154.jpg","IMG_20230910_034158.jpg","IMG_20230910_034205.jpg","IMG_20230910_034210.jpg","IMG_20230910_034215.jpg","IMG_20230910_034220.jpg","IMG_20230910_034225.jpg","IMG_20230910_034233.jpg"],
"2024 舟山楼体激光mapping":["IMG_20240726_212913.jpg","IMG_20240726_222044.jpg","IMG_20240726_222046.jpg","IMG_20240726_222109.jpg","IMG_20240726_222114.jpg","IMG_20240726_222116.jpg","IMG_20240726_222124.jpg","IMG_20240726_222142.jpg","IMG_20240726_222152.jpg","IMG_20240726_222202.jpg","IMG_20240726_222207.jpg","IMG_20240726_222213.jpg","IMG_20240726_222229.jpg","IMG_20240726_222306.jpg"],
"2024丹寨·龙泉山激光山体秀":["WechatImg_286876_20260329150830.jpg","WechatImg_286877_20260329150844.jpg","WechatImg_286878_20260329150852.jpg","WechatImg_286879_20260329150857.jpg","WechatImg_286880_20260329150908.jpg","WechatImg_286881_20260329150919.jpg","WechatImg_286882_20260329150923.jpg","WechatImg_286883_20260329150932.jpg","WechatImg_286885_20260329150944.jpg","WechatImg_286886_20260329150959.jpg","WechatImg_286887_20260329151005.jpg","WechatImg_286889_20260329151026.jpg","WechatImg_286890_20260329151032.jpg","WechatImg_286891_20260329151048.jpg","WechatImg_286893_20260329151100.jpg"],
"2024亳州荣徽云峰荟激光楼体mapping":["WechatImg_286950_20260329151620.jpg","WechatImg_286951_20260329151621.jpg","WechatImg_286952_20260329151621.jpg","WechatImg_286953_20260329151621.jpg"],
"2024山东枣庄楼体mapping":["IMG_20240915_013959.jpg","IMG_20240915_014034.jpg","IMG_20240915_014117.jpg","IMG_20240915_210400.jpg","IMG_20240915_210821.jpg","IMG_20240915_210839.jpg","IMG_20240915_211000.jpg","IMG_20240915_211036.jpg","WechatImg_286940_20260329151614.jpg","WechatImg_286941_20260329151615.jpg","WechatImg_286942_20260329151615.jpg","WechatImg_286944_20260329151616.jpg","WechatImg_286945_20260329151617.jpg","WechatImg_286946_20260329151617.jpg","WechatImg_286947_20260329151618.jpg","WechatImg_286948_20260329151618.jpg","WechatImg_286949_20260329151619.jpg"],
"2025凤阳洪武门激光楼体mapping":["WechatImg_287021_20260329151702.jpg","WechatImg_287024_20260329151703.jpg","WechatImg_287025_20260329151703.jpg","WechatImg_287026_20260329151704.jpg","WechatImg_287027_20260329151705.jpg","WechatImg_287028_20260329151705.jpg","WechatImg_287029_20260329151706.jpg","WechatImg_287030_20260329151705.jpg","WechatImg_287031_20260329151707.jpg"],
"2025泉州清源山激光山体秀":["WechatImg_286914_20260329151244.jpg","WechatImg_286915_20260329151248.jpg","WechatImg_286916_20260329151251.jpg","WechatImg_286918_20260329151255.jpg","WechatImg_286919_20260329151259.jpg","WechatImg_286920_20260329151302.jpg","WechatImg_286921_20260329151306.jpg","WechatImg_286922_20260329151309.jpg","WechatImg_286923_20260329151313.jpg","WechatImg_286924_20260329151316.jpg","WechatImg_286925_20260329151320.jpg","WechatImg_286926_20260329151323.jpg","WechatImg_286927_20260329151327.jpg","WechatImg_286928_20260329151329.jpg","WechatImg_286929_20260329151333.jpg","WechatImg_286930_20260329151337.jpg","WechatImg_286931_20260329151343.jpg","WechatImg_286932_20260329151354.jpg","WechatImg_287036_20260329151711.jpg","WechatImg_287037_20260329151712.jpg","WechatImg_287039_20260329151713.jpg","WechatImg_287040_20260329151713.jpg","WechatImg_287042_20260329151714.jpg"],
"2025滁州琅琊山激光山体秀":["WechatImg_287041_20260329151714.jpg","WechatImg_287044_20260329151715.jpg","WechatImg_287045_20260329151715.jpg","WechatImg_287046_20260329151716.jpg","WechatImg_287047_20260329151717.jpg","WechatImg_287048_20260329151717.jpg","WechatImg_287049_20260329151718.jpg","WechatImg_287050_20260329151719.jpg"],
"2025豪新奇幻激光山体秀":["WechatImg_287051_20260329151720.jpg","WechatImg_287052_20260329151720.jpg","WechatImg_287053_20260329151720.jpg","WechatImg_287054_20260329151721.jpg","WechatImg_287055_20260329151722.jpg","WechatImg_287056_20260329151722.jpg","WechatImg_287057_20260329151723.jpg","WechatImg_287058_20260329151723.jpg"],
"2025合肥朱星杰大型楼体mapping":["WechatImg_287015_20260329151656.jpg","WechatImg_287016_20260329151658.jpg","WechatImg_287017_20260329151658.jpg","WechatImg_287018_20260329151659.jpg","WechatImg_287019_20260329151700.jpg","WechatImg_287020_20260329151700.jpg","WechatImg_287022_20260329151702.jpg"],
"2025豪奇电器琅琊山激光山体秀":["WechatImg_287003_20260329151649.jpg","WechatImg_287005_20260329151650.jpg","WechatImg_287006_20260329151651.jpg","WechatImg_287007_20260329151652.jpg","WechatImg_287008_20260329151652.jpg","WechatImg_287009_20260329151653.jpg","WechatImg_287010_20260329151653.jpg","WechatImg_287011_20260329151653.jpg","WechatImg_287012_20260329151654.jpg","WechatImg_287013_20260329151655.jpg","WechatImg_287014_20260329151656.jpg"],
"创意玩法":["mmexport1604839263942.jpg","mmexport1604839272794.jpg","mmexport1604839276414.jpg","mmexport1604839279367.jpg","mmexport1604839284869.jpg","mmexport1604839288360.jpg","mmexport1605156722451.jpg"],
"激光舞-太极琴侠":["WechatImg_287015_20260329151656.jpg","WechatImg_287016_20260329151658.jpg","WechatImg_287017_20260329151658.jpg","WechatImg_287018_20260329151659.jpg","WechatImg_287019_20260329151700.jpg","WechatImg_287020_20260329151700.jpg","WechatImg_287022_20260329151702.jpg"],
"激光镜面舞":["WechatImg_287003_20260329151649.jpg","WechatImg_287005_20260329151650.jpg","WechatImg_287006_20260329151651.jpg","WechatImg_287007_20260329151652.jpg","WechatImg_287008_20260329151652.jpg","WechatImg_287009_20260329151653.jpg","WechatImg_287010_20260329151653.jpg","WechatImg_287011_20260329151653.jpg","WechatImg_287012_20260329151654.jpg","WechatImg_287013_20260329151655.jpg","WechatImg_287014_20260329151656.jpg"]
};