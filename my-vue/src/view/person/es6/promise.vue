<template>
  <div class="pl15 pr15">
    <h3>Promise：</h3>
    <p class="f16">Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。</p>
    <h4 class="mt5">三种状态</h4>
    <p class="f16">pending（进行中）、fulfilled（已成功）和rejected（已失败）</p>
    <p class="f16">从pending变为fulfilled和从pending变为rejected</p>
    <h3>Generator</h3>
    <p class="f16">Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。</p>
    <p class="f14"> Generator 函数内部有try...finally代码块，那么return方法会推迟到finally代码块执行完再执行。</p>
    <p class="f14"> Generator 函数内部，调用另一个 Generator 函数，使用yield* fun</p>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: 'promise知识点',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
    },
    mounted () {
      function* generator () {
        console.log(1)
        console.log(`first input ${yield}`)
        console.log(2)
        console.log(`second input ${yield}`)
        console.log(3)
        console.log(`third input ${yield}`)
      }
      let a = generator()
      a.next()
      a.next('hello')
      a.next('hello')
      a.next('hello')

    },
    methods: {},
    components: {}
  }
</script>

<style type="text/css">

</style>