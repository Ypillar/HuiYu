<template>
  <div class="footer">
    <div class="btnTabbarHome tabbarSelect" @click="onclick(1)">
      <div class="btn">
        <p>
          <i :class="{iconHome:number==2,iconHomeShow:number==1}"></i>
        </p>
        <p :class="{tabbarSelect:number==1,tabbarWord:number==2}">首页</p>
      </div>
    </div>
    <div class="btnTabbarMy">
      <div class="btn" @click="onclick(2)">
        <p>
          <i :class="{iconMy:number==1,iconMyShow:number==2}"></i>
        </p>
        <p :class="{tabbarSelect:number==2,tabbarWord:number==1}">我的</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
//footer
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 49px;
  display: flex;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
  .btnTabbarHome {
    width: auto;
    flex: auto;
    text-align: center;
    .iconHome {
      display: block;
      width: 18px;
      height: 17px;
      margin: 9px auto 0;
      background: url("../assets/imgs/shouye_n@2x.png") no-repeat left/100%;
    }
    .iconHomeShow {
      display: block;
      width: 18px;
      height: 17px;
      margin: 9px auto 0;
      background: url("../assets/imgs/shouye_s@2x.png") no-repeat left/100%;
    }
  }
  .btnTabbarMy {
    width: auto;
    flex: auto;
    text-align: center;
    .iconMy {
      display: block;
      width: 17px;
      height: 18px;
      margin: 9px auto 0;
      background: url("../assets/imgs/wode_n@2x.png") no-repeat left/100%;
    }
    .iconMyShow {
      display: block;
      width: 17px;
      height: 18px;
      margin: 9px auto 0;
      background: url("../assets/imgs/wode_s@2x.png") no-repeat left/100%;
    }
  }
  .btn {
    display: inline-block;
    padding: 0 15px;
    .tabbarWord {
      margin-top: 1px;
      color: #666666;
      font-size: 10px;
      line-height: 14px;
    }
    .tabbarSelect {
      margin-top: 1px;
      color: #2cad88;
      font-size: 10px;
      line-height: 14px;
    }
  }
}
</style>
<script>
export default {
  name: "tabbar",
  props: ["number"],


  methods: {
    onclick: function(n) {
      let btnNumber = n;
      if (btnNumber == 1) {
        this.$router.push({
          //核心语句
          path: "/" //跳转的路径
        });
      } else {
        this.$router.push({
          //核心语句
          path: "/home" //跳转的路径
        });
      }
      this.$emit("click", n);
    }
  }
};
</script>
