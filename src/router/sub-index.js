/*
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 避免和袁柱代码冲突，我的路由都写到一个子路由文件，后期可以合并到一起
 */

export default [
      // 绑定手机号码
      {
        path: '/BindCellPhone',
        name: 'BindCellPhone',
        component: resolve => require(['@/pages/login/bindCellPhone'],resolve),
      },
      //绑定手机接收验证码
      {
        path: '/VerificationCode',
        name: 'VerificationCode',
        component: resolve => require(['@/pages/login/VerificationCode'],resolve),
      },
      //经营能量/非经营能量
      {
        path: '/Curriculum',
        name: 'Curriculum',
        component: resolve => require(['@/pages/Curriculum/Curriculum'],resolve),
      },
      // 能量支付页面
      {
        path: '/Payment',
        name: 'Payment',
        component: resolve => require(['@/pages/Curriculum/Payment'],resolve),
      },
      // 客服界面
      {
        path: '/CustomerService',
        name: 'CustomerService',
        component: resolve => require(['@/pages/My/CustomerService'],resolve),
      },
      // 设置
      {
        path: '/SetUp', 
        name: 'SetUp',
        component: resolve => require(['@/pages/My/SetUp'],resolve),
      },
      // 关于我们
      {
        path: '/AboutUs', 
        name: 'AboutUs',
        component: resolve => require(['@/pages/My/AboutUs'],resolve),
      },
      // 操作指南导航页
      {
        path: '/Help', 
        name: 'Help',
        component: resolve => require(['@/pages/My/Help'],resolve),
      },
      // 操作指南
      {
        path: '/HelpDetail', 
        name: 'HelpDetail',
        component: resolve => require(['@/pages/My/HelpDetail'],resolve),
      },
      // 兑换券
      {
        path: '/ExchangeCenter', 
        name: 'ExchangeCenter',
        component: resolve => require(['@/pages/My/ExchangeCenter/ExchangeCenter'],resolve),
      },
      //生成兑换券
      {
        path: '/Generate',
        name: 'Generate',
        component: resolve => require(['@/pages/My/ExchangeCenter/generate'],resolve),
      },
      // 支付占座费
      {
        path: '/SeatPayment',
        name: 'SeatPayment',
        component: resolve => require(['@/pages/My/ExchangeCenter/SeatPayment'],resolve),
      },
      // 赠送电子券
      {
        path: '/GiveExchangeCoin',
        name: 'GiveExchangeCoin',
        component: resolve => require(['@/pages/My/ExchangeCenter/GiveExchangeCoin'],resolve),
      },
      // 接收赠送电子券
      {
        path: '/ReceiveCoin',
        name: 'ReceiveCoin',
        component: resolve => require(['@/pages/My/ExchangeCenter/ReceiveCoin'],resolve),
      },
      // 消息中心
      {
        path: '/InformationList',
        name: 'InformationList',
        component: resolve => require(['@/pages/Information/InformationList'],resolve),
      },
      // 消息详情列表
      {
        path: '/InformationDetail',
        name: 'InformationDetail',
        component: resolve => require(['@/pages/Information/InformationDetail'],resolve),
      },
    ] 