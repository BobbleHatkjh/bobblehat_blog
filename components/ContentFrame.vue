<!-- 主体内容框架 -->
<template>
  <div class="content_frame" :style="`background-color: ${background}; height: ${height}`">
    <div class="content_context" :style="`${extra_css}`">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    extra_css: { // 内框架额外css
      type: String,
      default: null
    },
    background: { // 背景颜色
      type: String,
      default: 'none'
    },
    height: { // 框高度
      type: String,
      default: '100vh'
    },
    test: { // 是否显示测试（测试会出现一个绿色背景)
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.content_frame {
  display: flex;
  justify-content: center;
  width: 100%;
}

.content_context {
  display: flex;
  justify-content: center;
  height: 100%;
  min-width: 1200px;
  width: 80%;
}

@media screen and (max-width: 1400px) {
  .content_context {
    width: 1200px;
    min-width: 0;
  }
}
</style>