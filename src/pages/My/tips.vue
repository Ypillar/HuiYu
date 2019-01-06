<template>
    <div class="box padding">
       <result-page image="wuduihuanquan@2x.png" title="暂无兑换券~" v-if="n==1">
          <!-- btn区域 自定义html，想显示什么显示什么 -->
          
        </result-page>
         <result-page image="wuwangluo@2x.png" title="暂无网络~"  v-if="n==2">
          <!-- btn区域 自定义html，想显示什么显示什么 -->
          
        </result-page>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
    name:"Tips",
   data(){
       return{
           n:2//1无兑换券，2无网络
       }
   }
}
</script>
