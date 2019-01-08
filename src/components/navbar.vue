<template>
  <div class="page center navbar">
    <div class="navitem" v-for="(item, index) in group" :key="index" :style="{width:(100/group.length)-1+'%'}" @click="$emit('click',item)">
      <div class="title">{{item.name}}</div>
      <div class="line" v-if="item.id==select"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  // back为false时不显示返回按钮
  model:{
    event:'click'
  },
  props: ['group','select'],
  data () {
    return {
        itemWidth:0
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
    //(this.)
  },
  components:{
  }
}
</script>

<style scoped>
.navbar{
  width:100%;
  border-bottom: 1px solid #efefef;
  padding:10px 0px 0px;
  
}
.navitem{display: inline-block;font-size:14px;text-align: center;}
.navbar .navitem .title{
  

}
.navbar .navitem .line{
  width:20px;
  margin:0 auto;
  margin-top:5px;
  border-bottom: 2px solid #05AFAF;
}
 
</style>
