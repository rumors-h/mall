<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                  @tabClick="tabClick" 
                  ref="tabcontrol2" 
                  class="tabControl"
                  v-show="isTabControlShow">
    </tab-control>
    <scroll class="content" ref="scroll" 
            @backTop="backtop" 
            :probe-type="3"
            :pull-up-load='true'
            @pullingup="loadMore">
      <home-swiper :banners="banners" @homeSwiperImg="homeSwiperImg"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontrol1"></tab-control>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";



import { getHomeMultiData, getHomeGoods } from "network/home";
import {debounce} from 'common/utils'
import {itemListener} from "common/mixin"

export default {
   components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  mixins: [itemListener],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isBackTopShow: false,
      tabControlOffsetTop: 0,
      isTabControlShow : false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },

  },
  created() {
    this.getHomeMultiData();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY = this.$refs.scroll.scroll.y
     this.$bus.$off('itemimgload', this.imgListener)
  },
  mounted () {
    // 1.图片加载完成的事件监听,若放在created可能拿不到$refs.scroll.
    const refresh = debounce(this.$refs.scroll && this.$refs.scroll.refresh,200)      //先做一次防抖动
    this.imgLintener = () => refresh()
    this.$bus.$on('itemimgload', this.imgLintener)

    //2.获取tabcontrol的offsetTop值
    // console.log(this.$refs.tabcontrol.$el.offsetTop);
    
  },
  methods: {
    //事件监听相关方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabcontrol1.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    homeSwiperImg() {
      this.tabControlOffsetTop = this.$refs.tabcontrol1.$el.offsetTop
      // console.log(this.tabControlOffsetTop);
    },
    backtop(position) {
      // console.log(position)
      // if(-position.y > 1000){
      //   this.isBackTopShow = true
      // }else{
      //   this.isBackTopShow = false
      // }

      //1.判断backTop要不要显示
      this.isBackTopShow = (-position.y > 1000)

      //2.判断tabControl要不要显示
      this.isTabControlShow = (-position.y > this.tabControlOffsetTop)
      // console.log(this.isTabControlShow);
      
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    

    //网络请求相关方法
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res.data.data.list);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    }
  }
};
</script>

<style scoped>
/* 样式只作用于该组件 scoped作用域*/
#home {
  height: 100vh;      /* view point height 视口*/
  /* position: relative; */
  /* padding-top: 44px; */
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
}
.tabControl{
  position: relative;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 9;
}

.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/* 此方法  tabcontrol会有bug */
/* .content{
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */


</style>
