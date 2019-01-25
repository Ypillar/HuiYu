window.cfg={
    httpAddr:"http://qd.api.test.nlsgapp.com/v1" || (window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/"), //如果不配置则直接请求本html所在的域名
    location:window.location.protocol+"//"+window.location.hostname+":"+window.location.port,
    
    appName:"慧宇千城",

    sessionKey:"devicemgr_token",
    debug:true,

    cryptoKey:'nlsghuiyujiaoyujt2020hyqc_xitong',// 3des加解密key


    // appid
    appId:"wxaef7fa6d4b9a6de1",
    // appsecret:"ba397ed91ba156432b2fef76cada1917"
    authUrl:"https://open.weixin.qq.com/connect/oauth2/authorize" 
}
