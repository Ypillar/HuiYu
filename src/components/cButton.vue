<template>
  <div class="btn_page" @click="onclick()">
    <div class="btn pointer" :class="[theme,size?size:'big',disable?'disabeld-btn-'+theme:'',angle?'':'radius']">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'cButton',
  model: {
    event: 'click'
  },
  props: {
    disable: Boolean,// true禁用，禁用不会执行点击事件
    theme: String,//dark light
    size: String,// big mid small
    angle:Boolean// true为直角边框
  },
  data () {
    return {
      //_size:'big'
      // appName:this.cfg.appName,
    }
  },
  methods: {
    onclick:function(){
      // console.log(this.disable)
      if(!this.disable){
        this.$emit('click');
      }
    }
  },
  mounted(){
    // console.log(this.disable,typeof this.disable)
  },
  components:{
  }
}
</script>

<style scoped>
.btn_page{
  display: inline-block;
}
.big{
  min-width:120px;height:35px;
  line-height: 35px;
  font-size: 18px;
}
.mid{
  min-width:100px;height:25px;
  line-height: 25px;
  font-size: 16px;
}
.small{
  min-width:80px;height:26px;
  line-height: 26px;
  font-size: 12px;
}

.mini{
  padding:2px 5px!important;
  min-width:54px;height:20px;
  line-height: 20px;
  font-size: 14px;
}

.radius{
  border-radius: 25px;
}
  .btn{
    padding:6px 20px;
    text-align: center;
    border: 1px solid #2CAD88;
    
  }
  .dark{
    background-color: #2CAD88;
    color: white;
  }
  .light{
    color: #2CAD88;
  }
  .light-no-border{
    border: 1px solid transparent;
    color: #2CAD88;
  }

  .disabeld-btn-light{
  border: 1px solid #D8D8D8!important;
  color:rgb(175, 175, 175)!important;
}
.disabeld-btn-dark{
  border: 1px solid #D8D8D8!important;
  background-color: #D8D8D8!important;
  color:rgb(161, 161, 161)!important;
}
.disabeld-btn-light-no-border{
  color:rgb(175, 175, 175)!important;
}
</style>
