<template>
  <div class="container">

    <!-- HeadBar -->
    <div class="head_bar" :class="{'head_bar_down': scroll_now ? (scroll_now > full_height - 50): 0}">
      <div class="head_bar_frame">
        <div class="head_logo" :class="{'head_logo_down': scroll_now ? (scroll_now > full_height - 50): 0}"/>
        <div class="head_route">
          <Button @click="jumpRoute">首页</Button>
          <Button @click="jumpRoute">介绍</Button>
          <Button @click="jumpRoute">经历</Button>
          <Button @click="jumpRoute('blog')">博客</Button>
        </div>
      </div>
    </div>

    <!-- 主体内容 -->
    <div ref="content" class="content">

      <!-- 主页 -->
      <ContentFrame extra_css="flex-direction: column; justify-content: flex-end">
        <div style="display: flex;justify-content: center;flex: 1;align-items: center">
          <div class="slogan">
            <Slogan>你的气质里</Slogan>
            <Slogan>藏着你走过的路</Slogan>
            <Slogan>读过的书</Slogan>
            <Slogan>爱过的人</Slogan>
          </div>
        </div>
        <div class="arrow">
          <i class="iconfont icon-down"/>
        </div>
      </ContentFrame>

      <!-- 自我介绍 -->
      <ContentFrame
          background="white"
          height="500px"
          extra_css="color: #424242;flex-direction: column; justify-content: flex-start; align-items: center;"
      >
        <div class="about_me">
          关于我
        </div>
        <div class="about_frame">
          <div
              class="about_sloan"
              :style="{opacity: tag_opacity, transform: `translateX(${-tag_translate * 3}px) translateY(${-tag_translate * 0.5}px) scale(${tag_scale})`}"
          >
            cp粉
          </div>

          <div
              class="about_sloan"
              :style="{opacity: tag_opacity, transform: `translateX(${-tag_translate * 1.4}px) translateY(${tag_translate * 3}px) scale(${tag_scale})`}"
          >
            财布
          </div>
          <div
              class="about_sloan"
              :style="{opacity: tag_opacity, transform: `translateX(${tag_translate * 3}px) translateY(${-tag_translate}px) scale(${tag_scale})`}"
          >
            宅
          </div>
          <div
              class="about_sloan"
              :style="{opacity: tag_opacity, transform: `translateX(${tag_translate}px) translateY(${tag_translate * 1.4}px) scale(${tag_scale})`}"
          >
            处女座
          </div>
        </div>
        <p>我叫康嘉禾</p>
        <p>喜欢嗑cp，推管人，联盟玩家</p>
        <p>现就读于天津工业大学计算机系</p>
        <p>校CSDN俱乐部部长</p>
        <p>热衷于前端技术，开源社区</p>
        <p>GitHub总提交行数 5w+</p>
        <p>偷来的人生信条:</p>
        <p>"要学的东西太多了"</p>
        <div class="about_me" style="margin-top: 68px">
          个人经历
        </div>
      </ContentFrame>

      <!-- 项目经历 -->
      <ContentFrame background="white" height="auto">
        <div class="scroll_word">
          <Context
              title="VTB Music"
              button="想去看看"
              icon="go"
              @open="jumpRoute('vtb')"
              :style="{opacity: project_animate[0].opacity, transform: `translateX(${-project_animate[0].translate}px) translateY(${-project_animate[0].translate}px`}"
          >
            <i>Vue + iView</i> <i class="iconfont icon-github"/><br/>
            推Vtuber的时候结识了一些官组的成员，站长 静谷 发起了该非盈利开源项目，意在收录Vtuber演唱的歌曲，
            团队人数130+，包含翻译，运营，前后端，运维甚至法务，并逐步扩展到统计V的生涯信息以及会社的近况，友站biliOB和Vtbs.moe提供了数据支持
          </Context>

          <Context
              title="B-Library"
              button="想去试试"
              icon="go"
              @open="jumpRoute('npm')"
              :style="{opacity: project_animate[1].opacity, transform: `translateX(${project_animate[1].translate}px) translateY(${-project_animate[1].translate}px`}"
          >
            <i>Vue</i> <i class="iconfont icon-github"/><i class="iconfont icon-npm"/><br/>
            总结了在实习过程参与开发的项目经验，针对中小型企业的官网类网站快速架设，制作了「b-library」功能组件库，
            库包含如 导航栏，侧边栏，页脚，全球化，主题定制 等常用数据驱动的功能组件，开箱即用，学习成本低
          </Context>

          <Context
              title="1站团"
              button="微信搜索"
              icon="go"
              @open="jumpRoute('1_station')"
              :style="{opacity: project_animate[2].opacity, transform: `translateX(${-project_animate[2].translate}px) translateY(${-project_animate[2].translate}px`}"
          >
            <i>React + taro</i><br/>
            参与开发了「1站团」新零售微信小程序。「1站团」秉着”生活何必东奔西跑”的概念，将人们日常的生活必需品，包含15大品类，上千种商品直达社区，极速送达用户手中，打造社区团购“新生活”
          </Context>

          <Context
              title="GoBang"
              button="想去玩玩"
              icon="go"
              @open="jumpRoute"
              :style="{opacity: project_animate[3].opacity, transform: `translateX(${project_animate[3].translate}px) translateY(${-project_animate[3].translate}px`}"
          >
            <i>Vue + b-library</i> <i class="iconfont icon-github"/><br/>
            这里是第4个例子On-the-fly error detection and suggestions for fixes, quick and safe refactorings with one-step
            undo, intelligent code completion, dead code detection, and documentation hints help all
          </Context>

          <Context
              title="校企合作平台"
              button="内网Only"
              icon="shut"
              @open="jumpRoute('tg')"
              :style="{opacity: project_animate[4].opacity, transform: `translateX(${-project_animate[4].translate}px) translateY(${-project_animate[4].translate}px`}"
          >
            <i>React + AntDPro</i><br/>
            这里是第5个例子On-the-fly error detection and suggestions for fixes, quick and safe refactorings with one-step
            undo, intelligent code completion, dead code detection, and documentation hints help all
          </Context>

        </div>

        <!-- sticky 图片-->
        <div class="scroll_frame">
          <div ref="sticky" class="scroll_box">
            <Img v-if="project_pic !== -1" :src="banner[project_pic]"/>
          </div>
        </div>
      </ContentFrame>

      <!-- 博客 -->
      <ContentFrame
          background="white"
          height="auto"
          extra_css="flex-direction: column; justify-content: flex-start; align-items: center;">
        <div class="about_me" style="margin-top: 0">
          最新博客
        </div>
        <Receive @select="receiveSelect" :data="receive" :column="3"/>
        <Button @click="jumpRoute('blog')" :scroll="true" icon="go">
          想去看看
        </Button>
      </ContentFrame>

      <!-- ? -->
      <ContentFrame background="white">
        1111
      </ContentFrame>

      <!-- 页脚 -->
      <ContentFrame height="270px"
                    extra_css="flex-direction: column; justify-content: flex-start; align-items: center;">
        <div class="connect">
          <div class="connect_logo">
            <img src="https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/logo_white.png" alt="BobbleHat"/>
            <div class="content_icon">
              <i class="iconfont icon-qq"/>
            </div>
            <div class="content_icon">
              <i class="iconfont icon-github"/>
            </div>
            <div class="content_icon">
              <i class="iconfont icon-twiter"/>
            </div>
            <div class="content_icon">
              <i class="iconfont icon-npm"/>
            </div>
          </div>

          <div class="connect_frame">
            <h3>联系到我</h3>
            <p @click="jumpRoute('email')">发邮件给我</p>
            <p>Segmentfault</p>
            <p>BiliBili 频道</p>
          </div>
        </div>
        <div class="copy_at">
          <a>Powered by @ 2020 绒球帽</a>
          <a>津ICP备2020008428号</a>
        </div>
      </ContentFrame>

    </div>

  </div>
</template>

<script>
import Message from "~/components/message/message";
import route_test from '../assets/js/router.js'
export default {
  components: {
    Context: () => import(/* webpackChunkName: "receive" */ '~/components/Context'),
    Receive: () => import(/* webpackChunkName: "receive" */ '~/components/Receive'),
    ContentFrame: () => import(/* webpackChunkName: "content_frame" */ '~/components/ContentFrame'),
    Button: () => import(/* webpackChunkName: "button_animate" */ '~/components/Button'),
    Img: () => import(/* webpackChunkName: "img_animate" */ '~/components/Img')
  },
  data() {
    return {
      scroll_now: 0,       // 现在滚动到的位置 精确到px
      full_height: 0,      // 页面全高

      project_pic: -1,      // 图片的下标

      tag_opacity: 0,      // *优化* tag的透明度变化
      tag_translate: 0,    // *优化* tag的位置改变
      tag_scale: 1,        // *优化* tag的大小改变

      project_animate: [   // *优化* 项目介绍的改变
        {
          opacity: 0,
          translate: 0,
        },
        {
          opacity: 0,
          translate: 0,
        },
        {
          opacity: 0,
          translate: 0,
        },
        {
          opacity: 0,
          translate: 0,
        },
        {
          opacity: 0,
          translate: 0,
        },
      ],

      banner: [
        'https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/vtbmusic.webp',
        'https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/b_library.webp',
        'https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/1zhan.webp',
        'https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/gobang.webp',
        'https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/tiangong.webp'
      ],
      receive: []
    }
  },
  methods: {

    /** 在滚动时触发 */
    onScroll() {
      this.scroll_now = this.$refs.content.scrollTop;

      // *优化* tag的动画,仅在滑动到介绍时触发
      (this.$refs.content.scrollTop < this.full_height) && this.scrollTag(this.$refs.content.scrollTop);

      // *优化* 项目经历的动画,仅在滑动到项目经历时触发
      if (this.$refs.content.scrollTop > this.full_height && this.$refs.content.scrollTop <= 4.5 * this.full_height) {
        // 左边的动画
        this.scrollProject(this.$refs.content.scrollTop);
        // 切换右边的图片
        const banner_ = this.stickyCalculate(this.$refs.content.scrollTop)
        if (this.project_pic !== banner_) {
          this.project_pic = banner_;
          // this.$refs.sticky.style.background = `url('${this.banner[banner_]}') no-repeat center center/cover`
        }
      }
    },

    /** 页面高度发生变化时 */
    onResize(){
      window.innerHeight >= 650 && (this.full_height = window.innerHeight);
    },

    /** 滚动时 tag 的各项计算值 */
    scrollTag(now) {
      // 透明度
      const tag_back = (now + 0.04 * this.full_height - 390) / (100 + 0.2 * this.full_height);
      if (tag_back <= 0) {
        this.tag_opacity = 0
      } else if (tag_back >= 1) {
        this.tag_opacity = 1
      } else {
        this.tag_opacity = tag_back
      }

      // 位置
      const translate_back = (0.16 * this.full_height - now + 530);
      if (translate_back <= 0) {
        this.tag_translate = 0
      } else if (translate_back > 0.6 * this.full_height) {
        this.tag_translate = 0.6 * this.full_height
      } else {
        this.tag_translate = translate_back
      }

      // 大小
      const scale_back = (-0.075 * this.full_height - now + 583 + 0.21 * this.full_height) * 0.03;
      if (scale_back < 1) {
        this.tag_scale = 1
      } else {
        this.tag_scale = scale_back
      }
    },

    /** 滚动时 项目经历 的各项计算值 */
    scrollProject(now) {
      // 5是5个项目的模板，可以往上加
      const new_data = []
      for (let i = 0; i < 5; i++) {
        const single_data = {
          opacity: this.scrollOpacity(now, i),
          translate: this.scrollTranslate(now, i)
        }
        new_data.push(single_data)
      }
      this.project_animate = new_data
    },

    /** 透明度 计算 */
    scrollOpacity(now, i) {
      const call_back = (now - (0.8 + 0.7 * i) * this.full_height - 390) / (100 + 0.2 * this.full_height);
      if (call_back <= 0) {
        return 0
      } else if (call_back >= 1) {
        return 1
      } else {
        return call_back
      }
    },

    /** 轨道 计算 */
    scrollTranslate(now, i) {
      const translate_back = ((1 + 0.7 * i) * this.full_height - now + 530);
      if (translate_back <= 0) {
        return 0
      } else if (translate_back > 0.6 * this.full_height) {
        return 0.6 * this.full_height
      } else {
        return translate_back
      }
    },

    /** 中间图片的切换 */
    stickyCalculate(scroll_now_init) {
      return (((scroll_now_init - 500) / this.full_height - 1.5) / 0.7 + 1) <= 0 ? 0 : Math.floor(((scroll_now_init - 500) / this.full_height - 1.5) / 0.7) + 1
    },

    /** 跳转 */
    jumpRoute(to) {
      switch (to) {
        case 'blog':
          this.$router.push({name: 'blog', params: { id: 0 }});
          break;
        case 'vtb':
          window.open('https://vtbmusic.com');
          break;
        case 'tg':
          // Message('肥肠爆芡，仅学校内网可以访问哦');
          Message.error('肥肠爆芡，仅学校内网可以访问哦');
          break;
        case 'email':
          window.open('http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=WDo3Ojo0PTA5LBgpKXY7NzU')
          break;
        case '1_station':
          window.open('https://www.1ztuan.com/')
          break;
        case 'npm':
          window.open('https://www.npmjs.com/package/b-library')
          break;
        default:
          Message.open('前面的区域，以后再来探索吧');
          break;
      }

    },

    /** 点击了博客框 */
    receiveSelect(row, data){
      this.$router.push({name: 'blog', params: { id: data }})
    },

    /** 博客部分route的初始化 */
    blogInit(){
      const router = route_test;
      for(let i = 0; i < router.length; i++){
        for(let blog = 0; blog < router[i].children.length; blog ++){
          if(this.receive.length < 3){
            this.receive.push(router[i].children[blog])
          } else return
        }
      }

    }
  },
  mounted() {
    this.full_height = window.innerHeight;
    window.addEventListener("scroll", this.onScroll, true);
    window.addEventListener("resize", this.onResize);
  },
  created() {
    this.blogInit();
    console.log('%c\n┌┐ ┌─┐┌┐ ┌┐ ┬  ┌─┐┬ ┬┌─┐┌┬┐\n' +
        '├┴┐│ │├┴┐├┴┐│  ├┤ ├─┤├─┤ │ \n' +
        '└─┘└─┘└─┘└─┘┴─┘└─┘┴ ┴┴ ┴ ┴ \n个人主页',
        'color: #ff4c10'
    )
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll, true);
    window.removeEventListener("resize", this.onResize)
  }
}
</script>

<style scoped>

.container {
  min-height: 100vh;
  /*min-width: 1024px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.5s;
  transform: translate3d(0, 0, 0);
  /*background: url("https://static001.geekbang.org/resource/image/03/b4/03d4b082f8894a2781567c510970a3b4.jpg") no-repeat center center/cover fixed;*/
  /*background: url("https://static001.geekbang.org/resource/image/f7/c7/f7bfd8fd26cdc15e18ecc8c21d3dafc7.jpg") no-repeat center center/cover fixed;*/
  /*background: url("https://static001.geekbang.org/resource/image/79/ff/794b4ab4c12a872889d3645efd363fff.jpg") no-repeat center center/cover fixed;*/
  /*background: url("https://static001.geekbang.org/resource/image/e1/aa/e16dae3c4f404fd3e8fb2eca9e0b7daa.jpg") no-repeat center center/cover fixed;*/

  background: url('https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/forest_animate_g.webp') no-repeat center center/cover fixed;
}

.head_bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  transition: background-color 0.5s, color 0.2s;
  background-color: transparent;
  z-index: 90;
  color: white;
}

.head_bar_down {
  background-color: white;
  box-shadow: 0 0 10px #c4c4c4;
  color: #505050;
}

.head_bar_frame {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  min-width: 1200px;
  width: 80%;
}

.head_logo {
  height: 100%;
  width: 230px;
  transition: background 0.5s;
  background: url('https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/logo_white.png') no-repeat left/auto 100%;
  background-size: auto 100%;
}

.head_logo_down {
  background: url('https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/logo_orange.png') no-repeat left/auto 100%;
}

.head_route {
  display: flex;
  align-items: center;
  height: 100%;
}


.content {
  height: 100vh;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
}

.slogan {
  margin-bottom: 10px;
  color: white;
}

.arrow {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 45px;
  margin-bottom: 0;
  color: white;
}

.arrow > i {
  font-size: 34px;
  padding: 0 10px;
  animation: 3s arrow infinite
}

.arrow > i:hover {
  cursor: pointer;
  animation: none;
  /*animation-play-state: paused;*/
}

.about_me {
  display: flex;
  align-items: center;
  /*height: 50px;*/
  min-height: 50px;
  font-weight: bolder;
  font-size: 28px;
  margin-top: 80px;
  margin-bottom: 20px;
  border-bottom: 3px solid #ff4c10;
}

.about_frame {
  display: flex;
  min-height: 42px;
}

.about_sloan {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin: 0 10px 10px 10px;
  border-radius: 7px;
  color: white;
  transition: background-color 0.2s, box-shadow 0.2s;
  background-color: rgba(255, 76, 16, 0.9);
  box-shadow: 0 0 10px #cccccc;
}

.about_sloan:hover {
  cursor: pointer;
}

.scroll_word {
  height: 100%;
  flex: 1;
  min-width: 300px;
  /*background-color: #3b8070;*/
  padding: 130px 20px;
}

.scroll_frame {
  flex: 1;
  padding: 100px 15px 100px 0;
}

.scroll_box {
  position: sticky;
  top: 140px;
  height: 70vh;
  width: 105.7vh;
  border-radius: 15px;
  transition: background 0.5s;
  box-shadow: 0 0 20px #c6c6c6;
  background-color: white;
  overflow: hidden;
}

.scroll_box > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: url;
}


.connect {
  display: flex;
  justify-content: space-between;
  height: 190px;
  width: 100%;
  max-width: 400px;
  color: white;
  /*background-color: #3b8070;*/
}

.connect_logo {
  display: flex;
  align-items: center;
  width: 250px;
  padding: 0 0 30px 0;
  flex-wrap: wrap;
  overflow: hidden;
}

.connect_logo img {
  transform: translateX(-25px) translateY(12px);
  height: 46%;
}

.connect_frame {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.connect_frame h3 {
  margin-bottom: 14px;
}

.connect_frame p {
  line-height: 24px;
  transition: color 0.2s;
}

.connect_frame p:hover {
  cursor: pointer;
  color: #ff4c10;
}

.content_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  border-radius: 50px;
  margin-right: 25px;
  background-color: white;
  transition: transform 0.2s, background-color 0.2s;
}

.content_icon:hover {
  cursor: pointer;
  background-color: #ff4c10;
  transform: translateY(-2px);
}

.content_icon:hover i {
  color: white;
}

.content_icon:active {
  transform: scale(0.85);
}

.content_icon i {
  font-size: 24px;
  color: #ff4c10;
  transition: color 0.2s;
}

.copy_at {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  color: white;
  border-top: 2px solid white;
}

.copy_at a:first-child:after {
  content: '';
  margin: 0 12px;
  border-right: 1px solid white;
}


@keyframes arrow {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.3;
    transform: translateY(-14px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 1400px) {
  .head_bar_frame {
    width: 1200px;
    min-width: 0;
  }
}
</style>
