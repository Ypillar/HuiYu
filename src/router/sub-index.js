
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
      
    ] 