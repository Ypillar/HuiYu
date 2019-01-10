<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 消息中心页面
 -->
<template>
  <div>
    <title-bar title="消息中心" :back="true">
    </title-bar>
    <van-cell  @click.native="forward.messageDetail(1,'系统')" is-link value="" style="border-top:1px solid #efefef;">
      <div slot="title">
        <div class="font-16" style="font-weight:400;">系统消息</div>
        <div class="font-14" style="color:#999" v-if="sysCnt===0">暂无消息</div>
        <div class="font-14" style="color:#999" v-if="sysCnt>0">新消息<span style="color:#FF622B">「{{sysCnt}}条」</span></div>
      </div>
      <img slot="icon" src="../../assets/imgs/xitongxiaoxi@2x.png" width="32" height="32" style="margin-right:5px;">
    </van-cell>
    <van-cell  @click.native="forward.messageDetail(2,'认证')" is-link value="" style="border-top:1px solid #efefef;">
      <div slot="title">
        <div class="font-16" style="font-weight:400;">认证消息</div>
        <div class="font-14" style="color:#999" v-if="auditCnt===0">暂无消息</div>
        <div class="font-14" style="color:#999" v-if="auditCnt>0">新消息<span style="color:#FF622B">「{{auditCnt}}条」</span></div>
      </div>
      <img slot="icon" src="../../assets/imgs/renzhengxiaoxi@2x.png" width="32" height="32" style="margin-right:5px;">
    </van-cell>
     <van-cell @click.native="forward.messageDetail(3,'课程')" is-link value="" style="border-top:1px solid #efefef;margin-top:10px;">
       <div slot="title">
        <div class="font-16" style="font-weight:400;">课程通知</div>
        <div class="font-14" style="color:#999" v-if="curriculumCnt===0">暂无消息</div>
        <div class="font-14" style="color:#999" v-if="curriculumCnt>0">新消息<span style="color:#FF622B">「{{curriculumCnt}}条」</span></div>
      </div>
       <img slot="icon" src="../../assets/imgs/kechengxiaoxi@2x.png" width="32" height="32" style="margin-right:5px;">
    </van-cell>
  </div>
</template>

<script>
//import regex from '../../../share/regex'
  export default {
    
    name: 'InformationList',
    data() {
      return {
          sysCnt:0,
          auditCnt:5,
          curriculumCnt:0
      }
    },
    methods: {
      
    },
    mounted() {
     this.comm.debug("query参数", this.$route.query)
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
