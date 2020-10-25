<template>
  <div class="blog_bac">
    <h2>博客 迁移中...</h2>
    <Button @click="jumpCSDN" :scroll="true" icon="go">去看原博客</Button>

  </div>
</template>

<script>
export default {
  components: {
    Button: () => import(/* webpackChunkName: "button_animate" */ '~/components/Button')
  },
  methods: {
    jumpCSDN(){
      window.open('https://blog.csdn.net/BobbleHat')
    }
  }
}
</script>

<style>
.blog_bac {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate3d(0, 0, 0);
  background-color: white;
}

@keyframes appear {
  0% {
    opacity: 0;
    /*margin-top: 80px;*/

    transform: translateY(90px);
  }
}
</style>