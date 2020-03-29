<template>
  <div class="detail-shop-info">
    <div class="shop-top">
      <img :src="shop.shopLogo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left shop-middle-item">
        <div class="info-sells">
          <p class="sells-count">{{shop.sells|sellCountFilter}}</p>
          <p class="sells-text">总销量</p>
        </div>
        <div class="info-goods">
          <p class="goods-count">{{shop.goods}}</p>
          <p class="goods-text">全部宝贝</p>
        </div>
      </div>
      <div class="fenge"></div>
      <div class="shop-middle-right shop-middle-item">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="item-score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
          <td class="item-better" :class="{'better-more': item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
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
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },

    filters: {
      sellCountFilter(value) {
        if(value<10000) return value
        return (value/10000).toFixed(1) + '万'    //过滤到一位小数点
      }
    }
  }
</script>

<style scoped>
  .detail-shop-info{
    padding: 15px 10px;
    border-bottom: 5px solid #f2f5f8;
    color: #000;
  }
  .shop-top .title{
  margin-left: 10px;
  }
  .shop-top img{
  width: 45px;
  height: 45px;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.1);
  }

  .shop-middle{
    display: flex;
    margin-top: 20px;
  }
  .shop-middle-item{
    flex: 1;
  }
  .shop-middle .shop-middle-left{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
  }
  .shop-middle .fenge{
    height: 40px;
    width: 1.5px;
    background: #f0f0f0;
  }

  .shop-middle-left .sells-count,
  .shop-middle-left .goods-count{
    font-size: 16px;
    /* margin-top: 5px; */
  }
  .shop-middle-left .sells-text,
  .shop-middle-left .goods-text{
    margin-top: 10px;
    font-size: 12px; 
  }
  .shop-middle-right{
    position: relative;
    top: -10px;
    font-size: 12px;
  }
  .shop-middle-right table{
    margin-left: 20px;
  }
  .shop-middle-right table td{
    padding: 0 5px 5px 0;    /* 上右下左 */
  }

  .shop-middle-right .item-score,
  .shop-middle-right .item-better{
    color: #5ea732;
  }
  .shop-middle-right .score-better{
    color: #f13e3a;
  }
  .shop-middle-right  .better-more{
    color: #f13e3a;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
  /* .shop-bottom{
    width: 100px;
    height: 30px;
    margin: 0 auto;
    background: #f2f5f8;
    text-align: center;
    font-size: 13px;
    color: var(--color-text);
    line-height: 30px;
    border-radius: 30px;
    
  } */
</style>
