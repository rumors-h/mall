<template>
  <div class="goods-list">
    <goods-list-item class="item" v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    data () {
      return {

      }
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem
    },
   
  }
</script>

<style>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;     
    /* 在手机端  有的space-evenly无效 需改为space-between再添加伪类，即等于用了space-evenly实现了布局（n+1） */
  }
  /* .goods-list::before,
  .goods-list::after{
    content: '';
    display: block;
  } */
</style>
