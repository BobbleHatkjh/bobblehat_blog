<template>
  <div>
    <div class="receive_row" v-for="(row_data, receive_index) in receive_data" :key="receive_index">
      <div @click="clickBack(single_data)" class="receive_frame" v-for="(single_data, row_index) in row_data" :key="row_index">
        <Img height="160px" :src="single_data.banner"/>
        <div class="receive_title">
          <p>{{ single_data.title }}</p>
          <p class="receive_title_name">
            <span>
              绒球帽
            </span>
            <time>
              {{ single_data.time }}
            </time>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Img from "@/components/Img";

export default {
  components: {Img},
  props: {
    data: {
      type: Array
    },
    row: { // 行
      type: Number,
      default: null
    },
    column: { // 列
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      receive_data: []
    }
  },
  watch: {
    // data:{
    //   handler(newVal){
    //     console.log('receive',newVal);
    //     this.receive_data = newVal
    //   },
    //   immediate: true,
    //   deep: true
    // }

    data(newVal, oldVal) {
      console.log('receive',newVal);
      // this.initData(this.data)
    }
  },
  methods: {
    initData(resource) {
      this.receive_data.push(resource.splice(0, this.column));
      resource.length !== 0 && this.initData(resource)
    },

    /** 点击某一个框的回调 */
    clickBack(data) {
      this.$emit('select', data.id)
    }
  },
  created() {
    this.initData(this.data)
  }
}
</script>

<style>
.receive_row {
  display: flex;
  justify-content: center;
}

.receive_frame {
  height: 236px;
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  color: #505050;
  box-shadow: 0 0 14px #dddddd;
  overflow: hidden;
  background-color: white;
  transition: box-shadow 0.2s, transform 0.2s;
}

.receive_frame:hover {
  cursor: pointer;
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 10px 16px -6px #c6c6c6;
}

.receive_frame:active {
  transform: scale(0.85);
}

.receive_photo > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.receive_title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 76px;
  padding: 10px 12px;
  font-size: 18px;
}

.receive_title_name {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 14px;
  color: #7b7b7b;
}
</style>