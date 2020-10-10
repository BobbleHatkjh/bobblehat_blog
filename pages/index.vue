<template>
  <div class="container" @wheel="onScroll($el.children[1].scrollTop)">

    <!-- HeadBar -->
    <div class="head_bar" :class="sticky_on && 'head_bar_down'">
      <div class="head_bar_frame">
        <div class="head_logo" :class="sticky_on && 'head_logo_down'"/>

        <div class="head_route">
          <div class="head_button_frame">首页</div>
          <div class="head_button_frame">介绍</div>
          <div class="head_button_frame">作品</div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content_frame">
        <div class="content_context">

          <div class="slogan">
            <h1>如今你的气质里</h1>
            <h1>藏着你走过的路</h1>
            <h1>读过的书和爱过的人</h1>
          </div>
        </div>
      </div>
      <div class="content_frame" style="background-color: white">
        123gdf
      </div>
      <div class="content_frame" style="background-color: blue">
        12323
      </div>
    </div>

  </div>
</template>

<script>
export default {
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
  background: url('../assets/forest_animate_g.webp') no-repeat center center/cover fixed;
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

.head_bar_frame{
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 1200px;
  /*background-color: #10ff28;*/
  /*background-color: #ff4c10;*/
}
.head_logo{
  height: 100%;
  width: 230px;
  transition: background 0.5s;
  background: url('../assets/logo_white.png') no-repeat left/auto 100%;
  background-size: auto 100%;
}
.head_logo_down{
  background: url('../assets/logo_orange.png') no-repeat left/auto 100%;
}
.head_route{
  display: flex;
  align-items: center;
  height: 100%;
}
.head_button_frame{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 0 5px;
  padding: 0 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  background-size: 0 100%;
  transition: background-color 0.2s;
}
.head_button_frame:hover{
  cursor: pointer;
  color: white;
  background-color: #ff4c10;
}




.content {
  height: 100vh;
  overflow: scroll;
}

.content_frame {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.content_context{
  display: flex;
  height: 100%;
  width: 1200px;
  /*background-color: #3b8070;*/
}
.slogan{
  float: left;
  margin: auto auto 80px 0;
  color: white;
  /*background-color: red;*/
}

</style>
