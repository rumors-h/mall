<template>
  <div id="app">
    <keep-alive exclude="Detail">     <!-- 保持状态，除了detail实时刷新 -->
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'
  export default {
    data() {
      return {};
    },
    components: {
     MainTabBar
    }
  };
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/css/normalize.css";
</style>
