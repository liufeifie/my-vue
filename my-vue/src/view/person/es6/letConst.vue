<template>
  <div class="pl15 pr15 mt10">
    <h3>let 使用方法</h3>
    <div class="f14">
      <p>ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。</p>
      <textarea>
        var a = [];
        for (var i = 0; i < 10; i++) {
          a[i] = function () {
            console.log(i);
          };
        }
        a[6](); // 10
        var b = [];
        for (let i = 0; i < 10; i++) {
          b[i] = function () {
            console.log(i);
          };
        }
        b[6](); // 6
      </textarea>
      <p>
        上面代码中，变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。
        每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，
        里面的i指向的就是全局的i。也就是说，所有数组a的成员里面的i，指向的都是同一个i，
        导致运行时输出的是最后一轮的i的值，也就是 10。
        如果使用let，声明的变量仅在块级作用域内有效，最后输出的是 6。
      </p>
      <div>
        <b class="fbold">不存在变量提升</b>
        <p>let所声明的变量一定要在声明后使用，否则报错。</p>
        <p>let不允许在相同作用域内，重复声明同一个变量。</p>
      </div>
    </div>
    <h3>const</h3>
    <div class="f14">
      <p>const声明一个只读的常量。一旦声明，常量的值就不能改变。</p>
      <p>const的作用域与let命令相同：只在声明所在的块级作用域内有效。</p>
    </div>
  </div>
</template>
<script>
  import '@/assets/css/person.css'
  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: 'let和const命令',
        bodyStyle: 'background-color: #fff;',
        bodyClass: 'letConst'
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