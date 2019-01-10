<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 联系客服页面
 -->
<template>
  <div>
    <title-bar title="联系客服" :back="true">
      <div slot="right">
        <!-- 右上角要放自己的按钮，或其他html，放这里，比如这里放了一个消息组件 -->
        <!-- 消息组件支持文字标题、图标颜色自定义 -->
        <!-- <messager title="" color="black"></messager> -->
      </div>
    </title-bar>
    <div class="title">
        官方客服
    </div>
    <div class="detail">
        服务热线：4000-551-599
        <br>
        人工客服：137-1091-0000
        <br>
        工作时间：9：30~18：00
    </div>

    <div class="title">
        分公司客服
    </div>
    <div class="detail">
        名称：1111-111-111
        <br>
        名称：1111-111-111
    </div>

    <div class="center" style="position:absolute;width:100%;bottom:40px;">
        <div>
            <div class="inline-block qrcode" style="margin-right:20px;">
                <img src="/static/tempImg/2code.png" class="fullSize">
            </div>
            <div class="inline-block qrcode">
                <img src="/static/tempImg/2code.png" class="fullSize">
            </div>
        </div>
        <div>
            <div class="inline-block qrcode-name" style="margin-right:20px;">
                慧宇千城公众号
            </div>
            <div class="inline-block qrcode-name">
                能量时光公众号
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import regex from '../../share/regex'
  export default {
    name: 'CustomerService',
    data() {
      return {
         
      }
    },
    methods: {
    },
    mounted() {
      // TODO 查询订单状态是否可以支付
    },
    components: {
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
      border-bottom: 1px solid #efefef;
    height: 22px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
    margin: 10px 14px;
    padding: 5px 0px;

  }

  .detail {
    padding: 5px 14px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 25px;
  }
  .qrcode{
      height:130px;width:130px;border: 5px solid #efefef;border-radius: 10px;
  }
  .qrcode-name{
      width:130px;color:#999;margin-top:10px;
  }
</style>

