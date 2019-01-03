<template>
  <div id="app">

    <!-- 结果展示 -->
    <result-page v-if="showResult" image="zhfuchneggong_qs@2x.png" title="操作成功" sub-title="¥1000.00" desc="参课信息已通过短信告知了Ta，请提醒本人携带好证件准时参课">
      <div slot="btn">
        <c-button @click.native="aaa()" title="回到首页" theme="light"></c-button>
        <c-button title="重新编辑" theme="dark"></c-button>
      </div>
    </result-page>


    <div v-if="!showResult">
      <title-bar title="" back="">
        <div slot="right">
          <!-- 右上角内容放这里 -->
          <messager title="" color=""></messager>
        </div>
      </title-bar>

      <div style="padding:30px 0;">
        <workflow v-bind:group="[{id:1,name:'注册'},{id:2,name:'完善资料'},{id:3,name:'完成'}]" select="2"></workflow>

        <result-page image="zhfuchneggong_qs@2x.png" title="操作成功" sub-title="¥1000.00" desc="参课信息已通过短信告知了Ta，请提醒本人携带好证件准时参课">
          <div slot="btn">
            <c-button @click.native="aaa()" title="回到首页" theme="light"></c-button>
            <c-button title="重新编辑" theme="dark"></c-button>
          </div>
        </result-page>
      </div>

        <mt-field label="captcha" v-model="captcha">
          <img src="@/assets/logo.png"  >
        </mt-field>
      <!-- <router-link to="/result?image=zhfuchneggong_qs@2x.png&title=操作成功&subTitle=¥1000.00&desc=参课信息已通过短信告知了Ta，请提醒本人携带好证件准时参课">
        跳转到结果页面
      </router-link> -->
      <mt-button @click.native="handleClick1">按钮</mt-button>
      <mt-button @click.native="handleClick">按钮</mt-button>
      <!-- <mt-button @click.native="qc">请求按钮</mt-button> -->
      123123144234234232

      <test-c><div slot="aa">111</div><div slot="bb">aaa</div></test-c>
      <test-c>222</test-c>
      <test-c>333</test-c>
      <i class="fa fa-camera-retro fa-5x"></i>
      <i class="mint-toast-icon mintui mintui-more"></i>
      <i class="mint-toast-icon mintui mintui-back"></i>
      <i class="mint-toast-icon mintui mintui-search"></i>
      <i class="mint-toast-icon mintui mintui-field-error"></i>
      <i class="mint-toast-icon mintui mintui-field-warning"></i>
      <i class="mint-toast-icon mintui mintui-success"></i>
      <i class="mint-toast-icon mintui mintui-field-success"></i>
    </div>
    
  </div>
</template>

<script>

import Vue from 'vue'
import TestC from './TestC';

// import api from './../serveci/dataServeci';
//Vue.component(TestC.name, TestC);

// import { Field } from 'mint-ui';

export default {
  name: 'HelloWorld',
  data () {
    return {
      //group:,
      showResult:false,
      captcha:"",
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleClick1:function(){
      // this.comm.msgSuccess()
      this.showResult=true;
    },
    aaa:function(){
      this.comm.msg(11111111)
    },
    handleClick: function() {
      this.$toast('Hello world!');
      // this.comm.msgSuccess();
      this.comm.msg("操作警告");
      //this.comm.msgWarning("操作警告");
      // this.comm.msgError("加速动力开发就")
      //this.comm.msgBox("sdfsf");
      // this.comm.msgBox("sdfsf").then(()=>{
      //   //alert(1)
      // });
      // this.comm.confirm("sffff").then(()=>{
      //   //alert(234234)
      // })
    },
    // qc:function(){
    //    return api.getXXX().then(({ data }) => {
    //        console.log(data)
    //     });
    // }
  },
  mounted(){
    // Vue.http.get("http://localhost:8080").then(function(res){
    //     // console.log(res)
    // }).catch(function(){

    // });
  },
  components:{
    TestC,
    // resultPage
    // titleBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
