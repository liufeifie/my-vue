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
   * 2017.11.15
   * lzh
   * 首页
   */
  {
    path: '/product',
    name: 'product',
    meta: {
      header: true,
      footer: true,
      nav: true,
      extendModules: ['main', 'person']
    },
    component: (resolve) => require(['@/views/product'], resolve)
  }
]
