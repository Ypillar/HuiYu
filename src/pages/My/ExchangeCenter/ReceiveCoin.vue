<!--
 * @Author: JuYangjia
 * @Date: 2019-01-10 11:18:59
 * @Description: 接收兑换券页面
 -->
<template>
  <div>
    <div v-show="!showResult">
      <van-row>
        <van-col span="24" class="center">
          <div class="headImg">
            <img :src="giver.img" class="fullSize" />
          </div>
          <div class="font-20" style="margin-top:10px;">
            {{giver.name}}
          </div>
          <div class="font-14" style="margin-top:5px;">
            赠送了您一张《{{giver.curriculum}}》门票
          </div>
        </van-col>
      </van-row>
      <van-row style="margin-top:30px;">
        <van-col span="24">
          <div class="padding14">
            <div class="list-item">
              <div class="title">
                {{giver.coin.name}}
              </div>
              <div class="operate van-hairline--bottom">
                <div class="price inline-block">
                  ￥{{giver.coin.price}}
                </div>
              </div>
              <div class="more">
                <div class="info">
                  编号： {{giver.coin.id}}
                </div>
                <div class="info">
                  获得时间： {{giver.coin.getTime}}
                </div>
                <div class="info">
                  有效期至： {{giver.coin.expireTime}}
                </div>
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
      <van-row style="margin-top:10px;">
        <van-col span="24" class="padding14 center" v-if="!isLogin">
          <c-button theme="dark" v-on:click="forward.login()" size="mid" style="width:100%;">登录/注册</c-button>
          <div class="font-14" style="margin-top:5px;">您当前处于未登录状态，请登录后领取</div>
        </van-col>
        <van-col span="24" class="padding14 center" v-if="isLogin">
          <c-button theme="dark" v-on:click="receive()" size="mid" style="width:100%;">接收</c-button>
          <c-button theme="light" v-on:click="reject()" size="mid" style="width:100%;margin-top:10px;">拒绝</c-button>
        </van-col>
      </van-row>
    </div>
    <div v-show="showResult">
      <result-page image="lingquchenggong@2x.png" title="领取成功" desc="前往兑换中心查看">
        <!-- btn区域 自定义html，想显示什么显示什么 -->
        <div slot="btn">
          <c-button theme="light" v-on:click="forward.index()" size="small" style="margin-right:20px;">回到首页</c-button>
          <c-button theme="dark" v-on:click="forward.coinCertificate()" size="small">兑换中心</c-button>
        </div>
      </result-page>
    </div>
  </div>
</template>

<script>
  //import regex from '../../../share/regex'
  export default {
    name: 'ReceiveCoin',
    data() {
      return {
        showResult: false,
        isLogin: true,
        giver: {
          img: "static/tempImg/head.png",
          name: "王强",
          curriculum: "经营能量",
          coin: {
            id: "213213213132132",
            name: "经营能量兑换券",
            price: '500.00',
            getTime: '2019-09-09 12:00:23',
            expireTime: '2019-10-09 12:00:23'
          }
        },
      }
    },
    methods: {
      receive() {
        // 被人兑换
        // this.comm.confirm("该兑换券已被他人兑换，请联系客服人员","温馨提示",{confirmButtonText:"联系客服",cancelButtonText:"我知道了"})
        // .then(()=>{
        //     this.forward.service();
        // }).catch(() => {
        //     // 什么也不做
        // });
        // 提示是否使用
        this.showResult = true;
        this.comm.confirm("领取成功，是否立即使用此券", "温馨提示", {
            confirmButtonText: "立即使用",
            cancelButtonText: "稍后使用"
          })
          .then(() => {
            this.forward.useExchangeCoupon(giver.coin.id);
          }).catch(() => {
            // 显示领取结果
          });

      },
      reject() {
        this.comm.confirm(`确认拒绝来自${this.giver.name}赠送的兑换券吗？`, "温馨提示", {
            confirmButtonText: "我再想想",
            cancelButtonText: "确认"
          })
          .then(() => {
            //  什么也不做
          }).catch(() => {
            // 提交服务器退回券
            this.forward.index(); //跳转到首页
          });
      }
    },
    mounted() {
      this.comm.debug("query参数", this.$route.query)
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .headImg {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    border: 1px solid #999;
    margin: 40px auto 0px;
    overflow: hidden;
  }

  .list-item {
    margin-bottom: 14px;
    border-radius: 4px;
    border: 1px solid rgba(242, 242, 242, 1);
    padding: 10px;
  }

  .list-item>.title {
    font-size: 20px;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 28px;
  }

  .list-item>.operate>.price {
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 21px;
  }

  .list-item>.more {
    padding: 10px 0px;
    font-size: 12px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 18px;
  }

  .list-item>.more>.info {
    margin: 5px 0px;
  }

</style>
