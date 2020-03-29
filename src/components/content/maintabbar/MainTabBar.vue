<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt />
        <div slot="item-txt">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category"><!--  activeColor="blue" -->
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="item-txt">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="item-txt">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt />
        <div slot="item-txt">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import tabBar from "../../common/Tab-bar/TabBar";
  import TabBarItem from "../../common/Tab-bar/TabBarItem";
  export default {
    data() {
      return {};
    },
    components: {
      tabBar,
      TabBarItem
    }
  };
</script>

<style>
</style>
