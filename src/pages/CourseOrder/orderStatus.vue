<!--
 * @Author: JuYangjia
 * @Date: 2019-01-11 14:03:02
 * @Description: 订单状态组件
 -->
<template>
  <div class="order-status relative">
    <div class="icon absolute">
      <i class="fa fa-hourglass-end" v-if="status===1" aria-hidden="true"></i>
      <i class="fa fa-check-circle-o" v-if="status===2" aria-hidden="true"></i>
      <i class="fa fa-times-circle-o" v-if="status===3" aria-hidden="true"></i>
    </div>
    <div class="status">
      <div class="main-title font-16" :style="Object.assign(style,{marginTop:subTitle?'0px':'8px'})">{{title}}</div>
      <div class="sub-title font-12" :style="style">{{subTitle}}</div>
    </div>
  </div>
</template>

<script>
//import regex from '../../../share/regex'
  export default {
    name: 'OrderStatus',
    props:{
      status:Number,//1 显示wait图标，2显示完成图标，3显示结束图标
      title:String,
      subTitle:String
    },
    data() {
      return {
        style:{color:'white',fontWeight:'200'}
      }
    },
    methods: {
      
    },
    mounted() {
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-status{
  height: 100px;
  width: 100%;
  background-image: url(../../assets/imgs/dingdanxiangqing_bj@2x.png);
  background-size:cover;
  padding-top:1px;
}
.icon{
  
  font-size: 35px;
  color:white;
  left:30px;top:20px;
}
.status{
  margin: 23px 0px 0px 70px;
  display: inline-block;
}
</style>
