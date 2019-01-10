<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 课程购买支付页面
 -->
<template>
  <div class="center" style="background-color:rgb(251, 251, 251);">
    <div v-show="!showResult">
      <pay-type v-model="checked" :options="payTypeOptions"></pay-type>
      <div class="transeInfo tleft" v-if="checked==='transfer'">
        <div class="title">
          汇款信息如下:
        </div>
        <div class="transeDetail">
          <div>账号名：北京慧宇智业教育科技有限公司</div>
          <div>开户银行：中国建设银行股份有限公司北京财满街支行</div>
          <div>地址：北京市朝阳区朝阳路85号院4号楼4A57室</div>
          <div>账号：11050172790000000525</div>
        </div>
        <div class="title">
          汇款凭证上传:
        </div>
        <div class="transeDetail center">
          <div class="upload">
            <img src="../../assets/imgs/shangchuan@2x.png" style="margin-top:20px;">
          </div>
        </div>
      </div>
      <div class="payInfo tleft">
        <div class="title bold" style="border-bottom:1px solid #efefef;padding-left:0px;">
          支付明细
        </div>
        <div class="payInfoDetail">
          <div class="inline-block">课程名称</div>
          <div style="float:right;">
            {{curriculumInfo.name}}
          </div>
        </div>
        <div class="payInfoDetail">
          <div class="inline-block">课程票价</div>
          <div style="float:right;">
            ￥{{parseFloat(curriculumInfo.price).toFixed(2)}}/张
          </div>
        </div>
        <div class="payInfoDetail">
          <div class="inline-block">课程票数</div>
          <div style="float:right;">
            x{{curriculumInfo.count}}
          </div>
        </div>
        <div class="payInfoDetail">
          <div class="inline-block">支付金额</div>
          <div style="float:right;">
            ￥{{parseFloat(curriculumInfo.price*curriculumInfo.count).toFixed(2)}}
          </div>
        </div>
      </div>
      <div class="bottom-btn-palce" style="background-color:white;"></div>
      <bottom-btn :fixed="true" :disable="false" title="确认并支付" show-service="true" v-on:click="charge()"></bottom-btn>
    </div>
    <div v-show="showResult">
        <!-- 操作成功 -->
        <!-- <result-page image="zhfuchneggong_qs@2x.png" title="操作成功" sub-title="¥1000.00" desc="参课信息已通过短信告知了Ta，请提醒本人携带好证件准时参课">
          <div slot="btn">
            <c-button  theme="light"  v-on:click="buyMore()" size="small" style="margin-right:20px;">继续购买</c-button>
            <c-button  theme="dark" v-on:click="coinCertificate()"  size="small">查看兑换券</c-button>
          </div>
        </result-page> -->
        <!-- 转账结果显示 -->
        <!-- <result-page image="shenhe_qs@2x.png" title="提交成功" sub-title="" desc="等待财务确认审核款项，预计1-3个工作日， 结果将以短信形式通知">
          <div slot="btn">
            <c-button  theme="light" v-on:click="contact()"  size="small" style="margin-right:20px;">联系客服</c-button>
            <c-button  theme="dark"  v-on:click="buyMore()" size="small" >继续购买</c-button>
          </div>
        </result-page> -->
        <!-- 支付失败 -->
        <result-page image="zhifushibai_qs@2x.png" title="支付失败" sub-title="" desc="订单将于24:00:00后自动取消，请及时支付">
          <div slot="btn">
            <c-button  theme="light" v-on:click="goWaitPay()"  size="small" style="margin-right:20px;">稍后支付</c-button>
            <c-button  theme="dark"  v-on:click="payAgin()" size="small" >重新支付</c-button>
          </div>
        </result-page>
        
    </div>
  </div>
</template>

<script>
  import regex from '../../share/regex'
  import PayType from './PayType'
  export default {
    name: 'Payment',
    data() {
      return {
          showResult:false,
        checked: "weixin",
        curriculumInfo: {
          name: this.$route.query.name,
          order: this.$route.query.order,
          price: this.$route.query.price,
          count: this.$route.query.count
        },
        payTypeOptions:[{
            label: '微信支付',
            value: 'weixin',
            img:"static/image/weixinzhifu@2x.png"
          },
          {
            label: '银联支付',
            value: 'unionpay',
            img:"static/image/yinlianzhifu@2x.png"
          },
          {
            label: '对公转账',
            value: 'transfer',
            img:"static/image/duigongzhuanzhang@2x.png",
            desc:"对公转账需要在转账后上传付款凭证"
          }
        ]
      }
    },
    methods: {
      charge: function () {
        //提交支付并显示支付结果
        if(this.checked==='transfer'){
            //检查是否上传了转账凭证
        }
        this.showResult=true;
      },
      buyMore:function(){
          this.forward.curriculum(1123,'custom');// 跳转到经营详情
      },
      coinCertificate:function(){
          this.forward.coinCertificate(1);// 跳转到兑换券
      },
      contact:function(){
          this.forward.service();
      },
      goWaitPay:function(){
          this.forward.order(2);// 跳转到订单页面
      },
        payAgin:function(){
            //重新支付
            this.$router.go(0)
            //this.showResult=false;
        }
    },
    mounted() {
      console.log("query参数", this.$route.query);
      // TODO 查询订单状态是否可以支付
    },
    components: {
      PayType
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .payInfo {
    background-color: white;
    margin: 0px 14px;
  }

  .payInfo .payInfoDetail {
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 20px;
    padding: 5px 0px;
  }

  .transeInfo {
    background-color: white;
  }

  .title {
    height: 22px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
    margin-top: 10px;
    padding: 5px 14px;

  }

  .transeDetail {
    padding: 5px 14px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 17px;
  }

  .transeDetail>div {
    margin-bottom: 5px;
  }

  .transeDetail .upload {
    border: 1px dashed #e3e3e3;
    width: 60%;
    height: 100px;
    margin: 0px auto;

  }

</style>
