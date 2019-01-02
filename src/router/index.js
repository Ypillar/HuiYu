import Vue from 'vue'
import Router from 'vue-router'
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
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/pages/login/login'],resolve),
    }
   
  ]
})
