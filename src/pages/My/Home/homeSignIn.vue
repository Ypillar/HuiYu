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
            <div class="backImg">
              <span>弟子</span>
            </div>
          </div>
          <div class="idItem">
            <div class="backImgs">
              <span>能量</span>
            </div>
          </div>
          <div class="idItem">
            <div class="backImgs">
              <span>讲师</span>
            </div>
          </div>
          <div class="idItem">
            <div class="backImgs">
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
              </small> -->
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
      <!-- 签到组 -->
     <div class="orderBox padding ">
        <div class="titBox">
          <span class="orderTit">我的签到组</span>         
        </div>
        <div class="distinguish">
          <div class="item">
            <img src="../../../assets/imgs/saoyisao.png" alt="">
            <span>扫码识别</span>
          </div> <div class="item">
            <img src="../../../assets/imgs/shenfenrenzheng_mine.png" alt="">
            <span>证件识别</span>
          </div>
        </div>
        
      </div>
      <!-- 全部订单 -->
      <div class="orderBox padding ">
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
              
              <div class="num">1</div><!-- 消息条数 -->
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
            <div class="itemText">待审核</div>
          </router-link>
          <router-link class="menuItem" to="keyframes">
            <div class="menuItemIcon">--</div>
            <div class="itemText">待付款</div>
          </router-link>
          <router-link class="menuItem" to="keyframes">
            <div class="menuItemIcon">--</div>
            <div class="itemText">待签到</div>
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
      span {
        font-size: 1.6rem;
        color: #333;
      }
      p {
        font-size: 12px;
        color: #999;
        margin-top: 3px;
      }
    }
    .rightCer {
      float: right;
      margin-top: 21px;
      margin-right: 24px;
      small {
        font-size: 1.4rem;
        color: #666;
      }
      .notPass{
        color: #FF622B !important;
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

      .itemText {
        font-size: 1.2rem;
        color: #666;
        margin-top: 6px;
      }
    }
  }
  //签到组
  .distinguish{
    display: flex;
    justify-content:space-between;
   .item{
     margin-top: 14px;
     width: 160px;
     border:1px solid #2CAD88;
     height: 40px;
     border-radius:4px;
     line-height: 40px;
     text-align: center;
     img{
          vertical-align: middle;
    margin-top: -4px;
     }
     span{
       font-size: 1.6rem;
       color: #666;
       font-family:PingFangSC-Regular;
       margin-left: 5px;
     }
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
  name: "homesignln",
  data() {
    return {
      selected: "",
      login: true, //是否登录
      pass:false,//认证是否通过
    };
  }
};
</script>