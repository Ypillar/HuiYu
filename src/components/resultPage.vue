<template>
  <div id="app" class="page">
    <!-- <title-bar title="" back="">
      <div slot="right">
      </div>
    </title-bar> -->
    <div class="img">
        <img v-bind:src="imageUrl"/>
    </div>
    <div class="result-title">
        {{title}}
    </div>
    <div class="result-sub-title">
        {{subTitle}}
    </div>
    <div class="result-descript">
        {{desc}}
    </div>
    <div class="result-btn">
        <slot name="btn"></slot>
    </div>
  </div>
</template>

<style scoped>
.page{text-align: center;}
.img{
    margin-top: 60px;
    width: 100%;
}
.img>img{width: 183px;height: 162px;}
.result-title{
    margin-top: 20px;text-align: center;font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:22px;
}
.result-sub-title{
    margin-top: 5px;
}
.result-descript{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:20px;
    width: 240px;
    margin:5px auto;
}
.result-btn{
    margin-top: 30px;
}

</style>

<script>
// 跳转示例：/result?image=&title=&subTitle=&desc=
export default {
  name: 'ResultPage',
  // back为false时不显示返回按钮
  props: ['image','title','subTitle','desc'],
  data () {
    return {
    //   param:this.$route.query,
      imageUrl:this.cfg.location+"/static/image/"+this.image
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


