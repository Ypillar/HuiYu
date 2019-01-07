<template>
  <div class="tleft">
    <title-bar title="兑换中心" :back="true">
      <div slot="right">
        <!-- 右上角要放自己的按钮，或其他html，放这里，比如这里放了一个消息组件 -->
        <div class="link" @click="forward.generate()">生成</div>
        <div class="link" @click="forward.helpDetail('exchange')">教程</div>
      </div>
    </title-bar>
    <div></div>
  </div>
</template>

<script>
  import regex from '../../../share/regex'
  export default {
    name: 'ExchangeCenter',
    data() {
      return {
        type:this.$route.query.type,
      }
    },
    methods: {
    },
    mounted() {
      console.log("query参数", this.$route.query);
      // TODO 查询订单状态是否可以支付
    },
    components: {
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar>div{font-size: 20px!important;}
</style>
