import {debounce} from './utils'
export const itemListener = {
  data() {
    return {
      imgListener: null
    }
  },
  mounted() {
    this.imgListener = () => refresh()
    const refresh = debounce(this.$refs.scroll && this.$refs.scroll.refresh,200)
    this.$bus.$on('itemimgload', this.imgListener)
    console.log('我是混入中的内容')
  },
}
export const backTopMixin = {
  data() {
    return {
      isBackTopShow: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
  },
}//首页也可抽取，但是没抽取