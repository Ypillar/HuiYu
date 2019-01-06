<template>
  <div class="box padding">
    <span>证件后六位：</span>
    <input type="text" placeholder="请输入参课人员身份证号码后6位" v-model="idValue">
    <div class="btn">
      <mt-button type="primary">核实</mt-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  span {
    color: #333;
    font-size: 14px;
    margin-top: 30px;
    display: block;
  }
  input {
    border: none;
    border-bottom: 1px solid #f0f0f0;
    width: 80%;
    margin-top: 10px;
    padding: 10px 0;
  }
  .btn {
    button {
      width: 100%;
      border-radius: 50px !important;
      margin-top: 40px;
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
