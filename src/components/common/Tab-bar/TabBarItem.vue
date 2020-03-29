<template>
  <div class="tab-bar-item" @click="changepage">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-txt"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "red"
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
        return this.isActive ? { color: this.activeColor } : {};
      }
    },
    methods: {
      changepage() {
        this.$router.replace(this.path);
      }
    }
  };
  </script>

  <style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 12px;
  }
  .tab-bar-item img {
    width: 23px;
    height: 23px;
    margin-top: 5px;
    vertical-align: middle;
  }
</style>
