
<template>
  <!-- 讲师资料 -->
  <div class="box">
    <div class="information padding">
      <div class="imgBox">
        <img src="../../assets/imgs/20150318165059_VUt4x.jpeg" alt="头像">
      </div>
      <div class="msgBox">
        <ul>
          <li class="name">王某某</li>
          <li class="phone">
            13125654565
            <img src="../../assets/imgs/shoujihao.png" alt>
          </li>
          <li class="id">
            545452525252525443
            <img src="../../assets/imgs/shenfenrenzheng.png" alt>
          </li>
        </ul>
      </div>
    </div>
    <div class="cont padding">
      <p>简介</p>
      <div class="divB">我是简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
    </div>
    <div class="cont padding">
      <p>资格证书</p>
      <div class="imgDiv">
        <div>
          <div class="certificate">
            <img src="../../assets/imgs/uploadId.png">
          </div>
          <p>名称</p>
        </div>
        <div>
          <div class="certificate">
            <img src="../../assets/imgs/uploadId.png">
          </div>
          <p>名称</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.information {
  margin-top: 14px;
  .imgBox {
    width: 110px;
    height: 110px;
    overflow: hidden;
    float: left;
    img {
      width: 100%;
    }
  }
  .msgBox {
    float: left;
    margin-left: 14px;
    position: relative;
    ul {
      .name {
        width: auto;
        height: 21px;
        font-size: 2rem;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 21px;
        margin-top: 15px;
      }
      .phone {
        width: auto;
        height: 21px;
        font-size: 1.4rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 21px;
        margin-top: 10px;
      }
      .id {
        width: auto;
        height: 21px;
        font-size: 1.4rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 21px;
        margin-top: 8px;
      }
      .date {
        width: auto;
        height: 20px;
        font-size: 1.4rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
        margin-top: 13px;
      }
    }
  }
}
.information:after {
  clear: both;
  content: ".";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}
.cont {
  width: 100%;
  margin-top: 20px;
  p {
    height: 22px;
    font-size: 1.6rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #333;
    line-height: 22px;
  }
  .divB {
    width: 100%;
    box-sizing: border-box;
    background: #f4f4f4;
    border-radius: 4px;
    padding: 10px;
    font-size: 1.4rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #666;
    line-height: 20px;
    margin-top: 10px;
  }
  .imgDiv {
    display: flex;
    justify-content: space-between;
    > div {
      width: 48%;
      .certificate {
        height: 92px;
        background: #f4f4f4;
        border-radius: 4px;
        margin-top: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        text-align: center;
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #666;
        line-height: 17px;
        margin-top: 10px;
      }
    }
  }
}
//分隔线
.line {
  width: 100%;
  height: 10px;
  background: #fcfcfc;
  margin-top: 10px;
}
</style>
<script>
export default {
  name: "IdentityInformation"
};
</script>

