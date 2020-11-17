<template>
  <div class="blog_bac">

    <div class="blog_side_bar" :style="!side_show && 'width: 0'">
      <div class="blog_side_content">
        <div class="blog_logo">
          <img src="../assets/img/logo_orange.png" alt=""/>
        </div>
        <div class="side_frame">
          <Button class="side_button">Virtual Dom</Button>
          <Button class="side_button">Event Loop</Button>
          <Button class="side_button">前端服务端渲染</Button>
          <Button class="side_button">antDPro动态路由</Button>
<!--          <Button class="side_button">细谈JS的存储方式（堆内存，栈内存）与深拷贝，浅拷贝</Button>-->

        </div>

      </div>

    </div>

    <div class="blog_body">

      <!-- header -->
      <div class="blog_header">
        <i class="iconfont icon-fold" @click="side_show = !side_show" :style="!side_show && 'transform: rotate(180deg)'"/>
        <p>绒球帽的博客</p>
      </div>

      <!-- 正文 -->
      <div class="blog_content">

        <!-- 左导航栏 -->
        <div class="template_signal" style="justify-content: flex-start">
          <div class="signal">
            <i class="iconfont icon-down" style="transform: rotate(90deg) translateY(1px)"/>
          </div>
        </div>

        <!-- 内容 -->
        <div class="blog_template">
          <div class="blog_title">
            <p>前端服务端渲染</p>
            <span>绒球帽 2020-11-2</span>
          </div>
          <div class="blog_banner">
            <Img :src="forest"/>
          </div>

          <div style="height: auto;margin-bottom: 70px" v-html="hello"></div>
        </div>

        <!-- 右导航栏 -->
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
import forest from '../assets/img/forest_animate_g.webp'
import hello from './blog/demo.md'
export default {
  components: {
    Img: () => import(/* webpackChunkName: "img_animate" */ '~/components/Img'),
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
    },
    forest() {
      return forest
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
  align-items: center;
  height: 100%;
  width: 280px;
  transition: width 0.5s;
  overflow: hidden;
}
.blog_side_content{
  height: calc(100% - 70px);
  width: 100%;
  border-right: 1px solid #dddddd;
}
.blog_logo{
  display: flex;
  align-items: center;
  height: 75px;
  width: 100%;
  transform: translateY(-25px);
  /*border-bottom: 1px solid #dddddd;*/
  /*background-color: #ff4c10;*/
}
.blog_logo img{
  height: 60px;
  margin-left: 26px;
}
.side_frame{
  height: auto;
  min-width: 224px;
  width: 224px;
  margin-left: 28px;
  /*margin: auto;*/
}
.side_button{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  justify-content: space-between;
  height: 50px;
  /*margin-bottom: 10px !important;*/
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
  /*padding: 70px 0;*/
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
  height: 38px;
  width: 38px;
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
  /*height: fit-content;*/
  height: auto;
  width: 760px;
  margin: 56px 0;
  color: #424242;
  /*background-color: #ff4c10;*/
  /*overflow-x: scroll;*/
}
.blog_title{
  width: 100%;
  height: auto;
  margin-bottom: 26px;
}
.blog_title p{
  font-size: 28px;
  font-weight: bolder;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.blog_title span{
  color: #7b7b7b;
}
.blog_banner{
  height: 366px;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 32px;
}


</style>