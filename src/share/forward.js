/*
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 跳转路由服务，负责跳转参数的校验、跳转
 */
'use strict'
import router from '../router';
import comm from './common'
let noDev = function(){
    comm.msg("功能开发中，路由暂无法跳转");
}
export default {
    index:()=>{
        router.push("/");
    },
    // 登陆页面
    login:()=>{
        router.push("/login");
    },
    // 用户协议
    protocol:()=>{
        noDev();
    },
    // 客服页面
    service:()=>{
        router.push('/CustomerService');
    },
    // 设置页面
    setup:()=>{
        router.push('/SetUp');
    },
    // 设置-编辑资料
    editSelfInfo:()=>{
        //router.push('/editSelfInfo');
        noDev();
    },
    //关于我们
    aboutUs:()=>{
        router.push('/aboutUs');
    },
    //操作指南首页
    help:()=>{
        router.push('/help');
    },
    // 操作指南内容，type为auth、sign、appoint、exchange、login
    helpDetail:(type)=>{
        if(!type){comm.msg("type不能为空");return;}
        router.push('/HelpDetail?type='+type);
    },
    // 消息中心
    messageCenter:()=>{
        router.push('/InformationList');
    },
    // 消息详细列表 type 1 系统消息 2认证消息 3课程通知
    messageDetail:(type,title)=>{
        if(!type){comm.msg("消息类型type不能为空");return;}
        router.push(`/InformationDetail?type=${type}&title=${title}`);
    },
    // 能量详情（经营,代理商）,type=custom|agent 进入代理商视图、普通用户视图，id为能量的ID，用于获取显示内容
    curriculum:(id,type)=>{
        if(!id){comm.msg("课程id不能为空");return;}
        type = type?type:"custom";
        router.push(`/Curriculum?type=${type}&id=${id}`);
    },
    // 支付页面,order订单号，课程名，票价单价，数量
    payment:(order,name,price,count)=>{
        if(!order){comm.msg("订单号为空");return;}
        if(!name){comm.msg("课程名为空");return;}
        if(!price){comm.msg("票价为空");return;}
        if(!count){comm.msg("数量为空");return;}
        router.push(`/Payment?order=${order}&name=${name}&price=${price}&count=${count}`);
    },
    // 兑换中心兑换券页面 type 1未使用，2已送出，3已使用
    coinCertificate:(type=1)=>{
        router.push(`/ExchangeCenter?type=${type}`);
    },
    //代理商生成兑换券
    generate:()=>{
        router.push('/Generate');
    },
    // 订单管理列表,type 1 待审核、2待付款、3、待签到、4待确认、5已完成
    order:(type=1)=>{
        router.push(`/CourseOrderList?type=${type}`);
    },
    orderDetail:(id)=>{
        if(!id){comm.msg("订单编号为空");return;}
        router.push(`/CourseOrderDetail?id=${id}`);
    },
    // 使用兑换券,id为兑换券编号
    useExchangeCoupon(id,orderId=""){
        if(!id){comm.msg("兑换券编号为空");return;}
        router.push(`/SeatPayment?id=${id}&orderId=${orderId}`);
    },
    // 赠送兑换券,id为兑换券编号
    giveExchangeCoupon(id){
        if(!id){comm.msg("兑换券编号为空");return;}
        router.push(`/GiveExchangeCoin?id=${id}`);
    },
    // 接收兑换券,id为兑换券编号
    receiveCoupon(id){
        if(!id){comm.msg("兑换券编号为空");return;}
        router.push(`/ReceiveCoin?id=${id}`);
    }
    
}