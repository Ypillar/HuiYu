<!--
 * @Author: JuYangjia
 * @Date: 2019-01-09 15:31:50
 * @Description: 兑换券使用（支付占座费）
 -->
<template>
  <div class="seatPayment">
    <div v-show="!showResult">
      <div class="notice">
      <font class="bold">温馨提示：</font>请认真确认参课地点和参课信息，如确认无误请支付占座费领取签到码，按所选信息前往签到处确认。
    </div>
    <div class="choice">
      <div class="area-title">
        请选择参课地点
      </div>
      <div class="choice-item relative" :class="[item.id===select?'selected':'']" v-for="(item, index) in choice" :key="index"
        @click="select=item.id">
        <div class="choiceStatus absolute floatRight" style="right:10px ;top:10px;">
          <img v-if="item.id===select" src="../../../assets/imgs/xuanzhong@2x.png" class="fullSize">
          <img v-if="item.id!==select" src="../../../assets/imgs/weixuanzhong@2x.png" class="fullSize">
        </div>
        <div class="title van-hairline--bottom">
          {{item.term}} {{item.city}} {{item.time}}
        </div>
        <div class="detail tleft">
          <van-row>
            <van-col span="5" class="tright">
              签到地点：
            </van-col>
            <van-col span="19">
              {{item.signAddr}}
            </van-col>
          </van-row>
          <van-row>
            <van-col span="5" class="tright">
              签到时间：
            </van-col>
            <van-col span="19">
              <van-row>
                <van-col span="24" v-for="(time, index) in item.signTime" :key="index">{{time}}</van-col>
              </van-row>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
    <div class="stuInfo">
      <div class="area-title">
        完善参课信息
        <div class="subTitle">
          以下信息仅作为签到现场使用，如有疑问请联系客服
        </div>
      </div>
      <div class="personal">
        <div class="headImg inline-block">
          <img :src="personal.headImg" class="fullSize"  v-if="(!isProxy && hasPersonalInfo) || (isProxy && hasPersonalInfo && forOther==='0')"/>
          <div class="fullSize center" style="border-radius:4px;border:1px dashed #e3e3e3;" v-if="(!isProxy && !hasPersonalInfo) || (isProxy && (forOther==='1' || !hasPersonalInfo))">
            <img src="../../../assets/imgs/shangchuan@2x.png" style="margin-top:20px;">
          </div>
        </div>
        <div class="info inline-block" v-if="(!isProxy && hasPersonalInfo) || (isProxy && hasPersonalInfo && forOther==='0')">
          <van-row>
            真实姓名：{{personal.name}}
          </van-row>
          <van-row>
            手机号码：{{personal.mobile}}
          </van-row>
          <van-row>
            身份证号：{{personal.cert}}
          </van-row>
        </div>
        <div class="info inline-block" v-if="(!isProxy && !hasPersonalInfo) || (isProxy && (forOther==='1' || !hasPersonalInfo))">
          <van-row>
             <van-field style="padding: 0px;" v-model="inputPersonal.name" :error="!inputPersonal.name" placeholder="请输入参课人真实姓名" />
          </van-row>
          <van-row>
            <van-field style="padding: 0px;" v-model="inputPersonal.mobile" :error="!inputPersonal.mobile" placeholder="请输入参课人手机号码" />
          </van-row>
          <van-row>
            <van-field style="padding: 0px;" v-model="inputPersonal.cert" :error="!inputPersonal.cert" placeholder="请输入参课人身份证号" />
          </van-row>
        </div>
        <div class="personal" style="font-size:16px;" v-if="isProxy">
          <div class="floatLeft" style="margin-right:20px;">是否代Ta人缴纳</div>
          <van-radio-group class="floatLeft" v-model="forOther">
          <van-radio name="1" checked-color="#2CAD88">是</van-radio>
          <van-radio name="0" checked-color="#2CAD88">否</van-radio>
</van-radio-group>
        </div>
      </div>
    </div>
    <div class="seatInfo" style="margin-top:30px;">
      <div class="area-title">
        <div>参课占座</div>
        <div class="subTitle">
          {{isBack?'此期课程结束后原路返还':'此期课程不可退'}}
        </div>
      </div>
      <div style="font-size:16px;color:#333;line-height:22px;font-weight:400;">
        <div class="floatLeft">占席费用</div>
        <div class="floatRight">￥{{price}}/位</div>
      </div>
    </div>
    <pay-type v-model="payType" style="margin-top:40px;padding:0px;" :options="payTypeOption"></pay-type>

    <div class="bottom-btn-palce"></div>
    <bottom-btn :fixed="true" :disable="false" title="确认并支付" show-service="true" v-on:click="onSubmit()"></bottom-btn>
    </div>
    <div v-show="showResult">
      <!-- <result-page image="zhifushibai_qs@2x.png" title="支付失败" sub-title="" desc="订单将于24:00:00后自动取消，请及时支付">
        <div slot="btn">
          <c-button  theme="light" v-on:click="forward.order(2)"  size="small" style="margin-right:20px;">稍后支付</c-button>
          <c-button  theme="dark" v-on:click="$router.go(0)"  size="small">重新支付</c-button>
        </div>
      </result-page> -->
      <!-- <result-page image="zhfuchneggong_qs@2x.png" title="支付成功" sub-title="￥1000.00" desc="请前往「我的-待签到」订单查看课程签到码">
        <div slot="btn">
          <c-button  theme="light" v-on:click="forward.index()"  size="small" style="margin-right:20px;">返回首页</c-button>
          <c-button  theme="dark" v-on:click="forward.order(1)"  size="small">查看订单</c-button>
        </div>
      </result-page> -->
      <result-page image="zhfuchneggong_qs@2x.png" title="代缴成功" sub-title="￥1000.00" desc="参课信息已通过短信告知了Ta，请提醒本人携带好证件准时参课">
        <div slot="btn">
          <c-button  theme="light" v-on:click="forward.index()"  size="small" style="margin-right:20px;">返回首页</c-button>
          <c-button  theme="dark" v-on:click="forward.order(1)"  size="small">查看订单</c-button>
        </div>
      </result-page>
    </div>
  </div>
</template>

<script>
  import regex from '../../../share/regex'
  import PayType from '../../Curriculum/PayType'
  export default {
    name: 'SeatPayment',
    data() {
      return {
        showResult:false,
        id: this.$route.query.id, //兑换券
        select: 1,
        payType: "weixin",
        uploadImg:false,
        isProxy: true,// 是否代理商
        forOther:"0",// 是否为他人代缴
        hasPersonalInfo: true,// 是否有个人信息
        isBack: true, //是否可退
        price: "200.00", //占席费用
        choice: [{
            id: 1,
            term: "第三十三期",
            city: "北京",
            time: "01-02 08:00 ～ 01-03 17:00",
            signAddr: "北京市高碑店长城酒店2楼会议厅",
            signTime: ["2019-01-23 08:00 至 2019-01-23 9:00", "2019-01-24 19:00 至 2019-01-24 20:00"]
          },
          {
            id: 2,
            term: "第三十三期",
            city: "北京",
            time: "01-02 08:00 ～ 01-03 17:00",
            signAddr: "北京市高碑店长城酒店2楼会议厅",
            signTime: ["2019-01-23 08:00 至 2019-01-23 9:00", "2019-01-24 19:00 至 2019-01-24 20:00"]
          }
        ],
        inputPersonal:{
          headImg:"",
          name: "",
          mobile: "",
          cert: ""
        },
        personal: {
          headImg: "static/tempImg/head.png",
          name: "王小贱",
          mobile: "15823564879",
          cert: "500236199012030548"
        },
        payTypeOption: [{
            label: '微信支付',
            value: 'weixin',
            img: "static/image/weixinzhifu@2x.png"
          },
          {
            label: '银联支付',
            value: 'unionpay',
            img: "static/image/yinlianzhifu@2x.png"
          }
        ],
      }
    },
    methods: {
      submtOrder(){
        this.showResult=true;
      },
      onSubmit() {
        if((this.isProxy && this.forOther==="1")||(!this.isProxy && !this.hasPersonalInfo)||(this.isProxy && this.forOther==="0" && !this.hasPersonalInfo)){
          // 1.代理商且为他人支付
          // 2.非代理商且没有个人信息
          // 3.代理商为自己占座且没有个人信息
          // 校验输入
          if(!this.uploadImg){this.comm.msg("请上传图片");return false;}
          if(!this.inputPersonal.name){this.comm.msg("请填写姓名");return false;}
          if(!regex.isMobile(this.inputPersonal.mobile)){this.comm.msg("请填写合法的手机号码");return false;}
          if(!regex.isIDCard(this.inputPersonal.cert)){this.comm.msg("请填写合法的身份证号码");return false;}
        }
        


        // 其他情况不需要校验输入
        // 1.个人用户没有认证信息
        // 2.代理商没有认证信息且为自己买课，为他人买课不提醒
        let that = this;
        if ((!this.isProxy && !this.hasPersonalInfo) || (this.isProxy && !this.hasPersonalInfo && this.forOther==="0")) {
          this.comm.confirm("参课信息是否同步到您个人资料信息， 下次无需再输入信息？ ", "温馨提示", {
              cancelButtonText: "暂不同步",
              confirmButtonText: "立即同步"
            })
            .then(() => {
              // 提交服务器修改设置
              // 同步信息并占位
              that.submtOrder();
            }).catch(() => {
              //直接占位
              that.submtOrder();
            });
        } else {
          // 直接占位
          that.submtOrder();
        }

      }
    },
    mounted() {
      this.comm.debug("query参数", this.$route.query);
      // TODO 如果传了orderId，需要根据orderId去把相关信息自动填入
    },
    components: {
      PayType
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .seatPayment {
    padding: 14px;
  }

  .notice {
    font-size: 12px;
    font-weight: 500;
    color: rgba(255, 98, 43, 1);
    line-height: 18px;
  }

  .choice {
    margin-top: 10px;
  }

  .area-title {
    font-size: 16px;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
    padding: 10px 0px;

  }

  .area-title>.subTitle {
    margin-top: 3px;
    font-size: 12px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 17px;
  }

  .choice>.choice-item {
    border-radius: 4px;
    border: 1px solid rgba(242, 242, 242, 1);
    margin: 5px 0px;
    padding: 10px;
  }

  .choice>.selected {
    border: 1px solid #2CAD88 !important;
  }

  .choice>.choice-item>.title {
    padding: 5px 0px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 95%;
  }

  .choice>.choice-item>.choiceStatus {
    width: 20px;
    height: 20px;
  }

  .choice>.choice-item>.detail {
    font-size: 12px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 18px;
    padding: 10px 0px;
  }

  .stuInfo {
    margin-top: 10px;
  }

  .stuInfo>.personal>.headImg {
    height: 100px;
    width: 100px;
    border-radius: 4px;
  }

  .stuInfo>.personal>.info {
    padding: 0px 0px 0px 8px;
    vertical-align: top;
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 21px;
  }

  .stuInfo>.personal>.info>div {
    margin: 10px 0px;
  }

  .van-radio{display: inline-block;margin-right: 10px;}

</style>
