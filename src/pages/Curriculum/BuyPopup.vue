<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 购买数量组件
 -->
<template>
  <div class="center">
    <van-popup v-model="visible" position="bottom" :close-on-click-overlay="false" style="border: 1px solid white;">
      <div class="center relative tleft" :style="{width:comm.getClientWidth()+'px',height:showNumberInput?'507px':'338px'}">
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
              {{customCount?customCount:'其他'}}
              <!-- <input type="number" style="width:50px;border:none;height:20px;" maxlength="6" @blur="onCustomBlur()" v-model="customCount" placeholder="其他" oninput="if(value.length>6)value=value.slice(0,6)" class="center"> -->
            </div>
          </div>
        </div>
        <div class="price">
          <div class="inline-block">合计</div>
          <div style="float:right;color:#2CAD88">￥{{total.toFixed(2)}}</div>
        </div>
        <van-number-keyboard :show="showNumberInput" extra-key="" close-button-text="完成" @blur="showNumberInput = false"
          @input="onInput" @delete="onDelete" @hide="onHideNumInput" />
        <div style="width:100%;border-top:1px solid #e3e3e3;">
          <c-button class="inline-block absolute" theme="light-no-border" size="mid" :angle="true" @click.native="$emit('close')"
            style="width:49%;left:0;">取消</c-button>
          <c-button class="inline-block absolute" theme="dark" size="mid" :angle="true" @click.native="onSubmit()"
            style="width:49%;right:0;">提交</c-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import regex from '../../share/regex'

  export default {
    name: 'BuyPopup',
    model: {
      event: ['close', 'submit']
    },
    props: {
      visible: Boolean,
      price: Number,
      id: String
    },
    data() {
      return {
        showNumberInput: false,
        customCount: "",
        total: this.price * 1,
        choiceItem: 1,
        choice: [{
          id: 1,
          count: 1
        }, {
          id: 2,
          count: 20
        }, {
          id: 3,
          count: 50
        }, {
          id: 4,
          count: 100
        }]
      }
    },
    methods: {
      onSubmit: function () {
        if (this.choiceItem === -1) {
          if (!regex.isPositiveInteger(this.customCount)) {
            this.comm.msg("请输入正整数");
            return;
          }
          if (Number(this.customCount) === 0) {
            this.comm.msg("请输入大于0的数");
            return;
          }
          this.$emit('submit', Number(this.customCount));
        } else {
          this.$emit('submit', this.choice.find(o => o.id === this.choiceItem).count);
        }
      },
      onCustom: function () {
        this.choiceItem = -1;
        this.showNumberInput = true;
      },
      // onCustomBlur:function(){
      //   if(!regex.isPositiveInteger(this.customCount)){
      //     this.comm.msg("请输入正整数");return;
      //   }
      //   if(Number(this.customCount)===0){
      //     this.comm.msg("请输入大于0的数");return;
      //   }
      //   this.total=this.price*Number(this.customCount);
      // },
      onChoice: function (item) {
        this.choiceItem = item.id;
        this.total = this.price * item.count;
      },
      onInput(value) {
        console.log(this.customCount,value)
        if (this.customCount === "" && value === 0) {
          return;
        }
        if (this.customCount.length >= 6) {
          this.comm.msg("最大允许输入6位数字");
          return;
        }
        this.customCount += value;
      },
      onDelete() {
        this.customCount = this.customCount.substr(0, this.customCount.length - 1);
      },
      onHideNumInput() {
        this.total = 0.00;
        if (!regex.isPositiveInteger(this.customCount)) {
          this.comm.msg("请输入正整数");
          return;
        }
        if (Number(this.customCount) === 0) {
          this.comm.msg("请输入大于0的数");
          return;
        }
        this.total = this.price * Number(this.customCount);
      }
    },
    mounted() {},
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .titleBar {
    width: 100%;
    border-bottom: 1px solid #e3e3e3;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
  }

  .notice {
    padding: 5px 14px;
    font-size: 12px;
    font-weight: 500;
    color: rgba(255, 98, 43, 1);
    line-height: 18px;
    margin-top: 5px;
  }

  .price {
    margin: 14px 14px 0px;
    padding: 0px 0px 14px;
    height: 22px;
    text-align: left;
    font-size: 16px;
    border-bottom: 1px solid #e3e3e3;
  }

  .choice {
    font-size: 16px;
    padding: 14px;
  }

  .choice-item {
    height: 30px;
    line-height: 30px;
    width: 55px;
    border: 1px solid #e3e3e3;
    margin: 0px 3px;
    color: #999;
  }

  .choice-item-select {
    border: 1px solid #2CAD88 !important;
    color: #2CAD88 !important;
  }

</style>
