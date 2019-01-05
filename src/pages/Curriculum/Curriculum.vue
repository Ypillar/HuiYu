<template>
  <div class="center">
    <div class="head-img">
      <img :src="pageObj.coverImg">
    </div>
    <div class="title-price">
      <div class="title inline-block">{{pageObj.title}}</div>
      <div class="price inline-block"  v-if="pageObj.type==='charge'">￥<span>{{pageObj.price}}</span>.{{pageObj.price_decimal}}/张</div>
    </div>
    <div class="agent radius tleft relative"  v-if="type==='agent'">
      <div style="transform:rotate(180deg);0px;width:0; height:0; border-width:10px; position:absolute;top:-20px;left:30px;border-left: 7px solid transparent;border-right: 7px solid transparent;border-style:solid; border-color:#efefef transparent transparent; font-size:0; line-height:0;"></div>
      <div class="inline-block tleft" >
        <div style="font-weight:600;color:rgba(51,51,51,1);font-size:16px;">
          推广服务工具
        </div>
        <div style="color:rgba(102,102,102,1);font-size:12px;">
          生成专属二维码或海报分享给您的客户购票
        </div>
      </div>
      <div class="inline-block" style="margin-left:20px;"> 
        <div class="inline-block center">
         <div> <img src="../../assets/imgs/tupian@2x.png" style="width:20px;height:20px;"></div>
          <div>海报</div>
        </div>
        <div class="inline-block center">
          <div> <img src="../../assets/imgs/erweima@2x.png" style="width:20px;height:20px;"></div>
          <div>二维码</div>
        </div>
      </div>
    </div>
    <div class="addr" v-for="item in pageObj.address" :key="item.id">
      <div class="title" @click="selectId=item.id">
        {{item.term}} | {{item.type}}
        <div class="coll">
          {{item.city}} <i class="fa" :class="[item.id===selectId?'fa-chevron-down':'fa-chevron-up']" aria-hidden="true"></i>
        </div>
      </div>
      <div class="info" v-show="selectId===item.id">
        <div class="info-row">
          <div class="label">
            课程地点：
          </div>
          <div class="text tleft">
            <div class="inline-block" style="width:230px;">
              {{item.addr}}
            </div>
            <div v-if="item.lng && item.lat" style="float:right;color:#2CAD88;" @click="comm.msg('线路开发中')">
              线路
            </div>
          </div>
        </div>
        <div class="info-row">
          <div class="label">
            开课时间：
          </div>
          <div class="text tleft">
            {{item.time}}
          </div>
        </div>
        <div class="info-row">
          <div class="label">
            签到地点：
          </div>
          <div class="text tleft">
            {{item.signAddr}}
          </div>
        </div>
        <div class="info-row">
          <div class="label">
            签到时间：
          </div>
          <div class="text tleft">
            <div v-for="t in item.signTime" :key="t">
              {{ t }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="teach" v-if="type==='custom'">
      <div class="title">
        课程讲师
      </div>
      <div class="teachers">
        <div class="teacher" v-for="(item, index) in pageObj.teachers" :key="index">
          <img class="radius" :src="item.img">
          <div style="font-size:16px;">{{item.name}}</div>
          <div style="font-size:12px;color:rgba(153,153,153,1);">{{item.desc}}</div>
        </div>
      </div>
    </div>
    <div class="teach" v-if="type==='custom'">
      <div class="title">
        课程介绍
      </div>
      <div class="curriculum">
        <div class="img">
          <img class="fullSize radius" :src="pageObj.introduce.img">
        </div>
        <div class="desc">
          {{pageObj.introduce.desc}}
        </div>
      </div>
    </div>
    <div v-if="pageObj.type==='charge'" class="bottom-btn-palce"></div>
    <bottom-btn v-if="pageObj.type==='charge'" :fixed="true" :disable="false" title="购买"  v-on:click="onCharge()"></bottom-btn>

    <mt-popup v-model="showBuy" position="bottom" class="mint-popup mint-popup-4 mint-popup-bottom">
        <div class="center relative" style="height:300px;" :style="{width:comm.getClientWidth()+'px'}">
            <div style="width:100%;border-bottom:1px solid #e3e3e3;height:35px;line-height:35px;font-size:16px;" 
            class="center relative">
              购买
              <i class="fa fa-times absolute" style="right:10px;top:8px;" @click="showBuy=false" aria-hidden="true"></i>
            </div>
        </div>
    </mt-popup>
  </div>
</template>

<script>
  import regex from '../../share/regex'
  export default {
    name: 'Curriculum',
    data() {
      return {
        type:"agent",//custom客户 agent 时为代理商
        showBuy:false,
        selectId: 1,
        pageObj: {
          coverImg: "static/tempImg/curriculum.png", //后期显示base64
          title: "幸福能量",
          type:"charge",// free、charge
          price: "99",
          price_decimal: "00",
          address: [{
              id: 1,
              term: "第三十一期",
              type: "新训",
              city: "北京",
              addr: "北京市高碑店北京市高碑店北京市高碑店北京市高碑店北京市高碑店",
              lng: "5454.1212",
              lat: "212.212",
              time: "2019-01-23 08:00 至 2019-01-24 20:00",
              signAddr: "北京市高碑店长城酒店2楼会议厅",
              signTime: ["2019-01-23 08:00 至 2019-01-23 9:00", "2019-01-24 19:00 至 2019-01-24 20:00"]
            },
            {
              id: 2,
              term: "第三十一期",
              type: "新训",
              city: "上海",
              addr: "北京市高碑店北京市高碑店北京市高碑店北京市高碑店北京市高碑店",
              lng: "",
              lat: "",
              time: "2019-01-23 08:00 至 2019-01-24 20:00",
              signAddr: "北京市高碑店长城酒店2楼会议厅",
              signTime: ["2019-01-23 08:00 至 2019-01-23 9:00", "2019-01-24 19:00 至 2019-01-24 20:00"]
            }
          ],
          teachers: [{
              name: "王坤",
              img: "static/tempImg/head.png",
              desc: "家庭教育终身家庭教育终身家庭教育终身"
            },
            {
              name: "王坤",
              img: "static/tempImg/head.png",
              desc: "家庭教育终身家庭教育终身家庭教育终身"
            },
            {
              name: "王坤",
              img: "static/tempImg/head.png",
              desc: "家庭教育终身家庭教育终身家庭教育终身"
            },
            {
              name: "王坤",
              img: "static/tempImg/head.png",
              desc: "家庭教育终身家庭教育终身家庭教育终身"
            },
            {
              name: "王坤",
              img: "static/tempImg/head.png",
              desc: "家庭教育终身家庭教育终身家庭教育终身"
            }
          ],
          introduce: {
            img: "static/tempImg/curriculum.png",
            desc: "讲师介绍讲师介绍讲师介绍讲师介绍讲师介绍讲师。讲师介绍讲师介绍讲师介绍讲师介绍讲师介绍讲师介绍讲师介绍讲师介绍讲师介绍！"
          }
        }
      }
    },
    methods: {
      onCharge:function(){
        this.showBuy=true;
      }
    },
    mounted() {
      console.log("query参数", this.$route.query)
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head-img {
    width: 100%;
    height: 200px;
  }

  .head-img>img {
    width: 100%;
    height: 100%;
  }

  .title-price {
    padding: 11px 14px 50px;
  }

  .title-price .title {
    float: left;
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Medium;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 28px;
  }

  .title-price .price {
    float: right;
    height: 30px;
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(44, 173, 136, 1);
    line-height: 30px;
  }

  .title-price .price>span {
    font-size: 22px;
  }

  .agent{
    background:rgb(240, 240, 240);
    margin:0px 14px 30px;
    padding:10px;
  }

  .addr {
    padding: 0 14px;
    margin-bottom: 10px;
  }

  .addr .title {
    text-align: left;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 10px;
  }

  .addr .title .coll {
    float: right;
  }

  .addr .info {

    padding-top: 10px;
  }

  .addr .info .info-row {
    margin: 5px auto;
    display: inline-block;
  }

  .addr .info .label {
    width: 70px;
    float: left;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 20px;
  }

  .addr .info .text {
    width: 260px;
    float: left;
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 21px;
  }

  .teach {
    text-align: left;
    padding: 10px 14px;
  }

  .teach .title {
    border-left: 3px solid #2CAD88;
    padding-left: 10px;
    height: 22px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
  }

  .teach .teachers {
    margin: 10px 0px;
    width: 100%;
    overflow-x: scroll;
    display: -webkit-box;
    white-space: nowrap;
    /* ::-webkit-scrollbar{
          display:none;
        }  */
  }

  .teach .teachers::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  .teach .teachers .teacher {
    float: none;
    margin-right: 14px;
    display: inline-block;
    width: 90px;
  }

  .teach .teachers .teacher>img {
    width: 90px;
    height: 90px;
  }

  .teach .teachers .teacher>div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 95%;
  }

  .teach .curriculum {
    padding-top: 10px;
  }

  .teach .curriculum .img {
    width: 347px;
    height: 186px;

  }

  .teach .curriculum .desc {
    padding-top: 10px;
    color: #666;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }

</style>
