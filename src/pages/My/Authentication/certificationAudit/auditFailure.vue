<template>
  <!-- 认证-审核失败 -->
  <div>
    <div class="box padding">
      <p class="reminder">温馨提示：入驻信息仅作为慧宇审核使用，不会向第三方透露，请放心如实填写</p>
      <div class="process">
        <workflow
          v-bind:group="[{id:1,name:'个人信息'},{id:2,name:'身份信息'},{id:3,name:'入驻审核'}]"
          select="3"
        ></workflow>
      </div>
      <div>
           <result-page image="shenheshibai_qs@2x.png" title="审核未通过"  desc="原因-3个工作日，审核结果将以消息形势通知、请注意查收">
          <!-- btn区域 自定义html，想显示什么显示什么 -->
          <div slot="btn">
            <c-button  theme="light" v-on:click="onclick()"  size="small" style="margin-right:20px;">回到首页</c-button>
            <c-button  theme="dark" v-on:click="onclick()"  size="small">重新编辑</c-button>
          </div>
        </result-page>
      </div>

   
    </div>
    <div class="footer">
      <bottom-btn
        :fixed="true"
        :disable="false"
        title="确认并提交"
        showService="false"
        showHome="true"
        v-on:click="onclick()"
      ></bottom-btn>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  .reminder {
    width: 100%;
    height: 3.6rem;
    font-size: 1.2rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #ff622b;
    line-height: 1.8rem;
    margin-top: 1rem;
  }
  .process {
    margin-top: 2rem;
  }
 
  
}
</style>
<script>
export default {
  name: "AuditFailure",
  data() {
    return {};
  },
  methods: {}
};
</script>

