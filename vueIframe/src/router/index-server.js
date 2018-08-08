/**
 * 2017.10.25
 * lj
 * create
 */
import Vue from 'vue'
import Router from 'vue-router'
import main from './main'
import product from './product'
import person from './person'

Vue.use(Router)
/**
 * title : doc title
 * isAuth : is or isn't check userInfo
 * header default true
 * footer default false
 * keepAlive  is or not cached ex watch $route
 */
export function createRouter () {
  let routerPaths = [].concat(main, product, person)
  let router = new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior (to, form, savePostion) {
      if (savePostion) {
        return savePostion
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    },
    routes: routerPaths
  })
  router.beforeEach((to, from, next) => {
    let store = router.app.$store
    let meta = to.meta
    let header = meta.header
    let footer = meta.footer
    let search = meta.headerSearch || {}
    // let nav = typeof meta.nav !== 'undefined' && meta.nav
    let viewClass = ''
    if (typeof header === 'object') {
      viewClass += header.status ? 'border_t4_4 ' : ' '
    } else {
      if (typeof header === 'undefined') header = true
      viewClass += header ? 'border_t4_4 ' : ''
    }
    if (typeof footer === 'object') {
      viewClass += footer.status ? 'border_b5 ' : ' '
    } else {
      if (typeof footer === 'undefined') footer = false
      viewClass += footer ? 'border_b5 ' : ' '
    }
    /*if ( viewServer.methods.checkBrowser(store.state.useragent).hyhloan) {
      if (typeof header == 'object') { header.APP = true } else { header = { APP: true } }
    }else{
      if (typeof header == 'object')  delete header.APP
    }*/
    store.commit('SET_VIEW_CLASS', viewClass)
    store.commit('SET_HEADER', header)
    store.commit('SET_FOOTER', footer)
    store.commit('SET_HEADER_SEARCH', search)
    store.commit('HEADER_CENTER', null)
    next()
    // window.document.title = to.meta.title
    // let store = router.app.$store
    // if (to.path === '/login' && store.userInfo.isLogin) {
    //   next()
    // } else {
    //   if (to.matched.some((item) => item.meta.isAuth)) {
    //     // if to is login
    //     store.dispatch('checkUserInfo').then((data) => {
    //       next()
    //     })
    //   } else {
    //     next()
    //   }
    // }

    // if (to.matched.some((item) => item.meta.login)) {
    //   let info = router.app.$local.fetch('miaov')

    //   if (info.login) {  // 已经登录
    //     next()
    //   } else {
    //     router.push({
    //       path: '/login',
    //       query: {
    //         redirect: to.path.slice(1)
    //       }
    //     })
    //   }
    // } else {
    //   next()
    // }
  })
  return router
}
