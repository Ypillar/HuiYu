<template>
 <div class="navBox">
   <div class="btnReturn" @click="returnPage()">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
   </div>
  
   <span>{{titName}}</span>
 </div>
</template>
<style lang="scss" scoped>
.navBox{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid #f0f0f0;
    
    .btnReturn{
      width: 40px;
      height: 100%;;
      float: left;
    }
}

</style>

<script>
export default {
  props: ['title'],
  data:function(){
    return{
      titName:this.title
    }
  },
  methods: {
    returnPage: function() {
      this.$router.go(-1);
    }
  }
};
</script>

