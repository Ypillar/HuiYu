<template>
  <div class="tleft">
    <title-bar title="兑换中心" :back="true">
      <div slot="right">
        <!-- 右上角要放自己的按钮，或其他html，放这里，比如这里放了一个消息组件 -->
        <div class="link" @click="forward.generate()">生成</div>
        <div class="link" @click="forward.helpDetail('exchange')">教程</div>
      </div>
    </title-bar>
    <navbar :group="[{id:1,name:'未使用'},{id:2,name:'已送出'},{id:3,name:'已使用'}]" :select="type" v-on:click="navClick($event)"></navbar>
    
    <!-- 未使用 -->
    <div v-if="type=='1'" style="height:200px;overflow:auto;">
      <mt-loadmore v-on:bottom-status-change="handleBottomChange" v-on:bottom-method="loadBottom" :bottom-all-loaded="allLoaded"
        bottomPullText="up" ref="loadmore">
      <ul>
        <li style="height:80px" v-for="(item,index) in list" :key="index">{{index}}{{ item.message }}</li>
      </ul>
    </mt-loadmore>
    </div>
    <!-- 已送出 -->
    <div v-if="type=='2'">

    </div>
    <!-- 已使用 -->
    <div v-if="type=='3'">

    </div>
  </div>
</template>

<script>
  import regex from '../../../share/regex'
  export default {
    name: 'ExchangeCenter',
    data() {
      return {
        type: this.$route.query.type,
        allLoaded: false,
        page: 0,
        list: [{
          message: ''
        }, {
          message: ''
        }, {
          message: ''
        }, {
          message: ''
        }, {
          message: ''
        }, {
          message: ''
        }, {
          message: ''
        }, {
          message: ''
        }],
        bottomStatus: ''
      }
    },
    methods: {
      navClick: function (e) {
        this.type = e.id;
      },
      handleTopChange: function (status) {
        this.topStatus = status;
        console.log("this.topStatus = " + status);
      },

      handleBottomChange: function (status) {
        this.bottomStatus = status;
        console.log("this.bottomStatus = status; " + status);
      },

      getList: function (page) {
        this.list = this.list.concat([{
          message: ''
        }, {
          message: ''
        }, {
          message: ''
        }, {
          message: ''
        }, {
          message: ''
        }, {
          message: ''
        }, {
          message: ''
        }, {
          message: ''
        }]);
      },

      loadBottom: function () {
        console.log("上拉在执行");
        this.page = this.page + 1;
        console.log("this.page:" + this.page);
        this.getList(this.page);
        if (this.page == 5) {
          this.allLoaded = true; //当所有数据 全部读取完成的时候 停止下拉读取数据 
        }
        this.$refs.loadmore.onBottomLoaded();
      }
    },
    mounted() {
      console.log("query参数", this.$route.query);
      // TODO 查询订单状态是否可以支付
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar>div {
    font-size: 20px !important;
  }

</style>
