<template>
  <div class="box">
    <div class="information padding">
      <div class="imgBox">
        <img src="../../../assets/imgs/20150318165059_VUt4x.jpeg" alt="头像">
      </div>
      <div class="msgBox">
        <ul>
          <li class="name">王某某</li>
          <li class="phone">
            13125654565
            <img src="../../../assets/imgs/shoujihao.png" alt>
          </li>
          <li class="id">
            545452525252525443
            <img src="../../../assets/imgs/shenfenrenzheng.png" alt>
          </li>
          <li class="date">签到时间：2019-01-10 12:09:09</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="line"></div>
      <div class="attendBox padding">
        <div class="tit">
          <p>参课信息</p>
          <ul>
            <li>课程名称：经营能量</li>
            <li>课程类型：第三十七期 北京</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <div class="line"></div>
      <div class="attendBox padding">
        <div class="tit">
          <p>服务信息</p>
          <ul>
            <li>服务顾问：王某某</li>
            <li>能量顾问：李某某</li>
            <li>常住地区：北京</li>
            <li>合作伙伴：张某某</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <div class="line"></div>
      <div class="attendBox padding padBottom">
        <div class="tit">
          <p>签到记录</p>
          <ul>
            <li>签到时间：2019-01-10 12：09：09</li>
            <li>扫码时间：2019-01-10 12：09：09</li>
            <li>扫码人：李某某</li>
            <li>手机尾号：0909</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
       <mt-button icon="more">more</mt-button>
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
.attendBox {
  margin-top: 10px;
  .tit {
    p {
      width: auto;
      height: 2.2rem;
      font-size: 1.6rem;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 22px;
      border-bottom: 1px solid #f2f2f2;
      padding-bottom: 10px;
    }
    ul {
      li {
        margin-top: 10px;
        height: 2rem;
        font-size: 1.4rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 2rem;
      }
    }
  }
}

.footer{
    button{
 width:100%;
height:49px;
background:#2CAD88;
color:#fff;
position: fixed;
bottom:0;
border:none;
border-radius: 0;
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
  name: "CheckInGroupVerifiesSuccess"
};
</script>

