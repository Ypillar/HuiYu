<!--
 * @Author: JuYangjia
 * @Date: 2019-01-11 13:59:45
 * @Description: 订单详情页面
 -->
<template>
  <div>
    <title-bar title="订单详情" :back="true"></title-bar>
    <order-status :status="orderStatus" :title="statusTitle" :sub-title="statusSubTitle"></order-status>
    <!-- 签到码 -->
    <van-row class="padding14 relative" v-if="showQrcode">
      <div class="font-16">我的签到码</div>
      <div class="qrcode relative">
        <div class="absolute" v-if="qrcodeExpired" style="width: 100%;margin-top: 100px;font-size: 16px;">
          签到码已失效
        </div>
        <div class="qrborder" :style="{opacity:qrcodeExpired?'0.1':'1'}">
          <img :src="order.qrcodeSrc" class="fullSize" />
        </div>
        <div class="font-14" style="margin-top:5px;">前往签到处出示此码核实信息</div>
      </div>
      <div class="split-line"></div>
    </van-row>

    <!-- 参课信息 -->
    <van-row class="padding14 relative" v-if="showPersonal">
      <div class="font-16">参课信息</div>
      <div class="personal">
        <div class="headImg inline-block">
          <img :src="order.headImg" class="fullSize" />
        </div>
        <div class="info inline-block">
          <van-row>
            真实姓名：{{order.name}}
          </van-row>
          <van-row>
            手机号码：{{order.mobile}}
          </van-row>
          <van-row>
            身份证号：{{order.cert}}
          </van-row>
        </div>
      </div>
      <div class="split-line"></div>
    </van-row>

    <!-- 课程信息 -->
    <van-row class="padding14 relative">
      <div class="font-16">课程信息</div>
      <van-row class="course">
        <div class="courseImg inline-block">
          <img :src="order.courseImg" class="fullSize" />
        </div>
        <div class="courseInfo inline-block" style="padding:9px 0px 0px 14px;">
          <van-row class="font-16" style="height:22px;">
            {{order.courseName}}
          </van-row>
          <van-row class="font-12" style="margin-top:3px;height:17px;">
            {{order.courseTerm}} {{order.courseCity}}
          </van-row>
          <van-row class="font-14" style="margin-top:10px;height:20px;">
            {{order.courseTeacher}}
          </van-row>
        </div>
        <van-row v-if="showSign">
          <div class="font-12">签到地点：{{order.signAddress}}</div>
          <div class="font-12">签到时间：<div style="margin-left:20px;" v-for="(signTime, index) in order.signTime" :key="index">{{signTime}}</div>
          </div>
        </van-row>
      </van-row>
      <div class="split-line"></div>
    </van-row>

    <!-- 扫码信息 -->
    <van-row class="padding14 relative" v-if="showScan">
      <div class="font-16">扫码信息</div>
      <div style="margin-top:22px;">
        <van-row class="info-cell">
          <div class="infoLabel">扫码时间</div>
          <div class="infoContent">{{order.scanTime}}</div>
        </van-row>
        <van-row class="info-cell">
          <div class="infoLabel">扫码次数</div>
          <div class="infoContent">{{order.scanTimes}} 次</div>
        </van-row>
        <van-row class="info-cell">
          <div class="infoLabel">核实人员</div>
          <div class="infoContent">{{order.scaner}}</div>
        </van-row>
      </div>
      <div class="split-line"></div>
    </van-row>

    <!-- 订单信息 -->
    <van-row class="padding14 relative">
      <div class="font-16">订单信息</div>
      <!-- 已支付占席费 -->
      <div style="margin-top:22px;" v-if="isPay">
        <van-row class="info-cell">
          <div class="infoLabel">订单编号</div>
          <div class="infoContent">{{order.orderId}}
            <clip-board :copy="order.orderId">
              <div style="border:1px solid #999;padding:0px 5px" class="font-12">复制</div>
            </clip-board>
          </div>
        </van-row>
        <van-row class="info-cell">
          <div class="infoLabel">购票时间</div>
          <div class="infoContent">{{order.buyTime}}</div>
        </van-row>
        <van-row class="info-cell">
          <div class="infoLabel">支付时间</div>
          <div class="infoContent">{{order.payTime}}</div>
        </van-row>
        <van-row class="info-cell">
          <div class="infoLabel">兑换券号</div>
          <div class="infoContent">{{order.coinId}}</div>
        </van-row>
      </div>
      <!-- 已未支付 -->
      <div style="margin-top:22px;" v-if="!isPay">
        <van-row class="info-cell">
          <div class="infoLabel">订单编号</div>
          <div class="infoContent">{{order.orderId}}
            <clip-board :copy="order.orderId">
              <div style="border:1px solid #999;padding:0px 5px" class="font-12">复制</div>
            </clip-board>
          </div>
        </van-row>
        <van-row class="info-cell">
          <div class="infoLabel">下单时间</div>
          <div class="infoContent">{{order.createTime}}</div>
        </van-row>
        <van-row class="info-cell">
          <div class="infoLabel">订单类型</div>
          <div class="infoContent">{{orderType===1?'能量':'占席费'}}</div>
        </van-row>
        <van-row class="info-cell" v-if="orderType===1">
          <div class="infoLabel">数量</div>
          <div class="infoContent">{{order.coinCnt}}张</div>
        </van-row>
        <van-row class="info-cell">
          <div class="infoLabel">订单金额</div>
          <div class="infoContent">{{order.orderTotal}}</div>
        </van-row>
      </div>
      <div class="split-line"></div>
    </van-row>

    <!-- 按钮信息 -->
    <div class="bottom-btn-palce"></div>
    <div class="bottom-btn absolute tright">
      <c-button theme="light" size="mini" style="margin-right:10px;" v-if="!isPay" v-on:click="close()">取消订单</c-button>
      <c-button theme="dark" size="mini" style="margin-right:10px;" v-if="!isPay" v-on:click="rePay()">立即支付</c-button>

      <c-button theme="light" size="mini" style="margin-right:10px;" v-if="isPay" v-on:click="forward.service()">联系客服</c-button>
      <c-button theme="dark" size="mini" style="margin-right:10px;" v-if="isPay" v-on:click="$router.go(-1)">完成</c-button>
    </div>
  </div>
</template>

<script>
  //import regex from '../../../share/regex'
  import OrderStatus from './orderStatus'
  export default {
    name: 'OrderDetail',
    data() {
      return {
        // 界面状态控制
        // 顶部状态
        orderStatus: 1, //1 显示wait图标，2显示完成图标，3显示结束图标
        statusTitle: "等待支付",
        statusSubTitle: "订单将于24:00:00后自动取消",

        showPersonal: false, // 参课信息
        showSign: false, // 签到地点时间
        showQrcode: false, // 签到码
        qrcodeExpired: false, // 签到码已过期
        showScan: false, // 扫码信息
        isPay: false, // 是否已经支付
        orderType: 0, //0初始值， 1能量，2占位费

        order: {
          //二维码
          qrcodeSrc: "/static/tempImg/2code.png",
          scanTime: "2019-01-01 12:00:00",
          scanTimes: 10,
          scaner: "9600",
          // 参课人
          headImg: "static/tempImg/head.png",
          name: "王小贱",
          mobile: "15823564879",
          cert: "500236199012030548",
          // 课程
          courseName: "经营能量",
          courseImg: "/static/tempImg/curriculum.png",
          courseTerm: "第三十期",
          courseCity: "上海",
          courseTeacher: "王琨/慧宇讲师团",
          signAddress: "北京市昌平区温都水城",
          signTime: ['2019-01-23 08:00 至 2019-01-23 9:00', '2019-01-24 19:00 至 2019-01-24 20:00'],
          // 订单信息
          orderId: "231646461111111", //订单编号
          coinId: "123213123", //兑换券号-已支付占席费
          buyTime: "2019-01-01 12:00:00", //购买时间-已支付占席费
          payTime: "2019-01-01 12:00:00", //支付时间-已支付占席费

          createTime: "2019-01-01 12:00:00", //下单时间-待支付占席费、能量
          orderType: "1", // 1能量，2占席费 -待支付占席费、能量
          orderTotal: "200.00", //金额  -待支付占席费、能量
          coinCnt: 500, // 数量 -待支付能量、能量

          orderPrice:"100.00"// 单价，此处用于跳转重新支付传递参数，如果支付页面会重新获取则这里不需要了
        }
      }
    },
    methods: {
    close(){
      this.comm.msg("订单关闭中")
    },
    rePay(){
      this.comm.msg("订单重新支付");
      if(this.orderType===1){
        // 能量重新支付
        this.forward.payment(this.order.orderId,this.order.courseName,this.order.orderPrice,this.order.coinCnt);
      }else if(this.orderType===2){
        // 占席费重新支付
        this.forward.useExchangeCoupon(this.order.coinId,this.order.orderId);
      }
    }
    },
    mounted() {
      this.comm.debug("query参数", this.$route.query);
      /**
       * wait_pay_seat 待支付占席费
       * wait_pay_other_seat 代缴待支付占席费
       * wait_pay_course 待支付能量
       * wait_sign 待签到 
       * complete_back_seat 完成待退占席费
       * complete_pay_other 代缴已完成
       * complete 完成
       * cancel_course 能量订单取消
       * cancel_seat 占席费订单取消
       * cancel_other_seat 代缴占席费订单取消
       */
      // 根据以上类型定制以下参数可以显示不同的页面
      this.orderStatus= 1; //1 显示wait图标，2显示完成图标，3显示结束图标
      this.statusTitle = "等待支付";
      this.statusSubTitle = "订单将于24:00:00后自动取消";
      this.showPersonal = true; // 参课信息
      this.showSign = true; // 签到地点时间
      this.showQrcode = true; // 签到码
      this.qrcodeExpired = true; // 签到码已过期
      this.showScan = true; // 扫码信息
      this.isPay = true; // 是否已经支付
      this.orderType = 2; //0初始值， 1能量，2占位费
    },
    components: {
      OrderStatus
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .qrcode {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }

  .qrborder {
    background-color: rgb(230, 230, 230);
    border-radius: 4px;
    width: 200px;
    height: 200px;
    padding: 6px;
    margin: 0 auto;
  }

  .split-line {
    width: 100%;
    background-color: #FCFCFC;
    height: 10px;
    position: absolute;
    left: 0;
    border-top: 1px solid rgba(242, 242, 242, 1);
  }

  .personal {
    margin-top: 10px;
  }

  .personal>.headImg {
    height: 100px;
    width: 100px;
    border-radius: 4px;
  }

  .personal>.info {
    padding: 0px 0px 0px 8px;
    vertical-align: top;
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 21px;
  }

  .personal>.info>div {
    margin: 10px 0px;
  }

  .course {
    margin-top: 10px;
    white-space: nowrap;
    padding-bottom: 10px;
  }

  .course .courseImg {
    border-radius: 4px;
    overflow: hidden;
    width: 160px;
    height: 90px;
  }

  .course .courseInfo {
    vertical-align: top;
    height: 90px;
  }

  .bottom-btn{bottom:0px;width:100%;border-top:1px solid #efefef;height:50px;line-height:50px;background-color:white;}

</style>
