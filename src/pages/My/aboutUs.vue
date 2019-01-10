<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 关于我们页面
 -->
<template>
  <div class="aboutus">
    <title-bar title="关于我们" :back="true">
      <div slot="right">
        <!-- 右上角要放自己的按钮，或其他html，放这里，比如这里放了一个消息组件 -->
        <!-- 消息组件支持文字标题、图标颜色自定义 -->
        <!-- <messager title="" color="black"></messager> -->
      </div>
    </title-bar>
    <div style="" class="center">
        <img src="static/tempImg/2code.png">
    </div>
    <div class="center">
        慧宇千城由能量时光提供软件服务支持
    </div>
  </div>
</template>

<script>
  import regex from '../../share/regex'
  export default {
    name: 'AboutUs',
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
