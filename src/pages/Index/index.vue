<template>
  <div class="box">
    <div class="signIn">
      <modal :visible="popupVisible" v-on:close="popupVisible=false">
        <div class="signInBack" slot="content">
          <div class="headName">
            <img src="../../assets/imgs/20150318165059_VUt4x.jpeg" alt>
            <span>王艳丽最美</span>
          </div>
          <p class="className">《经营能量》</p>
          <p class="signMsg">签到时间已到，请前往签到处</p>
          <p class="signAddres">签到地点</p>
          <p class="addres">北市朝阳区某某酒店2楼会议室</p>
          <p class="btn">立即签到</p>
        </div>
      </modal>
    </div>
    <div class="greet">
      <span>Hi 亲爱的王燕</span>
      <i class="rightRcon">
        <messager title color="#222222"></messager>
      </i>
    </div>
    <div class="banner">
      <img :src="imageUrl">
    </div>
    <!-- 重磅推荐 -->
    <div class="padding heavyRecommendation">
      <p class="title">
        <span>重磅推荐</span>
      </p>
      <div class="radiusImg">
        <img :src="imageUrl">
      </div>
      <p class="information">
        <span>经营能量</span>
        <small>王昆老师/讲师团</small>
      </p>
    </div>
    <!-- 讲师入驻 -->
    <div class="padding settledIn">
      <img src="../../assets/imgs/jiangshiruzhu@2x.png">
    </div>
    <!-- 其它课程 -->
    <div class="padding heavyRecommendation padBottom">
      <p class="title">
        <span>其它课程</span>
      </p>
      <div class="radiusImg">
        <img :src="imageUrl">
      </div>
      <p class="information">
        <span>家庭能量</span>
        <small>王昆老师/讲师团</small>
      </p>
    </div>
    <tabbar :number="1"></tabbar>
  </div>
</template>
<style lang="scss" scoped>
.box {
  //顶部的欢迎和消息
  .greet {
    width: 100%;
    height: 44px;
    background: rgba(255, 255, 255, 1);
    position: relative;
    border-radius: 4px;
    span {
      width: 10.8rem;
      height: 2.4rem;
      font-size: 1.7rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #222222;
      line-height: 2.4rem;
      display: inline-block;
      position: absolute;
      top: 1.3rem;
      left: 1.4rem;
    }
    .rightRcon {
      position: absolute;
      right: 13px;
      top: 13px;
    }
  }
  //广告图
  .banner {
    width: 100%;
    height: 20rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  //重磅推荐/其它课程
  .heavyRecommendation {
    margin-top: 3rem;
    .title {
      font-size: 2rem;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
    .radiusImg {
      margin-top: 10px;
      width: 100%;
      height: 186px;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .information {
      margin-top: 10px;
      span {
        font-size: 1.6rem;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }

      small {
        font-size: 1.4rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-left: 5px;
      }
    }
  }
  //讲师入驻
  .settledIn {
    width: 100%;
    height: 74px;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 20px;
    img {
      width: 100%;
    }
  }
  //签到弹窗
  .signIn {
    .signInBack {
      width: 30rem;
      height: 40rem;
      background: url("../../assets/imgs/qiandao_bg@2x@2x.png") no-repeat left
        top/100% 100%;
      .headName {
        padding-top: 2.8rem;
        padding-left: 1.8rem;
        text-align: left;
        img {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          vertical-align: middle;
        }
        span {
          font-size: 1.6rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #ffffff;
          margin-left: 1rem;
          margin-top: 2px;
        }
      }
      .className {
        width: 144px;
        height: 3.3rem;
        font-size: 2.4rem;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #ffffff;
        line-height: 3.3rem;
        margin-left: 0.4rem;
        margin-top: 1.4rem;
      }
      .signMsg {
        width: 20.8rem;
        height: 2.2rem;
        font-size: 1.6rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #ffffff;
        line-height: 2.2rem;
        margin-top: 0.5rem;
        margin-left: 1.8rem;
      }
      .signAddres {
        width: 8.8rem;
        height: 2.8rem;
        font-size: 2rem;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #ffffff;
        line-height: 2.8rem;
        margin-top: 2rem;
        margin-left: 1.8rem;
      }
      .addres {
        width: 16rem;
        height: 4.4rem;
        font-size: 1.6rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #ffffff;
        line-height: 2.2rem;
        margin-left: 1.8rem;
        margin-top: 1rem;
        text-align: left;
      }
      .btn {
        width: 13rem;
        height: 4.1rem;
        background: linear-gradient(
          136deg,
          rgba(255, 173, 144, 1) 0%,
          rgba(253, 106, 99, 1) 100%
        );
        border-radius: 8px;
        line-height: 4.1rem;
        color: #fff;
        margin-top: 2rem;
        margin-left: 1.8rem;
        font-size: 2em;
      }
    }
  }
}
</style>

<script>
export default {
  components: {},
  data() {
    return {
      //   param:this.$route.query,
      imageUrl: this.cfg.location + "/static/image/" + "timg.jpg",
      popupVisible: true
    };
  },
  methods: {
    onclick(n) {
      console.log(n);
    }
  }
};
</script>
