<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 操作指南列表页面
 -->
<template>
  <div class="aboutus">
    <title-bar title="操作指南手册" :back="true">
      <div slot="right">
        <!-- 右上角要放自己的按钮，或其他html，放这里，比如这里放了一个消息组件 -->
        <!-- 消息组件支持文字标题、图标颜色自定义 -->
        <!-- <messager title="" color="black"></messager> -->
      </div>
    </title-bar>
    <van-cell title="认证操作指南" @click.native="forward.helpDetail('auth')" is-link value="" style="border-top:1px solid #efefef;">
      <img slot="icon" src="../../assets/imgs/renzhengzhinan@2x.png" width="24" height="24" style="margin-right:5px;">
    </van-cell>
    <van-cell title="签到操作指南" @click.native="forward.helpDetail('sign')" is-link value="" style="border-top:1px solid #efefef;">
      <img slot="icon" src="../../assets/imgs/qiandaozhinan@2x.png" width="24" height="24" style="margin-right:5px;">
    </van-cell>
     <van-cell title="预约操作指南" @click.native="forward.helpDetail('appoint')" is-link value="" style="border-top:1px solid #efefef;">
       <img slot="icon" src="../../assets/imgs/yuyuezhinan@2x.png" width="24" height="24" style="margin-right:5px;">
    </van-cell>
     <van-cell title="兑换操作指南" @click.native="forward.helpDetail('exchange')" is-link value="" style="border-top:1px solid #efefef;">
       <img slot="icon" src="../../assets/imgs/duihuanzhinan@2x.png" width="24" height="24" style="margin-right:5px;">
    </van-cell>
     <van-cell title="登录操作指南" @click.native="forward.helpDetail('login')" is-link value="" style="border-top:1px solid #efefef;">
       <img slot="icon" src="../../assets/imgs/dengluzhinan@2x.png" width="24" height="24" style="margin-right:5px;">
    </van-cell>
  </div>
</template>

<script>
  import regex from '../../share/regex'
  export default {
    name: 'Help',
    data() {
      return {

      }
    },
    methods: {
        
    },
    mounted() {
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
