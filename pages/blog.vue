<template>
  <div class="blog_bac">
    博客 开发中
  </div>
</template>

<style>
.blog_bac {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate3d(0, 0, 0);
  background-color: #3b8070;
}

@keyframes appear {
  0% {
    opacity: 0;
    /*margin-top: 80px;*/

    transform: translateY(90px);
  }
}
</style>