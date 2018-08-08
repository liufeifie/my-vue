<template>
  <div>

  </div>
</template>
<script>
  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: '首页',
        bodyStyle: 'background-color:  #f3f3f3;'
      }
    },
    created () {
    },
    mounted () {
      this.$store.dispatch('FETCH', [
        {
          urlKey: 'TEST',
          key: 'province1',
          data: {
            id: 'test1'
          }
        }
      ]).then(data => {
        console.log(data)
      }).catch(err => {
        this.$notice.setNotice(true, err.message || '网络异常，请刷新重试！')
      })
    },
    methods: {},
    components: {}

  }
</script>

<style type="text/css">

</style>