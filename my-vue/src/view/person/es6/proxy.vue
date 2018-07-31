<template>
    <div class="pl15 pr15 pb20">
        <h3>Proxy</h3>
        <p class="f14">用于修改某些操作的默认行为，等同于在语言层面做出修改</p>
        <p class="fbld f13">new Proxy(target, handler)</p>
        <h3>Proxy 实例的方法</h3>
        <h4>get()</h4>
        <p class="f13">get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。</p>

    </div>
</template>
<script>
  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: 'proxy',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
    },
    mounted () {
      let person = {
        name: '张三'
      }
      let proxy = new Proxy(person, {
        get: function (target, property) {
          if (property in target) {
            return target[property]
          } else {
            throw new ReferenceError('Property "' + property + '" does not exist.')
          }
        }
      })
      console.log(proxy.name)
    },
    methods: {},
    components: {}
  }
</script>

<style type="text/css">

</style>