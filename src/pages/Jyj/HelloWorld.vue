<template>
  <div>

    <!-- 结果展示 -->
    <!-- <result-page v-if="showResult" image="zhfuchneggong_qs@2x.png" title="操作成功" sub-title="¥1000.00" desc="参课信息已通过短信告知了Ta，请提醒本人携带好证件准时参课">
      <div slot="btn">
        <c-button @click.native="aaa()" title="回到首页" theme="light"></c-button>
        <c-button title="重新编辑" theme="dark"></c-button>
      </div>
    </result-page> -->


    <div v-if="!showResult">
      <!-- 标题栏，支持title、back -->
      <title-bar title="" :back="true">
        <div slot="right">
          <!-- 右上角要放自己的按钮，或其他html，放这里，比如这里放了一个消息组件 -->
          <!-- 消息组件支持文字标题、图标颜色自定义 -->
          <messager title="" color=""></messager>
        </div>
      </title-bar>

      <div style="padding:30px 0;">
        <!-- 工作流，支持group和select两个参数，select为id -->
        <workflow v-bind:group="[{id:1,name:'注册'},{id:2,name:'完善资料'},{id:3,name:'完成'}]" select="2"></workflow>

        <!-- 用变量popupVisible来控制modal的显示和隐藏，为content的slot中写弹窗的具体内容 -->
        <c-button title="弹出签到" theme="dark" v-on:click="popupVisible=true" size="big" style="width:100%;"></c-button>
        <modal :visible="popupVisible" v-on:close="popupVisible=false">
          <div slot="content">
            <div style="width:300px;height:200px;">
              弹窗内容，图片、自定义的元素
            </div>
          </div>
        </modal>


        <!-- 结果页面支持iamge图片（static下iamge文件夹），title，子title，描述desc，还支持一个btn的slot -->
        <result-page image="zhfuchneggong_qs@2x.png" title="操作成功" sub-title="¥1000.00" desc="参课信息已通过短信告知了Ta，请提醒本人携带好证件准时参课">
          <div slot="btn">
            <!-- 按钮支持的属性到cbutton组件内查看，有相应的备注 -->
            <c-button title="小号按钮" theme="dark" v-on:click="onclick()"  size="small" style="margin-right:20px;"></c-button>
            <c-button title="中号按钮" theme="light" v-on:click="onclick()" size="mid" style="width:100%;"></c-button>
            <c-button title="大号按钮" theme="dark" v-on:click="onclick()"  size="big"></c-button>
            <c-button title="直角按钮" theme="dark" v-on:click="onclick()"  size="small" :angle="true"></c-button>
            <c-button title="直角按钮" theme="light" v-on:click="onclick()"  size="big" :angle="true"></c-button>
            <c-button title="大号100%" theme="light" v-on:click="onclick()" v-bind:disable="disbtn"  size="big" style="width:100%;"></c-button>
            <c-button title="大号100%" theme="dark" v-on:click="onclick()" v-bind:disable="disbtn"  size="big" style="width:100%;"></c-button>
          </div>
        </result-page>
      </div>
      <!-- 左侧联系客服，右侧为按钮，支持fixed固定底部，禁用右侧按钮，标题，点击事件 -->
      <bottom-btn :fixed="true" :disable="false" title="提交订单"  v-on:click="onclick()"></bottom-btn>
       
      


      <!-- <router-link to="/">
        跳转到结果页面
      </router-link> -->
      <mt-button @click.native="handleClick1">按钮</mt-button>
      <mt-button @click.native="handleClick">按钮</mt-button>
      
        
      
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
      popupVisible:false,
      disbtn:true,
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
    onclick:function(){
      this.comm.msg(1111111111)
    },
    aaa:function(){
      this.comm.msg(11111111)
    },
    handleClick: function() {
      //this.$toast('Hello world!');
      // this.comm.msgSuccess();
      //this.comm.msg("操作警告");
      this.comm.msgWarning("操作警告");
      //this.comm.msgError("加速动力开发就")
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
