<template>
  <div class="setup">
    <title-bar title="我的设置" :back="true">
      <div slot="right">
        <!-- 右上角要放自己的按钮，或其他html，放这里，比如这里放了一个消息组件 -->
        <!-- 消息组件支持文字标题、图标颜色自定义 -->
        <!-- <messager title="" color="black"></messager> -->
      </div>
    </title-bar>
    <van-cell title="消息开关">
      <!-- <mt-switch v-model="value" v-on:change="change()"></mt-switch> -->
      <van-switch :value="value" :loading="isLoad" @input="change" size="20px" active-color="#05AFAF" />
    </van-cell>

    <van-cell title="编辑资料" @click.native="forward.editSelfInfo()" is-link value="" style="margin-top:5px;">
    </van-cell>
    <van-cell title="操作指南" @click.native="forward.help()" is-link value="" style="border-top:1px solid #efefef;">
    </van-cell>
    <van-cell title="关于我们" @click.native="forward.aboutUs()" is-link value="" style="border-top:1px solid #efefef;">
    </van-cell>
  </div>
</template>

<script>
  import regex from '../../share/regex'
  export default {
    name: 'SetUp',
    data() {
      return {
        value: true,
        isLoad: true
      }
    },
    methods: {
      change: function (checked) {
        if (!checked) {
          this.comm.confirm("关闭消息后，无法收到任何消息， 是否确定关闭? ", "温馨提示", {
              confirmButtonText: "确认关闭",
              cancelButtonText: "我再想想"
            })
            .then(() => {
              // 提交服务器修改设置
              console.log(111, this.value)
              this.value = checked;
            }).catch(() => {
              this.value = true;
            });
        } else {
          this.value = checked;
        }
      }
    },
    mounted() {
      // TODO 查询消息开关
      this.value = true;
      this.isLoad = false;
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .setup {
    background-color: rgb(247, 247, 247);
    height: 100%;
  }

</style>
