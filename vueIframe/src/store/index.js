import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import * as messages from '@/messages/hyh'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    fundlistPath: '',
    state: {
      serverTime: '',
      userInfo: null,
      footer: null,
      header: null,
      extendModules: [], // 路由扩展模块
      viewClass: '',
      myroute: {},
      pageTitle: '',
      headerCenter: null,
      serverData: {},
      alreadyUrls: {},
      messages: messages,
      headerLeft: {// header to left html
        // html: '',
        // even: null,
        // loadingShow:false,
        // data: {}
      },
      headerRight: {// header to right html
        // html: '',
        // even: null,
        // loadingShow:false,
        // data: {}
      }
    },
    actions,
    mutations,
    getters
  })
}
