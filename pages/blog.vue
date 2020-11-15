<template>
  <div class="blog_bac">

    <div class="blog_side_bar">

    </div>

    <div class="blog_body">

      <div class="blog_header">
        <i class="iconfont icon-fold"/>
        <p>绒球帽的博客</p>
      </div>

      <div class="blog_content">

        <h2>博客 迁移中...</h2>
        <Button @click="jumpCSDN" :scroll="true" icon="go">去看原博客</Button>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  components: {
    Button: () => import(/* webpackChunkName: "button_animate" */ '~/components/Button')
  },
  methods: {
    jumpCSDN() {
      window.open('https://blog.csdn.net/BobbleHat')
    }
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
  height: calc(100% - 70px);
  width: 280px;
  /*box-shadow: 4px 0 4px -4px #dadada;*/
  border-right: 1px solid #dddddd;
}

.blog_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
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
  transition: color 0.3s, transform 0.3s;
}
.blog_header i:hover{
  cursor: pointer;
  color: #ff4c10;
  /*transform: rotate(180deg);*/
}
.blog_header i:active{
  transform: scale(0.8);
}


.blog_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
}


</style>