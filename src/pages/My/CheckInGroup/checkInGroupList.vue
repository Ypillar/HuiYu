<template>
  <div class="box padding">
    <div class="item">
      <div class="imgBox">
        <img src="../../../assets/imgs/20150318165059_VUt4x.jpeg" alt>
      </div>
      <div class="msgBox">
        <ul>
          <li>
            <span>王昆</span>
            <small>12345678998</small>
          </li>
          <li class="id">54544443345426755655</li>
          <li class="codeYes">已扫码</li>
          <li class="lastDigits">扫码尾号：00909</li>
        </ul>
      </div>
    </div>
     <div class="item">
      <div class="imgBox">
        <img src="../../../assets/imgs/20150318165059_VUt4x.jpeg" alt>
      </div>
      <div class="msgBox">
        <ul>
          <li>
            <span>王昆</span>
            <small>12345678998</small>
          </li>
          <li class="id">54544443345426755655</li>
          <li class="codeNo">末扫码</li>
          <li class="lastDigits">扫码尾号：00909</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.item {
  margin-top: 14px;
  margin-bottom: 20px;
  .imgBox {
    width: 110px;
    height: 110px;
    border-radius: 4px;
    overflow: hidden;
    float: left;
    img {
      width: 100%;
    }
  }
  .msgBox {
    float: left;
    margin-left: 14px;
    height: 110px;
    position: relative;
    ul {
      li {
        span {
          display: inline-block;
          width: auto;
          height: 22px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          line-height: 22px;
          font-size: 1.6rem;
          color: #333;
        }
        small {
          font-size: 1.2rem;
          font-family: PingFangSC-Medium;
          font-weight: 400;
          color: #999;
        }
      }
      .id {
        width: 145px;
        height: 20px;
        font-weight: 400;
        line-height: 20px;

        font-size: 1.4rem;
        color: #666;
        font-family: PingFangSC-Medium;
        margin-top: 5px;
      }
      .codeYes {
        width: 48px;
        height: 22px;
        font-weight: 500;
        line-height: 22px;

        font-size: 1.6rem;
        color: #999;
        font-family: PingFangSC-Medium;
        margin-top: 10px;
      }
      .codeNo {
        font-size: 1.6rem;
        color: #2cad88;
        font-family: PingFangSC-Medium;
        margin-top: 10px;
      }
      .lastDigits {
        font-size: 1.4rem;
        color: #999;
        margin-top: 14px;
        font-family: PingFangSC-Regular;
        position: absolute;
        bottom: 0;
      }
    }
  }
}
.item:after{
    clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;
}
</style>
<script>
export default {
  name: "CheckInGroupList"
};
</script>

