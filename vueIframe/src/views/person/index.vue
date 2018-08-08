<template>
  <div class="hb100">
    <ul class="f1_5">
      <template v-for="item in list">
        <router-link :to="item.path">
          <li class="flex flex-item-center h4 lh4 bgcolor01 mt1 pl1_5 pr1_5 color02">
            <div class="wp75" v-text="item.name">flex</div>
            <div class="wp25 tr"><span class="icon arrow_right_icon"></span></div>
          </li>
        </router-link>
      </template>
    </ul>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        list: []
      }
    },
    pageConfig () {
      return {
        title: '我的账户',
        bodyStyle: 'background-color:  #f3f3f3;'
      }
    },
    created () {
      this.list = [
        {name: 'flex', path: '/person/flex'},
        {name: 'js对象', path: '/person/object'},
        {name: '计算属性', path: '/person/computed'}
      ]
    },
    mounted () {},
    methods: {},
    components: {}

  }
</script>

<style type="text/css">

</style>