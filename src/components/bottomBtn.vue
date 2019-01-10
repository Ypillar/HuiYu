<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 底部按钮组，属性fixed固定底部，disable禁用主按钮，title主按钮标题，showHome true表示显示主页按钮，showService true表示显示联系客服
                支持一个click事件，绑定到主按钮上
 -->
<template>
  <div class="page tleft relative" :style="{zIndex:fixed?'998':'1'}" :class="[fixed?'fixed':'']" ref="refpage">
    <div class="service inline-block" @click="clickService()" v-if="showService">
        <div style="height:15px;"><i class="pointer icon fa fa-headphones" aria-hidden="true"></i> 
        </div>
        <div style="font-size:10px;margin-top: -5px;">客服</div>
    </div>
    <div class="service inline-block" @click="clickService()" v-if="showHome">
        <div style="height:15px;"><i class="pointer icon fa fa fa-home" aria-hidden="true"></i> 
        </div>
        <div style="font-size:10px;margin-top: -5px;">首页</div>
    </div>
    <div class="btn absolute" ref="refbtn">
        <c-button theme="dark" v-on:click="$emit('click')" v-bind:disable="disable" size="big" :angle="true" style="width:100%;">{{title}}</c-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BottomBtn',
  // back为false时不显示返回按钮
  model: {
    event: ['click']
  },
  props: ['fixed','disable','title','showHome','showService'],
  data () {
    return {
        hasMsg:true
      // appName:this.cfg.appName,
    }
  },
  methods: {
    clickService:function(){
        this.forward.service();
    }
  },
  mounted(){
      this.$refs.refbtn.style.width =  this.$refs.refpage.offsetWidth-(this.showService?60:0)-(this.showHome?60:0) +"px";
      // 轮询查询未读消息，如果有未读消息hasMsg=true
    //this.comm.httpPost()
  },
  components:{
  }
}
</script>

<style scoped>
.fixed{
    position: fixed;
}
.page{
    /* z-index: 998; */
    bottom: 0px;
    border-top:1px solid #e3e3e3;
    height: 50px;
    line-height: 50px;
    width: 100%;
    /* background-color: #2CAD88; */
    background-color: white;
    text-align: left;
}
.service{
    color:#666;
    text-align: center;
    width:60px;
    height:50px;
    z-index: 10;
}
.btn{
    /* border:1px solid red; */
    /* float:right; */
    right: 0px;
    top:0;
    z-index: 5;
}
.icon{
    margin-top:10px;
    font-size: 20px;
    vertical-align: top;
}
</style>
