<template>
  <div class="center" style="padding-top:40px;">
    <div class="login-info">
      <div style="margin-top:20px;">

<van-cell-group>
          <van-field v-model="mobile" placeholder="请输入手机号" type="tel" maxlength="11">
            <img slot="left-icon" src="../../assets/imgs/shoujihao@2x.png" style="vertical-align:middle;height:24px;margin-right:10px;">

          </van-field>
        </van-cell-group>
        
      </div>
    </div>
    <div style="margin-top:30px;">
      <c-button theme="dark" v-on:click="next()"  size="big" style="width:90%">下一步</c-button>
    </div>
  </div>
</template>

<script>
    
  import regex from '../../share/regex'
  export default {
    name: 'BindCellphone',
    data() {
      return {
          mobile:"15823278387",
      }
    },
    methods: {
      next: function () {
        if (!regex.isMobile(this.mobile)) {
          this.comm.msg("请输入合法的手机号码");
          return;
        }
        this.cache.sCache.set("bindMobile",this.mobile);
        this.$router.push("/VerificationCode");
      }
    },
    mounted() {},
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg-img {
    margin-top: 100px;
    background: url(../../assets/imgs/denglu_bj@2x.png)no-repeat;
    background-size: 100% auto;
    width: 100%;
    z-index: -1;
    height: 100%;
  }

  .logo {
    margin: 60px auto 0;
    width: 94px;
    height: 94px;
    background: rgba(255, 255, 255);
    box-shadow: 0px 2px 4px 0px rgba(18, 117, 88, 0.12);
    border-radius: 18px;

  }

  .logo>img {
    width: 70px;
    height: 70px;
    margin: 12px;
  }

  .appName {
    color: #666;
    margin: 10px auto;
    width: 90px;
    height: 28px;
    font-size: 22px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    line-height: 28px;
  }

  .login-info {
    margin-top: 40px;
    padding-top: 1px;
    margin: 20px auto;
    width: 347px;
    border-radius: 10px;
  }

</style>
