<template>
    <!-- <div>入驻审核成功</div> -->
    <div class="padding">
          <result-page
        image="shenhe_qs@2x.png"
        title="恭喜您，入驻成功"
        desc="期待您的风采"
      >
        <div slot="btn">
            <c-button  theme="light" v-on:click="onclick()"  size="small" style="margin-right:20px;">回到首页</c-button>
            <c-button  theme="dark" v-on:click="onclick()"  size="small">查看资料</c-button>
          </div>
      </result-page>
    </div>
</template>
<script>
export default {
    name:"EntryAuditSuccess"
}
</script>
