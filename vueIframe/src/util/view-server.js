/**
 * 2017.10.25
 * lj
 * create views  mixins
 */
export default {
  methods: {
    /**
     * [goPush Only for clients]
     * @param  {[type]} router [description]
     * @param  {[stirng]} path   [description]
     * @param  {[bool]} status [Whether to refresh the current page]
     * @return {[type]}        [description]
     */
    goPush (path) {
      this.$router.push(path)
    },
    /**
     * [goReplace Only for clients]
     * @param  {[type]} router [description]
     * @param  {[stirng]} path   [description]
     * @param  {[bool]} status [Whether to refresh the current page]
     * @return {[type]}        [description]
     */
    goReplace (path) {
      this.$router.replace(path)
    },
    /**
     * [versions 判断浏览器版本]
     * 2017.12.13
     * lj
     * @return {[json]} [浏览器类型]
     */
    checkBrowser (userAgent) {
      let u = userAgent
      // console.log('11111111111111111111111111111111111111111111111111111111',userAgent)
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
        hyhloan: u.indexOf('hyhloan') > -1
      }
    }
  }
}
