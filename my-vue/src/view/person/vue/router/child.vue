<template>
  <div>
    <h1>子路由</h1>
    <router-link to="/person/vue/router">路由首页</router-link>
    <router-link to="/person/vue/router/child/grandchild">孙路由</router-link>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: '子路由',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
    },
    mounted () {

    },
    methods: {},
    components: {}
  }
</script>

<style type="text/css">

</style>