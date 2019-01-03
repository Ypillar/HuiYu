window.cfg={
    httpAddr:"" || (window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/"), //如果不配置则直接请求本html所在的域名
    location:window.location.protocol+"//"+window.location.hostname+":"+window.location.port,
    
    appName:"慧宇千城",

    sessionKey:"devicemgr_token",
    debug:true,

    refresh_device_status:10, // 刷新板子在线状态，单位秒
    refresh_imsi_status:60, // 刷新imsi采集状态，单位秒

    
}
