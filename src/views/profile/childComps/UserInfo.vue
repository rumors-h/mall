<template>
  <div class="user-info">
    <div class="user-info-top">
      <div class="info-login">
        <div class="login-l">
          <div class="user-photo">
            <img src="~assets/img/profile/profile.svg" alt="">
          </div>
          <div>
            <div>登录/注册</div>
            <div class="login-phone">
              <img src="~assets/img/profile/phone.svg" alt="">
              <span>暂无绑定手机号</span>
            </div>
          </div>
        </div>
        
        <div class="login-r">
          <img src="~assets/img/profile/right_arrow.svg" alt="">
        </div>
      </div>
      <div class="info-other">

      </div>
    </div>
    <div class="user-info-bottom">
      <div class="info-detail">

      </div>
      <div class="info-detail">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .user-info-top{
    height: 60px;
    padding: 0 20px;
    background-color: var(--color-tint);
  }
  .info-login{
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: space-between;
  }
  .login-phone{
    font-size: 13px;
    margin-top: 5px;
    margin-left: -4px;
  }
  .login-phone img{
    height: 16px;
    vertical-align: middle;
  }
  .login-l{
    display: flex;
    align-items: center;
  }
  .user-photo{
    width: 50px;
    height: 50px;
    margin-right: 20px;
    background-color: #fff;
    border-radius: 50%;
    /* border: 1px solid #ccc; */
  }
  .user-photo img{
    width: 100%;
    /* vertical-align: middle; */
  }

  .user-info-bottom{
    padding: 10px 20px;
  }
</style>
