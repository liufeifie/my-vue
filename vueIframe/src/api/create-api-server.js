// const isProd = process.env.NODE_ENV === 'production'
// const qs = require('querystring')
const axios = require('axios')
let {PORT_OUT_TIME} = require('../messages/hyh')
let {logErr, logInfo} = require('../../log4')
let api
let headers = {'Content-Type': 'application/json;charset=UTF-8', 'device': 'html5' }
let config = JSON.parse(process.env.CONFIG_CONFIG)
// console.log(' require(process.env.CONFIG_PATH)', require(process.env.CONFIG_PATH))
// let config = require('../../config.json')
let host = config.host
// axios.defaults.baseURL = host
axios.interceptors.response.use((res) => {
  if (res.status >= 200 && res.status < 300) {
    return res
  }
  return Promise.reject(res)
}, (error) => {
  let tmp = {
    message: PORT_OUT_TIME + typeof error === 'string' ? error : '',
    code: 404
  }
  // 网络异常 
  return Promise.reject({head:tmp})
})
if (process.__API__) {
  api = process.__API__
} else {
  api = {
    get: function (target, options = {}, sign = {}) {
      return new Promise((resolve, reject) => {
        axios.request({
          url: target,
          method: 'get',
          headers: headers,
          baseURL: sign.host || host,
          params: options
        }).then(res => {
          resolve(res.data)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    post: function (target, options = {}, sign = {}) {
      let reqTime = new Date()
      console.error(target)
      options = options || {}
      let hostKey = options.hostKey ;
      let version = options.version || '1.0'
      if (options.hostKey) { delete options.hostKey }
      let myhost = sign.host || config[hostKey] || host
      let mydata = {
        'token': sign.token || '',
        'userId': sign.userId || '',
        'version': version,
        'host': myhost,
        data: options
      }
      logInfo('SEND_START', target, reqTime, mydata, null)
      // console.log('mydata',mydata); 
      return new Promise((resolve, reject) => {/* console.log('axios',qs.stringify(options))*/
        axios.request({
          url: target,
          method: 'post',
          headers: headers,
          baseURL: myhost,
          // params: Object.assign({
          //   appversion: 'v1.0'
          // }, options, {
          //   token: sign.token || ''
          // })
          data: JSON.stringify(mydata)
        }).then(res => {
          let serverTime = (new Date()).getTime()
          if (typeof res.data === 'string') {
            logErr('SEND_END', target, reqTime, mydata, res.data)
            resolve({head: {returnCode: 500, serverTime: serverTime, returnMsg: `${target}:The interface returns a format exception`}})
          } else {
            logInfo('SEND_END', target, reqTime, mydata, res.data)
            res.data.serverTime = serverTime
            resolve(res.data)
          }
        }).catch((error) => {
          logErr('SEND_END', target, reqTime, mydata, error)
          reject(error)
        })
      })
    }
  }
}

module.exports = api
