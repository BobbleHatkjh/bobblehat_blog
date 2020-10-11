<template>
  <div class="container" @wheel="onScroll($el.children[1].scrollTop)">

    <!-- HeadBar -->
    <div class="head_bar" :class="sticky_on && 'head_bar_down'">
      <div class="head_bar_frame">
        <div class="head_logo" :class="sticky_on && 'head_logo_down'"/>

        <div class="head_route">
          <Button>首页</Button>
          <Button>介绍</Button>
          <Button>作品</Button>
        </div>
      </div>
    </div>

    <div class="content">

      <!-- 第一页 -->
      <div class="content_frame">
        <div class="content_context">
          <div style="display: flex;justify-content: center;align-items: center;flex: 1">
            <i class="iconfont icon-more" />
          </div>
          <div>
            <div class="slogan">
              <Slogan>你的气质里</Slogan>
              <Slogan>藏着你走过的路</Slogan>
              <Slogan>读过的书和爱过的人</Slogan>
            </div>
            <div class="arrow">
              <i class="iconfont icon-down" />
            </div>
          </div>
        </div>
      </div>

      <div class="content_frame" style="background-color: white">
        123gdf
      </div>
      <div class="content_frame" style="background-color: #ff4c10">
        12323
      </div>
    </div>

  </div>
</template>

<script>
import Button from "~/components/Button";
export default {
  components: {Button},
  data() {
    return {
      sticky_on: false,
      full_height: 0
    }
  },
  methods: {
    onScroll(element) {
      this.sticky_on = element > this.full_height - 50
    }
  },
  mounted() {
    this.full_height = window.innerHeight;
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
  background: url('~assets/forest_animate_g.webp') no-repeat center center/cover fixed;
  /*background: url('../assets/forest_animate.jpg') no-repeat center center/cover fixed;*/
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
  z-index: 99;
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
  height: 100%;
  width: 1200px;
  /*background-color: #10ff28;*/
  /*background-color: #ff4c10;*/
}

.head_logo {
  height: 100%;
  width: 230px;
  transition: background 0.5s;
  background: url('~assets/logo_white.png') no-repeat left/auto 100%;
  background-size: auto 100%;
}

.head_logo_down {
  background: url('~assets/logo_orange.png') no-repeat left/auto 100%;
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
}

.content_frame {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.content_context {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 1200px;
  /*background-color: #3b8070;*/
}

.slogan {
  margin-bottom: 40px;
  color: white;
}

.arrow {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-bottom: 0;
  color: white;
}
.arrow > i{
  font-size: 32px;
}

</style>
