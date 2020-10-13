<template>
  <div class="scroll_content">
    <div class="scroll_title">{{ title }}</div>
    <div class="scroll_context">
      <slot />
    </div>
    <Button :scroll="true" :icon="icon">
      {{ button }}
    </Button>
  </div>
</template>

<script>
export default {
  components: {
    Button: () => import(/* webpackChunkName: "button_animate" */ '~/components/Button')
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'go'
    },
    button: {
      type: String,
      default: ''
    }
  },

}
</script>

<style>

.scroll_content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 70vh;
  width: 100%;
  padding-top: 100px;
  color: #424242;
}

.scroll_title {
  height: 48px;
  font-size: 36px;
  font-weight: bolder;
  margin-bottom: 15px;
  border-bottom: 3px solid #ff4c10;
}

.scroll_context {
  display: block;
  height: auto;
  width: 100%;
  padding-right: 30px;
  font-size: 18px;
  line-height: 24px;
  color: #606060;
  word-wrap: break-word;
}

</style>