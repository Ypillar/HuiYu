<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 消息组件，支持title显示到图标下方，支持color改变图标颜色
 -->
<template>
  <div class="messager center inline-block relative">
    <div v-if="hasMsg" class="point absolute"></div>
    <div class="icon">
        <i class="pointer icon fa fa-bell-o" :style="{color:color?color:'white'}" @click="goMsgPage()" aria-hidden="true"></i> 
    </div>
    <!-- <div>{{title}}</div> -->
  </div>
</template>

<script>

export default {
  name: 'Messager',
  // back为false时不显示返回按钮
  props: ['color'],
  data () {
    return {
        hasMsg:true
      // appName:this.cfg.appName,
    }
  },
  methods: {
    goMsgPage:function(){
        this.forward.messageCenter();
    }
  },
  mounted(){
      // 轮询查询未读消息，如果有未读消息hasMsg=true
    //this.comm.httpPost()
  },
  components:{
  }
}
</script>

<style scoped>
.messager{
  width: 19x;
  height: 19px;
}
.messager .icon{
  height:18px;
  width: 18px;
  top: 0px;
  /* width: 20px; */
}
.messager .icon>i{
    font-size: 18px;
}
.point{
    position: absolute;
    top:0;
    z-index: 2;
    width: 8px;
    height:8px;
    background-color: red;
    border-radius: 20px;
    right: 0;
    /* top:10px; */
}
 
</style>
