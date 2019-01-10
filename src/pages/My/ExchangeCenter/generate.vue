<!--
 * @Author: JuYangjia
 * @Date: 2019-01-09 14:44:46
 * @Description: 生成兑换券页面
 -->
<template>
  <div>
    <div v-if="!showResult">
    <title-bar title="生成兑换券" :back="true"></title-bar>
    <div class="title van-hairline--bottom">
      {{title}}
    </div>
    <div class="info">
      可生成总张数: {{allowCnt}} 张
    </div>
    <div class="info">
      已生成张数: {{alreadyCnt}} 张
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

    <van-number-keyboard :show="showNumberInput" extra-key="" close-button-text="完成" @blur="showNumberInput = false"
          @input="onInput" @delete="onDelete" @hide="onHideNumInput" :style="numKeyBoardStyle"/>

    <div class="bottom-btn-palce"></div>
    <bottom-btn :fixed="true" :disable="false" title="生成" show-service="true" v-on:click="onSubmit()"></bottom-btn>
    </div>
    <div v-if="showResult">
      <result-page image="shengcheng@2x.png" title="生成成功"  desc="前往兑换中心查看">
          <!-- btn区域 自定义html，想显示什么显示什么 -->
          <div slot="btn">
            <c-button  theme="light" v-on:click="$router.go(0)"  size="small" style="margin-right:20px;">继续生成</c-button>
            <c-button  theme="dark" v-on:click="forward.coinCertificate()"  size="small">兑换中心</c-button>
          </div>
        </result-page>
    </div>
  </div>
</template>

<script>
import regex from '../../../share/regex'
  export default {
    name: 'Generate',
    data() {
      return {
        numKeyBoardStyle:{zIndex:1000},

        showResult:false,

        // 服务器获取的信息
        title:"幸福经营能量",
        allowCnt:1000,
        alreadyCnt:20,

        showNumberInput: false,
        customCount: "",
        choiceItem: 1,
        choice: [{
          id: 1,
          count: 5
        }, {
          id: 2,
          count: 10
        }, {
          id: 3,
          count: 15
        }, {
          id: 4,
          count: 20
        }]
      }
    },
    methods: {
      onSubmit: function () {
        let count = 0;
        if (this.choiceItem === -1) {
          if (!regex.isPositiveInteger(this.customCount)) {
            this.comm.msg("请输入正整数");
            return;
          }
          if (Number(this.customCount) === 0) {
            this.comm.msg("请输入大于0的数");
            return;
          }
          //this.$emit('submit', Number(this.customCount));
          count = Number(this.customCount);
        } else {
          count = Number(this.choice.find(o => o.id === this.choiceItem).count);
          //this.$emit('submit', this.choice.find(o => o.id === this.choiceItem).count);
        }
        if(this.allowCnt-this.alreadyCnt-count<0){
          this.comm.msg(`您最多还能生成${this.allowCnt-this.alreadyCnt}张`);return;
        }
        // 请求服务器生成
        // 显示生成结果
        this.showResult=true;
      },
      onCustom: function () {
        this.choiceItem = -1;
        this.showNumberInput = true;
      },
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
    mounted() {
     
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    font-size:16px;
font-weight:600;
color:rgba(51,51,51,1);
line-height:22px;
padding:14px 0px;margin:0px 14px;
  }

  .info{
    padding:5px 14px;
    font-size:14px;
font-weight:400;
color:rgba(102,102,102,1);
line-height:20px;
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
