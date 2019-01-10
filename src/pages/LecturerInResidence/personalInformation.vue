<template>
  <!-- 讲师入驻个人信息 -->
  <div class="box padding">
    <p class="reminder">温馨提示：入驻信息仅作为慧宇审核使用，不会向第三方透露，请放心如实填写</p>
    <div class="process">
      <workflow
        v-bind:group="[{id:1,name:'个人信息'},{id:2,name:'身份信息'},{id:3,name:'入驻审核'}]"
        select="2"
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
        border-bottom:1px solid #f2f2f2;
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
          border:none;
          padding-bottom: 1rem;
        }
      }
    }
  }
}
</style>
<script>
export default {
  name: "PersonalInformation"
};
</script>

