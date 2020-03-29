<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="homeSwiperImg">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    data () {
      return {
        isload: true
      }
    },
    props: {        //该组件的属性     v-bind绑定 传值
      banners: {
        type:Array,
        default(){      //提供默认值  vue2.5.3以下可以用 default:[]
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      homeSwiperImg() {
        if(this.isload){              //优化性能，发出事件之后  以后的事件不再发出
          this.$emit('homeSwiperImg')
          this.isload = false
        }
      }
    }
  }
</script>

<style>

 
</style>
