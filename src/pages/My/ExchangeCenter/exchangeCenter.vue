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
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了~" @load="onLoad" :offset="50">
          <div v-for="(item, index) in list" :key="index" style="height:30px;border:1px solid; margin-bottom:10px;">
            {{active}} {{item}}
          </div>
        </van-list>
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
        list: []
      }
    },
    methods: {
      loadList(){
        // 根据选中的tag请求不同的地址
        let list = [];
        for (let i = 0; i < 20; i++) {
          list.push(this.comm.getGuid());
        }
        return list;
      },
      changeTab(idx){
        console.log(idx)
        this.list=[];
        this.finished = false;
        this.loading = true;
        this.onLoad();
      },
      // 下拉刷新
      onRefresh() {
        setTimeout(() => {
          this.finished = false;
          this.isRefresh = false;
          let list = this.loadList();
          if(list.length===0){
            this.finished = true;
          }else{
            this.list = list;
          }
        }, 500);
      },
      // 上拉加载
      onLoad() {
        console.log(1111)
        // 异步更新数据
        setTimeout(() => {
          let list = this.loadList();
          if(list.length===0){
            this.finished = true;
          }else{
            this.list = this.list.concat(list);
          }
          // 加载状态结束
          this.loading = false;
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


</style>
