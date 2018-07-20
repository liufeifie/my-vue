<template>
  <div class="p15">
    <h3>hasOwnProperty()</h3>
    <p class="f16">通过hasOwnProperty()方法可以确定该属性是自有属性还是继承属性</p>
    <h3>Object.keys()</h3>
    <p class="f16">Object.keys()方法返回所有可枚举的自有属性</p>
    <h3>Object.getOwnPropertyNames()</h3>
    <p class="f16">与Object.keys()方法不同，Object.getOwnPropertyNames()方法返回所有自有属性(包括不可枚举的属性)</p>
    <h3>对象属性描述符的类型分为两种：数据属性和访问器属性</h3>
    <h4>数据属性:</h4>
    <div class="f16">
      【1】Configurable(可配置性)<br>
      可配置性决定是否可以使用delete删除属性，以及是否可以修改属性描述符的特性，默认值为true <br>
      【2】Enumerable(可枚举性)<br>
      可枚举性决定属性是否出现在对象的属性枚举中，比如是否可以通过for-in循环返回该属性，默认值为true <br>
      【3】Writable(可写性)<br>
      可写性决定是否可以修改属性的值，默认值为true <br>
      【4】Value(属性值)<br>
      属性值包含这个属性的数据值，读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。默认值为undefined <br>
    </div>
    <h4>访问器属性:</h4>
    <div class="f16">
      【1】Configurable(可配置性) <br>
      可配置性决定是否可以使用delete删除属性，以及是否可以修改属性描述符的特性，默认值为true <br>
      【2】Enumerable(可枚举性) <br>
      可枚举性决定属性是否出现在对象的属性枚举中，比如是否可以通过for-in循环返回该属性，默认值为true <br>
      【3】getter <br>
      在读取属性时调用的函数。默认值为undefined <br>
      【4】setter <br>
      在写入属性时调用的函数。默认值为undefined <br>
    </div>
    <h3>描述符方法</h3>
    <h4> Object.getOwnPropertyDescriptor()</h4>
    <p class="f16">Object.getOwnPropertyDescriptor(o,name)方法用于查询一个属性的描述符，并以对象的形式返回</p>
    <h4>Object.defineProperty()</h4>
    <p class="f16">Object.defineProperty(o,name,desc)方法用于创建或配置对象的一个属性的描述符，返回配置后的对象</p>
    <h4>Object.defineProperties()</h4>
    <p class="f16">Object.defineProperty(o,descriptors)方法用于创建或配置对象的多个属性的描述符，返回配置后的对象</p>
    <h4>Object.create()</h4>
    <p class="f16">Object.create(proto,descriptors)方法使用指定的原型和属性来创建一个对象</p>
    <h3 class="col02">对象深拷贝</h3>
    <textarea class="h80">
      function deepClone (obj) {
      return JSON.parse(JSON.stringify(obj))
      }

      function deepClone (obj, cloneObj) {
        if (typeof obj !== 'object') return false
        let tempObj = cloneObj || {}
        for (let i in obj) {
          if (typeof obj[i] === 'object') {
            tempObj[i] = (obj[i] instanceof Array) ? [] : {}
            // arguments.callee(obj[i], tempObj[i])
            deepClone(obj[i], tempObj[i])
          } else {
            tempObj[i] = obj[i]
          }
        }
        return tempObj
      }
    </textarea>

    <h3>闭包</h3>
    <p class="f16">古老定义: 函数变量可以保存在函数作用域内(包含变量的函数就是闭包)</p>
    <p class="f16">定义一: 可以访问其所在作用域的函数(通过作用域链查找变量的函数就是闭包)</p>
    <p class="f16">定义二: 有权访问另一个函数作用域中的变量的函数(访问上层函数的作用域的内层函数就是闭包)</p>
    <p class="f16">定义三: 函数声明时的作用域以外的地方被调用的函数()</p>
    <p class="f16">只要将内部函数传递到所在的词法作用域以外，它都会持有对原始作用域的引用，无论在何处执行这个函数都会使用闭包</p>
    <p class="f16">严格来说，闭包需要满足三个条件：【1】访问所在作用域；【2】函数嵌套；【3】在所在作用域外被调用</p>
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
        title: 'object 对象',
        bodyStyle: 'background-color: #fff;',
        bodyClass: 'object'
      }
    },
    created () {
    },
    mounted () {
      class Foo {
        constructor (a, b) {
          this.name = a
          this.age = b
        }
        toString () {
          console.log(this.name, this.age)
        }
      }
      let f = new Foo('鲁旭', 29)

      f.toString()
    },
    methods: {
      deepClone (obj, cloneObj) {
        if (typeof obj !== 'object') return false
        let tempObj = cloneObj || {}
        for (let i in obj) {
          if (typeof obj[i] === 'object') {
            tempObj[i] = (obj[i] instanceof Array) ? [] : {}
            // arguments.callee(obj[i], tempObj[i])
            this.deepClone(obj[i], tempObj[i])
          } else {
            tempObj[i] = obj[i]
          }
        }
        return tempObj
      }
    },
    components: {}
  }
</script>

<style type="text/css">

</style>