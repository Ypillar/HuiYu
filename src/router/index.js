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
      path: '/verify',//核实身份证
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
      path: '/personalInformation',//核实成功
      name: 'PersonalInformation',
      component: resolve => require(['@/pages/LecturerInResidence/personalInformation'],resolve),
    },
    {
      path: '/lecturerInformation',//核实成功
      name: 'LecturerInformation',
      component: resolve => require(['@/pages/LecturerInResidence/lecturerInformation'],resolve),
    },
    {
      path: '/entryAudit',//核实成功
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
  ].concat(subIndex)
})
