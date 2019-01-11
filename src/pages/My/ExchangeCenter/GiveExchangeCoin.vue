<!--
 * @Author: JuYangjia
 * @Date: 2019-01-10 10:23:06
 * @Description: 赠送兑换券页面
 -->
<template>
  <div>
    <title-bar title="兑换券赠送" :back="true"></title-bar>
    <div class="padding14">
      <div class="list-item">
        <div class="title">
          {{item.name}}
        </div>
        <div class="operate van-hairline--bottom">
          <div class="price inline-block">
            ￥{{item.price}}
          </div>
        </div>
        <div class="more">
          <div class="info">
            编号： {{item.id}}
          </div>
          <div class="info">
            获得时间： {{item.getTime}}
          </div>
          <div class="info">
            有效期至： {{item.expireTime}}
          </div>
        </div>
      </div>
      <div style="margin-top:20px;">
        <div class="font-16">
          赠送方式 <span class="font-14">(选择一种)</span>
        </div>
        <div class="font-14" style="margin-top:10px;">
          1.出示此二维码，面对面扫码赠送
        </div>
        <div class="font-14">
          2.将二维码保存为图片分享给好友
        </div>

        <div class="qrcode">
          <div class="qrborder">
            <img :src="qrcodeSrc" class="fullSize" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //import regex from '../../../share/regex'
  export default {
    name: 'GiveExchangeCoin',
    data() {
      return {
        
        item: {
          id: this.$route.query.id,
          name: "经营能量兑换券",
          price: '500.00',
          getTime: '2019-09-09 12:00:23',
          expireTime: '2019-10-09 12:00:23'
        },
        qrcodeSrc: "/static/tempImg/2code.png"
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
  .qrcode {
    margin-top: 30px;
    width: 100%;
    text-align: center;

  }

  .qrborder {
    background-color: rgb(230, 230, 230);
    border-radius: 4px;
    width: 200px;
    height: 200px;
    padding: 6px;
    margin: 0 auto;
  }

  .list-item {
    margin-bottom: 14px;
    border-radius: 4px;
    border: 1px solid rgba(242, 242, 242, 1);
    padding: 10px;
  }

  .list-item>.title {
    font-size: 20px;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 28px;
  }

  .list-item>.operate>.price {
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 21px;
  }

  .list-item>.more {
    padding: 10px 0px;
    font-size: 12px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 18px;
  }

  .list-item>.more>.info {
    margin: 5px 0px;
  }

</style>
