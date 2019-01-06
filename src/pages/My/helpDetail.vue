<template>
  <div class="aboutus">
    <title-bar :title="title+'指南手册'" :back="true">
      <div slot="right">
        <!-- 右上角要放自己的按钮，或其他html，放这里，比如这里放了一个消息组件 -->
        <!-- 消息组件支持文字标题、图标颜色自定义 -->
        <!-- <messager title="" color="black"></messager> -->
      </div>
    </title-bar>
    操作内容待定
  </div>
</template>

<script>
  import regex from '../../share/regex'
  export default {
    name: 'HelpDetail',
    data() {
      return {
        type:this.$route.query.type,
        title:""
      }
    },
    methods: {
        
    },
    mounted() {
      switch(this.$route.query.type){
        case "auth":this.title="认证";break;
        case "sign":this.title="签到";break;
        case "appoint":this.title="预约";break;
        case "exchange":this.title="兑换";break;
        case "login":this.title="登录";break;
      }
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aboutus {
    background-color: rgb(247, 247, 247);
    height: 100%;
  }


</style>
