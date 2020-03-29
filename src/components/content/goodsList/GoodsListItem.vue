<template>
  <div class="goods-item" @click="clickGoods">
    <img v-lazy="showGoods" alt @load="imgLoad" />    <!-- 使用懒加载 -->
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showGoods() {
      return this.goodsItem.image || this.goodsItem.show.img ;      //注   必须这么写 不能换位置
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemimgload"); //不能和方法名相同
    },
    clickGoods() {
      // console.log('clickGoods');
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>

<style>
.goods-item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
  font-size: 12px;
}
.goods-item img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.goods-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8px;
  text-align: center;
}
.goods-info p {
  overflow: hidden; /* 只有overflow: hidden的时候，text-overflow: ellipsis才能生效 */
  white-space: nowrap; /* 意思是不要自动换行    默认normal：允许自动换行*/
  text-overflow: ellipsis; /* 当文字溢出时显示省略号   还有一个clip属性  意思是当文字溢出时裁剪 */
  margin-bottom: 3px;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.collect {
  position: relative;
}
.collect::before {
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  content: "";
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px; /* background-position/background-size */
}
</style>
