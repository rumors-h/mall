<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" 
        :key="index" class="tab-control-item" 
        :class="{active: index===currentIndex}" 
        @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentIndex : 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style>
  .tab-control{
    display: flex;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
    /* text-align: center; */
    font-size: 15px;
    background-color: #fff;
  }
 
 .tab-control-item span{
   padding: 5px;
 }
 .active{
   color: var(--color-high-text);
 }
 .active span{
   border-bottom: 3px solid var(--color-tint);
 }
</style>
