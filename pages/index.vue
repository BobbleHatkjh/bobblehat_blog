<template>
  <div class="container" @wheel="onScroll($el.children[1].scrollTop)">

    <!-- HeadBar -->
    <div class="head_bar" :class="sticky_on && 'head_bar_down'">
      <div class="head_bar_frame">
        <div class="head_logo" :class="sticky_on && 'head_logo_down'"/>
        <div class="head_route" v-if="full_width >= 520">
          <Button>首页</Button>
          <Button>介绍</Button>
          <Button>作品</Button>
        </div>
        <div class="head_route_m" v-else @click="sidebar = !sidebar">
          <i class="iconfont icon-more"/>
        </div>
      </div>
    </div>

    <!-- 移动端侧边栏 -->
    <SideBar v-if="sidebar" @back="sidebar = !sidebar">
      123
    </SideBar>


    <!-- 主体内容 -->
    <div class="content">

      <!-- 第一页 -->
      <ContentFrame :first="true" extra_css="flex-direction: column; justify-content: flex-end">
        <div>
          <div class="slogan">
            <Slogan>你的气质里</Slogan>
            <Slogan>藏着你走过的路</Slogan>
            <Slogan>读过的书和爱过的人</Slogan>
          </div>
          <div class="arrow">
            <i class="iconfont icon-down"/>
          </div>
        </div>
      </ContentFrame>

      <ContentFrame background="white" height="2400px">
        <div class="scroll_word">

          <div class="scroll_content">
            <div class="scroll_title">VTB Music</div>
            <div>
              123213213313
            </div>
          </div>

          <div class="scroll_content">
            <div class="scroll_title">B-Library</div>
            <div>
              12321sadasc13
            </div>
          </div>

          <div class="scroll_content">
            <div class="scroll_title">123</div>
            <div>
              12321sadasc13
            </div>
          </div>

        </div>
        <div class="scroll_frame">
          <div class="scroll_box">
            <img src="~assets/img/forest_animate_g.webp" alt/>
          </div>
        </div>
      </ContentFrame>

      <ContentFrame background="#eaeaea" extra_css="flex-direction: column; justify-content: flex-start; align-items: center;">
        <div class="content_title">
          作品
        </div>
        <Receive :data="receive" :column="full_width >= 520 ? 3 : 1"/>
      </ContentFrame>

      <ContentFrame background="#ff4c10">
        123
      </ContentFrame>

      <ContentFrame height="200px">
        备案XXXX
      </ContentFrame>

    </div>

  </div>
</template>

<script>
import img_t from '../assets/img/forest_animate_g.webp'

export default {
  components: {
    Receive: () => import(/* webpackChunkName: "receive" */ '~/components/Receive'),
    ContentFrame: () => import(/* webpackChunkName: "content_frame" */ '~/components/ContentFrame'),
    SideBar: () => import(/* webpackChunkName: "sidebar" */ '~/components/SideBar'),
    Button: () => import(/* webpackChunkName: "button_animate" */ '~/components/Button')
  },
  data() {
    return {
      sticky_on: false,
      full_height: 0,
      full_width: 0,
      sidebar: false,
      receive: [

        {
          title: '标题1',
          img: img_t
        },
        {
          title: '标题2',
          img: img_t
        },
        {
          title: '标题3',
          img: img_t
        },
        {
          title: '标题4',
          img: img_t
        },
        {
          title: '标题5',
          img: img_t
        }


      ]
    }
  },
  methods: {
    onScroll(element) {
      this.sticky_on = element > this.full_height - 50
    }
  },
  mounted() {
    this.full_height = window.innerHeight;
    this.full_width = window.innerWidth;
    // console.log('----------', window.innerWidth)
  },
  created() {

  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #c2c2c2;
  background: url('~assets/img/forest_animate_g.webp') no-repeat center center/cover fixed;
}

.head_bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  transition: background-color 0.5s, color 0.5s;
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

.head_route_m {
  display: flex;
  height: 50px;
  width: 50px;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 400px;
}

.head_route_m > i {
  font-size: 24px;
}


.content {
  height: 100vh;
  width: 100%;
  overflow: scroll;
}

.content_title {
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100%;
  background-color: #df1a8a;
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

.scroll_word {
  height: 100%;
  width: 340px;
  padding: 100px 20px;
}
.scroll_content{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 550px;
  width: 100%;
  padding-top: 70px;
  /*background-color: #ff4c10;*/
  color: #424242;
}
.scroll_title{
  height: 45px;
  font-size: 32px;
  font-weight: bolder;
  margin-bottom: 15px;
  border-bottom: 3px solid #ff4c10;
}

.scroll_frame {
  display: flex;
  justify-content: flex-end;
  position: relative;
  flex: 1;
  padding: 100px 0;
}

.scroll_box {
  position: sticky;
  top: 140px;
  height: 70vh;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 20px #c6c6c6;
  overflow: hidden;
}
.scroll_box > img{
  height: 100%;
  width: 100%;
  object-fit: cover;
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
