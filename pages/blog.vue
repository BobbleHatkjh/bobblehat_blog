<template>
  <div class="blog_bac">

    <div class="blog_side_bar" :style="!side_show && 'width: 0'">
      <div>
        bobblehat
      </div>
    </div>

    <div class="blog_body">

      <div class="blog_header">
        <i class="iconfont icon-fold" @click="side_show = !side_show" :style="!side_show && 'transform: rotate(180deg)'"/>
        <p>绒球帽的博客</p>
      </div>

      <div class="blog_content">

        <!-- 左边导航栏 -->
        <div class="template_signal" style="justify-content: flex-start">
          <div class="signal">
            <i class="iconfont icon-down" style="transform: rotate(90deg) translateY(1px)"/>
          </div>
        </div>

        <!-- 内容 -->
        <div class="blog_template">
          <div v-html="hello"></div>
        </div>

        <!-- 右边导航栏 -->
        <div class="template_signal" style="justify-content: flex-end">
          <div class="signal">
            <i class="iconfont icon-down" style="transform: rotate(-90deg) translateY(1px)"/>
          </div>
        </div>

<!--        <h2>博客 迁移中...</h2>-->
<!--        <Button @click="jumpCSDN" :scroll="true" icon="go">去看原博客</Button>-->
      </div>

    </div>


  </div>
</template>

<script>
import hello from './blog/demo.md'
export default {
  components: {
    Button: () => import(/* webpackChunkName: "button_animate" */ '~/components/Button')
  },
  data(){
    return {
      side_show: true,  // 侧边栏打开状态 true为打开
      model: '# Hello World!'
    }
  },
  computed: {
    hello() {
      return hello
    }
  },

  methods: {
    jumpCSDN() {
      window.open('https://blog.csdn.net/BobbleHat')
    },
    /** 页面宽度发生变化时 */
    onResize(){
      window.innerWidth <= 1200 ? (this.side_show = false) : (this.side_show = true)
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize)
  }
}
</script>

<style>
.blog_bac {
  display: flex;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  background-color: white;
}

.blog_side_bar {
  display: flex;
  flex-shrink: 0;
  height: calc(100% - 70px);
  width: 280px;
  /*box-shadow: 4px 0 4px -4px #dadada;*/
  border-right: 1px solid #dddddd;
  transition: width 0.5s;
  overflow: hidden;
}

.blog_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  flex-shrink: 0;
  height: 100%;
}

.blog_header {
  display: flex;
  height: 66px;
  align-items: center;
  width: calc(100% - 60px);
  font-size: 18px;
  color: #5c5c5c;
  /*box-shadow: 0 4px 4px -4px #dadada;*/
  border-bottom: 1px solid #dddddd;
}
.blog_header i{
  font-size: 22px;
  margin-right: 18px;
  transition: color 0.3s, transform 0.5s;
}
.blog_header i:hover{
  cursor: pointer;
  color: #ff4c10;
}
.blog_header i:active{
  transform: scale(0.8);
}


.blog_content {
  display: flex;
  justify-content: center;
  padding: 60px 0;
  width: 100%;
  flex: 1;
  overflow: scroll;
}

.template_signal{
  position: sticky;
  display: flex;
  top: 0;
  align-items: center;
  height: 100%;
  width: 70px;
}
.signal{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  border-radius: 100px;
  background-color: #f1f1f1;
  transition: color 0.3s, background-color 0.3s, transform 0.3s;
  color: #999999;
}
.signal:hover{
  cursor: pointer;
  background-color: #ff4c10;
  color: white;
}
.signal:active{
  transform: scale(0.8);
}
.signal i{
  font-size: 22px;
}
.blog_template{
  /*background-color: #ff4c10;*/
  height: auto;
  /*width: calc();*/
  width: 760px;
  /*overflow-x: scroll;*/
}


</style>