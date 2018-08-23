<template>
    <div>
        <divider>滚动到底部触发</divider>
        <scroller lock-x height="200px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom"
                  :scroll-bottom-offst="200">
            <div class="box2">
                <p v-for="i in bottomCount" :key="i">placeholder {{i}}</p>
                <load-more tip="loading" v-show="onFetching"></load-more>
            </div>
        </scroller>
        <divider>上拉下拉</divider>
        <!--:use-pullup="a" :use-pulldown="a"-->
        <scroller lock-x height="200px" ref="scrollerBottomPull" :use-pulldown="a" :use-pullup="a"
                  :pulldown-config="pulldownDefaultConfig" :pullup-config="pullupDefaultConfig"
                  @on-pulldown-loading="onPullDown" @on-pullup-loading="onPullUp">
            <div class="box2">
                <load-more tip="loading" v-show="loadingUp"></load-more>
                <p v-for="i in bottomCount1" :key="i">placeholder {{i}}</p>
                <load-more tip="loading" v-show="loadingUp"></load-more>
            </div>
        </scroller>
    </div>
</template>
<script>
  import { Scroller, Divider, LoadMore } from 'vux'

  export default {
    data: () => {
      return {
        a: true,
        bottomCount: 10,
        bottomCount1: 10,
        loadingUp: false,
        loadingDown: false,
        onFetching: false,
        pullupDefaultConfig: {
          content: '上拉加载更多',
          pullUpHeight: 60,
          height: 40,
          autoRefresh: false,
          downContent: '释放后加载',
          upContent: '上拉加载更多',
          loadingContent: '加载中...',
          clsPrefix: '' // xs-plugin-pullup-
        },
        pulldownDefaultConfig: {
          content: '下拉刷新',
          pullUpHeight: 60,
          height: 40,
          autoRefresh: false,
          downContent: '释放后加载',
          upContent: '下拉刷新',
          loadingContent: '加载中...',
          clsPrefix: '' // xs-plugin-pulldown-
        }
      }
    },
    pageConfig () {
      return {
        title: 'pull',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
    },
    mounted () {

    },
    methods: {
      onScrollBottom () {
        if (!this.onFetching) {
          this.onFetching = true
          setTimeout(() => {
            this.bottomCount += 10
            this.$nextTick(() => {
              this.$refs.scrollerBottom.reset()
            })
            this.onFetching = false
          }, 2000)
        }
      },
      onPullDown () {
        setTimeout(() => {
          this.bottomCount1 = 10
          this.$nextTick(() => {
            this.$refs.scrollerBottomPull.reset()
            this.$refs.scrollerBottomPull.donePulldown()
            this.$refs.scrollerBottomPull.enablePullup()
          })
        }, 2000)
      },
      onPullUp () {
        // this.$refs.scrollerBottomPull.enablePullup()
        setTimeout(() => {
          if (this.bottomCount1 === 23) {
            this.bottomCount1 = 23
          } else {
            this.bottomCount1 += 10
            if (this.bottomCount1 >= 23) this.bottomCount1 = 23
          }
          this.$nextTick(() => {
            this.$refs.scrollerBottomPull.reset()
            this.$refs.scrollerBottomPull.donePullup()
            if (this.bottomCount1 >= 23) this.$refs.scrollerBottomPull.disablePullup()
          })
        }, 2000)
      }
    },
    components: {Scroller, Divider, LoadMore}
  }
</script>

<style type="text/css">

</style>