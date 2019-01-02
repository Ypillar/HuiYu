<template>
  <div class="nav">
   
    <span>首页</span>
     <router-link to="/hello">
    <mt-button @click.native="handleClick">按钮</mt-button>
  </router-link>
  </div>

</template>
<style lang="scss" scoped>
.nav{
  width: 100%;
  height: 4rem;
  color: #333;
  line-height: 4rem;
  text-align: center;
  font-size: 1.4rem;
}
</style>

<script>
import RetrunNav from "../../components/return";
export default {
  components: {
    RetrunNav
  }
};
</script>
