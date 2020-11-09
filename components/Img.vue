<template>
  <div ref="img_" class="bobble_img" :style="{ height: height, width: width, 'background: white': loading_ }">
    <div class="img_drop" v-if="loading_">
      <i class="iconfont icon-loading"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src:{
      type: null,
      default: null
    },
    height: {
      type: String,
      default: "100%"
    },
    width: {
      type: String,
      default: "100%"
    }
  },
  data(){
    return{
      loading_: true  // 是否加载，true为正在加载
    }
  },
  watch:{
    src(val){
      console.log(1233122);
      this.loading_ = true;
      this.initImg(val)
    }
  },
  methods:{
    initImg(val){
      let background = new Image();
      background.src = val;
      background.onload = () =>{
        if(!this.loading_) return;
        this.loading_ = false;
        this.$refs.img_.style.background = 'url(' + background.src + ') no-repeat center center/cover'
      }
    }
  },
  mounted() {
    this.initImg(this.src)
  }

}
</script>

<style>
.bobble_img {
  transition: background 0.5s;
}
.img_drop{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  animation: 0.5s move_out ease;
  background-color: rgba(255,255,255,0.5);
}
.img_drop i{
  font-size: 24px;
  color: #323232;
  animation: 2s roll ease infinite;
}

@keyframes move_out {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>