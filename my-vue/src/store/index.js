import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
      serverTime: new Date().getTime(),
      userInfo: null,
      header: false,
      footer: false,
      headerLeft: {
        // html: '',
        // even: () => {}
      },
      headerRight: {
        // html: '',
        // even: () => {}
      },
      pageTitle: ''
    },
    actions, // dispatch(action方法名, 参数)
    mutations, // commit(mutations方法名, 参数)
    getters // getters(getters方法名)
  })
}