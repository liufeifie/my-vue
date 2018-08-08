/**
 * title : doc title
 * isAuth : is or isn't check userInfo
 * loginCallBackUrl
 * headerSearch : {
 *  status: false,
 *  inputClass: '',
 *  readonly: true,
 *  url:'',
 *  searchClass:'',
 *  value: ''
 * }
 * The page is expected to jump the module;
 * disabled module: actives  advisor logRe
 * extendModules:[]
 * header: default true
 * footer: default false
 */
module.exports = [
  /**
   * 2018.04.04
   * lff
   * 账户
   */
  {
    path: '/person',
    name: 'person',
    meta: {
      header: true,
      footer: true,
      nav: true,
      extendModules: ['product', 'main']
    },
    component: (resolve) => require(['@/views/person'], resolve)
  },
  /**
   * 2018.04.08
   * lff
   * 我的账户 flex布局
   */
  {
    path: '/person/flex',
    name: 'flex',
    meta: {
      footer: true,
      extendModules: ['product', 'person']
    },
    component: (resolve) => require(['@/views/person/flex'], resolve)
  },
  /**
   * 2018.04.08
   * lff
   * 我的账户 flex布局 测试
   */
  {
    path: '/person/flex/check',
    name: 'test',
    meta: {
      footer: true,
      extendModules: ['product', 'person']
    },
    component: (resolve) => require(['@/views/person/flex/check'], resolve)
  },
  /**
   * 2018.04.08
   * lff
   * 我的账户 js对象
   */
  {
    path: '/person/object',
    name: 'object',
    meta: {
      footer: true,
      extendModules: ['product', 'person']
    },
    component: (resolve) => require(['@/views/person/object'], resolve)
  },
  /**
   * 2018.04.08
   * lff
   * 我的账户 js对象 Prototype
   */
  {
    path: '/person/prototype',
    name: 'prototype',
    meta: {
      footer: true,
      extendModules: ['product', 'person']
    },
    component: (resolve) => require(['@/views/person/object/prototype'], resolve)
  },
  /**
   * 2018.04.08
   * lff
   * 我的账户 计算属性1
   */
  {
    path: '/person/computed',
    name: 'computed',
    meta: {
      footer: true,
      extendModules: ['product', 'person']
    },
    component: (resolve) => require(['@/views/person/computed'], resolve)
  },
  /**
   * 2018.04.08
   * lff
   * 我的账户 计算属性2
   */
  /*{
    path: '/person/computed/child',
    name: 'child',
    meta: {
      footer: true,
      extendModules: ['product', 'person']
    },
    component: (resolve) => require(['@/views/person/computed/child'], resolve)
  }*/
]
