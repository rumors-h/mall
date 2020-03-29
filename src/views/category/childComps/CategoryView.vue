<template>
  <scroll class="content">
    <div class="category-view">
      <div class="view-item">
        <div class="item" v-for="(item, index) in viewList" :key="index">
          <a :href="item.link">
            <img class="item-img" :src="item.image" alt />
            <div class="item-title">{{item.title}}</div>
          </a>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
  props: {
    viewList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Scroll
  }
};
</script>

<style scoped>
.category-view {
  padding: 10px 20px;
}
.view-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
}
.item {
  width: 75px;
  /* height: 120px; */
}
.item-img {
  width: 65px;
  height: 65px;
}
.item-title {
  font-size: 15px;
  margin: 20px 0;
}
.content{
  height: 100%;
}
</style>
