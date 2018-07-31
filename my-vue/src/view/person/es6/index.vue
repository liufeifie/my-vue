<template>
  <div>
    <ul class="f18 flex-wrap">
      <li @click="detail(item, key)" class="p10 bgcolor07 mb5 col0"
          v-for="(item, key) in listData" :key="key">
        <b v-text="item.value">let 和 const 命令</b>
        <b class="fr">&gt;</b>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        listData: [
          {value: 'let 和 const 命令', path: '/person/es6/letConst', id: 0},
          {value: '解构赋值', path: '/person/es6/destructuring', id: 1},
          {value: 'String 的扩展', path: '/person/es6/string', id: 2},
          {value: 'Function 的扩展', path: '/person/es6/function', id: 3},
          {value: 'Array 的扩展', path: '/person/es6/array', id: 4},
          {value: 'Object 的扩展', path: '/person/es6/object', id: 5},
          {value: 'Symbol 类型', path: '/person/es6/symbol', id: 6},
          {value: 'SetMap', path: '/person/es6/setmap', id: 7},
          {value: 'Proxy', path: '/person/es6/proxy', id: 8},
          {value: 'promise', path: '/person/es6/promise', id: 111}
        ]
      }
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
    methods: {
      detail (item) {
        this.goPush(item.path)
      }
    },
    components: {}
  }
</script>

<style type="text/css">

</style>