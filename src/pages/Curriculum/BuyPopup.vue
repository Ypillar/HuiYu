<template>
  <div class="center">
    <mt-popup v-model="visible" position="bottom" :closeOnClickModal="false" class="mint-popup mint-popup-4 mint-popup-bottom">
        <div class="center relative tleft" style="height:337px;" :style="{width:comm.getClientWidth()+'px'}">
            <div class="center relative titleBar">
              购买
              <i class="fa fa-times absolute" style="right:10px;top:8px;" @click="$emit('close')" aria-hidden="true"></i>
            </div>
            <div class="notice tleft">
              <span class="bold">温馨提示</span>：凡购买数量大于1时，将以兑换码形式发到您账户。可在「我的-兑换中心」兑换生成电子票，或赠送给他人兑换成电子票，参课信息及课程说明兑换时补充
            </div>
            <div class="price">
              <div class="inline-block">电子票价</div>
              <div style="float:right;">￥{{price.toFixed(2)}}/张</div>
            </div>
            <div class="choice">
              <div>
                选择数量
              </div>
              <div style="margin-top:10px;">
                <div class="inline-block center radius choice-item" @click="onChoice(item)" :class="[choiceItem===item.id?'choice-item-select':'']"
                  v-for="(item, index) in choice" :key="index">{{item.count}}
                 </div>
                 <div class="inline-block center radius choice-item" style="width:60px" @click="onCustom()" :class="[choiceItem===-1?'choice-item-select':'']">
                   <input type="number" style="width:60px;border:none;" @blur="onCustomBlur()" v-model="customCount" placeholder="其他数量" oninput="if(value.length>6)value=value.slice(0,6)" class="center">
                 </div>
              </div>
            </div>
            <div class="price">
              <div class="inline-block">合计</div>
              <div style="float:right;color:#2CAD88">￥{{total.toFixed(2)}}</div>
            </div>
            <div style="width:100%;border-top:1px solid #e3e3e3;">
              <c-button class="inline-block" theme="light-no-border" size="mid" :angle="true" @click.native="$emit('close')" style="width:49%;">取消</c-button>
              <c-button class="inline-block" theme="dark"  size="mid" :angle="true" @click.native="onSubmit()" style="width:50%;">提交</c-button>
            </div>
        </div>
    </mt-popup>
  </div>
</template>

<script>
import regex from '../../share/regex'
  export default {
    name: 'BuyPopup',
    model:{
      event:['close','submit']
    },
    props:{ 
        visible:Boolean,
        price:Number,
        id:String
    },
    data() {
      return {
        customCount:"",
        total:this.price*1,
        choiceItem:1,
        choice:[{id:1,count:1},{id:20,count:20},{id:50,count:50},{id:100,count:100}]
      }
    },
    methods: {
      onSubmit:function(){
        if(this.choiceItem===-1){
          if(!regex.isPositiveInteger(this.customCount)){
            this.comm.msg("请输入正整数");return;
          }
          if(Number(this.customCount)===0){
            this.comm.msg("请输入大于0的数");return;
          }
          this.$emit('submit',Number(this.customCount));
        }else{
          this.$emit('submit',this.choice.find(o=>o.id===this.choiceItem).count);
        }
      },
      onCustom:function(){
        this.choiceItem=-1;
      },
      onCustomBlur:function(){
        if(!regex.isPositiveInteger(this.customCount)){
          this.comm.msg("请输入正整数");return;
        }
        if(Number(this.customCount)===0){
          this.comm.msg("请输入大于0的数");return;
        }
        this.total=this.price*Number(this.customCount);
      },
      onChoice:function(item){
        this.choiceItem = item.id;
        this.total=this.price*item.count;
      },

    },
    mounted() {
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titleBar{
  width:100%;border-bottom:1px solid #e3e3e3;height:35px;line-height:35px;font-size:16px;
}
.notice{
  padding:5px 14px;font-size:12px;font-weight:500;color:rgba(255,98,43,1);line-height:18px;margin-top:5px;
}
.price{margin:14px 14px 0px;padding:0px 0px 14px;height:22px;text-align:left;font-size:16px;border-bottom:1px solid #e3e3e3;}
.choice{font-size:16px;padding:14px;}
.choice-item{
  height:30px;;line-height:30px;width:54px;border:1px solid #e3e3e3;margin:0px 5px;color:#999;
}
.choice-item-select{
  border:1px solid #2CAD88!important;
  color:#2CAD88!important;
}
</style>
