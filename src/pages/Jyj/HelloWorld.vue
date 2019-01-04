<template>
  <div class="hellowworld">

    <!-- 结果展示 -->
    <!-- <result-page v-if="showResult" image="zhfuchneggong_qs@2x.png" title="操作成功" sub-title="¥1000.00" desc="参课信息已通过短信告知了Ta，请提醒本人携带好证件准时参课">
      <div slot="btn">
        <c-button theme="light">回到首页</c-button>
        <c-button theme="dark">重新编辑</c-button>
      </div>
    </result-page> -->


    <div v-if="!showResult">
      <!-- 标题栏，支持title、back，back表示是否显示返回，title不设置默认显示config文件配置的appName -->
      <title-bar title="" :back="true">
        <div slot="right">
          <!-- 右上角要放自己的按钮，或其他html，放这里，比如这里放了一个消息组件 -->
          <!-- 消息组件支持文字标题、图标颜色自定义 -->
          <messager title="" color=""></messager>
        </div>
      </title-bar>

        所有自定义组件请注意看prop前加没加冒号":",跟我保持一致就行了

      <div style="padding:30px 0;">
        <!-- 工作流，支持group和select两个参数，select为id -->
        工作流：<br>
        <workflow v-bind:group="[{id:1,name:'注册'},{id:2,name:'完善资料'},{id:3,name:'完成'}]" select="2"></workflow>

      
        <!-- 结果页面支持iamge图片（static下iamge文件夹），title，子title，描述desc，还支持一个btn的slot -->
        结果页面：<br>
        <result-page image="zhfuchneggong_qs@2x.png" title="操作成功" sub-title="¥1000.00" desc="参课信息已通过短信告知了Ta，请提醒本人携带好证件准时参课">
          <!-- btn区域 自定义html，想显示什么显示什么 -->
          <div slot="btn">
            <c-button  theme="light" v-on:click="onclick()"  size="small" style="margin-right:20px;">小号按钮</c-button>
            <c-button  theme="dark" v-on:click="onclick()"  size="small">小号按钮</c-button>
          </div>
        </result-page>
      </div>

      <!-- 按钮支持的属性:
          disable: Boolean,// true禁用，禁用不会执行点击事件
          theme: String,//dark light
          size: String,// big mid small
          angle:Boolean// true为直角边框
          click：event 当按钮没有disabled时会触发
       -->
      按钮样式示例<br>
      <c-button  theme="dark" v-on:click="onclick()"  size="small" style="margin-right:20px;">小号按钮</c-button>
      <br><br>
      <c-button  theme="light" v-on:click="onclick()" size="mid">中号按钮</c-button>
      <br><br>
      <c-button  theme="dark" v-on:click="onclick()"  size="big">大号按钮</c-button>
      <br><br>
      <c-button  theme="dark" v-on:click="onclick()"  size="small" :angle="true">直角按钮</c-button>
      <br><br>
      <c-button  theme="light" v-on:click="onclick()"  size="big" :angle="true">直角按钮</c-button>
      <br><br>
      <c-button  theme="light" v-on:click="onclick()" v-bind:disable="disbtn"  size="big" style="margin-right:20px;width:100%;">100%宽度-禁用</c-button>
      <br><br>
      <c-button  theme="dark" v-on:click="onclick()" v-bind:disable="disbtn"  size="big" style="width:100%;">100%宽度-禁用</c-button>

      <!-- 测试调度任务 -->
      <br>任务调度服务示例<br>
      <c-button theme="dark" v-on:click="addtask()"  size="big">开始任务调度</c-button>
      <c-button theme="dark" v-on:click="destroytask()"  size="big">注销任务调度</c-button>

      <!-- 用变量popupVisible来控制modal的显示和隐藏，为content的slot中写弹窗的具体内容 -->
      <br>签到/图片modal示例<br>
      <c-button theme="dark" v-on:click="popupVisible=true" size="big" style="width:100%;">弹出签到</c-button>
      <modal :visible="popupVisible" v-on:close="popupVisible=false">
        <div slot="content">
          <div style="width:300px;height:200px;">
            弹窗内容，图片、自定义的元素
          </div>
        </div>
      </modal>


      <!-- 左侧联系客服，右侧为按钮，支持fixed固定底部，禁用右侧按钮，标题，点击事件
        当fixed为true时，底部设置padding-bottom：大于等于50px。否则会遮挡
       -->
      <bottom-btn :fixed="true" :disable="false" title="提交订单"  v-on:click="onclick()"></bottom-btn>
       
       <!-- 首页tabbar，直接复制过去就可以用，selected就是选中的item的id -->
      <!-- <mt-tabbar v-model="selected" style="z-index:999;">
        <mt-tab-item id="index">
          <img slot="icon" v-if="selected!=='index'" src="../../assets/imgs/wode_n@2x.png">
          <img slot="icon" v-if="selected==='index'" src="../../assets/imgs/wode_s@2x.png">
          我的
        </mt-tab-item>
        <mt-tab-item id="my">
          <img slot="icon" v-if="selected!=='my'" src="../../assets/imgs/shouye_n@2x.png">
          <img slot="icon" v-if="selected==='my'" src="../../assets/imgs/shouye_s@2x.png">
          首页
        </mt-tab-item>
      </mt-tabbar> -->


      <br>加载状态、toast、confirm框示例<br>
      <c-button theme="dark" v-on:click="loadStatus()"  size="big">加载状态</c-button>
      <c-button theme="dark" v-on:click="handleClick()"  size="big">测试toast、确认框</c-button>
      
        
      
      <!-- <i class="fa fa-camera-retro fa-5x"></i>
      <i class="mint-toast-icon mintui mintui-more"></i>
      <i class="mint-toast-icon mintui mintui-back"></i>
      <i class="mint-toast-icon mintui mintui-search"></i>
      <i class="mint-toast-icon mintui mintui-field-error"></i>
      <i class="mint-toast-icon mintui mintui-field-warning"></i>
      <i class="mint-toast-icon mintui mintui-success"></i>
      <i class="mint-toast-icon mintui mintui-field-success"></i> -->
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      //group:,
      selected:'my',
      popupVisible:false,
      disbtn:true,
      showResult:false,
      task:null
    }
  },
  methods: {
    // 添加一个定时调度
    addtask:function(){
      this.task = this.comm.addSchedule({
        // 每个调度一个写死的key，避免重复添加
        guid:"test-task",
        // 定时执行的逻辑，注意用箭头函数
        excute:()=>{
          console.log('vvv5',this.task)
        },
        // 间隔毫秒
        interval:3000,
        // 当返回值为true时，任务会休眠（不会执行，但是任务并没有被注销）
        sleep:()=>{
          return this.$route.path!=='/hello'
        }
      });
      this.comm.msgSuccess("请查看addtask函数");
    },
    // 注销任务,通过添加任务的guid
    destroytask:function(){
      this.comm.removeSchedule("test-task");
      this.comm.msgSuccess("任务已停用");
    },
    // 全局加载动画的调用
    loadStatus:function(){
      this.comm.loading();
      setTimeout(()=>{
        // 2秒后关闭加载动画
        this.comm.loaded();
      },2000)
    },
    // 按钮点击事件，状态为disable的按钮不会执行这个事件
    onclick:function(){
      this.comm.msg(1111111111)
    },
    
    // toast测试、确认框测试
    handleClick: function() {
      //this.$toast('Hello world!');
      // this.comm.msgSuccess();
      //this.comm.msg("操作警告");
      this.comm.msgWarning("操作警告");
      //this.comm.msgError("加速动力开发就")
      //this.comm.msgBox("sdfsf");
      // this.comm.msgBox("sdfsf").then(()=>{
      //   //alert(1)
      // });
      // this.comm.confirm("sffff").then(()=>{
      //   //alert(234234)
      // })
    },
  },
  mounted(){
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hellowworld{
    padding-bottom: 80px;
  }
  
</style>
