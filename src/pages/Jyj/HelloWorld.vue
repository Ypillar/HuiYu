<template>
  <div id="app">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left"> 
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
      <mt-field label="captcha" v-model="captcha">
        <img src="@/assets/logo.png"  >
      </mt-field>
    <!-- <router-link to="/hello2">
      
       
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
      captcha:"",
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleClick1:function(){
      this.comm.msgSuccess()
    },
    handleClick: function() {
      //this.$toast('Hello world!');
      // this.comm.msgSuccess();
      //this.comm.msgWarning("操作警告");
      this.comm.msgError("加速动力开发就")
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
    TestC
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
