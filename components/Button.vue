<template>
  <div class="animate_button" @click="clickBack" :style="`${extra}`" :class="{'shape_button': scroll}">
    <slot />
    <i :class="`iconfont icon-${icon}`" v-if="icon"/>
  </div>
</template>

<script>
export default {
  props: {
    extra: {
      type: String,
      default: null
    },
    scroll: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    }
  },
  methods: {
    clickBack() {
      this.$emit('click')
    }

  }
}
</script>

<style>
.animate_button {
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 5px;
  background: url('~assets/img/button_bac.png') no-repeat left/0 100%;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.animate_button > a{
  text-decoration: none !important;
}
.animate_button:hover{
  cursor: pointer;
  color: white;
  background: url('~assets/img/button_bac.png') no-repeat left/100% 100%;
}
.animate_button:active{
  transform: scale(0.8);
}

.shape_button{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: 180px;
  padding: 0 20px 0 30px;
  margin-top: 50px;
  box-shadow: 0 0 16px #d8d8d8;
  font-size: 17px;
  /*transition: background-color 0.2s, color 0.2s;*/
  color: #ff4c10;
  border-radius: 400px;
}
.shape_button > i {
  font-size: 22px;
}
</style>