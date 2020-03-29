<template>
  <div id="Category">
    <nav-bar class="nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="category">
      <category-menu :menu-list="menuList" class="menu" @meunClick="meunClick"></category-menu>
      <category-view :view-list="viewList" class="view"></category-view>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CategoryMenu from './childComps/CategoryMenu'
  import CategoryView from './childComps/CategoryView'

  import {GetCategory,GetSubCategory} from 'network/category'
  export default {
    data () {
      return {
        menuList: [],
        viewList: [],
      }
    },
    components: {
      NavBar,
      CategoryMenu,
      CategoryView
    },
    created () {
      GetCategory().then(res => {
        // console.log(res);
        
        this.menuList = res.data.data.category.list

        this.GetSubCategory(0)
      })

      // GetSubCategory()

    },
    methods: {
      GetSubCategory(index) {
        const maitKey = this.menuList[index].maitKey
        console.log(maitKey);
        
        GetSubCategory(maitKey).then(res => {
          this.viewList = res.data.data.list
        })
      },
      meunClick(i) {
        this.GetSubCategory(i)
      }
    }
  }
</script>

<style scoped>
  #Category{
    height: 100vh;
  }
  .nav{
    position: relative;
    z-index: 9;
    background-color: var(--color-tint);
    color: white;
  }
  .category{
    display: flex;
    height: calc(100% - 93px);
  }
  .view{
    flex: 1;
  }
</style>
