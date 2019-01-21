<template>
  <!-- 讲师入驻个人信息 -->
  <div class="box padding">
    <p class="reminder">温馨提示：入驻信息仅作为慧宇审核使用，不会向第三方透露，请放心如实填写</p>
    <div class="process">
      <workflow
        v-bind:group="[{id:1,name:'个人信息'},{id:2,name:'身份信息'},{id:3,name:'入驻审核'}]"
        select="1"
      ></workflow>
    </div>
    <div class="uploadDiv">
      <span class="tit">真实头像</span>
      <div class="uploadBorder">
        <img src="../../assets/imgs/shangchuan@2x.png">
      </div>
      <span class="uploadMsg">请上传本人真实头像，通过审核后展示在个人中心</span>
    </div>
    <div class="divItem">
      <ul>
        <li>
          <span>真实姓名</span>
          <input type="text" placeholder="真实姓名需和身份证一致">
        </li>
        <li>
          <span>联系方式</span>
          <input type="text" placeholder="默认获取登录手机号">
        </li>
        <li>
          <span>身份证号</span>
          <input type="text" placeholder="请输入您的有效身份证号码">
        </li>
      </ul>
    </div>
    <div class="idDiv">
      <p class="Tit">上传手持身份证照片</p>
      <p class="small">照片须为本人身份证，身份证号须清晰可见且与所填身份证一致</p>
      <div class="idImg">
        <div>
          <img src="../../assets/imgs/uploadId.png">
          <p>(示例图)</p>
        </div>
        <div class="upImg">
          <div>
            <img src="../../assets/imgs/shangchuan@2x.png">
          </div>

          <p>正面照片</p>
        </div>
      </div>
    </div>
    <div class="idDiv">
      <p class="Tit">个人简介</p>
      <p class="small">请尽可能的突出个人的教学方向和经验方式</p>
      <div class="textarea">
        <textarea placeholder="简介内容100字以内" v-model="items.text" ref="count"></textarea>
        <span>{{number}}/100</span>
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
          height: 9rem;
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
        height: 9rem;
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
    .textarea {
      width: 100%;
      height: 160px;
      border-radius: 4px;
      margin-top: 10px;
      position: relative;

      background: #f2f2f2;
      textarea {
        box-sizing: border-box;
        width: 100%;
        height: 13rem;
        font-size: 1.4rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #999999;
        line-height: 20px;
        padding: 10px;
        border: none;
        background: #f2f2f2;
      }
      span {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: auto;
        text-align: right;
        height: 17px;
        font-size: 1.2rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #999999;
        line-height: 17px;
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
  name: "PersonalInformation",
  data() {
    return {
      number: "100",
      items: {
        text: ""
      }
    };
  },
  methods: {
    textareaNumber(v) {
      console.log(v.leng);
    }
  },
  watch: {
    //watch()监听某个值（双向绑定）的变化，从而达到change事件监听的效果
    items: {
      handler: function() {
        var _this = this;
        var _sum = 100; //字体限制为100个
        _this.$refs.count.setAttribute("maxlength", _sum);
        _this.number = _sum - _this.$refs.count.value.length;
      },
      deep: true
    }
  }
};
</script>

