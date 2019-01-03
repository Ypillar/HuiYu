<template>
  <div id="app" class="page">
    <div class="btn" :class="theme">{{title}}</div>
  </div>
</template>

<script>

export default {
  name: 'cButton',
  // back为false时不显示返回按钮
  props: ['title','theme'],
  data () {
    return {
      // appName:this.cfg.appName,
    }
  },
  methods: {
    
  },
  mounted(){
  },
  components:{
  }
}
</script>

<style scoped>
.page{
display: inline-block;
}
  .btn{
    width:120px;height:35px;
    line-height: 35px;
    border-radius: 20px;
    border: 1px solid #2CAD88;
    
  }
  .dark{
    background-color: #2CAD88;
    color: white;
  }
  .light{
    color: #2CAD88;
  }
</style>
