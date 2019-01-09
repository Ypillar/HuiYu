<template>
  <!-- <div>登录/非登录</div> -->
  <div class="box">
    <div class="myHead">
      <!-- 已登录 -->
      <div class="header alreadyLoggedIn" v-if="login">
        <div class="bothDiv">
          <div class="headPortrait">
            <img src="../../../assets/imgs/logo.png" alt>
          </div>
          <div class="accounMsg">
            <div class="nameOneDiv">
              <span class="name">张燕</span>
              <div class="borderpt">
                <span>普通</span>
              </div>
              <img src="../../../assets/imgs/weixinbangding.png" alt>
            </div>
            <div class="accounNumber">
              <span>账号：18602383085</span>
            </div>
          </div>
          <div class="setupMessage">
            <div class="icon">
              <i class="rightRcon">
                <messager title color="#ffffff"></messager>
              </i>
              <p>消息</p>
            </div>
            <div class="icon marginRight">
              <i class="diamond" aria-hidden="true"></i>
              <p>设置</p>
            </div>
            <div class="icon marginRight">
              <i class="iconTwo" aria-hidden="true"></i>
              <p>专属码</p>
            </div>
          </div>
        </div>

        <div class="identity">
          <div class="idItem">
            <div :class="{backImg:loginStatus==1,backImgs:loginStatus!=1}">
              <span>弟子</span>
            </div>
          </div>
          <div class="idItem">
            <div :class="{backImg:loginStatus==2,backImgs:loginStatus!=2}">
              <span>能量</span>
            </div>
          </div>
          <div class="idItem">
            <div :class="{backImg:loginStatus==3,backImgs:loginStatus!=3}">
              <span>讲师</span>
            </div>
          </div>
          <div class="idItem">
            <div :class="{backImg:loginStatus==4,backImgs:loginStatus!=4}">
              <span>伙伴</span>
            </div>
          </div>
        </div>
        <div class="padding">
          <div class="myCertification">
            <div class="leftCer">
              <span>我的认证</span>
              <p>合作伙伴/慧宇弟子/报名认证</p>
            </div>
            <div class="rightCer">
              <small :class="{notPass:pass}">
                查看认证
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </small>
              <!-- <small class="notPass">
                认证未通过
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </small>-->
            </div>
          </div>
        </div>
      </div>
      <!-- 未登录 -->
      <div class="header noLogoIn" v-else>
        <div class="headPortrait">
          <img src="../../../assets/imgs/logo.png" alt>
        </div>
        <span class="naem">登录/注册</span>
        <div class="setupMessage">
          <div class="icon">
            <i class="rightRcon">
              <messager title color="#ffffff"></messager>
            </i>
            <p>消息</p>
          </div>
          <div class="icon marginRight">
            <i class="fa fa-cog fa-2x iconSet" aria-hidden="true"></i>
            <p>设置</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="padBottom">
      <!-- 我的管理 -->
      <div class="myManagement" v-if="loginStatus==4">
        <div class="leftCer">
          <span>我的管理</span>
          <p>旗下合作伙伴信息</p>
        </div>
        <div class="rightCer">
          <small :class="{notPass:pass}">
            前往查看
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </small>
          <!-- <small class="notPass">
                认证未通过
                <i class="fa fa-angle-right" aria-hidden="true"></i>
          </small>-->
        </div>
      </div>
      <!-- 签到组 -->
      <div class="orderBox padding" v-if="loginStatus==3">
        <div class="titBox">
          <span class="orderTit">我的签到组</span>
        </div>
        <div class="distinguish">
          <div class="item">
            <img src="../../../assets/imgs/saoyisao.png" alt>
            <span>扫码识别</span>
          </div>
          <div class="item">
            <img src="../../../assets/imgs/shenfenrenzheng_mine.png" alt>
            <span>证件识别</span>
          </div>
        </div>
         <div class="orderNav">
          <router-link class="menuItem" to="keyframes">
            <div class="menuItemIcon widAuto">12000</div>
            <div class="itemText">已签到人数</div>
          </router-link>
          <router-link class="menuItem" to="keyframes">
            <div class="menuItemIcon widAuto">14000</div>
            <div class="itemText">总扫码人数</div>
          </router-link>
          <router-link class="menuItem" to="keyframes">
            <div class="menuItemIcon widAuto">200</div>
            <div class="itemText">我扫码人数</div>
          </router-link>
        </div>
      </div>
      <!-- 我的签到——弟子 -->
      <div class="my-check-in padding" v-if="loginStatus==1">
        <div class="check-in-center">
          <p>签到中心</p>
          <small>以下信息仅作为签到处认证使用，课程结束后将自动消失</small>
        </div>
        <div class="checkBox">
          <ul>
            <li>
              <img src="../../../assets/imgs/20150318165059_VUt4x.jpeg" alt="头像照片" v-on:click="popupVisible=true">
              <div>
                <p>真实姓名：王某某</p>
                <p>手机号码：15454454567</p>
                <p>身份证号：123456789012345678</p>
              </div>
            </li>
            <li>
              <img src="../../../assets/imgs/20150318165059_VUt4x.jpeg" alt="头像照片" v-on:click="popupCode=true">
              <div>
                <p>状态：未扫码</p>
                <p>明细：经营能量</p>
                <p>签到时间：2019-03-09 21:00:00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 全部订单 -->
      <div class="orderBox padding">
        <div class="titBox">
          <span class="orderTit">我的订单</span>
          <small>
            全部订单
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </small>
        </div>
        <div class="orderNav">
          <router-link class="menuItem" to="keyframes">
            <div class="menuItemIcon">
              <img src="../../../assets/imgs/daishenhe.png">
            </div>
            <div class="itemText">待审核</div>
          </router-link>
          <router-link class="menuItem" to="keyframes">
            <div class="menuItemIcon">
              <div class="num">1</div>
              <!-- 消息条数 -->
              <img src="../../../assets/imgs/daifukuan.png">
            </div>
            <div class="itemText">待付款</div>
          </router-link>
          <router-link class="menuItem" to="keyframes">
            <div class="menuItemIcon">
              <img src="../../../assets/imgs/daiqiandao.png">
            </div>
            <div class="itemText">待签到</div>
          </router-link>
          <router-link class="menuItem" to="keyframes">
            <div class="menuItemIcon">
              <img src="../../../assets/imgs/daikaike.png">
            </div>
            <div class="itemText">待开课</div>
          </router-link>
        </div>
      </div>
      <!-- 广告 -->
      <div class="advertisement">
        <img src="../../../assets/imgs/zhinanshouce.png" alt="广告">
      </div>
      <!-- 我的兑换券 -->
      <div class="orderBox margin20 padding">
        <div class="titBox">
          <span class="orderTit">我的兑换券</span>
          <small>
            全部
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </small>
        </div>
        <div class="orderNav">
          <router-link class="menuItem" to="keyframes">
            <div class="menuItemIcon">--</div>
            <div class="itemText">未使用</div>
          </router-link>
          <router-link class="menuItem" to="keyframes">
            <div class="menuItemIcon">--</div>
            <div class="itemText">已送出</div>
          </router-link>
          <router-link class="menuItem" to="keyframes">
            <div class="menuItemIcon">--</div>
            <div class="itemText">已使用</div>
          </router-link>
        </div>
      </div>
      <div class="listDiv margin20 padding">
        <ul>
          <li>
            <img class="timeIcon" src="../../../assets/imgs/lianxikefu.png" alt>
            <div class="timeTit">
              <span>联系客服</span>
              <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
            </div>
          </li>
          <li>
            <img class="timeIcon" src="../../../assets/imgs/yijianfankui.png" alt>
            <div class="timeTit">
              <span>意见反馈</span>
              <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
     <modal :visible="popupVisible" v-on:close="popupVisible=false">
        <div slot="content">
          <div>
           <img style="width:100%;height:100%;display:block;" src="../../../assets/imgs/20150318165059_VUt4x.jpeg" alt="">
          </div>
        </div> 
      </modal>
       <modal :visible="popupCode" v-on:close="popupCode=false">
        <div slot="content">
         <img style="width:100%;height:100%;display:block;" src="../../../assets/imgs/20150318165059_VUt4x.jpeg" alt="">
        </div> 
      </modal>
    <tabbar :number="2"></tabbar>
  </div>
</template>
<style lang="scss" scoped>
.myHead {
  width: 100%;
  background: url("../../../assets/imgs/dingdanxiangqing_bj@2x.png") no-repeat
    left top/100% 100%;
  //未登录高度
  .noLogoIn {
    height: 130px;
  }
  //已登录高度
  .alreadyLoggedIn {
    height: 180px;
    margin-bottom: 45px;
    .bothDiv:after {
      clear: both;
      content: ".";
      display: block;
      width: 0;
      height: 0;
      visibility: hidden;
    }
  }
  .headPortrait {
    width: 7em;
    height: 7em;
    float: left;
    margin-top: 29px;
    margin-left: 14px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .naem {
    font-size: 20px;
    color: #fff;
    margin-top: 51px;
    margin-left: 10px;
    display: block;
    float: left;
  }
  .setupMessage {
    float: right;
    margin-top: 51px;
    margin-right: 14px;
    .icon {
      float: right;
      i {
        color: #fff;
      }
      p {
        font-size: 10px;
        color: #fff;
      }
    }
    .marginRight {
      margin-right: 1rem;
    }
  }
  .accounMsg {
    display: inline-block;
    .nameOneDiv {
      .name {
        font-size: 20px;
        color: #fff;
        margin-top: 40px;
        margin-left: 10px;
        display: block;
        float: left;
      }
      .borderpt {
        float: left;
        box-sizing: border-box;
        width: 44px;
        height: 17px;
        border: 1px solid #fff;
        border-radius: 50px;
        border-bottom-left-radius: 0;
        margin-top: 46px;
        text-align: center;
        margin-left: 5px;
        line-height: 17px;
        span {
          color: #fff;
        }
      }
      img {
        margin-left: 10px;
        margin-top: 46px;
      }
    }
    .accounNumber {
      font-size: 1.2rem;
      color: #fff;
      margin-left: 10px;
      float: left;
      margin-top: 5px;
    }
  }
  //身份
  $color: #fff;
  .identity {
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;

    .idItem {
      flex: auto;
      .backImg {
        width: 63px;
        height: 21px;
        margin: 0 auto;
        background: url("../../../assets/imgs/biapqian@2x.png") no-repeat
          left/100%;
        text-align: right;
        line-height: 21px;
        box-sizing: border-box;
        padding-right: 10px;
        span {
          color: $color;
          text-align: right;
        }
      }
      .backImgs {
        width: 63px;
        height: 21px;
        margin: 0 auto;
        background: url("../../../assets/imgs/biaoqian_hui@2x.png") no-repeat
          left/100%;
        text-align: right;
        line-height: 21px;
        box-sizing: border-box;
        padding-right: 10px;
        span {
          color: $color;
          text-align: right;
          opacity: 0.5;
        }
      }
    }
  }

  //我的认证
  .myCertification {
    width: 100%;
    height: 62px;
    background: $color;
    border-radius: 4px;
    margin-top: 16px;
    box-shadow: 0px 1px 5px 0px rgba(100, 188, 162, 0.11);
    .leftCer {
      display: inline-block;
      margin-top: 10px;
      margin-left: 10px;
      font-family: PingFangSC-Medium;
      span {
        font-size: 1.6rem;
        color: #333;
      }
      p {
        font-size: 12px;
        color: #999;
        margin-top: 3px;
        font-family: PingFangSC-Regular;
      }
    }
    .rightCer {
      float: right;
      margin-top: 21px;
      margin-right: 24px;
      small {
        font-size: 1.4rem;
        color: #666;
        font-family: PingFangSC-Regular;
      }
      .notPass {
        color: #ff622b !important;
      }
    }
  }
}

//我的管理
.myManagement {
  width: 100%;
  height: 62px;
  background: #fff;
  border-radius: 4px;
  .leftCer {
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
    font-family: PingFangSC-Medium;
    span {
      font-size: 1.6rem;
      color: #333;
    }
    p {
      font-size: 12px;
      color: #999;
      margin-top: 3px;
      font-family: PingFangSC-Regular;
    }
  }
  .rightCer {
    float: right;
    margin-top: 21px;
    margin-right: 24px;
    small {
      font-size: 1.4rem;
      color: #666;
      font-family: PingFangSC-Regular;
    }
  }
}
//我的签到
.my-check-in {
  margin-top: 20px;
  .check-in-center {
    p {
      width: auto;
      height: 22px;
      font-size: 1.6rem;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 22px;
    }
    small {
      display: block;
      width: auto;
      font-size: 1.2rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #999;
      line-height: 17px;
      margin-top: 3px;
    }
  }
  .checkBox {
    margin-top: 10px;
    ul {
      li {
        margin-bottom: 20px;
        img {
          display: block;
          width: 30%;

          float: left;
        }
        div {
          float: left;
          margin-left: 14px;
          width: calc(70% - 14px);
          p:first-child {
            width: auto;
            height: 21px;
            font-size: 1.6rem;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: #333;
            line-height: 21px;
            margin-top: 12px;
          }
          p:nth-child(2) {
            width: auto;
            height: 21px;
            font-size: 1.2rem;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: #666;
            line-height: 21px;
            margin-top: 15px;
          }
          p:last-child {
            width: 215px;
            height: 21px;
            font-size: 1.2rem;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: #666;
            line-height: 21px;
            margin-top: 5px;
          }
        }
      }
      li:after {
        clear: both;
        content: ".";
        display: block;
        width: 0;
        height: 0;
        visibility: hidden;
      }
    }
  }
}
//广告
.advertisement {
  width: 100%;
  height: 50px;
  overflow: hidden;
  margin-top: 20px;
  img {
    width: 100%;
  }
}
//我的订单Style
.orderBox {
  margin-top: 14px;
  margin-bottom: 6px;
  .titBox {
    .orderTit {
      font-size: 16px;
      color: #333;
      font-weight: 500;
      font-family: PingFangSC-Medium;
    }
    small {
      float: right;
      color: #999;
      font-size: 12px;
    }
  }

  .orderNav {
    margin-top: 15px;
    display: flex;
    .menuItem {
      flex: auto;
      width: 40px;
      text-align: center;
      .menuItemIcon {
        width: 31px;
        margin: 0 auto;
        height: 29px;
        line-height: 29px;
        font-size: 24px;
        color: #666;
        font-weight: bold;
        position: relative;
        .num {
          width: 15px;
          height: 15px;
          position: absolute;
          top: -7.5px;
          right: -7.5px;
          background: #ff3d29;
          border-radius: 50%;
          line-height: 15px;
          font-size: 1rem;
          color: #fff;
        }
      }
      .widAuto{
        width: auto !important;
      }

      .itemText {
        font-size: 1.2rem;
        color: #666;
        margin-top: 6px;
      }
    }
  }
  //签到组
  .distinguish {
    display: flex;
    justify-content: space-between;
    .item {
      margin-top: 14px;
      width: 160px;
      border: 1px solid #2cad88;
      height: 40px;
      border-radius: 4px;
      line-height: 40px;
      text-align: center;
      img {
        vertical-align: middle;
        margin-top: -4px;
      }
      span {
        font-size: 1.6rem;
        color: #666;
        font-family: PingFangSC-Regular;
        margin-left: 5px;
      }
    }
    .item:first-child {
      margin-right: 5px;
    }
    .item:last-child {
      margin-left: 5px;
    }
  }
}
//列表
.listDiv {
  ul {
    li {
      width: 100%;
      height: 50px;
      line-height: 50px;
      position: relative;
      .timeIcon {
        display: inline-block;
        vertical-align: middle;
      }
      .timeTit {
        display: block;
        border-bottom: 1px solid #f4f4f4;
        margin-left: 34px;
        position: absolute;
        top: 0;
        width: 100%;
        span {
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #666;
        }
        i {
          float: right;
          color: #999;
          margin-right: 34px;
          margin-top: 12px;
        }
      }
    }
    li:last-child .timeTit {
      border-bottom: none;
    }
  }
}
//间距
.margin20 {
  margin-top: 20px;
}
//专属码
.iconTwo {
  display: block;
  width: 18px;
  height: 18px;
  margin: 0 auto;
  margin-bottom: 1px;
  background: url("../../../assets/imgs/wode_erweima@2x.png") no-repeat left
    top/100% 100%;
}
//设置
.diamond {
  display: block;
  width: 18px;
  height: 18px;
  margin: 0 auto;
  margin-bottom: 1px;
  background: url("../../../assets/imgs/shezhi@2x.png") no-repeat left top/100%
    100%;
}
</style>
<script>

export default {
  name: "Home",
  data() {
    return {
      selected: "",
      login: true, //是否登录
      pass: false, //认证是否通过
      loginStatus:1,//登录身份1弟子2能量3讲师4伙伴
      popupVisible:false,
      popupCode:false
    };
  },
  methods:{
    selcet(){

    }
  }
};
</script>