<template>
  <div class="cartListItem">
    <div class="item-selecter">
      <check-button :is-checked="product.checked" @checkClick="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt />
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{product.price}}</div>
        <div class="item-count">×{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"
import { mapGetters } from "vuex";
export default {
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    },
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    }
  }
 
};
</script>

<style scoped>
.cartListItem {
  width: 100%;
  padding: 5px 0;
  display: flex;
  border-bottom: 1px solid #ccc;
}


.checkbtn img {
  vertical-align: middle;
}
.item-selecter{
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  padding: 5px;
  padding-left: 0px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; /* 只有父元素设置overflow:hidden 时  省略号才有效 */
}
.item-info {
  /* position: relative; */
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  /* position: absolute; */
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  /* margin-top: 10px;
  bottom: 10px;
  left: 10px;
  right: 10px; */
}

.info-bottom .item-price {
  color: orangered;
}
</style>
