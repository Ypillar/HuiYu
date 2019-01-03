<template>
  <div class="navBox">
    <div class="btnReturn" @click="returnPage()" v-if="show">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </div>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.navBox {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid #f0f0f0;

  .btnReturn {
    width: 40px;
    height: 100%;
    float: left;
  }
}
</style>

<script>
export default {
  props: {
    show: String
  },
  methods: {
    returnPage: function() {
      this.$router.go(-1);
    }
  }
};
</script>

