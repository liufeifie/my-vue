<template>
    <div class="pl15 pr15 f18 color05">
        <p v-for="(item, key) in dataList" :key="key" class="mt5 mb5">{{item}} => {{item | thousands}}</p>
    </div>
</template>
<script>
  export default {
    data: () => {
      return {
        dataList: [1562365.23, 855451225552.367373, 8565554336.3633, 555486125, 0.55444, 65555.908, 5478963212587]
      }
    },
    pageConfig () {
      return {
        title: '千分位',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
    },
    mounted () {

    },
    methods: {},
    filters: {
      thousands (num) {
        // return (num || 0).toString().replace(/(\d)((?=(\d{3})+$)|(?=(\d{3})+\.))/g, '$1,')
        if (/\./.test(num)) {
          return (num || 0).toString().replace(/(\d)(?=(\d{3})+\.)/g, '$1,') // 小数点
        }
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 不含小数点
      },
      toThousands (num) {
        num = (num || 0).toString()
        let result = ''
        while (num.length > 3) {
          result = ',' + num.slice(-3) + result
          num = num.slice(0, num.length - 3)
        }
        if (num) { result = num + result }
        return result
      }
    },
    components: {}
  }
</script>

<style type="text/css">

</style>