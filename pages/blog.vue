<template>
  <div class="blog_bac">

    <!-- 左侧sidebar -->
    <div class="blog_side_bar" :style="!side_show && 'width: 0'">
      <div class="blog_side_content">

        <!-- 左上角logo -->
        <div class="blog_logo">
          <img src="https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/logo_orange.png" alt=""/>
        </div>

        <!-- side router -->
        <div class="side_div">
          <div
              class="side_frame"
              v-for="(route, route_index) in side_router"
              :key="route_index"
              :style="route.state && `height:${ 64 + 50 * route.children.length }px`"
              :class="route.state && 'side_frame_open'"
          >
            <div class="side_frame_title" @click="route.state = !route.state">
              <p :style="blog_count[0] === route_index && 'color: rgb(255,76,16)'">{{ route.name }}</p>
              <i class="iconfont icon-down" :style="!route.state && 'transform: rotate(-90deg); color: white'"/>
            </div>
            <div v-for="(content, content_index) in route.children" :key="content_index">
              <Button
                  icon="go white"
                  :style="content.id === open_blog.id && 'color: rgb(255,76,16)'"
                  class="side_button"
                  @click="selectBlog(content, route_index, content_index)"
              >
                {{ content.name }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧header + 正文内容 -->
    <div class="blog_body">

      <!-- header -->
      <div class="blog_header">
        <i class="iconfont icon-fold" @click="side_show = !side_show" :style="!side_show && 'transform: rotate(180deg)'"/>
        <p>绒球帽的博客</p>
      </div>

      <!-- 正文 -->
      <div ref="blog_content" class="blog_content">

        <!-- 左导航栏 -->
        <div class="template_signal" style="align-items: flex-start">
          <div class="signal">
            <i class="iconfont icon-down" style="transform: rotate(90deg) translateY(1px)"/>
          </div>
        </div>

        <!-- 内容 -->
        <div class="blog_template">
          <div class="blog_title">
            <p>{{ open_blog.title }}</p>
            <span>绒球帽 {{ open_blog.time }}</span>
          </div>
          <!-- 760 x 366-->
          <Img height="366px" class="blog_banner" :src="open_blog.banner"/>
          <div style="height: auto;margin-bottom: 70px;font-size: 18px" v-html="open_blog.content || helo" />
          <div class="blog_comment">
            评论
          </div>
        </div>

        <!-- 右导航栏 -->
        <div class="template_signal" style="align-items: flex-end">
          <div class="signal">
            <i class="iconfont icon-comment" style="font-weight: bold; transform: translateY(1px)"/>
          </div>
          <div class="signal">
            <i class="iconfont icon-down" style="transform: rotate(-90deg) translateY(1px)"/>
          </div>
          <div class="signal" @click="backTop">
            <i class="iconfont icon-top" style="font-size: 26px"/>
          </div>
        </div>

<!--        <h2>博客 迁移中...</h2>-->
<!--        <Button @click="jumpCSDN" :scroll="true" icon="go">去看原博客</Button>-->
      </div>

    </div>


  </div>
</template>

<script>
import route_test from '../assets/js/router.js'
import helo from './blog/demo.md'
export default {
  components: {
    Img: () => import(/* webpackChunkName: "img_animate" */ '~/components/Img'),
    Button: () => import(/* webpackChunkName: "button_animate" */ '~/components/Button')
  },
  data(){
    return {
      side_show: true,    // 侧边栏打开状态 true为打开
      side_router: [],    // 侧边栏解析好的router
      open_blog: {},      // 现在打开的博客页
      blog_count: [],     // 现在打开博客页的下标
    }
  },
  computed: {
    helo() {
      return helo
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
    /** 点击了博客 => 展示 */
    selectBlog(val, row, col){
      if(val.id !== this.open_blog.id){
        this.open_blog = val;
        this.blog_count = [row, col]
      }
    },
    /** 回到顶部 */
    backTop(){
      // console.log(this.$refs.blog_content.scrollTop)
      this.$refs.blog_content.scrollTop = 0
    },
    /** 解析路由 */
    routeInit(){
      const router = route_test;
      // console.log(this.$route.params.row , 1);
      let pre_route = [0, 0];    // 进入时打开的路由
      let pre_data = [];         // 进入时打开的博客

      this.side_router = router.map((item, index) => {
        return {
          state: false,
          name: item.name,
          children: item.children.map((child_item, child_index) => {
            if(this.$route.params.id === child_item.id){
              pre_route = [index, child_index];
              pre_data = child_item
            }
            return {
              id: item.id || 10 * index + child_index,
              name: child_item.name || child_item.title,
              title: child_item.title,
              time: child_item.time || '时间被吞噬掉惹',
              banner: child_item.banner,
              content: child_item.content
            }
          })
        }
      });
      this.open_blog = pre_data;
      this.blog_count = pre_route;
      this.side_router[pre_route[0]].state = true
    }
  },
  mounted() {
    this.onResize();
    this.routeInit();
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize)
  }
}
</script>

<style scoped>
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
  height: 60px;
  width: 100%;
  transform: translateY(-30px);
  /*border-bottom: 1px solid #dddddd;*/
  /*background-color: #10ff20;*/
}
.blog_logo img{
  height: 60px;
  margin-left: 26px;
}
.side_div{
  height: calc(100% - 75px);
  width: 100%;
  min-width: 100%;
  overflow: auto;
  overflow-x: hidden;
}
.side_frame{
  flex-shrink: 0;
  height: 56px;
  width: 224px;
  padding-left: 20px;
  margin-left: 28px;
  overflow: hidden;
  transition: height 0.3s, padding-left 0.3s;
}
.side_frame_open:first-child{
  box-shadow:0 6px 6px -6px #cccccc,
  0 -6px 6px -6px white;
}
.side_frame_open:last-child{
  box-shadow:0 6px 6px -6px white,
  0 -6px 6px -6px #cccccc;
}
.side_frame_open{
  padding-left: 0;
  box-shadow:0 6px 6px -6px #cccccc,
  0 -6px 6px -6px #cccccc;
}
.side_frame_title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  /*font-size: 16px;*/
  /*transition: color 0.3s;*/
}
.side_frame_title i{
  color: #ff4c10;
  transition: transform 0.3s;
}
.side_frame_title:hover i{
  color: #ff4c10 !important;
}
.side_frame_title:hover{
  cursor: pointer;
  color: #ff4c10;
  font-weight: bolder;
  /*font-size: 18px;*/
  /*background-color: #ff4c10;*/
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
  overflow: auto;
}

.template_signal{
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 0;
  justify-content: center;
  height: 100%;
  width: 70px;
}
.signal{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin: 14px 0;
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
  margin: 62px 0;
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
  display: flex;
  align-items: center;
  font-size: 29px;
  height: 40px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.blog_title span{
  color: #7b7b7b;
}
.blog_banner{
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 32px;
  background-color: #dddddd;
}
.blog_comment{
  height: 80px;
  width: 100%;
  border: 1px solid #333;
  border-radius: 15px;
  margin-bottom: 70px;
}




/*设置整个滚动条宽高*/
::-webkit-scrollbar {
  position: fixed;
  z-index: 99;
  width: 6px;
  height: 100%;margin-right: 30px;
  background: transparent;

}
/*设置滑块*/
::-webkit-scrollbar-thumb {
  width: 6px;
  background-color: rgba(255,76,16,0.9);
  border-radius: 20px;
}
::-webkit-scrollbar-thumb:hover{
  background-color: rgb(255,76,16);
  cursor: pointer;
}
/*设置轨道*/
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255,0);
  opacity: 0;
}
::-webkit-scrollbar-track:hover{
  opacity: 1;
  /*background-color: white;*/
}

</style>