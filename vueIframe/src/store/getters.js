/**
 * 2017.10.26
 * lj
 * create
 */
export default {
  /**
   * uerinfo
   * @returns {state.userInfo.head|{returnCode}}
   * @constructor
   */
  USER_INFOR (state) {
    return state.userInfo 
  },
  GET_SERVER_DATA: (state) => (key) => {
    let tmp = JSON.stringify(state.serverData)
    tmp = JSON.parse(tmp)
    return tmp[key] ? (tmp[key] || null) : tmp
  },
  ALREADY_URLS: (state) => (urlKey) => {
    return state.alreadyUrls[urlKey] || null
  },
  HEADER_SEARCHH: (state) => (key) => {
    return state.headerSearch[key] || null
  },
  /**
   * get public const info
   * @param key
   * @returns {null}
   */
  GETMSG: (state) => (key) => {
    return state.messages[key] || null
  },
  BROWER_TYPE (state) {
    return state.broswerType
  },
  SERVER_TIME (state) {
    return state.serverTime
  }
}
