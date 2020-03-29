<template>
  <div>
    <swiper class="detail-s">
      <swiper-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    data () {
      return {

      }
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created () {
      
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .detail-s{
    height: 300px;
    overflow: hidden;
  }
 
</style>
