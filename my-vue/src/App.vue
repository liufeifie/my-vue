<template>
  <div id="app" class="f18" :class="{'pt44': header, 'pb50': footer}">
    <header v-show="header" id="header" class="pl15 pr15 flex bgcolor06">
      <div id="headerLeft" class="wp25 color03" @click="leftEven(headerLeft)" v-html="headerLeft.html">
        <b>后退</b>
      </div>
      <div id="headerCenter" class="wp50 tc color03">
        <b>{{pageTitle}}</b>
      </div>
      <div id="headerRight" class="wp25 tr color03" @click="rightEven(headerRight)" v-html="headerRight.html">>
        <b>前进</b>
      </div>
    </header>
    <main ref="main" id="main">
      <transition name="bounce" mode="out-in">
        <!-- 不需要缓存的路由 -->
        <router-view></router-view>
      </transition>
    </main>
    <footer v-show="footer" id="footer" class="bgcolor01">
      <ul class="flex color03 tc">
       <router-link class="flex-grow_1" to="/" tag="li" exact><b>首页</b></router-link>
       <router-link class="flex-grow_1" to="/product" tag="li" exact><b>产品</b></router-link>
       <router-link class="flex-grow_1" to="/activity" tag="li" exact><b>活动</b></router-link>
       <router-link class="flex-grow_1" to="/person" tag="li" exact><b>账户</b></router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      scroll: ''
    }
  },
  created () {
    /* this.$nextTick(() => {
      this.scroll = new this.$BScroll(this.$refs.main, {
        bounce: true,
        scrollY: true,
        preventDefault: false
      })
    }) */
  },
  mounted () {},
  methods: {
    leftEven (headerLeft) {
      if (typeof headerLeft.even === 'function') {
        headerLeft.even()
      }
    },
    rightEven (headerRight) {
      if (typeof headerRight.even === 'function') {
        headerRight.even()
      }
    }
  },
  computed: {
    header () {
      return this.$store.state.header
    },
    headerLeft () {
      return Object.assign({
        html: '<b>后退</b>',
        even: () => {
          this.$router.back()
        }
      }, this.$store.state.headerLeft)
    },
    headerRight () {
      return Object.assign({
        html: '<b>前进</b>',
        even: () => {
          if (this.$store.state.headerRight.html) this.$router.back()
        }
      }, this.$store.state.headerRight)
    },
    pageTitle () {
      return this.$store.state.pageTitle
    },
    footer () {
      return this.$store.state.footer
    }
  }
}
</script>

<style lang="less">
  @import "assets/css/common/index.less";
  html, body, #app{
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    max-width: 750px;
    left: 50%;
    transform: translateX(-50%);
  }
 /* #app {
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
  }*/
  #header, #footer{
    width: 100%;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform:translateX(-50%);
    max-width: 750px;
    margin: 0 auto;
    z-index: 9;
  }
  #header{
    height: 4.4rem;
    line-height: 4.4rem;
    top: 0;
  }
  #main{
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    width: 100%;
    padding-top: 4.4rem;
    padding-bottom: 5rem;
  }
  #footer{
    height: 5rem;
    line-height: 5rem;
    bottom: 0;
  }
  #footer .router-link-active b {
    color: #FF0000;
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

  .bounceInRight {
    animation-name: bounceInRight;
  }
  .bounceOutLeft {
    animation-name: bounceOutLeft;
  }
</style>
