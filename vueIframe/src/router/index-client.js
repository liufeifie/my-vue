/**
 * 2017.10.25
 * lj
 * create
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// function layout (resolve, routString, sign) {
//   if (!resolve || !routString) {
//     console.log('resolve or router is not empty!')
//     return null
//   }
//   let reqPath = require(`@/${routString}`)
//   return sign ? require.ensure([], () => {
//     resolve(reqPath)
//   }, sign) : require.ensure([], () => {
//     resolve(reqPath)
//   })
// }

/**
 * title : doc title
 * isAuth : is or isn't check userInfo
 * header default true
 * footer default false
 * keepAlive  is or not cached ex watch $route
 */
export function createRouter (routerPaths) {
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
    router.app.$loading.setLoading(true)
    let meta = to.meta
    let store = router.app.$store
    let header = meta.header
    let footer = meta.footer
    let viewClass = ''
    if (typeof header === 'object') {
      viewClass += header.status ? 'border_t4_4 ' : ' '
    } else {
      if (typeof header === 'undefined') header = true
      viewClass += header ? 'border_t4_4 ' : ' '
    }
    if (typeof footer === 'object') {
      viewClass += footer.status ? 'border_b5 ' : ' '
    } else {
      if (typeof footer === 'undefined') footer = false
      viewClass += footer ? 'border_b5 ' : ' '
    }
    /* if (meta.APP && methods.checkHyhloan()) {
      if (typeof header === 'object') { header.APP = true } else { header = { APP: true } }
    } else {
      if (typeof header === 'object') delete header.APP
    }*/
    store.commit('SET_VIEW_CLASS', viewClass)
    store.commit('SET_ROUTE', to)
    store.commit('SET_HEADER', header)
    store.commit('SET_FOOTER', footer)
    if (meta.extendModules && meta.extendModules.length) {
      let routerServer = []
      let server = window.__INITIAL_STATE__.routerServer || []
      meta.extendModules.map(item => {
        if (server.indexOf(item) < 0 && store.state.extendModules.indexOf(item) < 0) {
          store.commit('EXTEND_MODULES', item)
          routerServer = routerServer.concat(require('./' + item))
        }
      })
      if (routerServer.length) {
        router.addRoutes(routerServer)
      }
    }
    // if (from.fullPath === to.fullPath) {
    //   router.back()
    //   return false
    // }
    // window.__INITIAL_STATE__.routerServer = window.__INITIAL_STATE__.routerServer || meta.extendModules || []
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
  router.afterEach((to, from) => {
    if (typeof document !== 'undefined') {
      let hmId = document.getElementById('hmId')
      if (hmId) hmId.parentNode.removeChild(hmId)
    }
  })
  return router
}
