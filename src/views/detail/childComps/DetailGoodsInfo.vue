<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc-text">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-list" v-for="item in detailInfo.detailImage">
      <div class="info-key">{{item.key}}</div>
      <div class="info-img">
        <img v-for="(item, index) in item.list" :key="index" :src="item" @load="imgLoad" alt="">
        <!-- <img src="../../../assets/img/home/recommend_bg.jpg" alt=""> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        this.$emit('imageLoad')
      }
    },
  }
</script>

<style scoped>
  .goods-info{
    position: relative;       /* 不加这一行布局会乱 */
  }
  .info-desc{
    padding: 25px 20px 5px;
    font-size: 14px;
    /* overflow: hidden;
    zoom: 1; */
  }
  .info-desc .start,.info-desc .end {
    position: relative;
    width: 90px;
    height: 1px;
    background: #ccc;
  }
  .info-desc .start::before {
    content: '';
    position: absolute;
    left: 0;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
    right: 0;
  }
 .info-list .info-key{
    padding-left: 20px;
    padding-bottom: 10px;
    text-align: start;
  }
  .info-desc .start{
    float: left;
  }
  .info-desc .end{
    float: right;
  }
  .info-desc .desc-text{
    /* position: relative; */
    /* left: -90px; */
    /* height: 60px; */
    line-height: 20px;
    font-size: 14px;
    padding: 20px 0;
    text-align: start;
  }
  .info-list img{
    width: 100%;
  }

 
</style>
