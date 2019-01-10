<!--
 * @Author: JuYangjia
 * @Date: 2019-01-09 10:57:48
 * @Description: 已弃用
 -->
<template>
  <div :style="{height:height+'px'}" style="overflow:scroll">
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
      <div ref="vlist">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了~" @load="onLoad" :offset="50">
          <slot></slot>
        </van-list>
      </div>
      <div :style="{height:height-$refs.vlist.offsetHeight-10 +'px'}" v-if="showBlank"></div>
    </van-pull-refresh>
  </div>
</template>

<script>
  export default {
    name: 'cList',
    model: {
      event: ['loadmore']
    },
    props: {
      height: Number
    },
    data() {
      return {
        showBlank:false,
        isRefresh: false,
        list:[],
        _pushList:null,
        loading: false,
        finished: false,
        page:0
        //_size:'big'
        // appName:this.cfg.appName,
      }
    },
    methods: {
      pushList: function (list) {
        // console.log(this.disable)
        // list.map(o=>{if(typeof o ==='object')o._guid=this.comm.getGuid()});
        this._pushList=list;
      },
      loadList(){
        this.showBlank=false;
        this._pushList=null;
        this.$emit('loadmore',this.page);
        let that = this;
        return new Promise((resolve, reject)=>{
            let timer = setInterval(()=>{
                if(that._pushList!==null){
                    resolve(that._pushList);
                    setTimeout(()=>{
                        that.showBlank=true;
                    },1000);
                    clearInterval(timer);
                }
            },300);
        });
      },
      reset(){
          this.page=0;// 由onLoad去自增页数
        console.log("重置列表")
        this.list=[];
        this.finished = false;
        this.loading = true;
        this.onLoad();
      },
      // 下拉刷新
      onRefresh() {
          this.page=1;// 不调用onLoad，因此要设置1
        this.loadList().then((list)=>{
            this.finished = false;
            this.isRefresh = false;
            if(list.length===0){
                this.finished = true;
            }else{
                this.list = list;
            }
        })
      },
      // 上拉加载
      onLoad() {
        // console.log(1111)
        this.page++;
        this.loadList().then((list)=>{
            if(list.length===0){
                this.finished = true;
            }else{
                this.list = this.list.concat(list);
            }
            // 加载状态结束
            this.loading = false;
        })
      }
    },
    mounted() {
      // console.log(this.disable,typeof this.disable)
    },
    components: {}
  }

</script>

<style scoped>

</style>
