<template>
  <!-- 审核成功 -->
  <div class="box">
    <div class="information padding">
      <div class="imgBox">
        <img src="../../../../assets/imgs/20150318165059_VUt4x.jpeg" alt="头像">
      </div>
      <div class="msgBox">
        <ul>
          <li class="name">
            王某某
            <i v-if="gender=='male'" class="fa fa-mars male" aria-hidden="true"></i>
            <i v-if="gender=='female'" class="fa fa-mars-stroke female" aria-hidden="true"></i>
          </li>
          <li class="Authenticator">xxx认证者
            <div :class="{backImg:loginStatus==1,backImgs:loginStatus!=1}">
              <span>能量</span>
            </div>
          </li>
          <li class="phone">手机码：13125654565</li>
          <li class="id">身份证号：545452525252525443</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="line"></div>
      <div class="attendBox padding">
        <div class="tit">
          <p>参课信息</p>
          <ul>
            <li>
              <span>服务中心：</span>
              <span>经营能量</span>
            </li>
            <li>
              <span>服务顾问：</span>
              <span>李某某</span>
            </li>
            <li>
              <span>常住地区：</span>
              <span>北京市-市辖区-朝阳区</span>
            </li>
            <li>
              <span>能量顾问：</span>
              <span>郑某某</span>
            </li>
            <li>
              <span>合作伙伴：</span>
              <span>田某某</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.information {
  margin-top: 14px;
  .imgBox {
    width: 30%;
    height: 110px;
    overflow: hidden;
    float: left;
    img {
      width: 100%;
    }
  }
  .msgBox {
    float: left;
    margin-left: 10px;
    position: relative;
    width: calc(70% - 15px);
    ul {
      .name {
        height: 21px;
        font-size: 2rem;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 21px;
        i {
          color: #2cad88;
          width: 15px;
          height: 18px;
        }
        .male {
        }
        .female {
          transform: rotate(180deg);
        }
      }
      .phone {
        width: auto;
        height: 21px;
        font-size: 1.2rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 21px;
        margin-top: 5px;
      }
      .id {
        width: auto;
        height: 21px;
        font-size: 1.2rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 21px;
        margin-top: 8px;
      }
      .Authenticator {
        width: auto;
        height: 20px;
        font-size: 1.4rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #333;
        line-height: 20px;
        margin-top: 13px;

        .backImg {
          width: 50px;
          height: 21px;
          display: inline-block;
          background: url("../../../../assets/imgs/renzensf@2x.png") no-repeat
            left/100%;
          text-align: right;
          line-height: 21px;
          box-sizing: border-box;
          padding-right: 10px;
          span {
            color: #ff622b;
            text-align: right;
            font-size: 1rem;
          }
        }
      }
    }
  }
}
.information:after {
  clear: both;
  content: ".";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}
.attendBox {
  margin-top: 10px;
  .tit {
    p {
      width: auto;
      height: 2.2rem;
      font-size: 1.6rem;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 22px;
      border-bottom: 1px solid #f2f2f2;
      padding-bottom: 10px;
    }
    ul {
      li {
        height: 4rem;
        line-height: 4rem;
        width: 100%;
        border-bottom: 1px solid #f2f2f2;
        span:first-child {
          height: 21px;
          font-size: 1.4rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #333333;
          line-height: 21px;
        }
        span:last-child {
          height: 21px;
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #666;
          line-height: 21px;
        }
      }
    }
  }
}

.footer {
  button {
    width: 100%;
    height: 49px;
    background: #2cad88;
    color: #fff;
    position: fixed;
    bottom: 0;
    border: none;
    border-radius: 0;
  }
}
//分隔线
.line {
  width: 100%;
  height: 10px;
  background: #fcfcfc;
  margin-top: 10px;
}
</style>
<script>
export default {
  name: "AuditSuccess",
  data() {
    return {
      gender: "male",
      loginStatus: 1
    };
  }
};
</script>

