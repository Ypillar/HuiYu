<template>
  <div class="box">
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
    <tabbar @click="onclick($event)"></tabbar>  
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
  
  .padBottom:after {
    width: 100%;
    height: 70px;
    content: ".";
    display: block;
    visibility: hidden;
  }
}
</style>

<script>
export default {
  components: {},
  data() {
    return {
      //   param:this.$route.query,
      imageUrl: this.cfg.location + "/static/image/" + "timg.jpg"
    };
  },
  methods: {
    onclick(n) {
      console.log(n)
    }
  }
};
</script>
