<template>
  <div>
    <nav-bar class="nav" >
      <div slot="center">我的档案</div>
    </nav-bar>
    <user-info></user-info>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import UserInfo from './childComps/UserInfo'

  export default {
    data () {
      return {

      }
    },
    components: {
      NavBar,
      UserInfo
    }
  }
</script>

<style scoped>
.nav{
  background-color: var(--color-tint);
  color: white;
}
 
</style>
