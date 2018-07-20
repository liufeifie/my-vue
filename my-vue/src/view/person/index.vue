<template>
  <div>
    <ul class="flex f18 tc flex-wrap">
      <li class="p10 bgcolor07 wp30">
        <router-link to="/person/flex" class="col01">flex布局</router-link>
      </li>
      <li class="p10 bgcolor07 wp30">
        <router-link to="/person/router" class="col01">嵌套路由</router-link>
      </li>
      <li class="p10 bgcolor07 wp40">
        <router-link to="/person/es6" class="col01">ECMAScript 6</router-link>
      </li>
      <li class="p10 bgcolor07 wp30">
        <router-link to="/person/ajax" class="col01">ajax 跨域</router-link>
      </li>
      <li class="p10 bgcolor07 wp30">
        <router-link to="/person/object" class="col01">Object</router-link>
      </li>
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
        title: '账户首页',
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