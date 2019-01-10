<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: modal弹窗封装，支持一个visible属性和close事件
 -->
<template>
  <div class="page center relative inline-block">
    <van-popup v-model="visible" :close-on-click-overlay="false" v-on:click-overlay="$emit('close')">
        <div class="center">
            <slot name="content"></slot>
            <!--  -->
        </div>
    </van-popup>
    <!-- <div class="close">
        <i class="pointer fa fa-times-circle-o" @click="$emit('close')" aria-hidden="true"></i>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'Modal',
  model:{
      event:'close'
  },
  // back为false时不显示返回按钮
  props: ['visible'],
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
.close{
    font-size: 20px;margin-left: 48%;margin-top: 20px;color:white;
    position: fixed;
    z-index: 9999;
}
 
</style>
