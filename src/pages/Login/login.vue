<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 手机号码登录
 -->
<template>
  <div class="center relative overflow-hidden" >
    <title-bar title="登陆" :back="true"></title-bar>
    <!--  -->
    <div class="logo">
      <img src="../../assets/imgs/logo.png" />
    </div>
    <div class="appName">
      {{appName}}
    </div>
    <div class="login-info">
      <div style="margin-top:20px;">
        <van-cell-group>
          <van-field v-model="mobile" placeholder="请输入手机号" type="tel" maxlength="11">
            <img slot="left-icon" src="../../assets/imgs/shoujihao@2x.png" style="vertical-align:middle;height:24px;margin-right:10px;">

          </van-field>
        </van-cell-group>
      </div>
      <div>
        <van-cell-group>
          <van-field v-model="vcode" placeholder="请输入验证码" type="tel" maxlength="6">
            <img slot="left-icon" src="../../assets/imgs/yanzhengma@2x.png" style="vertical-align:middle;height:24px;margin-right:10px;">
            <div slot="button" style="color:#999999;width:80px;" @click="getSms()" v-if="interval<=0">获取验证码</div>
            <div slot="button" style="color:#999999;width:80px;text-align:center" v-if="interval>0">{{interval}} 秒</div>
          </van-field>
        </van-cell-group>
      </div>
      <div style="margin-top:30px;">
        <c-button theme="dark" v-on:click="login()" :disable="loging" size="big" style="width:90%">登陆</c-button>
      </div>
    </div>
    <div style="width:100%;margin-top:20px;">
      <div class="inline-block" style="border-top:1px solid #e3e3e3;width:51px;height:1px;vertical-align: middle;"></div>
      <div class="inline-block" style="color:#999;width:144px;font-size:12px;">您还可以使用以下方式登录</div>
      <div class="inline-block" style="border-top:1px solid #e3e3e3;width:51px;height:1px;vertical-align: middle;"></div>
    </div>
    <div style="margin-top:20px;">
      <img src="../../assets/imgs/weixindenglu@2x.png" style="width:60px;height:60px;">
    </div>
    <div class="center" style="width:100%;font-size:12px;margin:20px;">
      <div class="inline-block" style="color:#999">登录即表示同意</div>
      <div class="inline-block" style="color:#333">《慧宇千城用户协议》</div>
    </div>
    <div class="bg-img absolute"></div>
  </div>
</template>

<script>
  import regex from '../../share/regex'
  export default {
    name: 'Login',
    data() {
      return {
        viewModel: {
          guid: "login-sms-interval"
        },
        appName: this.cfg.appName,
        interval: 0,
        loging: false,
        mobile: "",
        vcode: "",
        sendTimes: 0
      }
    },
    methods: {
      login: function () {
        if (this.sendTimes === 0) {
          this.comm.msg("请先发送验证码");
          return;
        }
        if (!regex.isMobile(this.mobile)) {
          this.comm.msg("请输入合法的手机号码");
          return;
        }
        if (!/^[0-9]{4,6}$/.test(this.vcode)) {
          this.comm.msg("请输入合法的验证码");
          return;
        }

        this.loging = true;
        // http校验无误hi后跳转到首页
      },
      getSms: function () {
        if (!regex.isMobile(this.mobile)) {
          this.comm.msg("请输入合法的手机号码");
          return;
        }
        if (this.interval <= 0) {
          this.interval = 10;
        } else {
          return; // 正在倒计时中
        }
        this.sendTimes++;
        // 请求服务端，倒计时
        this.comm.addSchedule({
          guid: this.viewModel.guid,
          excute: () => {
            if (this.interval > 0)
              this.interval--;
            else {
              this.comm.removeSchedule(this.viewModel.guid);
              this.interval = 0;
            }
          },
          interval: 1000,
          sleep: '/login'
        });
      }
    },
    mounted() {
      // 首先检查是否登录，未登录向下执行
      // 检查是否有code，或者检查state也行（微信授权跳回来），有code进入绑定手机号界面，没有向下执行
      // 没有code，也未登录，检查是否微信授权过，授权直接向服务器，没授权则显示手机号登录
      //location.href=`${cfg.authUrl}?appid=${cfg.appId}&redirect_uri=${escape('https://www.baidu.com')}&response_type=code&scope=snsapi_userinfo&state=1fd33#wechat_redirect`
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg-img {
    top:160px;
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
    padding-top: 1px;
    margin: 20px auto;
    width: 347px;
    height: 234px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
  }

</style>
