<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    // props: {
    //   message: {
    //     type: String,
    //     default: 'aaaa'
    //   },
    //   isShow: {
    //     type: Boolean,
    //     default: false
    //   }
    // },
    data () {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message = '默认文字', duration = 1000) {    //es6语法  默认值
        this.isShow = true
        this.message = message

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    text-align: center;
    color: #fff;
    background-color: rgba(0,0,0, .65);
    z-index: 10;
  }
</style>
