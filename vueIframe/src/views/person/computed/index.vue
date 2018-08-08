<template>
  <div class="pl1_5 pr1_5">
    <myChild class="mt1"></myChild>
    <p v-if="result">输入框内容：{{result}}</p>
  </div>
</template>
<script>
  import myChild from './child'
  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: '计算属性',
        bodyStyle: 'background-color:  #fff;'
      }
    },
    created () {
    },
    computed: {
      value () {
        return this.$store.getters['HEADER_SEARCHH']('value')
      },
      result () {
        return this.inputChange(this.value)
      }
    },
    mounted () {},
    methods: {
      inputChange (val) {
        console.log('父亲：', val)
        return val
      }
    },
    components: {
      myChild
    }
  }
</script>

<style type="text/css">

</style>