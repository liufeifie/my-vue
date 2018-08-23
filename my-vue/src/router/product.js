export default [
  {
    path: '/product',
    name: 'product',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/product'], resolve)
  }, {
    path: '/product/tool',
    name: 'tool',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/product/tool'], resolve)
  }, {
    path: '/product/tool/thousands',
    name: 'tool-thousands',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/product/tool/thousands'], resolve)
  }, {
    path: '/product/tool/time',
    name: 'tool-time',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/product/tool/time'], resolve)
  }, {
    path: '/product/better-scroll',
    name: 'better-scroll',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/product/better-scroll'], resolve)
  }, {
    path: '/product/vux',
    name: 'vux',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/product/vux'], resolve)
  }, {
    path: '/product/vux/pull',
    name: 'vux_pull',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/product/vux/pull'], resolve)
  }, {
    path: '/product/lock',
    name: 'lock',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/product/lock'], resolve)
  }
]
