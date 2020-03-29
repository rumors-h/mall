<template>
  <div class="cart">
    <nav-bar class="nav">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartList from "./childComps/CartList";
import Scroll from "components/common/scroll/Scroll";
import CartBottomBar from "./childComps/CartBottomBar"

import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  activated() {
    // console.log("---");
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters(["cartListLength", "cartList"])
  }
};
</script>

<style scoped>
.cart {
  height: 100vh;
  overflow: hidden;
}
.nav {
  position: relative;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  height: calc(100% - 93px - 40px);
}
.bottom-bar{
  position: relative;
}
</style>
