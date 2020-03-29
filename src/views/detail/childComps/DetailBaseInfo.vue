<template>
  <div v-if="Object.keys(goods).length !== 0"  class="detail-base-info" >
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <div class="newprice">{{goods.newPrice}}</div>
      <div class="oldprice">{{goods.oldPrice}}</div>
      <div class="desc" :style="{'background':goods.discountBgColor}" v-if="goods.discountDesc">{{goods.discountDesc}}</div>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span><!-- goods.services.length-1 -->
    </div>
    <div class="info-service">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="" v-if="Object.keys(goods.services[index-1]).length !== 1">
        <span>{{goods.services[index-1].name}}</span>
        <!-- <span>{{goods.services.length}}</span> --><!-- 下标从1开始 -->
      </span>
      
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
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {

    }
  }

</script>

<style scoped>
  .detail-base-info{
    margin-top: 15px;
    padding: 0 8px;
  }
  .info-title{
    color: #000;
  }
  .info-price{
    display: flex;
    padding: 10px 0;
  }
  .info-price .newprice{
    font-size: 24px;
    color: var(--color-high-text);
  }
  .info-price .oldprice{
    margin-top: 10px;
    margin-left: 8px;
    color: #999;;
    font-size: 13px;
    text-decoration: line-through;
  }
  .info-price .desc{
    padding: 0 5px;
    height: 18px;
    line-height: 18px;
    font-size: 10px;
    color: #fff;
    border-radius: 8px;
  }
  .info-other{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    line-height: 35px;
    color: #999;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
  .info-service{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    line-height: 60px;
    color: #333;
    text-align: center;
    border-bottom: 4px solid #f2f5f8;
  }
  .info-service img{
    width: 14px;
    height: 14px;
    vertical-align: middle;
  }
</style>
