<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 微信登陆后输入手机接收的验证码
 -->
<template>
  <div class="center" style="padding-top:40px;">
    <div class="login-info">
      <div style="margin-top:20px;">
        <div class="tleft mobile-title" style="margin-left:15px;width:100%;">
          接受验证码手机号码: {{mobile}}
        </div>
        
        <van-cell-group>
          <van-field v-model="vcode" placeholder="请输入验证码" type="tel" maxlength="6">
            <img slot="left-icon" src="../../assets/imgs/yanzhengma@2x.png" style="vertical-align:middle;height:24px;margin-right:10px;">
            <div slot="button" style="color:#999999;width:80px;" @click="getSms()" v-if="interval<=0">获取验证码</div>
            <div slot="button" style="color:#999999;width:80px;text-align:center" v-if="interval>0">{{interval}} 秒</div>
          </van-field>
        </van-cell-group>
      </div>
    </div>
    <div style="margin-top:30px;">
      <c-button theme="dark" v-on:click="next()" :disable="loging" size="big" style="width:90%">登陆</c-button>
    </div>
  </div>
</template>

<script>
  import regex from '../../share/regex'
  export default {
    name: 'VerificationCode',
    data() {
      return {
        viewModel: {
          guid: "bind-phone-sms"
        },
        loging: false,
        interval: 0,
        mobile: this.cache.sCache.get("bindMobile"),
        vcode: "",
        sendTimes: 0
      }
    },
    methods: {
      next: function () {
        if (this.sendTimes === 0) {
          this.comm.msg("请先发送验证码");
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
        if(!regex.isMobile(this.mobile)){this.comm.msg("手机号码非法");return;}
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
          sleep: '/VerificationCode'
        });
      }
    },
    mounted() {
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mobile-title {
    width: 224px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
  }

  .login-info {
    margin-top: 40px;
    padding-top: 1px;
    margin: 20px auto;
    width: 347px;
    border-radius: 10px;
  }

</style>
