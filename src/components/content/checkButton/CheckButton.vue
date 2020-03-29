<template>
  <div class="checkButton" :class="{checked: isChecked}" @click="checkClick">
    <img src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkClick() {
      this.$emit("checkClick");
    }
  }
};
</script>

<style scoped>
  .checkButton {
    border: 1px solid #aaa;
    border-radius: 50%;
    margin: 10px 5px;
    height: 20px;
    width: 20px;
  }
  .checked {
    background-color: var(--color-tint);
    border: 1px solid var(--color-tint);
  }
</style>
