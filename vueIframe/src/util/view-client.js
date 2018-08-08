/**
 * 2017.10.25
 * lj
 * create views  mixins
 */
import appPolicy from '@/api/config-app-vue'
import {APP_POLICY} from '@/messages/hyh'
export default {
  getElHeight (id) {
    let obj = document.getElementById(id)
    let style = null
    if (window.getComputedStyle) {
      style = window.getComputedStyle(obj, null) // 非IE
    } else {
      style = obj.currentStyle // IE
    }
    console.log('width=' + style.width + '\nheight=' + style.height)
  },
  /**
   * 原生js获取屏幕高度
   * @param
   * @return number
   */

  screenHeight () {
    var winHeight = 600
    if (window.innerHeight) {
      winHeight = window.innerHeight
    } else if ((document.body) && (document.body.clientHeight)) {
      winHeight = document.body.clientHeight
    }

    return winHeight
  },
  /**
   * 原生js获取屏幕宽度
   * @param
   * @return number
   */

  screenWidth () {
    var winWidth = 750
    if (window.innerWidth) {
      winWidth = window.innerWidth
    } else if ((document.body) && (document.body.clientWidth)) {
      winWidth = document.body.clientWidth
    }

    return winWidth
  },
  /**
   * window.localstorsge
   * @param key
   * @param obj type must json
   */
  setItem (key, obj) {
    try {
      let stringObj = JSON.stringify(obj)
      if (window.localStorage) {
        localStorage.setItem(key, stringObj)
      } else {
        this.setCookie(key, JSON.stringify(obj))
      }
    } catch (e) {
      console.error(key, obj, e)
    }
  },
  /**
   * window.localstorsge
   * @param key
   * @returns {null}
   */
  getItem (key) {
    if (!key) {
      console.error('window.localStorage get key is not')
      return null
    }
    return JSON.parse(window.localStorage.getItem(key) || this.getCookie(key))
  },
  /**
   * window.localstorsge
   * @param key
   * @returns {null}
   */
  delItem (key) {
    return window.localStorage.removeItem(key) || this.delCookie(key)
  },
  /**
   * sessionStorage简单封装
   * @param {*} key
   * @param {*} objString
   */
  sessetItem (key, objString) {
    console.log('objString', objString)
    try {
      let stringObj = JSON.stringify(objString)
      if (window.sessionStorage) {
        window.sessionStorage.setItem(key, stringObj)
      } else {
        this.setCookie(key, JSON.stringify(stringObj))
      }
    } catch (e) {
      console.error(key, objString, e)
    }
  },
  /**
   * sessionStorage简单封装
   * @param {*} key
   * @param {*} objString
   */
  sessgetItem (key) {
    if (!key) {
      console.error('window.sessionStorage get key is not')
      return null
    }
    return JSON.parse(window.sessionStorage.getItem(key) || this.getCookie(key))
  },
  /**
   * cookes option
   */
  setCookie (name, value, days) {
    let d = new Date()
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
    window.document.cookie = name + '=' + value + ';path=/;expires=' + d.toGMTString()
  },
  getCookie (name) {
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    let arr = document.cookie.match(reg)
    if (arr) { return unescape(arr[2]) } else { return null }
  },
  delCookie (name) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = this.getCookie(name)
    if (cval != null) {
      document.cookie = name + '=' + cval + ';path=/;expires=' + exp.toGMTString()
    }
  },
  /**
   * [goPush Only for clients]
   * @param  {[type]} router [description]
   * @param  {[stirng]} path   [description]
   * @param  {[bool]} status [Whether to refresh the current page]
   * @return {[type]}        [description]
   */
  goPush (path, status) {
    status ? window.location.href = path : this.$router.push(path)
  },
  /**
   * [goReplace Only for clients]
   * @param  {[type]} router [description]
   * @param  {[stirng]} path   [description]
   * @param  {[bool]} status [Whether to refresh the current page]
   * @return {[type]}        [description]
   */
  goReplace (path, status) {
    status ? window.location.replace(path) : this.$router.replace(path)
  },
  /**
   * notice http callback
   * @param code
   * @param message
   */
  errorModus ({ code = '', message = '', error = '' }) {
    if (code !== 'SUCCESS' && code !== 'LOGIN') {
      this.$notice.setNotice(true, message || error)
    }
  },
  /**
   * [isEmptyObj obj  is  empty]
   * @param  {[type]}  obj [description]
   * @return {Boolean}     [true :is empty  false: is not empty]
   */
  isEmptyObj (obj) {
    if (Object.keys(obj).length === 0) {
      return true
    }
    return false
  },
  /**
   * 获取数组最大值 http callback
   * @param code
   * @param message
   */
  maxArr (arr) {
    return Math.max.apply({}, arr)
  },
  /**
   * 获取数组最小值 http callback
   * @param code
   * @param message
   */
  minArr (arr) {
    return Math.min.apply({}, arr)
  },
  /**
 * js金额字符串formart
 * @example  fmoney(12321.23,2)
 *
 */
  fmoney (s, n) {
    let ntmp = n
    n = n > 0 && n <= 20 ? n : 2
    s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
    let r = ntmp === 0 ? '' : ('.' + s.split('.')[1])
    if (parseInt(s.split('.')[1][0]) >= 5 && ntmp === 0) {
      s = parseFloat(s) + 1
    }
    let l = s.toString().split('.')[0].split('').reverse()
    let t = ''
    for (var i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
    }
    return t.split('').reverse().join('') + r
  },
  /**
 * 2017.11.30
 * yxf
 * 刷选基金
 */
  typeFilter (type, arr) {
    let arr1 = []
    let arr2 = []
    if (type === 'all' || type === '') {
      arr1 = arr
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].registrarCode) === parseFloat(type)) {
          arr1.push(arr[i])
        } else {
          arr2.push(arr[i])
        }
      }
    }
    return {a: arr1, b: arr2}
  },
  /**
   * [versions 判断浏览器版本]
   * 2017.12.13
   * lj
   * @return {[json]} [浏览器类型]
   */
  checkBrowser () {
    let u = navigator.userAgent
    // let app = navigator.appVersion
    return { // 移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || (u.indexOf('iPhoneV') > -1), // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPhoneVersion: u.indexOf('iPhone OS ') > -1 ? parseInt(u.substring(u.indexOf('iPhone OS ') + 10, u.indexOf('iPhone OS ') + 12)) : null,
      iphoneAppVersion: u.indexOf('iPhoneV') > -1 ? parseInt(u.substring(u.indexOf('iPhoneV') + 7, u.indexOf('iPhoneV') + 9)) : null,
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
  },
  /**
   * [checkAppType 当在移动端的时候检查在那个app内部打开]
   * 2017.12.13
   * lj
   * @return {[type]} [description]
   */
  checkAppType () {
    let type = Object.assign({ ios: false, android: false }, this.checkBrowser())
    let ua = navigator.userAgent.toLowerCase()
    if (type.mobile) {
      return {
        weChat: ua.match(/MicroMessenger/i) == 'micromessenger',
        weiBo: ua.match(/WeiBo/i) == 'weibo',
        qq: ua.match(/QQ/i) == 'qq',
        mobile: true,
        hyhloan: ua.match(/hyhloan/i) == 'hyhloan' ,
        ios: type.ios,
        android: type.android,
        iosVersion: type.iPhoneVersion || type.iphoneAppVersion
      }
    } else { 
      return { pc: true }
    }
  },
  /**
   * 2017.12.13
   * lj
   * 检查是否在app内部
   * return true 是， false: 否
   */
  checkHyhloan () {
    return !!this.checkAppType().hyhloan
  },
  /**
   * 2017.12.13
   * 获取app服务协议
   * @param {string} policyKey  协议关键字
   * @param {json} query 协议后面带的参数
   * return 形如 hyhcrm://Web/webShare?type=0
   */
  getAppPolicy (policyKey, query) {
    if (!appPolicy[policyKey] || !this.checkHyhloan()) {
      this.$notice(true, APP_POLICY)
      return false
    }
    let policy = ''
    for (let key in query) {
      policy = `${policy ? '&' : ''}${key}=${query[key]}`
    }
    return `hyhloan://Service/${appPolicy[policyKey]}${policy}`
  }
}
