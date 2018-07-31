<template>
  <div>
    <ul class="f18 flex-wrap">
      <router-link to="/person/vue/router" class="p10 bgcolor07 mt5 col01" tag="li">
        <b>嵌套路由</b>
        <b class="fr">&gt;</b>
      </router-link>
      <router-link to="/person/vue/keepalive" class="p10 bgcolor07 mt5 col01" tag="li">
        <b>keep-alive 动态组件</b>
        <b class="fr">&gt;</b>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: 'index',
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