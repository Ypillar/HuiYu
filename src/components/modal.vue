<template>
  <div class="page center inline-block">
    <mt-popup v-model="visible" popup-transition="popup-fade">
        <div class="center relative">
            <slot name="content"></slot>
            <div class="absolute close">
                <i class="pointer fa fa-times-circle-o" @click="$emit('close')" aria-hidden="true"></i>
            </div>
        </div>
    </mt-popup>
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
    font-size: 25px;margin-left: 48%;margin-top: 20px;color:white;
}
 
</style>
