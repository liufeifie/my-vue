import 'babel-polyfill'
import Vue from 'vue'
import 'es6-promise/auto'
import { createApp } from './main-client'
import ProgressBar from './components/ProgressBar.vue'
import notice from './components/Notice.vue'
import methods from '@/util/view-client'
import loading from './components/Loading.vue'
// Vue.prototype.$http = new Http()
window.getElHeight = function (id) {
  let obj = document.getElementById(id)
  let style = null
  if (window.getComputedStyle) {
    style = window.getComputedStyle(obj, null) // 非IE
  } else {
    style = obj.currentStyle // IE
  }
  return parseFloat(style.height)
}
window.screenHeight = function () {
  var winHeight = 600
  if (window.innerHeight) {
    winHeight = window.innerHeight
  } else if ((document.body) && (document.body.clientHeight)) {
    winHeight = document.body.clientHeight
  }

  return winHeight
}
// function myonresize () {
//   let content = document.getElementById('contents')
//   let header = document.getElementById('header').style.display === 'none'
//   let search = document.getElementById('searchheader').style.display === 'none'
//   let footer = document.getElementById('footer').style.display === 'none'
//   let h = 0
//   if (!header) {
//     h = h + window.getElHeight('header')
//   }
//   if (!footer) {
//     h = h + window.getElHeight('footer')
//   }
//   if (!search) {
//     h = h + window.getElHeight('searchheader')
//   }
//   content.style.height = `${window.screenHeight() - h}px`
// }
// window.addEventListener('resize', myonresize)
const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
document.body.appendChild(bar.$el)
const mynotice = Vue.prototype.$notice = new Vue(notice).$mount()
document.body.appendChild(mynotice.$el)
const myloading = Vue.prototype.$loading = new Vue(loading).$mount()
document.body.appendChild(myloading.$el)
// import ProgressBar from './components/ProgressBar.vue'

// global progress bar
// const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
// document.body.appendChild(bar.$el)

// a global mixin that calls `asyncData` when a route component's params change
function asyncuserInfo ({store, route = {}}) {
  return store.dispatch('USER_INFO')
  // return store.dispatch('USER_INFOR').then(data => {
  //   if (data.head.returnCode === '04' && route.path !== '/login') {
  //     route.push({
  //       path: '/login',
  //       query: {
  //         loginbackurl: route.path
  //       }
  //     })
  //   }else{
  //     return data
  //   }
  // })
}

// resolve all cookie to json
function resolveCookie () {
  let cookies = {}
  document.cookie.split(';').map(item => {
    let tmp = item.split('=')
    cookies[tmp[0].replace(/(^\s*)/g, '')] = unescape(tmp[1])
  })
  return cookies
}

Vue.mixin({
  // beforeRouteEnter (to, from, next) {
  //   // let content = document.getElementById('contents')
  //   // content.style.overflow = 'hidden'
  //   // let meta = to.meta
  //   // let header = typeof meta.header === 'undefined' || meta.header
  //   // let search = meta.headerSearch || {}
  //   // let footer = typeof meta.footer !== 'undefined' && meta.footer
  //   // let h = 0
  //   // if (header) {
  //   //   h = h + window.getElHeight('header')
  //   // }
  //   // if (footer) {
  //   //   h = h + window.getElHeight('footer')
  //   // }
  //   // if (search.status) {
  //   //   h = h + window.getElHeight('searchheader')
  //   // }
  //   // content.style.height = `${window.screenHeight() - h}px`
  //   // content.style.overflow = 'auto'
  //   console.log('enter',`${screenHeight() - h}px`)
  //   next()
  // },
  beforeRouteUpdate (to, from, next) {
    mynotice.setNotice(false)
    const {asyncData} = this.$options
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to,
        cookie: resolveCookie()
      }).then(next).catch(next)
    } else {
      next()
    }
  },
  mounted () {
    // if (typeof document !== 'undefined') {
    //   let hmId = document.getElementById('hmId')
    //   if (!hmId) {
    //     var _hmt = _hmt || [];
    //     (function () {
    //       var hm = document.createElement('script')
    //       hm.src = 'https://hm.baidu.com/hm.js?4e20b33afd23290a82052da62ef7c9c7'
    //       hm.id = 'hmId'
    //       var s = document.getElementsByTagName('script')[0]
    //       s.parentNode.insertBefore(hm, s)
    //     })()
    //   }
    //   //
    //   let contentsId = document.getElementById('contents')
    //   let contentDivId = document.getElementById('content_div')
    //   if (contentsId && contentsId.scrollTop > 0) contentsId.scrollTop = 0
    //   if (contentDivId && contentDivId.scrollTop > 0) contentDivId.scrollTop = 0
    // }
    myloading.setLoading(false)
  },
  methods})
// view public

const {app, router, store} = createApp()

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// wait until router has resolved all async before hooks
// and async components...
router.onReady(() => {
  // checked userinfor status report error and init dictionaries
  // app.errorModus(store.getters['USER_INFOR_HEADER'])
  // store.commit('SET_USER_INFOR', methods.sessgetItem('userInfo'))
  // error notice
  let errorMsg = store.getters['GET_SERVER_DATA']()
  for (let key in errorMsg) {
    if (errorMsg[key].msgStatus && errorMsg[key]) {
      app.errorModus(errorMsg[key])
      break
    }
  }
  // Add router hook for handling asyncData.
  // Doing it after initial route is resolved so that we don't double-fetch
  // the data that we already have. Using router.beforeResolve() so that all
  // async components are resolved.
  router.beforeResolve((to, from, next) => {
    myloading.setLoading(true)
    store.commit('PAGE_TITLE', '...')
    store.commit('HEADER_LEFT', null)
    store.commit('HEADER_RIGHT', {})
    store.commit('HEADER_CENTER', null)
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })
    let nouserPath = ['/forgetpwd',
      '/setPwd',
      '/login',
      '/loginpwd',
      '/regpwd',
      '/register'
    ]
    let asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
    if (nouserPath.indexOf(to.path) < 0 &&
      !to.path.match(/\/error\/(404|500)/)) {
      asyncDataHooks = [asyncuserInfo].concat(asyncDataHooks)
    }
    if (!asyncDataHooks.length) {
      // myloading.setLoading(false)
      return next()
    }
    bar.start()
    Promise.all(asyncDataHooks.map(hook => hook({store, route: to, cookie: resolveCookie()})))
      .then((data) => {
        if (to.meta.isAuth && data.filter(item => {
          if (item instanceof Array) {
            return item.filter(citem => citem.code === 'LOGIN').length !== 0
          } else {
            return item && item.code === 'LOGIN'
          }
        }).length !== 0) {
          window.location.replace(`/login?loginbackurl=${to.fullPath}`)
          // router.push({
          //   path: '/login',
          //   query: {
          //     loginbackurl: to.path
          //   }
          // })
        }
        bar.finish()
        // myloading.setLoading(false)
        next()
      })
      .catch(next)
  })

  // actually mount to DOM
  app.$mount('#app')
})

// service worker
if (location.protocol === 'https:' && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}
