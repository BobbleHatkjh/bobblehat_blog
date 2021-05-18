<template>
  <div class="blog_bac">

    <!-- 左侧sidebar -->
    <div class="blog_side_bar" :style="!side_show && 'width: 0'">
      <div class="blog_side_content">

        <!-- 左上角logo -->
        <div class="blog_logo" :style="!side_show && 'transform: scale(0) translate(-80%, -80%);'">

<!--          <img @click="$router.push('/')" src="https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/logo_orange.png" alt=""/>-->

          <div class="blog_info">
            <div class="my_photo">
              <Img :src="kjh" style="border-radius: 100px;overflow: hidden"/>
            </div>
            <div class="my_info">
              <p style="font-size: 19px;color: #35495e">康嘉禾</p>
              <p style="font-size: 12px;margin-top: 8px">天津工业大学学生，京东科技Iot事业部前端实习生，b-library组件库创始人，GRIS金融系统核心研发工程师</p>
            </div>
          </div>

        </div>

        <!-- side router -->
        <div class="side_div" :style="!side_show && 'transform: scale(0) translate(-80%,-120%);'">
          <div
              class="side_frame"
              v-for="(route, route_index) in side_router"
              :key="route_index"
              :style="[route.state && { height: `${ 64 + 50 * route.children.length }px`}, !side_show && { transform: 'translateX(-100%)' }, {transition: `height 0.3s, padding-left 0.3s, transform 0.5s ${side_show ? route_index * 0.15 : 0}s`}]"
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
                  @click="content.id !== open_blog.id && $router.push({ query: {id: `${content.id}` }})"
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
        <i class="iconfont icon-fold" @click="side_show = !side_show"
           :style="!side_show && 'transform: rotate(180deg);margin-left: 12px'"/>
        <Button @click="jumpRoute('home')">首页</Button>
<!--        <p>绒球帽的博客</p>-->
      </div>

      <!-- 正文 -->
      <div ref="blog_content" class="blog_content">

        <!-- 左边栏 -->
        <div class="template_signal" :style="!side_show && 'width: 90px'" style="align-items: flex-start">
          <div class="signal" @click="warnFault">
            <i class="iconfont icon-down" style="transform: rotate(90deg) translateY(1px)"/>
          </div>
        </div>

        <!-- 内容 -->
        <div class="blog_template">
          <div class="blog_title">
            <p>{{ open_blog.title }}</p>
            <span>绒球帽 &nbsp; {{ open_blog.time }}</span>
          </div>
          <!-- 760 x 366-->
          <Img height="366px" class="blog_banner" :src="open_blog.banner"/>
<!--          <div style="height: auto;margin-bottom: 70px;font-size: 18px;overflow-x: hidden"-->
<!--               v-html="open_blog.content || helo"/>-->

          <no-ssr>
            <mavon-editor
                style="box-shadow: none; padding: 0;margin-bottom: 70px;"
                :subfield="false"
                :default-open="'preview'"
                :toolbars-flag="false"
                :editable="false"
                :scroll-style="false"
                :ishljs="true"
                v-model="mavon_demo"
            />
          </no-ssr>

          <div class="blog_comment">
            <div class="blog_comment_content">
              <label>
                <textarea maxlength="233" placeholder="写点什么呀～" style="resize: none;width: 100%;height: 100%;outline: none;border: none" />
              </label>
            </div>
            <div class="comment_tool_bar">
              <div class="tool_bar_imo">
                <div class="_imo">@</div>
                <div class="_imo">#</div>
                <div class="_imo">😊</div>
              </div>
              <div class="comment_push">
                发送
              </div>
            </div>
          </div>
        </div>

        <!-- 右边栏 -->
        <div class="template_signal" :style="!side_show && 'width: 90px'" style="align-items: flex-end">
          <div class="signal" @click="warnFault">
            <i class="iconfont icon-comment" style="font-weight: bold; left: 0;top: 1px"/>
          </div>
          <div class="signal" @click="warnFault">
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
import Message from "~/components/message/message";
import route_test from '../assets/js/router.js'
import kjh from '../assets/kjh.png'

export default {
  components: {
    Img: () => import(/* webpackChunkName: "img_animate" */ '~/components/Img'),
    Button: () => import(/* webpackChunkName: "button_animate" */ '~/components/Button')
  },
  data() {
    return {
      side_show: true,    // 侧边栏打开状态 true为打开
      side_router: [],    // 侧边栏解析好的router
      open_blog: {},      // 现在打开的博客页
      blog_count: [],     // 现在打开博客页的下标
      mavon_demo: '_\'Brick-Library\' is a Vue component library_<br/>\n' +
          '\n' +
          'Do you find it too boring to write repetitive work when writing Vue projects? <br/> Every project has to write headers and footers repeatedly?<br/>\n' +
          '\n' +
          '<!--\n' +
          '\n' +
          '_\'Library\'makes a whole set of functional class \'Vue\' component libraries based on the common functions of programmers, whether small to \'A\' tags, large to automated\'HeadBar\' with\'router\'and dynamic effects, or templates for the entire page,\'Library\' has everything. We hope \'Brick Library\' will bring some convenience to your work._\n' +
          '\n' +
          '<br/>\n' +
          '\n' +
          '-->\n' +
          '\n' +
          'Now Brick-Library is fresh! You don\'t have to repeat many functional components anymore, we makes a whole set of functional class \'Vue\' component libraries based on the common functional of programmers. you can build your entire customized website in the time of putting together a fingertip building block. Download and Import the components you need in the package, simply add them to your Vue project, and the wonderful content will be presented in a moment.\n' +
          '\n' +
          '##  \n' +
          '\n' +
          '<br/>\n' +
          '\n' +
          '\n' +
          '\n' +
          '<!--\n' +
          '\n' +
          '>You can visit the following website to give a rough preview of the old version of \'Library\' (some components are different, but the overall idea is the same).<br/>\n' +
          '><a href="http://123.57.41.38:8080/game_center/#/" target="_blank">Library preview(old)</a>\n' +
          '\n' +
          '<br/>\n' +
          '\n' +
          '-->\n' +
          '\n' +
          '- Components\n' +
          '    - [x] A\n' +
          '    - [x] Account module (In testing)\n' +
          '    - [x] Banner (In testing)\n' +
          '    - [x] Button\n' +
          '    - [x] Dot\n' +
          '    - [x] Footer\n' +
          '    - [x] HeadBar      \n' +
          '    - [x] Inclusion\n' +
          '    - [ ] Login\n' +
          '    - [ ] Language switch\n' +
          '    - [x] Notice\n' +
          '    - [x] PageLabel \n' +
          '    - [ ] Register\n' +
          '    - [ ] Router\n' +
          '    - [x] SideBar\n' +
          '    - [x] Slot\n' +
          '    - [x] TabBar\n' +
          '    - [ ] Tips   \n' +
          '  \n' +
          '<br/>\n' +
          '  \n' +
          '- Global Function\n' +
          '    - [x] CSS Overall Control (In testing)\n' +
          '    - [ ] Parallax Effect \n' +
          '    - [x] Test Mode (In testing)\n' +
          '    - [x] Theme Configuration\n' +
          '    - [ ] iconFont library\n' +
          '\n' +
          '<br/>\n\n' +
          '### introduction of _import_\n' +
          '\n' +
          '>Few components - Recommended ways of import \n \n ```\n' +
          '<template>\n' +
          '    <div>\n' +
          ' \n' +
          '        <Notice :noticeData="myData" />\n' +
          '        \n' +
          '    </div>\n' +
          '</template>\n``` \n \n <br/><p align="center">\n' +
          '    <img width="400" alt="" src="https://raw.githubusercontent.com/BobbleHatkjh/Vue_BuildingBlock/master/pic/100lllogo.png"/>\n' +
          '</p>\n' +
          '\n' +
          '\n' +
          '\n' +
          '<p align="center" style="margin-top: 20px">\n' +
          '    <a href="https://www.npmjs.com/package/b-library" target="_blank"><img src="https://img.shields.io/npm/v/b-library.svg" alt="npm"></a>\n' +
          '    <img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg" alt="Build Status">\n' +
          '    <a href="https://github.com/BobbleHatkjh/VUE-Brick/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/npm/l/b-library.svg" alt="License"></a>\n' +
          '</p> \n' +
          '\n' +
          '<br/>\n' +
          '\n' +
          '<p align="center">\n' +
          '    <a href="https://www.npmjs.com/package/b-library" target="_blank"><img width="140" alt="" src="https://raw.githubusercontent.com/BobbleHatkjh/Vue_BuildingBlock/master/pic/npm.png"/></a> &nbsp;\n' +
          '    <a href="https://github.com/BobbleHatkjh/VUE-Brick" target="_blank"><img width="210" alt="" src="https://raw.githubusercontent.com/BobbleHatkjh/Vue_BuildingBlock/master/pic/githubLogo.png"/></a> \n' +
          '</p> \n \n ```<div>' +
          'test' +
          '</div>```'
    }
  },
  watch:{
    /**
     * 点击路由或返回上级的时候触发的
     * */
    query(newVal, oldVal) {
      for(let i = 0; i < this.side_router.length; i++){
        for(let blog = 0; blog < this.side_router[i].children.length; blog ++){
          if(newVal.id === `${this.side_router[i].children[blog].id}`){
            this.open_blog = this.side_router[i].children[blog];
            this.blog_count = [i, blog];
            this.$refs.blog_content.scrollTop = 0
          }
        }
      }
    }
  },
  computed: {
    query() {
      return this.$route.query
    },
    helo() {
      return helo
    },
    kjh(){
      // var demo = require('https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog/demo.md');
      // require('https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog/demo.md')
      return kjh
    }
  },
  methods: {
    jumpRoute(key) {
      switch (key){
        case 'home':
          this.$router.push('/');
          break;
      }

    },
    warnFault() {
      Message.warn('还在开发中哦')
    },
    /** 页面宽度发生变化时 */
    onResize() {
      window.innerWidth <= 1200 ? (this.side_show = false) : (this.side_show = true)
    },

    /** 点击了博客 => 展示 */
    selectBlog(val) {
      if (val.id !== this.open_blog.id) {
        this.$router.push({ query: {id: `${val.id}` }})
      }
    },

    /** 回到顶部 */
    backTop() {
      this.$refs.blog_content.scrollTop = 0
    },

    /** 解析路由 */
    routeInit() {
      const router = route_test;
      let pre_route = [0, 0];    // 进入时打开的路由
      let pre_data = [];         // 进入时打开的博客
      this.side_router = router.map((item, index) => {
        return {
          state: false,
          name: item.name,
          children: item.children.map((child_item, child_index) => {
            if (this.query.id === `${child_item.id || 10 * index + child_index}`) {
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
      // this.side_router[pre_route[0]].state = true
    },

  },
  mounted() {
    this.onResize();
    this.routeInit();
    // this.ttt();
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
  width: 320px;
  transition: width 0.5s;
  overflow: hidden;
}

.blog_side_content {
  align-items: flex-start;
  height: calc(100%);
  width: 100%;
  /*border-right: 1px solid #dddddd;*/
}

.blog_logo {
  display: flex;
  align-items: flex-end;
  transition: width 0.5s, height 0.5s, transform .5s;
  height: 200px;
  width: 290px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #dddddd;
  background: url('https://bobblehat-1259032998.cos.ap-beijing.myqcloud.com/bobblehat_blog_assets/forest_animate_g.webp') no-repeat center center/cover;
  /*background: url('../assets/dark.jpg') no-repeat center center/cover;*/

  overflow: hidden;
  /*transform: translateY(-30px);*/
}

.blog_logo img {
  position: relative;
  top: -30px;
  height: 56px;
  margin-left: 15px;
}
.blog_logo img:hover{
  cursor: pointer;
}

.blog_info{
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 290px;
  flex-shrink: 0;
}
.my_photo{
  height: 80px;
  width: 80px;
  padding: 5px;
  border-radius: 90px;
  transform: translateY(35px);
  /*box-shadow: 0 0 10px #dddddd;*/
  overflow: hidden;
  background-color: rgba(255,255,255,0.5);
}
.my_info{
  /*height: 110px;*/
  padding: 10px 14px 12px;
  /*flex: 1;*/
  background-color: white;
}
.side_animate_div{
  overflow: hidden;
  transition: width 1s, height 1s;
}
.side_div {
  height: auto;
  width: 290px;
  max-height: calc(100% - 265px);
  min-width: 290px;
  margin: 20px 0 0 20px;
  box-shadow: 0 0 10px #dddddd;
  transition: transform .5s;
  border-radius: 10px;
  padding-bottom: 10px;
  overflow: auto;
  overflow-x: hidden;
}

.side_div::-webkit-scrollbar {
  width: 4px;
}

.side_frame {
  flex-shrink: 0;
  height: 56px;
  width: 260px;
  padding-left: 12px;
  margin-left: 10px;
  overflow: hidden;
}

.side_frame_open:last-child {
  /*box-shadow: 0 6px 6px -6px white,*/
  /*0 -6px 6px -6px #cccccc;*/
  box-shadow: none;
  margin-bottom: 10px;
}

.side_frame_open {
  /*padding-left: 0;*/
  /*box-shadow: 0 6px 6px -6px #cccccc,*/
  /*0 -6px 6px -6px #cccccc;*/
  box-shadow: 0 6px 6px -6px #cccccc;
}

.side_frame_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  font-weight: bolder;
  transition: padding-left 0.3s;
  /*font-size: 16px;*/
  /*transition: color 0.3s;*/
}
.side_frame_title:hover {
  cursor: pointer;
  color: #ff4c10;
  padding-left: 3px;
  /*font-size: 18px;*/
  /*background-color: #ff4c10;*/
}

.side_frame_title i {
  color: #ff4c10;
  transition: transform 0.3s;
}

.side_frame_title:hover i {
  color: #ff4c10 !important;
}


.side_button {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  justify-content: space-between;
  height: 50px;
  font-weight: normal;
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
  position: relative;
  display: flex;
  height: 66px;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 20px);
  /*width: 100%;*/
  font-size: 18px;
  color: #5c5c5c;
  z-index: 90;
  /*background-color: #35495e;*/
  /*box-shadow: 0 4px 4px -4px #dadada;*/
  /*border-bottom: 1px solid #dddddd;*/
}

.blog_header i {
  font-size: 22px;
  margin-right: 18px;
  transition: color 0.3s, transform 0.5s, margin-left 0.5s;
}

.blog_header i:hover {
  cursor: pointer;
  color: #ff4c10;
}

.blog_header i:active {
  transform: scale(0.8);
}


.blog_content {
  position: relative;
  display: flex;
  justify-content: center;
  /*background-color: #40ff32;*/
  /*padding: 70px 0;*/
  width: 100%;
  flex: 1;
  margin-top: -66px;
  z-index: 10;
  overflow: auto;
}

.template_signal {
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 0;
  justify-content: center;
  height: 100%;
  width: 70px;
  transition: width 0.5s;
}

.signal {
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

.signal:hover {
  cursor: pointer;
  background-color: #ff4c10;
  color: white;
  /*background-color: white;*/
  /*color: rgba(255,76,16,0.9);*/
  /*border: 1px solid rgba(255,76,16,0.4);*/
}

.signal:active {
  transform: scale(0.8);
}

.signal i {
  position: relative;
  font-size: 22px;
}

.blog_template {
  height: fit-content;
  /*height: auto;*/
  width: 760px;
  margin: 90px 0 0 0;
  color: #424242;
}

.blog_title {
  width: 100%;
  height: auto;
  margin-bottom: 26px;
}

.blog_title p {
  display: flex;
  align-items: center;
  font-size: 29px;
  height: 40px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.blog_title span {
  color: #7b7b7b;
}

.blog_banner {
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 32px;
  background-color: #dddddd;
  /*box-shadow: 0 0 10px #dddddd;*/
}

.blog_comment {
  /*height: 80px;*/
  width: 100%;
  /*border: 1px solid #333;*/
  border-radius: 16px;
  margin-bottom: 70px;
  padding: 10px;
  box-shadow: 0 0 10px #dddddd;
}
.blog_comment_content {
  border-radius: 10px;
  height: 100px;
  padding: 6px;
  box-shadow: 0 0 10px #e8e8e8 inset;
  /*border: 1px solid #999999;*/
}
.comment_tool_bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 32px;
  /*background-color: #40ff32;*/
}
.comment_push{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80px;
  color: #ff4c10;
  border-radius: 10px;
  border: 1px solid #ff4c10;
  transition: transform 0.3s, color 0.3s, background-color 0.3s;

}
.comment_push:hover{
  color: white;
  cursor: pointer;
  background-color: #ff4c10;
}
.comment_push:active{
  transform: scale(0.8);
}

.tool_bar_imo{
  display: flex;
}
._imo{
  font-size: 22px;
  margin: 6px;
  transition: transform 0.3s, color 0.3s;
}
._imo:hover{
  cursor: pointer;
  color: #ff4c10;
}
._imo:active{
  transform: scale(0.8);
}




/*设置整个滚动条宽高*/
::-webkit-scrollbar {
  position: fixed;
  z-index: 99;
  width: 6px;
  height: 0;
  background: transparent;

}

/*设置滑块*/
::-webkit-scrollbar-thumb {
  width: 6px;
  background-color: rgba(255, 76, 16, 0.9);
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(255, 76, 16);
  cursor: pointer;
}

/*设置轨道*/
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0);
  opacity: 0;
}

::-webkit-scrollbar-track:hover {
  opacity: 1;
  /*background-color: white;*/
}

</style>
