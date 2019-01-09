<template>
  <div class="tleft">
    <title-bar title="兑换中心" :back="true">
      <div slot="right">
        <!-- 右上角要放自己的按钮，或其他html，放这里，比如这里放了一个消息组件 -->
        <div class="link" @click="forward.generate()">生成</div>
        <div class="link" @click="forward.helpDetail('exchange')">教程</div>
      </div>
    </title-bar>

    <van-tabs v-model="active" v-on:click="changeTab">
      <van-tab v-for="(item,index) in tabs" :title="item.name" :key="index"></van-tab>
    </van-tabs>

    <div :style="{height:comm.getClientHeight()-95+'px'}" style="overflow:scroll">
      <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
        <div ref="vlist">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了~" @load="onLoad" :offset="50" class="list">
            <div v-for="(item, index) in list" :key="index" class="list-item">
              <div class="title">
                {{item.name}} <img v-if="item.isNew" src="../../../assets/imgs/new@2x.png">
              </div>
              <div class="operate van-hairline--bottom">
                <div class="price inline-block">
                  ￥{{item.price}}
                </div>
                <div class="btn floatRight" v-if="active===0">
                  <c-button  theme="light" v-on:click="forward.useExchangeCoupon(item.id)"  size="mini" style="margin-right:10px;">使用</c-button>
                  <c-button  theme="light" v-on:click="forward.giveExchangeCoupon(item.id)"  size="mini">赠送</c-button>
                </div>
              </div>
              <div class="more" v-if="active===0">
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
              <div class="more" v-if="active===1">
                <div class="info">
                  编号： {{item.id}}
                  <div class="floatRight">接收人： {{item.receiver}}</div>
                </div>
                <div class="info">
                  赠送时间： {{item.receiveTime}}
                </div>
              </div>
              <div class="more" v-if="active===2">
                <div class="info">
                  编号： {{item.id}}
                </div>
                <div class="info">
                  使用时间： {{item.useTime}}
                </div>
              </div>
            </div>
          </van-list>
        </div>
        <div :style="{height:comm.getClientHeight()-95-$refs.vlist.offsetHeight-10 +'px'}" v-if="showBlank"></div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
  import regex from '../../../share/regex'
  export default {
    name: 'ExchangeCenter',
    data() {
      return {
        showBlank:false,
        isRefresh: false,

        loading: false,
        finished: false,

        tabs: [{
          id: 1,
          name: '未使用'
        }, {
          id: 2,
          name: '已送出'
        }, {
          id: 3,
          name: '已使用'
        }],
        type: this.$route.query.type || 1,
        active: 0,
        list: [],
        page:0
      }
    },
    methods: {
      loadList(page){
        let that = this;
        this.showBlank=false;
        console.log("查询：",page);
        return new Promise((resolve, reject)=>{
            let list = [];
            for (let i = 0; i < 20; i++) {
              if(that.active===0){
                list.push({
                  id:that.comm.getRandomByLen(18),
                  name:"经营能量兑换券",
                  price:'500.00',
                  isNew:!!that.comm.getRandom(0,1),
                  getTime:'2019-09-09 12:00:23',
                  expireTime:'2019-10-09 12:00:23'
                });
              }else if(that.active===1){
                list.push({
                  id:that.comm.getRandomByLen(18),
                  name:"经营能量兑换券",
                  price:'500.00',
                  isNew:!!that.comm.getRandom(0,1),
                  receiveTime:'2019-09-09 12:00:23',
                  receiver:'李江红'
                });
              }else if(that.active===2){
                list.push({
                  id:that.comm.getRandomByLen(18),
                  name:"经营能量兑换券",
                  price:'500.00',
                  isNew:!!that.comm.getRandom(0,1),
                  useTime:'2019-09-09 12:00:23'
                });
              }
            }
            setTimeout(()=>{
              this.showBlank=true;
              resolve(list);
            },1000)
            
        });
      },
      changeTab(idx){
        this.list=[];
        this.page=0;
        this.finished = false;
        this.loading = true;
        this.onLoad();
      },
      // 下拉刷新
      onRefresh() {
        this.page=1;
        let that = this;
        this.loadList(this.page).then((list) => {
          that.list = [];
          that.finished = false;
          that.isRefresh = false;
          if(list.length===0){
            that.finished = true;
          }else{
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
          if(list.length===0){
            that.finished = true;
          }else{
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
.list{
  padding:14px;
}
.list-item{
  margin-bottom: 14px;
  border-radius: 4px;
  border:1px solid rgba(242,242,242,1);
  padding:10px;
}
.list-item>.title{
  font-size:20px;
font-weight:600;
color:rgba(51,51,51,1);
line-height:28px;
}
.list-item>.title>img{
  width: 30px;
  height:15px;
}

.list-item>.operate{
  line-height: 26px;
  padding:5px 0px;
}

.list-item>.operate>.price{
  font-size:14px;
font-weight:400;
color:rgba(51,51,51,1);
line-height:21px;
}
.list-item>.more{
  padding:10px 0px;
font-size:12px;
font-weight:400;
color:rgba(153,153,153,1);
line-height:18px;
}
.list-item>.more>.info{
  margin:5px 0px;
}


</style>
