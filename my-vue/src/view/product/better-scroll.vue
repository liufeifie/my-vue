<template>
    <div class="hp100">
        <h1 class="pl15 pr15">上下滚动</h1>
        <div class="wrapper1 oh bgcolor06 pl15 pr15" style="height: 20rem;">
            <ul class="content wp100">
                <li v-for="i in 50" :key="i" class="f18 pt10 pb10">{{i}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    data: () => {
      return {
        scroll: {}
      }
    },
    pageConfig () {
      return {
        title: 'better-scroll',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
      this.$nextTick(() => {
        this.scroll = new BScroll(document.querySelector('.wrapper1'), {
          click: true,
          preventDefault: false
        })
      })
    },
    mounted () {

    },
    methods: {},
    components: {}
  }
</script>

<style type="text/css">

</style>