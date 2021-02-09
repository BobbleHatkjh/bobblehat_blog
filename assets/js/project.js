import Message from "~/components/message/message";


export default [
    {
        title: "VTB Music",
        button: "想去看看",
        icon: "go",
        open: () => window.open('https://vtbmusic.com'),
        technology: "Vue + iView",
        library: ['icon-github'],
        content: "推Vtuber的时候结识了一些官组的成员，站长 静谷 发起了该非盈利开源项目，意在收录Vtuber演唱的歌曲，团队人数130+，包含翻译，运营，前后端，运维甚至法务，并逐步扩展到统计V的生涯信息以及会社的近况，友站biliOB和Vtbs.moe提供了数据支持",
        image: "https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/vtbmusic.webp"
    },
    {
        title: "B-Library",
        button: "想去试试",
        icon: "go",
        open: () => window.open('https://www.npmjs.com/package/b-library'),
        technology: "Vue",
        library: ['icon-github', 'icon-npm'],
        content: "总结了在实习过程参与开发的项目经验，针对中小型企业的官网类网站快速架设，制作了「b-library」功能组件库，库包含如 导航栏，侧边栏，页脚，全球化，主题定制 等常用数据驱动的功能组件，开箱即用，学习成本低，现已在NPM开放下载",
        image: "https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/b_library.webp"
    },
    {
        title: "1站团",
        button: "微信搜索",
        icon: "go",
        open: () => window.open('https://www.1ztuan.com/'),
        technology: "React + taro",
        library: ['icon-github'],
        content: "参与开发了「1站团」新零售微信小程序。「1站团」秉着”生活何必东奔西跑”的概念，将人们日常的生活必需品，包含15大品类，上千种商品直达社区，极速送达用户手中，打造社区团购“新生活”",
        image: "https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/1zhan.webp"
    },
    {
        title: "MineCraft",
        button: "一起来摸鱼",
        icon: "go",
        open: () => window.open('https://skin.vtmcraft.com'),
        technology: "Vue3",
        library: [],
        content: "闲暇之余和小伙伴们一起搭建的我的世界社区，包括1.16.5版本的我的世界mod服务器，一个web大地图插件和一个皮肤站，代码敲累了的时候可以来放松放松心情，让大家开开心心摸鱼，摸得尽兴（）",
        image: "https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/minecraft.webp"
    },
    {
        title: "GoBang",
        button: "想去玩玩",
        icon: "go",
        open: () => Message.warn('ceshi'),
        technology: "Vue + b-library",
        library: ['icon-github'],
        content: "“Gobang“是线上多人五子棋对战平台 and suggestions for fixes, quick and safe refactorings with one-step undo, intelligent code completion, dead code detection, and documentation hints help all",
        image: "https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/gobang.webp"
    },
    {
        title: "校企合作平台",
        button: "想去玩玩",
        icon: "go",
        open: () => Message.error('肥肠爆芡，仅学校内网可以访问哦'),
        technology: "Vue + b-library",
        library: ['icon-github'],
        content: "天津工业大学官方校企合作平台，由工大牵头创办，目的是和校区内的天津市软件孵化基地合作，为学生提供更优质的教学以及接触前沿技术的机会，平台由校方管理，学生和入驻企业使用",
        image: "https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/tiangong.webp"
    }
]