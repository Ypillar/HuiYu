
export default [
      {
        path: '/BindCellPhone',
        name: 'BindCellPhone',
        component: resolve => require(['@/pages/login/bindCellPhone'],resolve),
      },
      {
        path: '/VerificationCode',
        name: 'VerificationCode',
        component: resolve => require(['@/pages/login/VerificationCode'],resolve),
      }
    ] 