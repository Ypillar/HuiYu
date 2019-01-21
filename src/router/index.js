import Vue from 'vue'
import Router from 'vue-router'
import subIndex from './sub-index'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/pages/index/index'],resolve),
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: resolve => require(['@/pages/jyj/HelloWorld'],resolve),
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/pages/login/login'],resolve),
    },
    {
      path: '/home',//首页我的
      name: 'Home',
      component: resolve => require(['@/pages/My/Home/home'],resolve),
    },
    {
      path: '/verify',//证件核实
      name: 'Verify',
      component: resolve => require(['@/pages/My/CheckInGroup/Verify'],resolve),
    },
    {
      path: '/tips',//暂无兑换券/暂无网络
      name: 'Tips',
      component: resolve => require(['@/pages/My/Tips'],resolve),
    },
    {
      path: '/checkInGroupList',//签到组人数列表
      name: 'CheckInGroupList',
      component: resolve => require(['@/pages/My/CheckInGroup/checkInGroupList'],resolve),
    },
    {
      path: '/checkInGroupVerifiesSuccess',//签到组核实成功
      name: 'CheckInGroupVerifiesSuccess',
      component: resolve => require(['@/pages/My/CheckInGroup/checkInGroupVerifiesSuccess'],resolve),
    },
    {
      path: '/personalInformation',//讲师入驻个人信息
      name: 'PersonalInformation',
      component: resolve => require(['@/pages/LecturerInResidence/personalInformation'],resolve),
    },
    {
      path: '/lecturerInformation',//讲师入驻身份信息
      name: 'LecturerInformation',
      component: resolve => require(['@/pages/LecturerInResidence/lecturerInformation'],resolve),
    },
    {
      path: '/entryAudit',//计量入驻入驻审核
      name: 'EntryAudit',
      component: resolve => require(['@/pages/LecturerInResidence/entryAudit'],resolve),
    },
    {
      path: '/identityInformation',//讲师资料
      name: 'IdentityInformation',
      component: resolve => require(['@/pages/LecturerInResidence/identityInformation'],resolve),
    },
    {
      path: '/entryAuditSuccess',//讲师入驻成功
      name: 'EntryAuditSuccess',
      component: resolve => require(['@/pages/LecturerInResidence/entryAuditSuccess'],resolve),
    },
    {
      path: '/entryAuditError',//讲师入驻失败
      name: 'EntryAuditError',
      component: resolve => require(['@/pages/LecturerInResidence/entryAuditError'],resolve),
    },
    {
      path: '/essentialInformation',//基本信息
      name: 'EssentialInformation',
      component: resolve => require(['@/pages/My/CooperationAndUltimate/EssentialInformation'],resolve),
    },
    {
      path: '/enterpriseInformation',//企业信息认证
      name: 'EnterpriseInformation',
      component: resolve => require(['@/pages/My/CooperationAndUltimate/EnterpriseInformation'],resolve),
    },
    {
      path: '/serviceInformation',//服务信息认证
      name: 'ServiceInformation',
      component: resolve => require(['@/pages/My/CooperationAndUltimate/ServiceInformation'],resolve),
    },
    {
      path: '/authenticationHome',//认证
      name: 'AuthenticationHome',
      component: resolve => require(['@/pages/My/Authentication/AuthenticationHome'],resolve),
    },
    {
      path: '/auditSubmission',//认证提交成功
      name: 'AuditSubmission',
      component: resolve => require(['@/pages/My/Authentication/certificationAudit/AuditSubmission'],resolve),
    },
    {
      path: '/auditFailure',//认证失败
      name: 'AuditFailure',
      component: resolve => require(['@/pages/My/Authentication/certificationAudit/AuditFailure'],resolve),
    },
    {
      path: '/auditSuccess',//认证失败
      name: 'AuditSuccess',
      component: resolve => require(['@/pages/My/Authentication/certificationAudit/AuditSuccess'],resolve),
    },
  ].concat(subIndex)
})
