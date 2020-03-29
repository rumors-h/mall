<template>
  <scroll class="content">
    <div class="category-menu">
      <div class="menu-item" @click="menuClick(index)" :class="{active: currentIndex==index}" v-for="(item,index) in menuList" :key="index">{{item.title}}</div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    components: {
      Scroll
    },
    data () {
      return {
        currentIndex: 0  
      }
    },
    props: {
      menuList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      menuClick(index) {
        this.currentIndex = index
        this.$emit('meunClick',index)
      }
    }
  }
</script>

<style scoped>
  .category-menu{
    width: 100px;
    background: #f6f6f6;
    text-align: center;
    font-size: 15px;
  }
  .menu-item{
    height: 45px;
    line-height: 45px;
  }
  .active{
    background-color: #fff;
    font-weight: 700;
    color: var(--color-high-text);
    border-left: 5px solid var(--color-tint);
  }
  .content{
    height: 100%;
  }
</style>
