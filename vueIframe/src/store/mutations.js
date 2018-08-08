/**
 * 2017.10.25
 * lj
 * create
 */
import methods from '@/util/view-client'

export default {
  SET_HEADER (state, status) {
    let defaults = {
      status: true,
      bgClass: 'bgcolor01'
    }
    if (typeof status === 'object') {
      state.header = Object.assign(defaults, status)
    } else {
      if (typeof status === 'undefined') status = defaults.status
      state.header = Object.assign(defaults, {status: status})
    }
  },
  SET_FOOTER (state, status) {
    let defaults = {
      status: false,
      bgClass: 'bgcolor01'
    }
    if (typeof status === 'object') {
      state.footer = Object.assign(defaults, status)
    } else {
      if (typeof status === 'undefined') status = defaults.status
      state.footer = Object.assign(defaults, {status: status})
    }
  },
  SET_VIEW_CLASS (state, className) {
    state.viewClass = className
  },
  SET_HEADER_SEARCH (state, config) {
    let defaults = {
      status: false,
      inputClass: '',
      readonly: true,
      searchClass: 'search',
      value: ''
    }
    state.headerSearch = Object.assign(defaults, config)
  },
  SET_SEARCH_EL (state, {type, content}) {
    state.headerSearch[type] = content
  },
  PAGE_TITLE (state, title) {
    state.pageTitle = title
  },
  /**
   * userinfo
   * @param head
   * @param data
   * @constructor
   */
  SET_USER_INFOR (state, data) {
    state.userInfo = data
  },
  SERVER_DATA (state, data) {
    state.serverData[data.key] = data.data
  },
  /**
   * Already requested urls
   * @param state
   * @param uelKey
   * @constructor
   */
  ALREADY_URLS (state, urlKey) {
    state.alreadyUrls[urlKey] = true
  },
  /**
   * 通过单页切换，已经获取的路由
   * @param state
   * @param routArr
   * @constructor
   */
  EXTEND_MODULES (state, routArr) {
    if (state.extendModules.indexOf(routArr) < 0) {
      state.extendModules.push(routArr)
    }
  },
  SET_ROUTE (state, {fullPath, hash, meta, name, params, path, query}) {
    state.myroute = {
      fullPath,
      hash,
      meta,
      name,
      params,
      path,
      query
    }
  },
  /**
   * handel top center all el
   * @param html
   * @param even
   * @param data
   * @constructor
   */
  HEADER_CENTER (state, config) {
    if (!config) {
      state.headerCenter = null
      return false
    }
    let headerCenter = []
    let defaultSet = {
      html: '',
      even: null,
      data: {}
    }
    if (config instanceof Array) {
      config.map(item => headerCenter.push(Object.assign({}, defaultSet, item)))
    } else {
      headerCenter.push(Object.assign({}, defaultSet, config))
    }
    state.headerCenter = headerCenter
  },
  /**
   * handel top right all el
   * @param html
   * @param even
   * @param data
   * @constructor
   */
  HEADER_RIGHT (state, data) {
    if (!data) {
      state.headerLeft = {}
      return
    }
    let tmp = {}
    if (typeof data.loadingShow !== 'undefined') {
      tmp.loadingShow = data.loadingShow
    }
    if (typeof data.html !== 'undefined') {
      tmp.html = data.html
    }
    if (typeof data.even !== 'undefined') {
      tmp.even = data.even
    }
    if (typeof data.data !== 'undefined') {
      tmp.data = data.data
    }
    state.headerRight = tmp
  },
  /**
   * [HEADER_CLASS]
   * @param {[type]} state           [description]
   * @param {[type]} data [description]
   */
  HEADER_CLASS (state, data) {
    state.headerClass = data
  },
  /**
   * handel top left all el
   * @param html
   * @param even
   * @param data
   * @constructor
   */
  HEADER_LEFT (state, data) {
    if (!data) {
      state.headerLeft = {}
      return
    }
    let tmp = {}
    if (typeof data.loadingShow !== 'undefined') {
      tmp.loadingShow = data.loadingShow
    }
    if (typeof data.html !== 'undefined') {
      tmp.html = data.html
    }
    if (typeof data.even !== 'undefined') {
      tmp.even = data.even
    }
    if (typeof data.data !== 'undefined') {
      tmp.data = data.data
    }
    state.headerLeft = tmp
  },
  /**
   * handel top right el
   * @param type string value: even html data  loadingShow
   * @param content
   * @constructor
   */
  HEADER_RIGHT_CHANGE (state, {type, content, index}) {
    let myindex = index || 0
    state.headerRight.config[myindex][type] = content
  },
  /**
   * handel top left el
   * @param type string value: even html data  loadingShow
   * @param content
   * @constructor
   */
  HEADER_LEFT_CHANGE (state, {type, content}) {
    state.headerLeft[type] = content
  },
  FUND_LIST_PATH (state, path) {
    state.fundlistPath = path
  },
  SET_SERVER_TIME (state, time) {
    state.serverTime = time
  },
  BROSWER_TYPE (state, broswerType) {
    state.broswerType = broswerType
  }
}
