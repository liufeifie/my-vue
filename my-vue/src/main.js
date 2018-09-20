// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import 'es6-promise/auto'

import App from './App'
import mintUi from './util/mintUi'
import * as filters from './util/filter'
import 'mint-ui/lib/style.css'
import { createStore } from './store'
import { createRouter } from './router'

import pageConfig from './util/pageConfig'
import methods from './util/methods'
import BScroll from 'better-scroll'

const store = createStore()
const router = createRouter()

// Vue.use(MintUI)
Vue.prototype.$BScroll = BScroll
Vue.prototype.$mintUi = mintUi
Object.keys(filters).forEach((item) => {
  Vue.filter(item, filters[item])
})

Vue.config.productionTip = false
// window 对象自定义新属性 判断开发环境
if (typeof window !== 'undefined') {
  window._devtools = Vue.config.devtools
}

Vue.mixin(methods)
Vue.mixin(pageConfig)
Vue.mixin({
  /* beforeRouteEnter (to, from, next) {
    MintUI.Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    next()
  }, */
  beforeRouteUpdate (to, from, next) {
    router.app.$mintUi.setLoading(false)
    next()
  },
  activated () {
    router.app.$mintUi.setLoading(false)
  },
  mounted () {
    router.app.$mintUi.setLoading(false)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
  /* components: { App },
  template: '<App/>' */
})
