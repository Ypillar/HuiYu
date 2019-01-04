<template>
  <div class="page center relative" :style="{zIndex:fixed?'998':'1'}" :class="[fixed?'fixed':'']" ref="refpage">
    <div class="service absolute" @click="clickService()">
        <div style="height:15px;"><i class="pointer icon fa fa-headphones" aria-hidden="true"></i> 
        </div>
        <div style="font-size:10px;margin-top: -5px;">客服</div>
    </div>
    <div class="btn" ref="refbtn">
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
  props: ['fixed','disable','title'],
  data () {
    return {
        hasMsg:true
      // appName:this.cfg.appName,
    }
  },
  methods: {
    
    clickService:function(){
        //this.$router.push("/");
        this.comm.msg("跳转客服")
    }
  },
  mounted(){
      this.$refs.refbtn.style.width =  this.$refs.refpage.offsetWidth-60 +"px";
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
    width:60px;
    height:50px;
    z-index: 10;
}
.btn{
    /* border:1px solid red; */
    float:right;
    z-index: 5;
}
.icon{
    margin-top:10px;
    font-size: 20px;
    vertical-align: top;
}
</style>
