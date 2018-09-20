export default [
  {
    path: '/person',
    name: 'person',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person'], resolve)
  }, {
    path: '/person/css3',
    name: 'css3',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/css3'], resolve)
  }, {
    path: '/person/flex',
    name: 'flex',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/flex'], resolve)
  }, {
    path: '/person/flex/check',
    name: 'check',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/flex/check'], resolve)
  }, { // ************************** vue 的知识点 ***************************
    path: '/person/vue',
    name: 'vue',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/vue'], resolve)
  }, {
    path: '/person/vue/router',
    component: (resolve) => require(['@/view/person/vue/router/index.template'], resolve),
    children: [
      {
        path: '',
        name: 'router',
        meta: {header: true, isAuth: true, footer: true},
        component: (resolve) => require(['@/view/person/vue/router/index'], resolve)
      }, {
        path: 'child',
        component: (resolve) => require(['@/view/person/vue/router/child.template'], resolve),
        children: [
          {
            path: '',
            name: 'child',
            meta: {header: true, isAuth: true, footer: true},
            component: (resolve) => require(['@/view/person/vue/router/child'], resolve)
          }, {
            path: 'grandchild',
            name: 'grandchild',
            meta: {header: true, isAuth: true, footer: true},
            component: (resolve) => require(['@/view/person/vue/router/grandchild'], resolve)
          }
        ]
      }
    ]
  }, {
    path: '/person/vue/keepalive',
    component: (resolve) => require(['@/view/person/vue/keepalive'], resolve),
    children: [
      {
        path: '/',
        name: 'vue_keepalive',
        meta: {header: true, isAuth: true, footer: true},
        component: (resolve) => require(['@/view/person/vue/keepalive/list'], resolve)
      }, {
        path: 'detail',
        name: 'vue_detail',
        meta: {header: true, isAuth: true, footer: true},
        component: (resolve) => require(['@/view/person/vue/keepalive/detail'], resolve)
      }, {
        path: ':id',
        name: 'vue_detail2',
        meta: {header: true, isAuth: true, footer: true},
        component: (resolve) => require(['@/view/person/vue/keepalive/detail'], resolve)
      }
    ]
  }, { // ************************** es6 的知识点 *************************
    path: '/person/es6',
    name: 'es6_index',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6'], resolve)
  }, {
    path: '/person/es6/letConst',
    name: 'es6_letConst',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/letConst'], resolve)
  }, {
    path: '/person/es6/destructuring',
    name: 'es6_destructuring',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/destructuring'], resolve)
  }, {
    path: '/person/es6/string',
    name: 'es6_string',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/string'], resolve)
  }, {
    path: '/person/es6/array',
    name: 'es6_array',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/array'], resolve)
  }, {
    path: '/person/es6/function',
    name: 'es6_function',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/function'], resolve)
  }, {
    path: '/person/es6/object',
    name: 'es6_object',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/object'], resolve)
  }, {
    path: '/person/es6/symbol',
    name: 'es6_symbol',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/symbol'], resolve)
  }, {
    path: '/person/es6/setmap',
    name: 'es6_setmap',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/setmap'], resolve)
  }, {
    path: '/person/es6/proxy',
    name: 'es6_proxy',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/proxy'], resolve)
  }, {
    path: '/person/es6/promise',
    name: 'es6_promise',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/promise'], resolve)
  }, {
    path: '/person/es6/generatorAsync',
    name: 'es6_generatorAsync',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/generatorAsync'], resolve)
  }, {
    path: '/person/es6/class',
    name: 'class',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/class'], resolve)
  }, {
    path: '/person/ajax',
    name: 'ajax',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/ajax'], resolve)
  }, {
    path: '/person/object',
    name: 'object',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/object'], resolve)
  }
]
