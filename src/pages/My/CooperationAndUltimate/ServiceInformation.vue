<template>
  <!-- 认证-服务信息 -->
  <div>
    <div class="box padding">
      <p class="reminder">温馨提示：入驻信息仅作为慧宇审核使用，不会向第三方透露，请放心如实填写</p>
      <div class="process">
        <workflow
          v-bind:group="[{id:1,name:'基本信息'},{id:2,name:'服务信息'},{id:3,name:'认证审核'}]"
          select="2"
        ></workflow>
      </div>

      <div class="divItem">
        <ul>
          <li>
            <span>
              服务中心
              <small class="icon-rad">*</small>
            </span>
            <input type="text" placeholder="请选择所属区域">
          </li>
          <li>
            <span>
              服务顾问
              <small class="icon-rad">*</small>
            </span>
            <input type="text" placeholder="请输入服务顾问姓名">
          </li>
          <li>
            <span>能量顾问</span>
            <input type="text" placeholder="请输入能量顾问姓名（选填）">
          </li>
          <li>
            <span>合作伙伴</span>
            <input type="text" placeholder="请输入合作伙伴姓名（选填）">
          </li>
        </ul>
      </div>
      <div class="idDiv padBottom">
        <p class="Tit">备注</p>
        <p class="small">没有涉及到的信息可以通过下方备注区域告知我们</p>
        <div class="textarea">
          <textarea name id placeholder="在此处输入..."></textarea>
        </div>
      </div>
    </div>
    <div class="footer">
      <bottom-btn
        :fixed="true"
        :disable="false"
        title="确认并提交"
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
          position: relative;
        }
        input {
          width: calc(100% - 10rem);
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
    .uploadLicense {
      width: 240px;
      height: 94px;
      border-radius: 4px;
      border: 1px dashed #999;
      margin: 10px auto 0;
      position: relative;
      img {
        width: 30px;
        height: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -15px;
        margin-top: -15px;
        border: 1px dashed #999;
      }
    }
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
}
</style>
<script>
export default {
  name: "ServiceInformation",
  data() {
    return {};
  },
  methods: {}
};
</script>

