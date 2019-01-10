<!--
 * @Author: JuYangjia
 * @Date: 2019-01-10 16:02:20
 * @Description: 分类消息列表
 -->
<template>
  <div>
    <title-bar :title="title+'消息列表'" :back="true"></title-bar>
    
      <div :style="{height:comm.getClientHeight()-50+'px'}" style="overflow:scroll">
        <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
          <div ref="vlist" class="padding14">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了~" @load="onLoad" :offset="50" class="list">
              <div class="msg" v-for="(item, index) in list" :key="index">
                <van-row>
                  <van-col span="24">
                    <div class="font-16 inline-block">{{item.title}}</div>
                    <div class="floatRight font-14">{{item.time}}</div>
                  </van-col>
                </van-row>
                <van-row class="msg-content">
                  <van-col span="24" class="font-12">
                    {{item.content}}
                  </van-col>
                </van-row>
                <van-row class="msg-btn">
                  <van-col span="24" class="center" @click="forwardPage()">
                    查看详情
                  </van-col>
                </van-row>
              </div>

            </van-list>
          </div>
          <div :style="{height:comm.getClientHeight()-50-$refs.vlist.offsetHeight-10 +'px'}" v-if="showBlank"></div>
        </van-pull-refresh>
      </div>
  </div>
</template>

<script>
  //import regex from '../../../share/regex'
  export default {
    name: 'InformationDetail',
    data() {
      return {
        showBlank:false,
        isRefresh: false,
        loading: false,
        finished: false,

        title: this.$route.query.title,
        type: this.$route.query.type,
        list: [],
        page:0
        /**
         * {
            title: "预约未通过",
            time: "2019-09-09 12:00",
            content: "十分抱歉，预约讲师未通过，拒绝原因最多两行...十分抱歉，预约讲师未通过，拒绝原因最多两行拒绝原因最多两行拒绝原因最多两行拒绝原因最多两行拒绝原因最多两行"
          },
          {
            title: "预约通过",
            time: "2019-09-09 12:00",
            content: "十分抱歉，预约讲师未通过，拒绝原因最多两行"
          }
         */
      }
    },
    methods: {
      forwardPage() {
        switch (this.type) {
          case "1":

            break;
          case "2":
            break;
          case "3":
            break;
        }
      },
      loadList(page){
        let that = this;
        this.showBlank=false;
        console.log("查询：",page);
        return new Promise((resolve, reject)=>{
            let list = [];
            for (let i = 0; i < 20; i++) {
              // list.push(
              //   {
              //     title: "预约未通过",
              //     time: "2019-09-09 12:00",
              //     content: "十分抱歉，预约讲师未通过，拒绝原因最多两行...十分抱歉，预约讲师未通过"
              //   }
              // )
            }
            setTimeout(()=>{
              this.showBlank=true;
            },2000)
            setTimeout(()=>{
              
              resolve(list);
            },1000)
            
        });
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
      this.comm.debug("query参数", this.$route.query)
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .msg {
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
  }

  .msg-content {
    margin-top: 10px;
    height: 38px;
    overflow: hidden;
  }

  .msg-btn {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #e3e3e3;
    color: #2CAD88;
    font-size: 13px;
  }

</style>
