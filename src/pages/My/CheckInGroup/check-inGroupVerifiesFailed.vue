<template>
  <div class="box">
    <result-page
      image="shenheshibai_qs@2x.png"
      title="很遗憾，只有签到组有扫码权限呦~"
      desc="长按或扫一扫下方二维码，了解更多精彩课程"
    >
      <!-- btn区域 自定义html，想显示什么显示什么 -->
      <div slot="btn" v-if="btnSucces">
        <c-button theme="dark" v-on:click="onclick()" size="small">确定</c-button>
      </div>
    </result-page>
   <img class="code" src="../../../assets/imgs/20150318165059_VUt4x.jpeg" v-if="!btnSucces">
  </div>
</template>
<style lang="scss" scoped>
.code {
  width: 132px;
  height: 132px;
  margin: 0 auto;
  margin-top: 44px;
  display: block
}
</style>

<script>
import QRCode from "qrcodejs2";
export default {
  name: "Check-inGroupVerifiesFailed",
  data() {
    return {
      number: "123456789", //二维码内容
      btnSucces: true //是否成功
    };
  },
 
  methods: {
   
  }
};
</script>
