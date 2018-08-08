<template>
  <div class="pl15 pr15 pb20">
    <h3>基本用法</h3>
    <p class="f14">ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。</p>
    <p class="f14">ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。</p>
    <div class="f14">
      <textarea>
         // es5  语法
        function log(x, y) {
          // y = y || 'World'; //或者一下方法，更严谨
          if (typeof y === 'undefined') {
            y = 'World';
          }
          console.log(x, y);
        }
        log('Hello') // Hello World
        log('Hello', 'China') // Hello China
        log('Hello', '') // Hello World

        // es6  语法
        function log(x, y = 'World') {
          console.log(x, y);
        }
        log('Hello') // Hello World
        log('Hello', 'China') // Hello China
        log('Hello', '') // Hello
      </textarea>
    </div>
    <h3>函数的 length 属性</h3>
    <p class="f14">指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。</p>
    <p class="f14">如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。</p>
    <div class="f14">
      <textarea>
        (function (a) {}).length // 1
        (function (a = 5) {}).length // 0
        (function (a, b, c = 5) {}).length // 2
        (function (a = 0, b, c) {}).length // 0
        (function (a, b = 1, c) {}).length // 1
      </textarea>
    </div>
    <h3>rest 参数</h3>
    <p class="f14">ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。</p>
    <p class="f12 fbold color02">rest 参数之后不能再有其他参数</p>
    <p class="f12 fbold color02">函数的length属性，不包括 rest 参数。</p>
    <div class="f14">
      <textarea>
        function add(...values) {
          let sum = 0;
          for (var val of values) {
            sum += val;
          }
          return sum;
        }

        add(2, 5, 3) // 10
      </textarea>
    </div>
    <h3>严格模式</h3>
    <p class="f14">函数执行的时候，先执行函数参数，然后再执行函数体</p>
    <p class="f14">从 ES5 开始，函数内部可以设定为严格模式；ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错</p>
    <h4>name属性</h4>
    <p class="f14">函数的name属性，返回该函数的函数名。</p>
    <p class="f14">一个匿名函数赋值给一个变量，ES5 的name属性，会返回空字符串，而 ES6 的name属性会返回实际的函数名。</p>
    <h3>箭头函数</h3>
    <p class="f14">1.ES6 允许使用“箭头”（=>）定义函数。</p>
    <p class="f14">2.如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。</p>
    <p class="f14">3.如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。</p>
    <p class="f14">4.由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。</p>
    <h3>双冒号运算符</h3>
    <p class="f14">函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。</p>
    <p class="f14">如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。</p>

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
        title: '函数的扩展',
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