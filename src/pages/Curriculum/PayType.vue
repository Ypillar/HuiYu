<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 支付方式组件
 -->
<template>
  <div class="tleft paytype">
    <div class="title">
      支付方式
    </div>
    <div class="choice">
      <div class="choiceItem"  v-for="(item, index) in options" :key="index" @click="returnBackFn(item)">
        <div class="inline-block">
           <img :src="item.img" style="width:20px;height:20px;vertical-align: bottom;">
          {{item.label}}
          </div>
        <div class="choiceStatus" style="float:right;">
          <img v-if="item.value===value" src="../../assets/imgs/xuanzhong@2x.png" class="fullSize">
          <img v-if="item.value!==value" src="../../assets/imgs/weixuanzhong@2x.png" class="fullSize">
        </div>
        <div class="desc">
          {{item.desc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import regex from '../../share/regex'
  export default {
    name: 'PayType',
    props: {
      value: String,
      options:Array
    },
    model: {
      prop: 'value',
      event: 'returnBack'
    },
    data() {
      return {
        //value: "weixin",
        //options: 
      }
    },
    methods: {
      returnBackFn(item) {  
        // this.value=item.value;
        this.$emit('returnBack', item.value);
      }
    },
    mounted() {},
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paytype{
  padding:14px;
  background-color: white;
}
.title{
  border-bottom: 1px solid #efefef;
  padding:5px;
  height:22px;
font-size:16px;
font-weight:600;
color:rgba(51,51,51,1);
line-height:22px;

}
.choice{
padding:5px;
}
.choice .choiceItem{
  padding: 10px 0px;
  
font-size:16px;
font-weight:400;
color:rgba(51,51,51,1);
line-height:22px;
border-bottom:1px solid #efefef;
}
.choice .choiceItem .desc{
  font-size: 12px;
  color:#999;
}
.choice .choiceItem .choiceStatus{
  width: 20px;
  height: 20px;
}
</style>
