<template>
    <div class="pl15 pr15">
        <ul class="flex f18 tc flex-wrap">
            <li class="p10 bgcolor07 wp50">
                <router-link to="/product/tool" class="color01">常用的方法</router-link>
            </li>
            <li class="p10 bgcolor07 wp50">
                <router-link to="/product/better-scroll" class="color01">better-scroll</router-link>
            </li>
            <li class="p10 bgcolor07 wp50">
                <router-link to="/product/vux" class="color01">vux</router-link>
            </li>
            <li class="p10 bgcolor07 wp50">
                <router-link to="/product/lock" class="color01">手势密码</router-link>
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