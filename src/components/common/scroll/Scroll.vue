<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0        //对象，数组才需要是函数
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,           //控制div元素是否可以被点击
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      
      // console.log(this.scroll)
      //监听滚动的距离
      if(this.probeType==2 || this.probeType==3){
        this.scroll.on('scroll', (position) => {                  //监听的类型是scroll  滚动
          // console.log(position)
          this.$emit('backTop',position)
        })     
      }

      //监听滚动到底部
      this.scroll.on('pullingUp',() => {
        // console.log('上拉加载完成');
        this.$emit('pullingup')        
      })   
    },
    methods: {
      scrollTo(x, y, time=500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        // console.log('aaaa');
        
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style>

 
</style>
