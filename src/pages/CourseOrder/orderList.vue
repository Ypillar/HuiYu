<!--
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 订单列表
 -->

<template>
  <div class="tleft" style="height:100%;">
    <title-bar title="我的订单" :back="true"></title-bar>

    <van-tabs v-model="active" v-on:click="changeTab" :swipe-threshold="5">
      <van-tab v-for="(item,index) in tabs" :title="item.name" :key="index"></van-tab>
    </van-tabs>

    <div :style="{height:comm.getClientHeight()-95+'px'}" style="overflow:scroll">
      <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
        <div ref="vlist" :style="{minHeight:comm.getClientHeight()-105 +'px'}" class="relative">
          <result-page v-if="finished && list.length===0" image="wudingdan@2x.png" title="" sub-title="" desc="暂无订单~"
            class="absolute" style="background-color:white;width:100%;"></result-page>
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了~" @load="onLoad" :offset="50" class="list">
            <div v-for="(item, index) in list" :key="index" class="list-item"  >
              <van-row>
                <div class="inline-block font-12">订单编号： {{item.id}}</div>
                <div class="floatRight font-12" :style="{color:item.status!==3?'#FF622B':''}">{{statusDef[item.status]}}</div>
              </van-row>
              <van-row style="margin-top:10px;white-space: nowrap;padding-bottom:10px;" @click.native="forward.orderDetail(item.id)">
                  <div class="courseImg inline-block">
                      <img :src="item.img" class="fullSize"/>
                  </div>
                  <div class="courseInfo inline-block" style="padding:9px 0px 0px 14px;"> 
                    <van-row class="font-16" style="height:22px;">
                        {{item.name}}
                    </van-row>
                    <van-row class="font-12" style="margin-top:3px;height:17px;">
                        {{item.term}} {{item.city}}
                    </van-row>
                    <van-row class="font-14" style="margin-top:10px;height:20px;">
                        {{item.teacher}}
                    </van-row>
                  </div>
              </van-row>
              <van-row style="border-top:1px solid #efefef;padding:10px 0px;">
                  <div class="inline-block font-14" style="font-size:16px;line-height:25px;">合计：￥{{item.total}} <span v-if="item.type===2">(占席费)</span></div>
                  <div class="floatRight">
                      <c-button  theme="light" v-on:click="forward.service()" size="mini" v-if="[0,1].findIndex(o=>o===item.status)!==-1">联系客服</c-button>
                      <c-button  theme="dark" v-on:click="goPayment(item)" size="mini" v-if="1===item.status">立即支付</c-button>
                      <c-button  theme="dark" v-on:click="forward.orderDetail(item.id)" size="mini" v-if="2===item.status">签到码</c-button>
                      <c-button  theme="light" v-on:click="forward.orderDetail(item.id)" size="mini" v-if="3===item.status">查看详情</c-button>
                  </div>
              </van-row>
              <div class="split-line"></div>
            </div>
          </van-list>
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
  import regex from '../../share/regex'
  export default {
    name: 'ExchangeCenter',
    data() {
      return {
        isRefresh: false,
        loading: false,
        finished: false,

        statusDef: ["待财务确认", "待付款", "待签到", "已完成"],
        tabs: [{
          id: 1,
          name: '待审核'
        }, {
          id: 2,
          name: '待付款'
        }, {
          id: 3,
          name: '待签到'
        }, {
          id: 4,
          name: '待确认'
        }, {
          id: 5,
          name: '已完成'
        }],
        type: this.$route.query.type || 1,
        active: 0,
        list: [],
        page: 0
      }
    },
    methods: {
     goPayment(item){
         if(item.type===1){
             // 兑换券
             this.forward.payment(item.id,item.name,item.price,item.count);
         }else if(item.type===2){
             // 占席费
             this.forward.useExchangeCoupon(item.coinId,item.id);
         }
     },
      loadList(page) {
        let that = this;
        console.log("查询：", page);
        return new Promise((resolve, reject) => {
          let list = [];
          list.push({
            id: that.comm.getRandomByLen(18),
            status: 0,
            name: "经营能量",
            total: '500.00',
            type: 1, // 1 兑换券，2 占席费
            img: "/static/tempImg/curriculum.png",
            // term: "",
            // city: "",
            teacher: "王琨/慧宇讲师团",
          });
          list.push({
            id: that.comm.getRandomByLen(18),
            status: 1,
            name: "经营能量兑换券",
            total: '500.00',
            price:'100.00',
            count:5,
            type: 1, // 1 兑换券，2 占席费
            img: "/static/tempImg/curriculum.png",
            term: "第三十期",
            city: "上海",
            teacher: "王琨/慧宇讲师团",
          });
          list.push({
            id: that.comm.getRandomByLen(18),
            status: 1,
            name: "经营能量",
            total: '200.00',
            type: 2, // 1 兑换券，2 占席费
            coinId:"15646545",//兑换券编号，进入使用兑换券页面需要传入
            img: "/static/tempImg/curriculum.png",
            term: "第三十期",
            city: "上海",
            teacher: "王琨/慧宇讲师团",
          });
          list.push({
            id: that.comm.getRandomByLen(18),
            status: 2,
            name: "经营能量",
            total: '500.00',
            //type: 1, // 1 兑换券，2 占席费
            img: "/static/tempImg/curriculum.png",
            term: "第三十期",
            city: "上海",
            teacher: "王琨/慧宇讲师团",
          });
          list.push({
            id: that.comm.getRandomByLen(18),
            status: 3,
            name: "经营能量",
            total: '500.00',
            // type: 1, // 1 兑换券，2 占席费
            img: "/static/tempImg/curriculum.png",
            term: "第三十期",
            city: "上海",
            teacher: "王琨/慧宇讲师团",
          });
          setTimeout(() => {
            resolve(list);
          }, 1000)

        });
      },
      changeTab(idx) {
        this.list = [];
        this.page = 0;
        this.finished = false;
        this.loading = true;
        this.onLoad();
      },
      // 下拉刷新
      onRefresh() {
        this.page = 1;
        let that = this;
        this.loadList(this.page).then((list) => {
          console.log(list, 3333)
          that.list = [];
          that.finished = false;
          that.isRefresh = false;
          if (list.length === 0) {
            that.finished = true;
          } else {
            that.list = list;
          }
        }, 500);
      },
      // 上拉加载
      onLoad() {
        console.log(1111)
        this.page++;
        let that = this;
        // 异步更新数据
        this.loadList(this.page).then((list) => {
          if (list.length === 0) {
            that.finished = true;
          } else {
            that.list = that.list.concat(list);
          }
          // 加载状态结束
          that.loading = false;
        }, 1000);
      }
    },
    mounted() {
      console.log("query参数", this.$route.query);
      this.active = this.tabs.findIndex(p => p.id == this.type);
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list {
    
  }
    .split-line{
        width:100%;background-color:#FCFCFC;height:10px;position: absolute;left: 0;border-top: 1px solid rgba(242, 242, 242, 1);
    }
  .list-item {
    margin-bottom: 14px;
    border-radius: 4px;
    
    padding: 10px;
  }

  .courseImg{
      border-radius: 4px;
      overflow: hidden;
      width: 160px;
      height: 90px;
  }
  .courseInfo{
      vertical-align: top;
      height: 90px;
  }

</style>
