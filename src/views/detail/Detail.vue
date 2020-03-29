<template>
  <div class="detail">
    <detail-nav-bar ref="nav" class="detail-nav" @itemClick="itemClick"></detail-nav-bar>
    <scroll class="content" ref="scroll" @backTop="move" :probeType="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info ref="goods" :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :param-info="paraminfo"></detail-param-info>
      <detail-comment ref="comments" :detail-comment="comment"></detail-comment>
      <goods-list ref="recommends" :goods="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addCart="addCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import GoodsList from "components/content/goodsList/GoodsList";
import DetailComment from "./childComps/detailComment";
import DetailBottomBar from "./childComps/DetailBottomBar";
import BackTop from "components/content/backTop/BackTop"


import { getDetail, recommend, Goods, Shop } from "network/detail";
import { itemListener, backTopMixin} from "common/mixin";
import { debounce } from "common/utils";
export default {
  name: "Detail", //  要使用keep-alive的exclude必须写name
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    GoodsList,
    DetailComment,
    DetailBottomBar,
    BackTop
  },
  mixins: [itemListener,backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paraminfo: {},
      recommend: [],
      comment: {},
      detailSaveY: null,
      getTitleY: null,
      currentIndex: 0
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then(res => {
      console.log(res.data.result);
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;

      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      this.shop = new Shop(data.shopInfo);

      this.detailInfo = data.detailInfo;

      this.paraminfo = data.itemParams;

      if (data.rate.cRate != 0) {
        this.comment = data.rate.list[0];
      }
    });

    recommend().then(res => {
      // console.log(res);
      this.recommend = res.data.data.list;
    });

    this.getTitleY = debounce(() => {
      this.detailSaveY = [];
      this.detailSaveY.push(0);
      this.detailSaveY.push(this.$refs.params.$el.offsetTop);
      this.detailSaveY.push(this.$refs.comments.$el.offsetTop);
      this.detailSaveY.push(this.$refs.recommends.$el.offsetTop);
      //line:121   hack   得多push一个
      this.detailSaveY.push(Number.MAX_VALUE)
      // console.log(this.detailSaveY);
    }, 300);
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemimgload", this.imgListener);
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();

      //图片加载完后，保存商品，参数评论，推荐的位置信息
      this.getTitleY();
    },
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.detailSaveY[index], 200);
      // console.log(index);
    },
    move(position) {
      //1.滑动显示对应的nav title
      const positionY = -position.y;
      const length = this.detailSaveY.length;
      // console.log(position.y)

      //方法二：hack
      for (let i = 0; i < length-1; i++) {
        if (this.currentIndex != i && positionY >= this.detailSaveY[i] && positionY < this.detailSaveY[i + 1]){
          this.currentIndex = i
          // console.log(this.currentIndex)
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }


     /*  //方法一：
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex != i && ((i < length - 1 &&
            positionY >= this.detailSaveY[i] &&
            positionY < this.detailSaveY[i + 1]) ||
          (i == length - 1 && positionY >= this.detailSaveY[i]))
        ) {
          this.currentIndex = i
          console.log(this.currentIndex)
          this.$refs.nav.currentIndex = this.currentIndex
        }
      } */

      //2.判断backTop要不要显示
      this.isBackTopShow = (-position.y > 1000)
    },
    addCart() {
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc
      product.price = this.goods.realprice;
      product.iid = this.iid;
      // console.log(product)

      this.$store.dispatch('addCart',product).then( res => {
        this.$toast.show(res)
      })

    }
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  z-index: 9; /* 只有开启定位z-index才有效果 */
  background-color: #fff;
  overflow: hidden;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px - 49px); /* 一定要空格 */
}

.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background: #fff;
  z-index: 1000;
}
</style>
