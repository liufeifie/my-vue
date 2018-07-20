<template>
  <div>
    <ul class="f18 flex-wrap">
      <router-link to="/person/es6/letConst" class="p10 bgcolor07 mb5 col01" tag="li">
        <b>let 和 const 命令</b>
        <b class="fr">&gt;</b>
      </router-link>
      <router-link to="/person/es6/destructuring" class="p10 bgcolor07 mb5 col01" tag="li">
        <b>解构赋值</b>
        <b class="fr">&gt;</b>
      </router-link>
      <router-link to="/person/es6/string" class="p10 bgcolor07 mb5 col01" tag="li">
        <b>字符串的扩展</b>
        <b class="fr">&gt;</b>
      </router-link>
      <router-link to="/person/es6/promise" class="p10 bgcolor07 mb5 col01" tag="li">
        <b>promise</b>
        <b class="fr">&gt;</b>
      </router-link>
      <router-link to="/person/es6/array" class="p10 bgcolor07 mb5 col01" tag="li">
        <b>Array</b>
        <b class="fr">&gt;</b>
      </router-link>
      <router-link to="/person/es6/set" class="p10 bgcolor07 mb5 col01" tag="li">
        <b>Set</b>
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
        title: 'es6知识点',
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