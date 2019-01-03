<template>
  <div id="app">
    <mt-header :title="title || appName">
        <mt-button slot="left" v-if="back!=='false'" @click="returnPage()" icon="back">返回</mt-button>
        <!-- <mt-button icon="more"  slot="right"></mt-button> -->
        <div slot="right">
            <slot name="right"></slot> 
        </div>
    </mt-header>
  </div>
</template>

<script>

export default {
  name: 'TitleBar',
  // back为false时不显示返回按钮
  props: ['title','back'],
  data () {
    return {
      appName:this.cfg.appName,
     
    }
  },
  methods: {
    returnPage: function() {
      this.$router.go(-1);
    }
  },
  mounted(){
    console.log(this.back)
  },
  components:{
  }
}
</script>

<style scoped>
</style>
