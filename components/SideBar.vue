<template>
  <div class="sidebar_bac">
    <div class="sidebar_content" :style="shut_down && 'width: 0'">
      <div class="sidebar_back">
        <div class="button_back" @click="sideBack">
          <i class="iconfont icon-down"/>
        </div>
      </div>
      <slot/>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return{
      shut_down: false
    }
  },
  methods: {
    sideBack() {
      this.shut_down = true;
      setTimeout(() => {
        this.$emit('back')
      }, 500)

    }
  }
}
</script>


<style>

.sidebar_bac {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
}

.sidebar_content {
  height: 100%;
  width: 220px;
  background-color: white;
  box-shadow: 0 0 10px #c4c4c4;
  transition: width 0.2s;
  animation: 0.5s side_appear;
  overflow: hidden;
}

.sidebar_back {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  width: 100%;
  /*background-color: #3b8070;*/
}

.button_back {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 100px;
  /*background-color: #10f3ff;*/
  color: #ff4c10;
}

.button_back > i {
  font-size: 28px;
  transform: rotate(-90deg);
}


@keyframes side_appear {
  0% {
    opacity: 0;
    width: 0;
  }
}
</style>