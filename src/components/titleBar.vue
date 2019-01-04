<template>
  <div class="header-page">
    <mt-header :title="title || appName">
        <mt-button slot="left" v-if="back" @click="returnPage()" icon="back" style="color:black;"></mt-button>
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
  },
  components:{
  }
}
</script>

<style scoped>
.header-page{
  border-bottom:1px solid #e3e3e3;
}
.mint-header{
  color:#222222;
}

</style>
