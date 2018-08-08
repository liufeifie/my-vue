<template>
    <div class="pl15 pr15">
        <h3>Iterator</h3>
        <p class="f16">ES6 规定，默认的 Iterator
            接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。</p>
        <h3>async 和 Generator</h3>
        <p class="f16">async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await</p>
    </div>
</template>
<script>
  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: '异步与同步',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
    },
    mounted () {
      function * genertorFun () {
        yield 'hello'
        yield 'world'
        let a = yield 2 * 3
        return a
      }

      let g = genertorFun()
      let one = g.next()
      let two = g.next()
      let three = g.next()
      let four = g.next(`${one.value} + ${two.value} + ${three.value}`)
      console.log(one, two, three, four)

      async function asyncFun () {
        let a = await 'hello'
        let b = await 'world'
        let c = 12
        await (c.replace(/\s/, '')).catch(e => {
          console.log('错误：', e.message)
        })
        /* try {
           await c.replace(/\s/, '')
         } catch (e) {
           console.log('内部抛错：', e.message)
         } */
        return `${a} ${b}`
      }

      let a = asyncFun()
      a.then(data => {
        console.log('成功：', data)
      }).catch(err => {
        console.log('外部抛错：', err.message)
      })
    },
    methods: {},
    components: {}
  }
</script>

<style type="text/css">

</style>