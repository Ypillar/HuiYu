<template>
  <i @click="returnPage()">
    <img src="../assets/imgs/icon_return.png" alt="返回">
  </i>
</template>
<style lang="scss" scoped>
i {
  width: 16px;
  height: 16px;
  display: block;
  vertical-align: middle;
  float: left;
  margin-left: 5px;
  img {
    width: 100%;
  }
}
</style>

<script>
export default {
  methods: {
    returnPage: function() {
      this.$router.go(-1);
    }
  }
};
</script>

