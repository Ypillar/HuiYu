<template>
  <div id="app" ref="refpage">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.$refs.refpage.style.height=this.comm.getClientHeight()+"px";
  }
}
</script>

<style lang="scss">
@import "./assets/font-awesome-4.7.0/fonts/font.css";
#app {
  overflow: auto;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
$color-primary: #2CAD88;
.van-dialog__confirm{color:$color-primary;}/* 确认框按钮颜色 */
.van-tabs__line{background-color:$color-primary;}
</style>
