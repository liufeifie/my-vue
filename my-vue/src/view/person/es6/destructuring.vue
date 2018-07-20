<template>
  <div class="pl15 pr15 pb20">
    <h3>解构赋值</h3>
    <p class="f13">ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为 <b class="fbold">解构</b>（Destructuring）。</p>
    <h3>Array 的解构赋值 </h3>
    <div class="f14">
      <textarea>
        [a, b, c] = [1, 2, 3]; ==> a=1;b=2;c=3;
        [foo, [[bar], baz]] = [1, [[2], [3]]]
                     ==> foo=1;bar=2;baz=[3];
        [ , , third] = ["foo", "bar", "baz"];
                    ==> third="baz";
        [head, ...tail] = [1, 2, 3, 4];
                    ==>head=1;tail=[2,3,4]
        [x, y, ...z] = ['a'];
                    ==>x='a';z=[];

      </textarea>
      <p>如果解构不成功，变量的值就等于undefined。</p>
      <h4>默认值</h4>
      <p>解构赋值允许指定默认值，当一个数组成员严格等于undefined，默认值才会生效。</p>
    </div>
    <h3>Object 的解构赋值 </h3>
    <div class="f14">
      <p>对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
        而对象的属性没有次序，<b class="fbold col02">变量必须与属性同名</b>，才能取到正确的值。</p>
      <textarea>
        { bar, foo, baz } = { foo: "aaa", bar: "bbb" };
        ==>bar="aaa";foo="bbb";baz=undefined
        { foo: baz } = { foo: 'aaa', bar: 'bbb' };
        ==>baz="aaa"
        { foo: foo, bar: bar, baz: baz } = { foo: "aaa", bar: "bbb" };
        ==> 第一个的全写
        let x;
        {x} = {x: 1}; 错误的写法
        ({x} = {x: 1});正确的写法
        因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。
        只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
      </textarea>
        <p class="fbold f13">对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。</p>
    </div>
    <h3>String 的解构赋值</h3>
    <p class="f13">字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。</p>
    <div class="f14">
      <textarea>
        [a, b, c, d, e] = 'hello';
        ==>a='h';b='e';c='l';d='l';e='o';
        类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
        {length : len} = 'hello'; ==> len=5;
      </textarea>
    </div>
    <h3>Function 参数的解构赋值</h3>
    <div class="f14">
      <textarea>
        function add([x, y]){
          return x + y;
        }
        add([1, 2]); // 3
      </textarea>
    </div>
    <h3>用途</h3>
    <div class="f14">
      <textarea>
        （1）交换变量的值
          let x = 1;
          let y = 2;
          [x, y] = [y, x];
          上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。

          （2）从函数返回多个值

          函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。
          // 返回一个数组
          function example() {
            return [1, 2, 3];
          }
          let [a, b, c] = example();
          // 返回一个对象
          function example() {
            return {
              foo: 1,
              bar: 2
            };
          }
          let { foo, bar } = example();

          （3）函数参数的定义
          解构赋值可以方便地将一组参数与变量名对应起来。
          // 参数是一组有次序的值
          function f([x, y, z]) { ... }
          f([1, 2, 3]);
          // 参数是一组无次序的值
          function f({x, y, z}) { ... }
          f({z: 3, y: 2, x: 1});

          （4）提取 JSON 数据
          解构赋值对提取 JSON 对象中的数据，尤其有用。
          let jsonData = {
            id: 42,
            status: "OK",
            data: [867, 5309]
          };
          let { id, status, data: number } = jsonData;
          console.log(id, status, number);
          // 42, "OK", [867, 5309]
          上面代码可以快速提取 JSON 数据的值。

          （5）函数参数的默认值
          jQuery.ajax = function (url, {
            async = true,
            beforeSend = function () {},
            cache = true,
            complete = function () {},
            crossDomain = false,
            global = true,
            // ... more config
          } = {}) {
            // ... do stuff
          };
          指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。

          （6）遍历 Map 结构
          任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。
          const map = new Map();
          map.set('first', 'hello');
          map.set('second', 'world');
          for (let [key, value] of map) {
            console.log(key + " is " + value);
          }
          // first is hello
          // second is world
          如果只想获取键名，或者只想获取键值，可以写成下面这样。
          // 获取键名
          for (let [key] of map) {
            // ...
          }
          // 获取键值
          for (let [,value] of map) {
            // ...
          }

          （7）输入模块的指定方法
          加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
          const { SourceMapConsumer, SourceNode } = require("source-map");
      </textarea>
    </div>
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
        title: '变量的解构赋值',
        bodyStyle: 'background-color: #fff;',
        bodyClass: 'destructuring'
      }
    },
    created () {},
    mounted () {

    },
    methods: {},
    components: {}
  }
</script>

<style type="text/css">

</style>