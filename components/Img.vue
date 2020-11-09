<template>
  <div ref="img_" class="bobble_img" :style="{ height: height, width:width }">
    <i class="iconfont icon-loading" v-if="loading_"/>
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
      this.loading_ = true;
      this.initImg(val)
    }
  },
  methods:{
    initImg(val){
      this.$refs.img_.style.background = 'white';
      let background = new Image();
      background.src = val;
      background.onload = () =>{
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: background 1s;
}
.bobble_img i{
  font-size: 24px;
  color: #424242;
  /*line-height: 16px;*/
  animation: 2s roll ease infinite;
}
</style>