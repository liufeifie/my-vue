/**
 * 2017.10.25
 * lj
 * create
 */
import * as api from '@/api/config-api-vue'
import { post } from '@/api'

export default {
  /**
   *server data get And render
   * @param data json or json Array
   * @returns {Promise<any> | Promise.<TResult> | *}
   * @constructor
   */
  FETCH ({ commit, state, dispatch }, reqdata) {
  //   console.log('client in ', reqdata)
    let cookie = state.cookie || {}
    let app = this._vm
    let client = typeof window !== 'undefined'
    // if page need login ,check session storage key userInfo
    let meta = state.myroute.meta || {}
    function handleCatch (error) {
      if (client) {
        let message = (error && (error.message || error.error)) ? (error.message || error.error) : (typeof error === 'string' ? error : JSON.stringify(error))
        app.$notice.setNotice(true, message)
      }
    }
    if (reqdata instanceof Array) {
      let postArray = []
      let keyArray = []
      reqdata.map(({ urlKey = '', data = null, key = '' }, index) => {
        let reqdata = Object.assign({
          hostKey: api[urlKey].hostKey || 'host'
        }, data)
        if (urlKey === 'DIST_POST') {
          postArray.push(dispatch('DICT_DATA'))
        } else {
          postArray.push(post(api[urlKey].url, reqdata, cookie))
        }
        keyArray.push(key || urlKey || `pagedata${index}`)
        commit('ALREADY_URLS', urlKey)
      })
      return Promise.all(postArray).then(data => {
        data.map((item, index) => {
          let msgStatus = typeof reqdata[index].msgStatus === 'undefined' || reqdata[index].msgStatus
          if (client) {
            // error
            if (msgStatus) {
              app.errorModus(item || {})
            }
            // login
            if (item.code === 'LOGIN' && meta.isAuth) {
              app.goReplace(`/login?loginbackurl=${state.myroute.fullPath}`, true)
              return false
            }
          } else {
            item.msgStatus = msgStatus
          }
          if (item) {
            return commit('SERVER_DATA', { key: keyArray[index], data: item })
          }
        })
        return data
      }).catch(error => {
        commit('SERVER_DATA', { key: 'error', data: error })
        handleCatch(error)
        return error
      })
    } else {
      commit('ALREADY_URLS', reqdata.urlKey)
      if (reqdata.urlKey === 'DIST_POST') {
        return dispatch('DICT_DATA')
      }
      return post(api[reqdata.urlKey].url, reqdata.data || null, cookie).then((resdata) => {
        let msgStatus = typeof reqdata.msgStatus === 'undefined' || reqdata.msgStatus
        if (client) {
          // error
          if (msgStatus) {
            app.errorModus(resdata || {})
          }
          // login
          if (resdata.code === 'LOGIN' && meta.isAuth) {
            let gopath = app.$route && app.$route.fullPath ? `/login?loginbackurl=${app.$route.fullPath}` : '/login'
            app.goReplace(gopath, true)
            return false
          }
        } else {
          resdata.msgStatus = msgStatus
        }
        commit('SERVER_DATA', { key: reqdata.key || reqdata.urlKey || 'pagedata', data: resdata })
        return resdata
      }).catch(error => {
        commit('SERVER_DATA', { key: reqdata.key || reqdata.urlKey || 'pagedata', data: error })
        handleCatch(error)
        return error
      })
    }
  },
  /**
   * user_info
   * @constructor
   */
  USER_INFO: ({ commit, state }, cookie) => {
    return null
    /*return post(api.USER_INFO.url, null, cookie).then((data) => {
      if (data && data.code) {
        commit('SET_USER_INFOR', data)
        commit('SET_SERVER_TIME', data.serverTime)
      } else {
        commit('SET_USER_INFOR', {
          head: {
            code: 'ERROR',
            message: 'format error!'
          }
        })
      }
      return data
    })*/
  }
}
