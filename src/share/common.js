'use strict'
import Vue from 'vue'
//import cfg from 'static/config'
import router from '../router';
import cache from './cache';
import { Toast,MessageBox  } from 'mint-ui';
// import { Loading } from 'element-ui';

// let loadingInstance = null;
export default{
    // http
    httpPost:function(url,data,success,error,noMask,silent){
        var that = this;
        if(!noMask)this.showMask();
        Vue.http.post(cfg.httpAddr+url,data).then(response=>{
            if(!noMask)this.hideMask();
            let res = response.body;
            if(res.code>=1000 && res.code<9000){
                success && success(res);  
            }else{
                if(!silent){
                    Vue.prototype.$message({
                        message: res.msg,
                        type: 'warning'
                    });
                }
                error && error(res);
            }
        }).catch(response=>{
            if(!noMask)this.hideMask();
            console.log(response)
            if(!silent){
                if(response.status===401){
                    that.msgWarning('未登录或已过期, 请重新登录');
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
            message: txt
        })
    },
    //
    msgSuccess:txt=>{
        Toast({
            message: txt||'操作成功',
            iconClass: 'mint-toast-icon mintui mintui-success msg-icon-size',
            // duration:-1
        });
    },
    msgWarning:txt=>{
        Toast({
            message: txt,
            iconClass: 'mint-toast-icon mintui mintui-field-warning msg-icon-size',
            // duration:-1
        });
    },
    msgError:txt=>{
        Toast({
            message: txt,
            iconClass: 'fa fa-times msg-error-icon-size',
            // duration:-1
        });
    },
    msgBox:(txt,title)=>{
        //MessageBox(title||'提示', txt);
        return MessageBox.alert(txt,title||'提示');
    },
    confirm:(txt,title)=>{
        return MessageBox.confirm(txt,title||"提示")
    },

    // 登录状态
    // 判断是否登录，boolean
    isLogin:function(){
        return cache.exists(cache.SESSION_CACHE,cfg.sessionKey);
    },
    // 登录后设置登录状态
    setLoginInfo:function(userInfo){
        cache.set(cache.SESSION_CACHE,cfg.sessionKey,userInfo);
    },
    // 获取登录的用户信息
    getLoginInfo:function(){
        return cache.get(cache.SESSION_CACHE,cfg.sessionKey);
    },
    getToken:function(){
        if(this.isLogin()){
            return this.getLoginInfo().token
        }else{
            return "";
        }
    },
    

    // 其他类型工具函数
    debug:function(){
        if(cfg.debug)console.debug.apply(console,arguments);
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