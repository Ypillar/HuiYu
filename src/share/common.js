'use strict'
import Vue from 'vue'
//import cfg from 'static/config'
import router from '../router';
// import { Loading } from 'element-ui';

// let loadingInstance = null;
export default{
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
    msgSuccess:txt=>{
        Vue.prototype.$message({message: txt,type: 'success'})
    },
    msgWarning:txt=>{
        Vue.prototype.$message({message: txt,type: 'warning'})
    },
    msgError:txt=>{
        Vue.prototype.$message.error(txt);
    },
    confirm:(txt,ok,cancel)=>{
        Vue.prototype.$confirm(txt, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            ok && ok();
          }).catch(() => {
            cancel && cancel();   
          });
    },
    validLogin:function(){
        this.debug('validLogin: ',sessionStorage.getItem(cfg.sessionKey));
        if(!sessionStorage.getItem(cfg.sessionKey)){
            router.push('/login');
        }
    },
    debug:function(){
        if(cfg.debug)console.debug.apply(console,arguments);
    },
    getCookie: function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        //console.log(cname,document.cookie)
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
    },
    // showMask:function(msg='请稍后'){
    //     loadingInstance = Loading.service({ fullscreen: true,text:msg,background:'rgba(0, 0, 0, 0.7)' });
    //     return true;
    // },
    // hideMask:function(){
    //     loadingInstance && loadingInstance.close();
    //     return false;
    // }
}