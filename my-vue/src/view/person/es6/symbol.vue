<template>
  <div class="pl15 pr15 pb20">
    <h3>概述</h3>
    <p class="f13">ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript
      语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。</p>
    <p class="f14 mt10">Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol
      类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。</p>
    <ul class="f14 text-indent1">
      <li>Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述。</li>
      <li>Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。</li>
      <li>Symbol 值不能与其他类型的值进行运算，会报错。</li>
      <li>Symbol 值可以显式转为字符串。</li>
      <li>Symbol 值也可以转为布尔值，但是不能转为数值。</li>
    </ul>
    <h3>作为属性名的 Symbol</h3>
    <p class="f12 color02 fbold">Symbol 值作为对象属性名时，不能用点运算符。</p>
    <p class="f12 color02 fbold">在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。</p>
    <div class="f14">
      <textarea>
        let mySymbol = Symbol();
        // 第一种写法
        let a = {};
        a[mySymbol] = 'Hello!';
        // 第二种写法
        let a = {
          [mySymbol]: 'Hello!'
        };
        // 第三种写法
        let a = {};
        Object.defineProperty(a, mySymbol, { value: 'Hello!' });
        // 以上写法都得到同样结果
        a[mySymbol] // "Hello!"
      </textarea>
    </div>
    <h3>Object.getOwnPropertySymbols</h3>
    <p class="f14">获取指定对象的所有 Symbol 属性名。</p>
    <h3>Reflect.ownKeys</h3>
    <p class="f14">返回所有类型的键名，包括常规键名和 Symbol 键名。</p>
    <h3>Symbol.for()，Symbol.keyFor()</h3>
    <p class="f14">Symbol.for：接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。</p>
    <p class="f14">Symbol.keyFor：返回一个已登记的 Symbol 类型值的key。</p>
    <pre class="f14">
       let s1 = Symbol.for('foo')
      let s2 = Symbol.for('foo')
      console.log(s1 === s2) // true

      let s3 = Symbol('bar')
      console.log(Symbol.keyFor(s1)) // foo
      console.log(Symbol.keyFor(s3)) // undefined
    </pre>
    <p class="f13 color02">Symbol.for为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。</p>
  </div>
</template>
<script>
  import '../../../assets/css/person.css'

  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: 'symbol',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
    },
    mounted () {
      let s = Symbol('test')
      console.log(typeof s)
      // Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。
      let o = {a: 12}
      let a = [1, 2]
      console.log(Symbol(o), o.toString(), a.toString())
      let b = Symbol('b')
      let o_1 = {
        [b]: 'tom',
        [b]: 'tom1'
      }
      console.log(o_1[b])

      const log = {}
      log.levels = {
        DEBUG: Symbol('debug'),
        INFO: Symbol('info'),
        WARN: Symbol('warn')
      }
      console.log(log.levels.DEBUG, 'debug message')
      console.log(log.levels.INFO, 'info message')

      const shapeType = {
        triangle: Symbol('Triangle')
      }

      function getArea (shape, options) {
        let area = 0
        switch (shape) {
          case shapeType.triangle:
            area = 0.5 * options.width * options.height
            break
        }
        return area
      }

      console.log(getArea(shapeType.triangle, {width: 100, height: 100}))

      let s1 = Symbol.for('foo')
      let s2 = Symbol.for('foo')
      console.log(s1 === s2) // true

      let s3 = Symbol('bar')
      console.log(Symbol.keyFor(s1), Symbol.keyFor(s3))
      // foo, undefined
    },
    methods: {},
    components: {}
  }
</script>

<style type="text/css">

</style>