export default [
  {
    path: '/person',
    name: 'person',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person'], resolve)
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
  }, {
    path: '/person/router',
    component: (resolve) => require(['@/view/person/router/index.template'], resolve),
    children: [
      {
        path: '',
        name: 'router',
        meta: {header: true, isAuth: true, footer: true},
        component: (resolve) => require(['@/view/person/router/index'], resolve)
      }, {
        path: 'child',
        component: (resolve) => require(['@/view/person/router/child.template'], resolve),
        children: [
          {
            path: '',
            name: 'child',
            meta: {header: true, isAuth: true, footer: true},
            component: (resolve) => require(['@/view/person/router/child'], resolve)
          }, {
            path: 'grandchild',
            name: 'grandchild',
            meta: {header: true, isAuth: true, footer: true},
            component: (resolve) => require(['@/view/person/router/grandchild'], resolve)
          }
        ]
      }
    ]
  }, {
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
    path: '/person/es6/promise',
    name: 'es6_promise',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/promise'], resolve)
  }, {
    path: '/person/es6/array',
    name: 'es6_array',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/array'], resolve)
  }, {
    path: '/person/es6/set',
    name: 'es6_set',
    meta: {header: true, isAuth: true, footer: true},
    component: (resolve) => require(['@/view/person/es6/set'], resolve)
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
