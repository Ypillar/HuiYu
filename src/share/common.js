/*
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: comm工具函数服务
 */
'use strict'
import Vue from 'vue'
//import cfg from 'static/config'
import router from '../router';
import cache from './cache';
import schedule from './schedule';
// import { Toast,MessageBox,Indicator   } from 'mint-ui';
// import { Loading } from 'element-ui';
import { Toast,Dialog } from 'vant';
import des3 from './des3';

Vue.use(Toast);
Vue.use(Dialog)

let loading=null;
// let loadingInstance = null;
export default{
    /**
     * 
     * @param {*} url 请求接口，例如/Coupon/getCouponStatusList
     * @param {*} data post的参数
     * @param {*} success 成功回调
     * @param {*} error 错误回调
     * @param {*} noMask 为true不显示遮罩动画
     * @param {*} silent 为true时，即便是错误也自动不提示错误信息
     */
    httpPost:function(url,data,success,error,noMask,silent){
        var that = this;
        if(!noMask)that.loading();
        Vue.http.post(cfg.httpAddr+url,data).then(response=>{
            if(!noMask)that.loaded();
            let res = response.body;
            if(res.code===200){
                success && success(res);  
            }else{
                if(!silent){
                    that.msgError(res.msg);
                }
                error && error(res);
            }
        }).catch(response=>{
            if(!noMask)that.loaded();
            if(!silent){
                if(response.status===401){
                    that.msgError('未登录或已过期, 请重新登录');
                }else
                    that.msgError((response.status||'错误')+': '+(response.body===''?response.body:'运行错误'));
            }
            if(response.status===401){
                router.push('/login');
              }
            error && error(response);
        });
    },
    httpGet:function(url,data,success,error){
        Vue.http.get(cfg.httpAddr+url,data).then(success).catch(error);
    },

    // 提示信息
    msg:txt=>{
        Toast({
            message: txt,
            // duration:-1
        })
    },
    //
    msgSuccess:txt=>{
        Toast.success(txt||'操作成功');
    },
    msgError:txt=>{
        Toast.fail(txt||'操作失败');
    },
    msgBox:(txt,title)=>{
        //MessageBox(title||'提示', txt);
        return Dialog.alert({
            title: title||'提示',
            message: txt
          });
    },
    confirm:(message,title,opt={})=>{
        return Dialog.confirm(Object.assign({
            message,
            title:title||"提示"
        },opt));
    },

    // 加载状态遮罩控制
    loading:(txt)=>{
        loading = Toast.loading({
            duration: 0,       // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            loadingType: 'spinner',
            message: txt||'请稍候'
          });
    },
    loaded:()=>{
        if(loading)loading.clear();
    },

    // 登录状态
    // 判断是否登录，boolean
    isLogin:function(){
        return cache.sCache.exists(cfg.sessionKey);
    },
    // 登录后设置登录状态
    setLoginInfo:function(userInfo){
        cache.sCache.set(cfg.sessionKey,userInfo);
    },
    // 获取登录的用户信息
    getLoginInfo:function(){
        return cache.sCache.get(cfg.sessionKey);
    },
    getToken:function(){
        if(this.isLogin()){
            return this.getLoginInfo().token
        }else{
            return "";
        }
    },
    
    //任务调度
    addSchedule:function(opt){
        return schedule.addTask(opt);
    },
    removeSchedule:function(guidOrTask){
        return schedule.removeTask(guidOrTask);
    },

    // 其他类型工具函数
    // 3des解密
    decrypt:function(cipherText){
        console.log(des3)
        return des3.decrypt(cipherText);
    },
    // 3des加密
    encrypt:function(text){
        return des3.encrypt(text);
    },
    debug:function(){
        if(cfg.debug)console.debug.apply(console,arguments);
    },

    getGuid:()=> {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    },
    stringLoop(len,char){
        var str ="";
        while(len>0){
           str+=char;
           len--;
        }
        return str;
     },
     padString(val,len,lOrR,char){
        if (typeof(val) != "string")
           val = String(val);
        var MANY_ZEROS = this.stringLoop(len,char);
        switch(lOrR.toLocaleString()){
           case "l":return (MANY_ZEROS.substring(0, len - val.length)) + val;break;
           default:return val+(MANY_ZEROS.substring(0, len - val.length));break;
        }
     },
     /*
      * 生成指定范围的随机数
      */
     getRandom(min, max) {
        if(min===undefined)min=0;
        if(max===undefined)max=100;
        return Math.floor(min + Math.random() * (max - min+1));
     },
     /*
      * 生成指定位数的随机数, len1表示长度，format为C时表示返回字符串，否则返回float
      */
     getRandomByLen(len1,format) {
        if(!len1 || len1<1)len1=1;
        var t = len1;
        var result="";
        while(t>0){
           if(t>16){
              var min = parseFloat(this.padString("1",16,"R","0"));
              var max = parseFloat(this.padString("9",16,"R","9"));
              result += this.getRandom(min,max);
           }else{
              var min = parseFloat(this.padString("1",t,"R","0"));
              var max = parseFloat(this.padString("9",t,"R","9"));
              result += this.getRandom(min,max);
           }
           t-=16;
        }
        return format==="N"?parseFloat(result):result;
     },

    getClientHeight(){
        var clientHeight=0;
        if(document.body.clientHeight&&document.documentElement.clientHeight){
          var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
        }
        else{
          var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
        }
        return clientHeight;
      },
    
      getClientWidth(){
        var clientWidth=0;
        if(document.body.clientWidth&&document.documentElement.clientWidth){
          var clientWidth = (document.body.clientWidth<document.documentElement.clientWidth)?document.body.clientWidth:document.documentElement.clientWidth;
        }
        else{
          var clientWidth = (document.body.clientWidth>document.documentElement.clientWidth)?document.body.clientWidth:document.documentElement.clientWidth;
        }
        return clientWidth;
      }

    // getCookie: function (cname) {
    //     var name = cname + "=";
    //     var ca = document.cookie.split(';');
    //     //console.log(cname,document.cookie)
    //     for (var i = 0; i < ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0) == ' ') c = c.substring(1);
    //         if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    //     }
    //     return "";
    // },
    // showMask:function(msg='请稍后'){
    //     loadingInstance = Loading.service({ fullscreen: true,text:msg,background:'rgba(0, 0, 0, 0.7)' });
    //     return true;
    // },
    // hideMask:function(){
    //     loadingInstance && loadingInstance.close();
    //     return false;
    // }
}