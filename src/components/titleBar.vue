<template>
  <div class="header-page">
    <van-nav-bar :title="title || appName" left-text="" :left-arrow="true">
      <van-icon name="arrow-left" size="20px" slot="left" style="color:black;" v-if="back" @click="returnPage()"/>
      <div slot="left" v-if="!back"></div>
      <!-- <mt-button slot="left"   icon="back" style="color:black;"></mt-button> -->
      <div slot="right">
          <slot name="right"></slot> 
      </div>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>
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
  box-shadow:0px 2px 4px 0px rgba(18,117,88,0.12);
}

</style>
