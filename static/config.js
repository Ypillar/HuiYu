window.cfg={
    httpAddr:"" || (window.location.protocol+"//"+window.location.hostname+":8081/"), //如果不配置则直接请求本html所在的域名

    sessionKey:"devicemgr_token",
    debug:true,

    refresh_device_status:10, // 刷新板子在线状态，单位秒
    refresh_imsi_status:60, // 刷新imsi采集状态，单位秒

    firmInfo:{
        firmNo:'765941742',
        firmName:'重庆爱思网安',
        firmAddress:'重庆市北部新区青枫北路30号拓展区A5区凤凰C座7楼（左）'
    }
}
