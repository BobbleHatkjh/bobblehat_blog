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

      <!-- 介绍 -->
      <ContentFrame background="white" height="500px" extra_css="color: #424242;flex-direction: column; justify-content: flex-start; align-items: center;">
        <div class="about_me">
          关于我
        </div>
        <div class="about_frame">
          <div class="about_sloan">cp粉</div>
          <div class="about_sloan">财布</div>
          <div class="about_sloan">宅</div>
          <div class="about_sloan">自闭</div>
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
          项目经历
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
              :style="`opacity: ${scrollCalculate('opacity', 0)}; transform: translateX(${-scrollCalculate('translateY', 0)}px) translateY(${-scrollCalculate('translateY', 0)}px`"
          >
            <i>Vue + iView</i> <i class="iconfont icon-github"/><br/>
            推Vtuber的时候结识了一些官组的成员，站长 静谷 发起了该非盈利开源项目，意在收录Vtuber演唱的歌曲，
            团队人数130+，包含翻译，运营，前后端，运维甚至法务，并逐步扩展到统计V的生涯信息以及会社的近况，友站biliOB和Vtbs.moe提供了数据支持
          </Context>

          <Context
              title="B-Library"
              button="想去试试"
              icon="go"
              @open="jumpRoute"
              :style="`opacity: ${scrollCalculate('opacity', 1)}; transform: translateX(${scrollCalculate('translateY', 1)}px) translateY(${-scrollCalculate('translateY', 1)}px`"
          >
            <i>Vue</i> <i class="iconfont icon-github"/><i class="iconfont icon-npm"/><br/>
            总结了在实习过程参与开发的项目经验，针对中小型企业的官网类网站快速架设，制作了「b-library」功能组件库，
            库包含如 导航栏，侧边栏，页脚，全球化，主题定制 等常用数据驱动的功能组件，开箱即用，学习成本低
          </Context>

          <Context
              title="1站团"
              button="微信搜索"
              icon="go"
              :style="`opacity: ${scrollCalculate('opacity', 2)}; transform: translateX(${-scrollCalculate('translateY', 2)}px) translateY(${-scrollCalculate('translateY', 2)}px`"
          >
            <i>React + taro</i><br/>
            参与开发了「1站团」新零售微信小程序，秉着”生活何必东奔西跑”的概念，将人们日常的生活必需品，包含15大品类，上千种商品直达社区，极速送达用户手中，打造社区团购“新生活”
          </Context>

          <Context
              title="GoBang"
              button="想去玩玩"
              icon="go"
              :style="`opacity: ${scrollCalculate('opacity', 3)}; transform: translateX(${scrollCalculate('translateY', 3)}px) translateY(${-scrollCalculate('translateY', 3)}px`"
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
              :style="`opacity: ${scrollCalculate('opacity', 4)}; transform: translateX(${-scrollCalculate('translateY', 4)}px) translateY(${-scrollCalculate('translateY', 4)}px`"
          >
            <i>React + AntDPro</i><br/>
            这里是第5个例子On-the-fly error detection and suggestions for fixes, quick and safe refactorings with one-step
            undo, intelligent code completion, dead code detection, and documentation hints help all
          </Context>

        </div>

        <!-- sticky 图片-->
        <div class="scroll_frame">
          <div ref="sticky" class="scroll_box" />
        </div>
      </ContentFrame>

      <!-- 博客 -->
      <ContentFrame
          background="white"
          height="460px"
          extra_css="flex-direction: column; justify-content: flex-start; align-items: center;">
        <div class="about_me" style="margin-top: 0">
          最新博客
        </div>
        <Receive :data="receive" :column="3"/>
        <Button @click="jumpRoute('blog')" :scroll="true" icon="go">
          想去看看
        </Button>
      </ContentFrame>

      <ContentFrame background="#dddddd">
        123
      </ContentFrame>

      <ContentFrame height="260px" extra_css="flex-direction: column; justify-content: flex-start; align-items: center;">
        <div class="connect">
          <Button @click="jumpRoute('email')">邮箱</Button>
        </div>
        <div class="copy_at">
          @ 2020 绒球帽 &nbsp;&nbsp;&nbsp;&nbsp; 津ICP备2020008428号
        </div>
      </ContentFrame>

    </div>

  </div>
</template>

<script>
import img_gobang from '../assets/img/gobang.webp'
import img_vtuber from '../assets/img/vtbmusic.webp'
import img_npm from '../assets/img/b_library.webp'
import img_1zhan from '../assets/img/1zhan.webp'
import img_tiangong from '../assets/img/tiangong.webp'
import Message from "~/components/message/message";

export default {
  components: {
    Context: () => import(/* webpackChunkName: "receive" */ '~/components/Context'),
    Receive: () => import(/* webpackChunkName: "receive" */ '~/components/Receive'),
    ContentFrame: () => import(/* webpackChunkName: "content_frame" */ '~/components/ContentFrame'),
    Button: () => import(/* webpackChunkName: "button_animate" */ '~/components/Button')
  },
  data() {
    return {
      scroll_now: 0,
      full_height: 0,
      full_width: 0,
      banner: [
        img_vtuber,
        img_npm,
        img_1zhan,
        img_gobang,
        img_tiangong
      ],
      receive: [
        {
          title: '标题1',
          img: img_vtuber
        },
        {
          title: '标题2',
          img: img_tiangong
        },
        {
          title: '标题3',
          img: img_vtuber
        }

      ]
    }
  },
  methods: {
    onScroll() {
      // console.log(this.$refs.content.scrollTop)
      this.scroll_now = this.$refs.content.scrollTop;
      if(((this.$refs.content.scrollTop - 500) / this.full_height - 1.5)/0.7 + 1 < 5){
        this.$refs.sticky.style.background = 'url(' + this.banner[this.stickyCalculate(this.$refs.content.scrollTop)] + ') no-repeat center center/cover'
      }
    },
    scrollCalculate(way, num) {
      switch (way){
        case 'opacity':
          return this.scroll_now < ((1 + 0.7 * num) * this.full_height + 530) ? (this.scroll_now - (0.8 + 0.7 * num) * this.full_height - 390)/(100 + 0.2 * this.full_height) : 1;
        case 'translateY':
          return this.scroll_now < ((1 + 0.7 * num) * this.full_height + 530) ? ((1 + 0.7 * num) * this.full_height - this.scroll_now + 530) : 0
      }
    },
    stickyCalculate(scroll_now_init){
      return (((scroll_now_init - 500) / this.full_height - 1.5)/0.7 + 1) <= 0 ? 0 : Math.floor(((scroll_now_init - 500) / this.full_height - 1.5)/0.7) + 1
    },
    jumpRoute(to) {
      switch (to){
        case 'blog':
          this.$router.push('blog');
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
        default:
          Message('前面的区域，以后再来探索吧');
          break;
      }

    }
  },
  mounted() {
    this.full_height = window.innerHeight;
    this.full_width = window.innerWidth;
    window.addEventListener("scroll", this.onScroll, true);
    // console.log('-----4-----', window.innerHeight)
  },
  created() {
    console.log('%c\n┌┐ ┌─┐┌┐ ┌┐ ┬  ┌─┐┬ ┬┌─┐┌┬┐\n' +
        '├┴┐│ │├┴┐├┴┐│  ├┤ ├─┤├─┤ │ \n' +
        '└─┘└─┘└─┘└─┘┴─┘└─┘┴ ┴┴ ┴ ┴ \n个人主页',
        'color: #ff4c10'
    )
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll, true)
  }
}
</script>

<style>
html{
  background-color: #8a8a8a;
}
.container {
  min-height: 100vh;
  /*min-width: 1024px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  /*text-align: center;*/
  transform: translate3d(0, 0, 0);
  background: url('~assets/img/forest_animate_g.webp') no-repeat center center/cover fixed;
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
  background: url('~assets/img/logo_white.png') no-repeat left/auto 100%;
  background-size: auto 100%;
}

.head_logo_down {
  background: url('~assets/img/logo_orange.png') no-repeat left/auto 100%;
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

.about_me{
  display: flex;
  align-items: center;
  height: 50px;
  font-weight: bolder;
  font-size: 28px;
  margin-top: 80px;
  margin-bottom: 20px;
  border-bottom: 3px solid #ff4c10;
}
.about_frame{
  display: flex;
}
.about_sloan{
  padding: 5px 10px;
  margin: 0 10px 10px 10px;
  border-radius: 6px;
  color: white;
  transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
  background-color: rgba(255,76,16,0.75);
}
.about_sloan:hover{
  cursor: pointer;
  box-shadow: 0 0 10px #cccccc;
  transform: translateY(-3px);
  background-color: rgba(255,76,16,0.8);
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
  /*overflow: hidden;*/
}

.scroll_box > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: url;
}


.connect{
  display: flex;
  justify-content: center;
  height: 180px;
  width: 100%;
  color: white;
  background-color: #3b8070;
}

.copy_at{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  /*background-color: #3b8070;*/
  color: white;
  border-top: 2px solid #ff4c10;
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
