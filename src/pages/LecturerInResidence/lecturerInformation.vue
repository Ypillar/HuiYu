<template>
  <!-- 身份信息 -->
  <div class="box padding">
    <p class="reminder">温馨提示：入驻信息仅作为慧宇审核使用，不会向第三方透露，请放心如实填写</p>
    <div class="process">
      <workflow
        v-bind:group="[{id:1,name:'个人信息'},{id:2,name:'身份信息'},{id:3,name:'入驻审核'}]"
        select="2"
      ></workflow>
    </div>

    <div class="idDiv">
      <p class="Tit">资格证书</p>
      <p class="small">证明越充足，越有可能通过审核</p>
      <div class="idImg">
        <div class="upImg">
          <div>
            <img src="../../assets/imgs/shangchuan@2x.png">
          </div>
        </div>
        <div class="textDiv">
          <p class="certificateTit">资格证</p>
          <p class="certificateCont">请提交有效期内的资格证照片，需确保头像和文字清晰</p>
        </div>
      </div>
      <div class="explain">
        <span>证书说明</span>
        <textarea maxlength="200" placeholder="请输入证书说明"></textarea>
      </div>
    </div>
       <div class="idDiv">
     
      <div class="idImg">
        <div class="upImg">
          <div>
            <img src="../../assets/imgs/shangchuan@2x.png">
          </div>
        </div>
        <div class="textDiv">
          <p class="certificateTit">专业证</p>
          <p class="certificateCont" style="margin-top:0">请提交教学能力或专业能力证明：如称职证书、考级证书等（需包含官方印章等有效信息）</p>
        </div>
      </div>
      <div class="explain">
        <span>证书说明</span>
        <textarea maxlength="200" placeholder="请输入证书说明"></textarea>
      </div>
    </div>
    <p class="agreement padBottom">
      入驻即表示同意
      <span>《慧宇千城讲师入驻协议》</span>
    </p>
    <div class="footer">
      <bottom-btn
        :fixed="true"
        :disable="false"
        title="下一步"
        showService="false"
        showHome="true"
        v-on:click="onclick()"
      ></bottom-btn>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  .reminder {
    width: 100%;
    height: 3.6rem;
    font-size: 1.2rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #ff622b;
    line-height: 1.8rem;
    margin-top: 1rem;
  }
  .process {
    margin-top: 2rem;
  }
  .uploadDiv {
    width: 100%;
    .tit {
      width: 5.6rem;
      height: 2.1rem;
      font-size: 1.4rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #333333;
      line-height: 2.1rem;
      display: block;
      float: left;
      margin-top: 2.5rem;
    }
    div {
      width: 7rem;
      height: 7rem;
      border: 1px dashed #d8d8d8;
      border-radius: 4px;
      position: relative;
      float: left;
      margin-left: 1.4rem;
      img {
        width: 3rem;
        height: 3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1.5rem;
        margin-left: -1.5rem;
        display: block;
      }
    }
    .uploadMsg {
      width: calc(100% - 16rem);
      height: 3.4rem;
      font-size: 1.2rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 1.7rem;
      margin-left: 1.4rem;
      display: block;
      float: left;
      margin-top: 1.8rem;
    }
  }
  .uploadDiv:after {
    clear: both;
    content: ".";
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
  }
  .divItem {
    ul {
      li {
        margin-top: 1rem;
        border-bottom: 1px solid #f2f2f2;
        span {
          width: 5.6rem;
          height: 2.1rem;
          font-size: 1.4rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #333333;
          line-height: 2.1rem;
          display: block;
          float: left;
        }
        input {
          width: calc(100% - 8.5rem);
          height: 2.1rem;
          font-size: 1.4rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #333333;
          line-height: 2.1rem;
          margin-left: 1.4rem;
          border: none;
          padding-bottom: 1rem;
        }
      }
    }
  }
  .idDiv {
    .Tit {
      width: auto;
      height: 2rem;
      font-size: 1.4rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #333333;
      line-height: 2rem;
      margin-top: 20px;
    }
    .small {
      width: 324px;
      font-size: 1.2rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #999999;
      margin-top: 4px;
    }
    .idImg {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      div {
        width: 48%;
        border-radius: 5px;
        img {
          width: 100%;
          height: 100%;
        }
        p {
          width: auto;
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #999999;
          line-height: 17px;
          text-align: center;
          margin-top: 10px;
        }
      }
      .upImg {
        position: relative;
        border: 1px dashed #999;
        div {
          width: 100%;
          height: 100%;
        }
        img {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -15px;
          margin-top: -15px;
          border: 1px dashed #999;
        }
      }
    }
    .textDiv {
      height: 92px;

      .certificateTit {
        margin-top: 17px;
        text-align: left;

        height: 20px;
        font-size: 1.4rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #333;
        line-height: 20px;
      }
      .certificateCont {
        margin-top: 5px;
        text-align: left;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #999;
        line-height: 17px;
      }
    }
    .explain {
      width: 100%;
      height: 70px;
      border-radius: 4px;
      background: #f2f2f2;
      margin-top: 10px;
      position: relative;
      span {
        color: #666;
        height: 20px;
        font-size: 1.4rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        line-height: 20px;
        position: absolute;
        left: 1rem;
        top: 1rem;
      }
      textarea {
        width: 100%;
        height: 70px;
        border: none;
        background: #f2f2f2;
        text-indent: 7rem;
        padding: 1.2rem;
        font-size: 1.2rem;
        font-family: PingFangSC-Regular;
        color: #999;
            box-sizing: border-box;
      }
    }
  }
  .agreement {
    width: auto;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #999;
    line-height: 17px;
    margin: 20px 0 10px;
    span {
      color: #666;
    }
  }
}
</style>
<script>
export default {
  name: "LecturerInformation",
  data() {
    return {};
  },
  methods: {}
};
</script>