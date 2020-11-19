<template>
  <div ref="img_" class="bobble_img" :style="{ height: height, width: width, 'background: white': loading_ }">
    <div class="img_drop" v-if="loading_">
      <i
          :class="`iconfont icon-${ !reject ? 'loading' : 'shut' }`"
          :style="{ animation: reject ? 'none' : '2s roll ease infinite' }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src:{  // 图片地址
      type: null,
      default: null
    },
    height: { // 图片高度
      type: String,
      default: "100%"
    },
    width: {  // 图片宽度
      type: String,
      default: "100%"
    }
  },
  data(){
    return{
      loading_: true,  // 是否加载，true为正在加载
      reject: false
    }
  },
  watch:{
    src(val){
      this.loading_ = true;
      this.reject = false;
      this.initImg(val)
    }
  },
  methods:{
    initImg(val){
      let background = new Image();
      background.src = val;
      background.onload = () => { /** 成功加载 */
        if(!this.loading_) return;
        this.loading_ = false;
        this.$refs.img_.style.background = 'url(' + background.src + ') no-repeat center center/cover'
      }
      background.onerror = () => { /** 加载失败 */
        this.reject = true;
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
  font-size: 48px;
  color: #ff4c10;
  /*animation: 2s roll ease infinite;*/
}
.icon-shut{
  font-weight: bolder;
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