<template>
  <div class="bottom-bar">
    <div class="bar-left bar-item">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right bar-item">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
};
</script>

<style scoped>
  .bottom-bar{
    display: flex;
    font-size: 14px;
  }
  .bar-item{
    flex: 1;
  }
  .bar-left{
    display: flex;
    justify-content: space-between;
  }
  .bar-left::before,
  .bar-left::after{
    content: '';
    display: block;
  }
  .bar-right{
    display: flex;
    line-height: 49px;
  }
  .icon{
    width: 25px;
    height: 25px;
    margin-top: 2px;
    margin-bottom: 5px;
    background: url("~assets/img/detail/detail_bottom.png");
    background-size: 100%
  }
  .service{
    background-position: 0 -59px ;
  }
  .shop{
    background-position: 0 -111px;
  }
  .select{
    background-position: 0 1px;
  }
  .text{
    font-size: 13px;
  }
  .cart{
    flex: 1;
    background-color: #FFDD10;
    text-align: center;
  }
  .buy{
    flex: 1;
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
  }
</style>
