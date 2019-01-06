'use strict'
import router from '../router';
import { Toast   } from 'mint-ui';
import comm from './common'
let noDev = function(){
    Toast({message: "功能开发中"});
}
export default {
    index:()=>{
        router.push("/");
    },
    // 登陆页面
    login:()=>{
        router.push("/login");
    },
    // 客服页面
    service:()=>{
        noDev();
    },
    // 消息中心
    messageCenter:()=>{
        noDev();
    },
    // 能量详情（经营,代理商）,type=custom|agent 进入代理商视图、普通用户视图，id为能量的ID，用于获取显示内容
    curriculum:(id,type)=>{
        if(!id)return "课程id不能为空";
        type = type?type:"custom";
        router.push(`/Curriculum?type=${type}&id=${id}`);
    },
    // 支付页面,order订单号，课程名，票价单价，数量
    payment:(order,name,price,count)=>{
        if(!order)return "订单号为空";
        if(!name)return "课程名为空";
        if(!price)return "票价为空";
        if(!count)return "数量为空";
        router.push(`/Payment?order=${order}&name=${name}&price=${price}&count=${count}`);
    },
    // 兑换券页面 type 1未使用，2已送出，3已使用
    coinCertificate:(type)=>{
        noDev();
    },
    // 订单管理列表,type 1 待审核、2付款、3、待签到、4待确认、5已完成
    order:(type)=>{
        noDev();
    }

}