<template>
  <div>
    <nav-bar>
      <div slot="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" @click="itemClick(index)" 
            :class="{active: currentIndex==index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    data () {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('itemClick',index)
      },
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    justify-content: space-around;
    font-size: 14px;
  }
  img{
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
