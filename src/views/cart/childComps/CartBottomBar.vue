<template>
  <div class="bottom-bar">
    <div class="select">
      <check-button class="ckeck-btn" @click.native="sellectAll" :is-checked="isSellectAll"></check-button>
      <div>全选</div>
    </div>
    <div>合计：￥{{totalPrice}}</div>
    <div class="calculate" @click="payClick">结算({{selectLength}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      aaa: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((prev, item) => {
          return prev + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    selectLength() {
      return this.cartList.filter(item => {
        return item.checked;
      }).length;
    },
    isSellectAll() {
      if(this.cartList.length == 0) return false    //判断一开始时的状态
      return !this.cartList.find(item => item.checked == false)
      //可以写成  return !this.cartList.find(item => !item.checked)
      //filter也可以  flilter是返回新数组   find是返回查找到的元素的值，若没有找到就返回false
      //return !(this.cartList.filter( item => item.checked == false).length)
    }
  },
  components: {
    CheckButton
  },
  methods: {
    sellectAll() {
      if(this.isSellectAll){//全部都选中，点一下应为全部不选中
        this.cartList.forEach(item => item.checked = false)
      }else{
        this.cartList.forEach(item => item.checked = true)
      }
    },
    payClick() {
      if(!this.selectLength) {
        this.$toast.show("请选择商品")
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: #eee;
  font-size: 14px;
}
.select{
  display: flex;
  align-items: center;
}
.ckeck-btn {
  margin-left: 10px;
  margin-right: 5px;
}
.calculate {
  width: 100px;
  height: 100%;
  background-color: orangered;
  color: #fff;
  text-align: center;
  line-height: 40px;
}
.checked {
  background-color: var(--color-tint);
  border: 1px solid var(--color-tint);
}
</style>
