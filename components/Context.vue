<template>
  <div class="scroll_content">
    <div class="scroll_title">{{ title }}</div>
    <div class="scroll_context">
      <slot/>
    </div>
    <Button @click="jumpTo" :scroll="true" :icon="icon" v-if="icon">
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
    },
    link: {
      type: String,
      default: null
    }
  },
  methods: {
    jumpTo() {
      this.$emit('open')
    }
  }
}
</script>

<style>

.scroll_content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transform: translate3d(0, 0, 0);
  height: 70vh;
  width: 100%;
  color: #424242;
  scroll-snap-align: start;
}

.scroll_title {
  height: 54px;
  width: fit-content;
  font-size: 36px;
  font-weight: bolder;
  border-bottom: 3px solid #ff4c10;
  margin-bottom: 10px;
}

.scroll_context {
  display: block;
  height: auto;
  width: 100%;
  padding-right: 20px;
  font-size: 18px;
  line-height: 28px;
  color: #606060;
  word-wrap: break-word;
  word-break: break-all;
}

.scroll_context > i {
  font-size: 20px;
  line-height: 40px
}

</style>
