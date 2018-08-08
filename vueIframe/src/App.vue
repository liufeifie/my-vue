<template>
  <div id="app">
    <header ref="header" v-show="header.status" :class="header.bgClass" id="header">
      <div class="clearfix wp100 hp100 f1_6 flex flex-item-center">
        <div class="wp25 headerleft pl1_5">
          <div class="inline-block" v-html="headerLeft.html" @click="leftEven(headerLeft)">左边</div>
        </div>
        <div class="wp50 headerCenter tc">
          <p v-show="!headerCenter" class="pr ws" id="pageTitle" v-html="pageTitle"></p>
        </div>
        <div class="wp25 headerright pr1_5 tr">
          <div class="inline-block" v-html="headerRight.html" @click="rightEven(headerRight)">右边</div>
        </div>
      </div>
    </header>
    <div class="view" :class="viewClass" id="contents">
      <div class="content_div" id="content_div">
        <transition name="bounce" mode="out-in">
          <!-- 不需要缓存的路由 -->
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <footer ref="footer" v-show="footer.status" class="clearfix" :class="footer.bgClass" id="footer">
      <ul class="f1_2 tc flex flex-item-center wp100 hp100">
        <li class="wp25">
          <router-link exact to="/">
            <b class="footer_icon icon2_5 home_icon"></b>
            <p class="pt_4 ">首页</p>
          </router-link>
        </li>
        <li class="wp50">
          <router-link exact to="/product">
            <b class="footer_icon icon2_5 product_icon "></b>
            <p class="pt_4 ">产品</p>
          </router-link>
        </li>
        <li class="wp25">
          <router-link exact to="/person">
            <b class="footer_icon icon2_5 person_icon "></b>
            <p class="pt_4 ">我的</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
  /**
   * 2017.10.24
   * lzh
   */
  import './assets/css/common/index.css'

  export default {
    data: () => {
      return {}
    },
    computed: {
      header () {
        return this.$store.state.header
      },
      footer () {
        return this.$store.state.footer
      },
      headerLeft () {
        return Object.assign({
          html: '<span class="icon back-icon"></span>',
          even: () => {
            if (this.$store.state.headerLeft.html === '') {
              return false
            }
            // history.go(-1)
            this.$router.back()
          },
          loadingShow: false,
          data: null
        }, this.$store.state.headerLeft)
      },
      pageTitle () {
        return this.$store.state.pageTitle
      },
      headerRight () {
        return Object.assign({
          html: '',
          even: () => {
            if (this.$store.state.headerRight.html === '') {
              return false
            }
            // history.go(-1)
          },
          loadingShow: false,
          data: null
        }, this.$store.state.headerRight)
      },
      headerCenter () {
        return this.$store.state.headerCenter
      },
      viewClass () {
        return this.$store.state.viewClass
      },
      headerClass () {
        return this.$store.state.headerClass
      }
    },
    mounted () {
      // WebFont.load({
      //   custom: {
      //       families: ['HiraginoSansGBMy'],
      //       urls : ['./assets/css/common/index.css']  //字体声明处，页面不需要引入该样式
      //     },
      //   fontloading: function(fontFamily, fontDescription) {  //指定字体预加载
      //     console.log('fontloading: ' ,fontFamily,fontDescription)
      //     document.getElementsByTagName('body')[0].setAttribute('class', 'myfont')
      //   }
      // })
    },
    methods: {
      /**
       * routerTo  undfined back -1
       */
      leftEven (headerLeft) {
        if (typeof headerLeft.even === 'function') {
          headerLeft.even(headerLeft.data)
        }
      },
      /**
       * header center handle
       * @param headerRight
       */
      centerEven (headerCenter) {
        if (typeof headerCenter.even === 'function') {
          headerCenter.even(headerCenter.data)
        }
      },
      /**
       * header right handle
       * @param headerRight
       */
      rightEven (headerRight) {
        if (typeof headerRight.even === 'function') {
          headerRight.even(headerRight.data)
        }
      },
      /**
       * nav fun
       * @param index
       */
      tabFun: function (index) {
        let path = this.nav.pathArr[index]
        this.goPush(path)
      }
    },
    components: {}
  }
</script>
<style lang="stylus">
  .border_t4_4 {
    /* border-top: 4.4rem solid transparent;*/
    padding-top: 4.4rem;
  }

  .border_b5 {
    /*border-bottom: 5rem solid transparent;*/
    padding-bottom: 5rem;
  }

  #app {
    position: absolute;
    height: 100%;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    overflow: hidden;
  }

  #header {
    position: absolute;
    width: 100%;
    top:0;
    height: 4.4rem;
    font-size: 1.8rem;
  }

  #contents {
    height: 100%;
    overflow-y: auto;
  }

  #content_div, .content_div {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }

  .bounce-enter-active {
    animation: bounceInRight .5s;
  }

  .bounce-leave-active {
    animation: bounceOutLeft .5s;
  }

  @keyframes bounceInRight {
    from, 60%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610);
    }

    from {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(-15px, 0, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes bounceInLeft {
    from, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }

    75% {
      transform: translate3d(-10px, 0, 0);
    }

    90% {
      transform: translate3d(5px, 0, 0);
    }

    to {
      transform: none;
    }
  }

  @keyframes bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }

    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }

  .bounceOutLeft {
    animation-name: bounceOutLeft;
  }

  @keyframes bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }

    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }

  @keyframes bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }

    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }

  #footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 5rem;
    overflow: hidden;
    z-index: 9;
    -moz-box-shadow: -5px 0 13px rgba(200, 200, 200, 0.4);
    -webkit-box-shadow: -5px 0 13px rgba(200, 200, 200, 0.4);
    box-shadow: -5px 0 13px rgba(200, 200, 200, 0.4);
    max-width: 750px;
    margin: 0 auto;
  }
  #footer ul li a{
    color: #b7b7b7;
  }
  #footer ul li a.router-link-exact-active.router-link-active{
    color: #f52f3e;
  }
  a.router-link-exact-active.router-link-active .home_icon{
    background-position: -2.6rem .2rem;
  }
  a.router-link-exact-active.router-link-active .product_icon{
    background-position: -2.6rem -2.3rem;
  }
  a.router-link-exact-active.router-link-active .person_icon{
    background-position: -2.5rem -7.5rem;
  }

</style>
