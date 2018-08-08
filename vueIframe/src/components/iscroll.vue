<template>
  <div>
    <div id="wrapper" class="wrapper" style="overflow:hidden">
      <div class="scroller">
        <div v-if="pullDown" :class="pullDownClass" class="scrollicon">
          <span class="pullDownIcon ">
                  <span class="timer-loader"></span>
          </span>
          <div class="pullDownLabel pl1 inline-block text-left vm f11">{{pullDownLabel}}
            <p>{{pullDownText}}</p>
          </div>

        </div>
        <slot name="pulldown"></slot>
        <ul id="thelist" v-if="!dataEmpty">
          <li v-if="item" v-for="(myitem, index) in datas" :key="index">
            <my-component v-bind:item="myitem" v-bind:dicts="dicts" v-bind:index="index"></my-component>
          </li>
          <slot></slot>
        </ul>
        <slot name="pullup"></slot>
        <div v-if="pullUp" :class="pullUpClass" class="scrollicon">
          <span class="pullUpIcon ">
             <span class="refreshing-loader"></span>
          </span>
          <div class="pullUpLabel pl1 inline-block text-left vm f11">{{pullUpLabel}}
            <p>{{pullUpText}}</p></div>
        </div>
        <!-- nonews -->
        <div class="" v-if="dataEmpty">
          <p class="text-center">
            <slot name="empty"></slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /*
   * 2017.11.15
   * lj
   * create
   * 上拉刷新，下拉加载
   */
  import vue from 'vue'
  import IScroll from '@/assets/js/iscroll.js'

  export default {
    props: {
      item: { // 将要被循环的组件
        type: Object,
        default: () => {
          return {}
        }
      },
      handelData: { // 数据即将展示的最后一道处理
        type: Function,
        /**
         * data 一页的数据
         * direction 操作方向 0 下拉刷新   1上拉加载
         * pageIndex 当前第几页
         */
        default (data, direction, pageIndex) {
          return data
        }
      },
      downAction: {
        type: Function,
        default () {
        }
      },
      upAction: {
        type: Function,
        default () {
        }
      },
      pullUp: { // 是否有上拉
        type: Boolean,
        default: true
      },
      pullDown: { // 是否有下拉刷新加载
        type: Boolean,
        default: true
      },
      // 请求配置
      reqConfig: {
        type: Object,
        default: () => {
          return {}
        }
      },
      dicts: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data: () => {
      return {
        defaultReq: {
          urlKey: '', // url关键字
          data: {},
          dataLeven: '',
          pageIndex: { // 当前第几页配置
            value: 1, // 默认当前第一页
            key: 'pageIndex' // 传入的key值 默认  pageIndex
          },
          pageSize: { // 每页大小
            value: 20, // 默认20条
            key: 'pageSize' // 传入的key值 默认  pageSize
          }
        },
        pullDownText: '',
        pullUpText: '',
        myConfig: {},
        fade: false,
        dataEmpty: false,
        datas: [],
        originaldata: [],
        timeout: null,
        dataLoading: false, // data loading
        direction: 1, // 1: up 0: down
        pullDownLabel: '下拉刷新', // 下拉刷新文字
        pullDownClass: 'scrollloading', // 下拉效果
        pullUpLabel: '上拉加载', // 上拉加载文字
        pullUpClass: 'hide', // 上拉加载效果
        scrollObj: null // 滚动对象
      }
    },
    created () {
      vue.component('my-component', this.item)
      this.myConfig = Object.assign({}, this.defaultReq, this.reqConfig)
    },
    mounted () {
      this.pullUpText = '当前加载页数：' + this.myConfig.pageIndex.value
      document.addEventListener('touchmove', this.disableIscroll, false)
      this.scrollObj = new IScroll('#wrapper', {
        probeType: 2, // probeType：1对性能没有影响。在滚动事件被触发时，滚动轴是不是忙着做它的东西。probeType：2总执行滚动，除了势头，反弹过程中的事件。这类似于原生的onscroll事件。probeType：3发出的滚动事件与到的像素精度。注意，滚动被迫requestAnimationFrame（即：useTransition：假）。  
        scrollbars: true, // 有滚动条  
        mouseWheel: true, // 允许滑轮滚动  
        fadeScrollbars: true, // 滚动时显示滚动条，默认影藏，并且是淡出淡入效果  
        bounce: true, // 边界反弹  
        interactiveScrollbars: true, // 滚动条可以拖动 
        preventDefaultException: {
          tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A|SPAN|B|P|IMG|LI)$/
        },
        shrinkScrollbars: 'scale', // 当滚动边界之外的滚动条是由少量的收缩。'clip' or 'scale'.  
        click: this.iScrollClick(), // 允许点击事件  
        keyBindings: true, // 允许使用按键控制  
        momentum: true // 允许有惯性滑动  
      })
      let _this = this
      // 滚动时  
      this.scrollObj.on('scroll', function () {
        // 优化ios系统无法弹回
        if ((this.y < this.maxScrollY) && (this.pointY < 1)) {
          this.scrollTo(0, this.maxScrollY, 400)
          return
        } else if (this.y > 0 && (this.pointY > window.innerHeight - 1)) {
          this.scrollTo(0, 0, 400)
          return
        }
        // console.log("!_this.dataLoading && !_this.pullDownClass.match('flip|scrollloading') && !_this.pullUpClass.match('flip|scrollloading')",_this.dataLoading , !_this.pullDownClass.match('flip|scrollloading') && !_this.pullUpClass.match('flip|scrollloading'))
        if (!_this.dataLoading && !_this.pullDownClass.match('flip|scrollloading') && !_this.pullUpClass.match('flip|scrollloading')) {
          if (this.y > 5) {
            // 下拉刷新效果 wrappertext
            _this.direction = 0
            _this.pullDownClass = 'flip'
            _this.pullDownLabel = '下拉刷新'
            _this.fade = true
            _this.refresh()
          } else if (this.y < (this.maxScrollY - 5)) {
            // 上拉loading
            _this.pullUpClass = 'flip'
            _this.pullUpLabel = '上拉加载'
            if (_this.pullUpText !== '没有更多数据了' && !_this.dataEmpty) {
              _this.pullUpText = '当前加载页数：' + _this.myConfig.pageIndex.value
            }
            _this.direction = 1
            _this.fade = true
            _this.refresh()
          }
        }
      })
      // 滚动完毕  
      this.scrollObj.on('scrollEnd', function () {
        // 没有正在请求的数据
        if (!_this.dataLoading && _this.fade) {
          _this.fade = false
          // 下拉刷新效果 
          if (_this.direction === 0 && _this.pullDownClass.match('flip|scrollloading')) {
            _this.pullDownAction()
          } else if (_this.direction === 1 && _this.pullUpClass.match('flip|scrollloading')) { // 上拉loading 
            _this.pullUpAction()
          }
        }
      })
      // 进来默认加载一次
      this.pullDownAction('加载中...')
    },
    methods: {
      /**
       * [refreshIscroll 外部刷新触发]
       * @param reqConfig 配置，同data
       */
      refreshIscroll (reqConfig) {
        this.myConfig = Object.assign({}, this.myConfig, reqConfig)
        this.datas = []
        this.pullDownText = ''
        this.pullDownAction()
      },
      /**
       * [pullDownAction 下拉刷新效果]
       * @return {[type]} [description]
       */
      pullDownAction (str) {
        this.pullDownClass = 'scrollloading'
        this.pullDownLabel = '加载中...'
        this.pullUpText = ''
        this.dataEmpty = false
        this.refresh()
        this.myConfig.pageIndex.value = 1
        if (this.myConfig.urlKey) {
          let date = new Date()
          this.dataLoading = true
          this.$store.dispatch('FETCH', this.getReq()).then(data => {
            let mydata = this.getList(data.data)
            this.originaldata = [].concat(mydata)
            this.datas = this.handelData(mydata, 0, 1)
            // this.datas = this.getList(data.data)
            if (!this.datas || this.datas.length === 0) {
              this.dataEmpty = true
              this.pullUpText = '没有更多数据了'
            } else {
              this.dataEmpty = false
              if (this.datas.length % this.myConfig.pageSize.value === 0) {
                this.myConfig.pageIndex.value++
              } else {
                this.pullUpText = '没有更多数据了'
              }
            }
            this.dataLoading = false
            this.pullDownText = `上次刷新时间:${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            this.loadingHide()
            this.downAction(() => {
              this.dataLoading = false
              this.loadingHide()
            })
          })
        } else {
          this.downAction((status) => {
            if (status) {
              this.dataEmpty = false
              this.myConfig.pageIndex.value++
            } else {
              this.dataEmpty = true
              this.pullUpText = '没有更多数据了'
            }
            this.dataLoading = false
            this.loadingHide()
          })
        }
      },
      /**
       * [loadingHide 外部刷新可调用]
       * @return {[type]} [description]
       */
      loadingHide () {
        this.pullDownClass = 'scale'
        this.pullUpClass = 'scale'
        // this.refresh()
        if (this.timeout) {
          window.clearTimeout(this.timeout)
        }
        this.timeout = window.setTimeout(() => {
          this.refresh()
        }, 500)
      },
      /**
       * [pullDownAction 上拉loading]
       * @return {[type]} [description]
       */
      pullUpAction () {
        this.pullUpClass = 'scrollloading'
        this.pullUpLabel = '加载中...'
        this.refresh()
        if (this.pullUpText === '没有更多数据了') {
          this.loadingHide()
          return false
        }
        this.pullUpText = '当前加载页数：' + this.myConfig.pageIndex.value
        this.dataLoading = true
        if (this.myConfig.urlKey && this.pullUp) {
          this.$store.dispatch('FETCH', this.getReq()).then(data => {
            let mydata = this.getList(data.data)
            this.originaldata = this.originaldata.concat(mydata)
            this.datas = this.handelData([].concat(this.originaldata), 1, this.myConfig.pageIndex.value)
            if (!this.datas && this.myConfig.pageIndex.value === 1) {
              this.dataEmpty = true
              this.pullUpText = '没有更多数据了'
            } else if (this.datas.length % this.myConfig.pageSize.value === 0) {
              this.dataEmpty = false
              this.myConfig.pageIndex.value++
            } else {
              this.dataEmpty = false
              this.pullUpText = '没有更多数据了'
            }
            this.dataLoading = false
            this.loadingHide()
            this.upAction(() => {
              this.dataLoading = false
              this.loadingHide()
            })
          })
        } else {
          if (!this.pullUp) {
            this.dataLoading = false
            this.loadingHide()
          }
          this.upAction((status) => {
            if (status) {
              this.myConfig.pageIndex.value++
              this.dataEmpty = false
            } else if (this.myConfig.pageIndex.value === 1) {
              this.dataEmpty = true
              this.pullUpText = '没有更多数据了'
            } else {
              this.pullUpText = '没有更多数据了'
            }
            this.dataLoading = false
            this.loadingHide()
          })
        }
      },
      /**
       * [refresh 刷新]
       * @return {[type]} [description]
       */
      refresh () {
        this.$nextTick(() => {
          this.scrollObj.refresh()
        })
      },
      /**
       * [getList 获取res中的数据列表]
       * @return {[type]} [description]
       */
      getList (data) {
        if (!this.myConfig.dataLeven || !data) {
          return data || []
        }
        let leven = this.myConfig.dataLeven.split('.')
        let list = data
        leven.map(item => {
          if (list[item]) {
            list = list[item]
          } else {
            list = []
          }
        })
        return list
      },
      /**
       * [getReq 拼合请求数据]
       * @return {[type]} [description]
       */
      getReq () {
        let req = {
          urlKey: this.myConfig.urlKey,
          data: Object.assign({}, this.myConfig.data)
        }
        let pageIndex = this.myConfig.pageIndex
        req.data[pageIndex.key] = pageIndex.value
        let pageSize = this.myConfig.pageSize
        req.data[pageSize.key] = pageSize.value
        return req
      },

      /**
       * 禁止默认事件
       */
      disableIscroll (e) {
        e.preventDefault()
      },
      /**
       * [iScrollClick 消除重复点击]
       * @return {[type]} [description]
       */
      iScrollClick () {
        if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false
        if (/Chrome/i.test(navigator.userAgent)) return false // return (/Android/i.test(navigator.userAgent));
        if (/Silk/i.test(navigator.userAgent)) return false
        if (/Android/i.test(navigator.userAgent)) {
          var s = navigator.userAgent.substr(navigator.userAgent.indexOf('Android') + 8, 3)
          return !(parseFloat(s[0] + s[3]) < 44)
        }
      }
    },
    beforeRouteLeave (to, form, next) {
      document.removeEventListener('touchmove', this.disableIscroll, false)
      next()
    },
    beforeDestroy () {
      document.removeEventListener('touchmove', this.disableIscroll, false)
    }
  }
</script>

<style lang="stylus">
  .wrapper {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .scroller {
    position: absolute;
    z-index: 1;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    width: 100%;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -o-text-size-adjust: none;
    text-size-adjust: none;
    min-height: 100.25%;
  }

  .scrollicon {
    text-align: center;
    padding: 2rem 0;
  }

  .wrapperdown {
    background: url('../assets/images/scroll/title.png') center 10px no-repeat;
    background-size: 14.5rem;
    height: 60px;
    padding: 3rem 0 0;
  }

  @media screen and (max-width: 320px) {
    .wrapperdown {
      height: 50px;
    }
  }

  .wrapperup {
    height: 55px;
    padding: 10px;
  }

  .pullDownIcon, .pullUpIcon {
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 18px;
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 250ms;
  }

  .scroller .flip .pullDownIcon, .scroller .flip .pullUpIcon {

    background: url('../assets/images/scroll/iscroll.png') 0 0 no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;

  }

  @-webkit-keyframes scaleheight {
    0% {
      -webkit-transform: scaleY(1);
    }
    50% {
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleY(0);
      height: 1px;
      overflow: hidden;
      padding: 0;
      top: 0;
    }
  }

  @keyframes scaleheight {
    0% {
      transform: scaleY(1);
    }
    50% {
      opacity: 0;
    }
    100% {
      transform: scaleY(0);
      height: 1px;
      overflow: hidden;
      padding: 0;
      top: 0;
    }
  }

  .scroller .scale {
    animation: scaleheight .5s ease forwards;
    /* Firefox: */
    -moz-animation: scaleheight .5s ease forwards;
    /* Safari 和 Chrome: */
    -webkit-animation: scaleheight .5s ease forwards;
    /* Opera: */
    -o-animation: scaleheight .5s ease forwards;
  }

  @-webkit-keyframes scaleheight {
    0% {
      -webkit-transform: scaleY(1);
    }
    50% {
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleY(0);
      height: 1px;
      overflow: hidden;
      padding: 0;
      top: 0;
    }
  }

  @keyframes scaleheight {
    0% {
      transform: scaleY(1);
    }
    50% {
      opacity: 0;
    }
    100% {
      transform: scaleY(0);
      height: 1px;
      overflow: hidden;
      padding: 0;
      top: 0;
    }
  }

  .scroller .scale {
    animation: scaleheight .5s ease forwards;
    /* Firefox: */
    -moz-animation: scaleheight .5s ease forwards;
    /* Safari 和 Chrome: */
    -webkit-animation: scaleheight .5s ease forwards;
    /* Opera: */
    -o-animation: scaleheight .5s ease forwards;
  }

  .pullDownIcon {
    -webkit-transform: rotate(0deg) translateZ(0);
  }

  .pullUpIcon {
    -webkit-transform: rotate(-180deg) translateZ(0);
  }

  .flip .pullDownIcon {
    /*-webkit-transform: rotate(180deg) translateZ(0);   */
  }

  .flip .pullUpIcon {
    -webkit-transform: rotate(360deg) translateZ(0);
  }

  @-webkit-keyframes round180 {
    from {
      -webkit-transform: rotate(0deg) translateZ(0);
    }

    to {
      -webkit-transform: rotate(180deg) translateZ(0);
    }
  }

  @-webkit-keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .scroller .flip .pullDownIcon, .scroller .flip .pullUpIcon {

    background-position: 0 100%;
    -webkit-transform: rotate(0deg) translateZ(0);
    -webkit-transition-duration: 0ms;
    -webkit-animation-name: round180;
    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    /* -webkit-animation-iteration-count: infinite;    */
    -webkit-animation-timing-function: linear;
  }

  .scroller .scrollloading .pullDownIcon, .scroller .scrollloading .pullUpIcon {
    background: url('../assets/images/scroll/loading.png') 0 0 no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    -webkit-transform: rotate(0deg) translateZ(0);
    -webkit-transition-duration: 0ms;
    -webkit-animation-name: loader;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease;
  }

  .scroller .scrollloading {
    margin-top: 0;

  }

  /**
   * Horizontal Scrollbar
   */

  .myScrollbarH {
    position: absolute;
    z-index: 100;
    height: 7px;
    bottom: 1px;
    left: 2px;
    right: 7px;
  }

  .myScrollbarH > div {
    height: 100%;
  }

  /**
   * Vertical Scrollbar
   */

  .myScrollbarV {
    position: absolute;
    z-index: 100;
    width: 4px;
    bottom: 7px;
    top: 2px;
    right: 1px
  }

  .myScrollbarV > div {
    width: 100%;
  }

  .myScrollbarH > div,
  .myScrollbarV > div {
    position: absolute;
    z-index: 100;
    opacity: 0.8;
    /* The following is probably what you want to customize */
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    border-width: 2px;
    -webkit-border-image: url('../assets/images/scroll/scrollbar.png') 6 6 6 6;
    -moz-border-image: url('../assets/images/scroll/scrollbar.png') 6 6 6 6;
    -o-border-image: url('../assets/images/scroll/scrollbar.png') 6 6 6 6;
    border-image: url('../assets/images/scroll/scrollbar.png') 6 6 6 6;
  }


</style>
