<template>
  <div>
    <div class="receive_row" v-for="row_data in receive_data">
      <div class="receive_frame" v-for="single_data in row_data">
        <div class="receive_photo">
          <img :src="single_data.img" alt/>
        </div>
        <div>
          {{ single_data.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  data(){
    return{
      receive_data: []
    }
  },
  methods: {
    initData(resource) {
      this.receive_data.push(resource.splice(0, this.column));
      resource.length !== 0 && this.initData(resource)
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
  height: 220px;
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
  transform: translateY(-6px);
  box-shadow: 0 0 16px #c6c6c6;
}

.receive_photo {
  height: 150px;
  width: 100%;
  overflow: hidden;
}

.receive_photo > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>