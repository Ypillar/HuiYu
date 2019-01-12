<template>
    <!-- <div>入驻审核失败</div> -->
    <div class="padding">
          <result-page
        image="shenhe_qs@2x.png"
        title="审核失败"
        desc="失败原因"
      >
        <div slot="btn">
            <c-button  theme="light" v-on:click="onclick()"  size="small" style="margin-right:20px;">人工客服</c-button>
            <c-button  theme="dark" v-on:click="onclick()"  size="small">重新编辑</c-button>
          </div>
      </result-page>
    </div>
</template>
<script>
export default {
    name:"EntryAuditError"
}
</script>
