<template>
  <!-- <div>入驻审核</div> -->
  <div class="box padding">
    <p class="reminder">温馨提示：入驻信息仅作为慧宇审核使用，不会向第三方透露，请放心如实填写</p>
    <div class="process">
      <workflow
        v-bind:group="[{id:1,name:'个人信息'},{id:2,name:'身份信息'},{id:3,name:'入驻审核'}]"
        select="3"
      ></workflow>
    </div>
    <div class="cont">
      <result-page
        image="shenhe_qs@2x.png"
        title="等待官方审核，预计需要1-3个工作日"
        desc="审核结果将以短信发到你的手机上，请注意查收"
      >
       
      </result-page>
    </div>
    <div class="footer">
      <bottom-btn
        :fixed="true"
        :disable="false"
        title="确定"
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
  .cont {
  }
}
</style>
<script>
export default {
  name: "EntryAudit"
};
</script>
