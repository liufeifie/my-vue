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
   * 2018.04.08
   * lff
   * 首页
   */
  {
    path: '/',
    name: 'home',
    meta: {
      footer: true,
      extendModules: ['product', 'person']
    },
    component: (resolve) => require(['@/views/home'], resolve)
  }
]
