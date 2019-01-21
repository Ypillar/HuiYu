<template>
  <div class="box padding">
    <span>证件后六位：</span>
    <input type="text" placeholder="请输入参课人员身份证号码后6位" v-model="idValue">
    <div class="btn">
      <van-button size="large">核实</van-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  span {
    color: #333;
    margin-top: 30px;
    display: block;
    height: 20px;
    font-size: 1.4rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
  }
  input {
    border: none;
    border-bottom: 1px solid #f0f0f0;
    width: 80%;
    margin-top: 10px;
    padding: 10px 0;
    height: 20px;
    font-size: 1.4rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #999999;
    line-height: 20px;
  }
  .btn {
    button {
      width: 100%;
      border-radius: 50px !important;
      margin-top: 40px;
      background: #2cad88;
      color: #fff;
    }
  }
}
</style>
<script>
export default {
  name: "Verify",
  data() {
    return {
      idValue: ""
    };
  }
};
</script>
