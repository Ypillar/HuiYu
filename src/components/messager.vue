<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 消息组件，支持title显示到图标下方，支持color改变图标颜色
 -->
<template>
  <div class="page center inline-block">
    <div class="icon">
        <div v-if="hasMsg" class="point"></div>
        <i class="pointer icon fa fa-bell-o" :style="{color:color?color:'white'}" @click="goMsgPage()" aria-hidden="true"></i> 
    </div>
    <div>{{title}}</div>
  </div>
</template>

<script>

export default {
  name: 'Messager',
  // back为false时不显示返回按钮
  props: ['title','color'],
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
.page .icon{
  height:30px;
    position: relative;
}
.page .icon>i{
    font-size: 20px;
}
.point{
    position: absolute;
    z-index: 2;
    width: 8px;
    height:8px;
    background-color: red;
    border-radius: 20px;
    right: 0;
    top:10px;
}
 
</style>
