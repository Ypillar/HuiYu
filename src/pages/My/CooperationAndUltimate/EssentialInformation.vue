<template>
  <!-- 认证基本信息 -->
  <div class="box padding">
    <p class="reminder">温馨提示：入驻信息仅作为慧宇审核使用，不会向第三方透露，请放心如实填写</p>
    <div class="process">
      <workflow
        v-bind:group="[{id:1,name:'基本信息'},{id:2,name:'企业信息'},{id:3,name:'认证审核'}]"
        select="1"
      ></workflow>
    </div>
    <div class="idDiv">
      <p class="Tit">身份证件</p>
      <p class="small">照片须为本人身份证，身份证号须清晰可见且与所填身份证一致</p>
      <div class="idImg">
        <div>
          <img src="../../../assets/imgs/uploadId.png">
          <p>(示例图)</p>
        </div>
        <div class="upImg">
          <div>
            <img src="../../../assets/imgs/shangchuan@2x.png">
          </div>

          <p>正面照片</p>
        </div>
      </div>
    </div>
    <p class="reminder">下面信息可通过上传的正面照片自动填充，如识别有误请手动修改</p>
    <div class="divItem padBottom">
      <ul>
        <li>
          <span>真实姓名</span>
          <input type="text" placeholder="真实姓名需和身份证一致">
        </li>
        <li>
          <span>联系方式</span>
          <input type="text" placeholder="默认获取登录手机号">
        </li>
        <li>
          <span>常住地区</span>
          <input type="text" placeholder="选择你所在的城市" @click="(address=!address)" readonly>
          <i class="fa fa-angle-down" style="color:#999999;float:right;" aria-hidden="true"></i>
        </li>
        <li>
          <span>出生年月</span>
          <input
            type="text"
            placeholder="2019-01-01"
            :value="currentDate"
            @click="dateSelect()"
            readonly
          >
          <i class="fa fa-calendar-check-o" style="color:#999999;float:right;" aria-hidden="true"></i>
          <van-popup v-model="show" position="bottom" :overlay="true">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              :min-date="minDate"
              @cancel="onCancel"
              @confirm="onConfirm"
              @change="onChange"
            />
          </van-popup>
          <!-- <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate"/> -->
        </li>
        <li>
          <span>身份证号</span>
          <input type="text" placeholder="请输入您的有效身份证号码">
        </li>
      </ul>
    </div>
    <div class="vantDIv">
      <div class="date" v-if="date">
        <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate"/>
      </div>
      <div class="address" v-if="address">
        <van-area :area-list="areaList"/>
      </div>
    </div>
    <div class="footer">
      <bottom-btn
        :fixed="true"
        :disable="false"
        title="下一步"
        showService="false"
        showHome="true"
        v-on:click="onclick()"
      ></bottom-btn>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  .reminder {
    width: 100%;
    height: 3.6rem;
    font-size: 1.2rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #ff622b;
    line-height: 1.8rem;
    margin-top: 1rem;
  }
  .process {
    margin-top: 2rem;
  }
  .divItem {
    ul {
      li {
        margin-top: 1rem;
        border-bottom: 1px solid #f2f2f2;
        span {
          width: 5.6rem;
          height: 2.1rem;
          font-size: 1.4rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #333333;
          line-height: 2.1rem;
          display: block;
          float: left;
        }
        input {
          width: calc(100% - 10rem);
          height: 2.1rem;
          font-size: 1.4rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #333333;
          line-height: 2.1rem;
          margin-left: 1.4rem;
          border: none;
          padding-bottom: 1rem;
        }
      }
    }
  }
  .idImg {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    div {
      width: 48%;
      border-radius: 5px;

      img {
        width: 100%;
        height: 9rem;
      }
      p {
        width: auto;
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #999999;
        line-height: 17px;
        text-align: center;
        margin-top: 10px;
      }
    }
    .upImg {
      position: relative;
      border: 1px dashed #999;
      height: 9rem;
      div {
        width: 100%;
        height: 100%;
      }
      img {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -15px;
        margin-top: -15px;
        border: 1px dashed #999;
      }
    }
  }
  .idDiv {
    .Tit {
      width: auto;
      height: 2rem;
      font-size: 1.4rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #333333;
      line-height: 2rem;
      margin-top: 20px;
    }
    .small {
      width: 324px;
      font-size: 1.2rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #999999;
      margin-top: 4px;
    }
    .idImg {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      div {
        width: 48%;
        border-radius: 5px;

        img {
          width: 100%;
          height: 9rem;
        }
        p {
          width: auto;
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #999999;
          line-height: 17px;
          text-align: center;
          margin-top: 10px;
        }
      }
      .upImg {
        position: relative;
        border: 1px dashed #999;
        height: 9rem;
        div {
          width: 100%;
          height: 100%;
        }
        img {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -15px;
          margin-top: -15px;
          border: 1px dashed #999;
        }
      }
    }
    .textarea {
      width: 100%;
      height: 160px;
      border-radius: 4px;
      margin-top: 10px;
      position: relative;

      background: #f2f2f2;
      textarea {
        box-sizing: border-box;
        width: 100%;
        height: 13rem;
        font-size: 1.4rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #999999;
        line-height: 20px;
        padding: 10px;
        border: none;
        background: #f2f2f2;
      }
      span {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: auto;
        text-align: right;
        height: 17px;
        font-size: 1.2rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #999999;
        line-height: 17px;
      }
    }
  }
}
</style>
<script>
export default {
  name: "EssentialInformation",
  data() {
    return {
      date: false,
      address: false,
      show: false,
      minDate: new Date(1920, 10, 1),
      currentDate: new Date(),
      message: ""
    };
  },
  methods: {
    dateSelect() {
      console.log("33");
      this.show = true;
    },
    Determine() {
      this.show = false;
    },
    onCancel() {
      this.show = false;
    },
    onConfirm() {
      this.show = false;
    },
    onChange(picker, value, index) {
      this.message =this.formatDate(value) ;
    },

    formatDate(date) {
      var datee = new Date(date);
      var year = datee.getFullYear();
      var month = datee.getMonth() + 1;
      var day = datee.getDate();
      return year + "-" + formatTen(month) + "-" + formatTen(day);
    }
  }
};
</script>

