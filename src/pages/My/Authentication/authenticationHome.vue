<template>
  <div class="box padding">
    <ul class="authent">
      <li>
        <span>服务中心</span>
        <small>
          前往认证
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </small>
      </li>
       <li>
        <span>合作伙伴/终极弟子/报名认证</span>
        <small>
          前往认证
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </small>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.authent {
  li {
    width: 100%;
    height: 50px;
    background: rgba(255, 255, 255, 1);
    line-height: 50px;
    border-bottom: 1px solid #f2f2f2;
    span {
      height: 22px;
      font-size: 1.6rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 22px;
    }
    small {
      height: 20px;
      font-size: 1.4rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      float: right;
      line-height: 50px;
      i{
          margin-left: 2px;
      }
    }
  }
}
</style>

<script>
export default {
  name: "AuthenticationHome"
};
</script>
