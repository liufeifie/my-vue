<template>
  <div class="pl15 pr15 pb20">
    <h3>属性的简洁表示法</h3>
    <textarea>
      const foo = 'bar';
      const baz = {foo};
      baz // {foo: "bar"}
      // 等同于
      const baz = {foo: foo};

      function f(x, y) {
        return {x, y};
      }
      // 等同于
      function f(x, y) {
        return {x: x, y: y};
      }
      f(1, 2) // Object {x: 1, y: 2}
    </textarea>
    <h3>Object.is()</h3>
    <p class="f14">来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。</p>
    <h3>Object.assign(target, source1, source2, ...)</h3>
    <p class="f14">对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。</p>
    <p class="f12 col02">Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。</p>
    <p class="f13 fbold">Object.assign方法实行的是浅拷贝;同名属性的替换;数组的处理;取值函数的处理</p>
    <h4 class="mt10">对象的描述属性</h4>
    <ul class="f12 fbold pl10">
      <li>value: 属性值</li>
      <li>writable: 可写性</li>
      <li>enumerable： 可枚举性</li>
      <li>configurable： 可配置性</li>
    </ul>
    <p class="f14 fbold">Object.getOwnPropertyDescriptor(obj, key)</p>
    <p class="f12 pl15">返回指定对象上一个自有属性对应的属性描述符。</p>
    <p class="f14 fbold">Object.getOwnPropertyDescriptors(obj)</p>
    <p class="f12 pl15">所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。</p>
    <p class="f14 fbold">Object.defineProperty(obj, key, descriptor)</p>
    <p class="f12 pl15">在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。</p>
    <p class="f14 fbold">Object.defineProperties(obj, descriptor)</p>
    <p class="f12 pl15">在一个对象上定义一个或多个新的属性或修改现有属性，并返回该对象。</p>
    <h3>属性的遍历</h3>
    <ul class="f14">
      <li>
        <b class="fbold">（1）for...in</b> <br>
        <p class="pl15"> for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。</p>
      </li>
      <li>
        <b class="fbold">（2）Object.keys(obj)</b> <br>
        <p class="pl15">Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。</p>
      </li>
      <li>
        <b class="fbold">（3）Object.getOwnPropertyNames(obj)</b> <br>
        <p class="pl15">Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。</p>
      </li>
      <li>
        <b class="fbold">（4）Object.getOwnPropertySymbols(obj)</b> <br>
        <p class="pl15">Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。</p>
      </li>
      <li>
        <b class="fbold">（5）Reflect.ownKeys(obj)</b> <br>
        <p class="pl15">Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。</p>
      </li>
    </ul>
    <h3 class="mt10">__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()</h3>
    <ul class="f14">
      <li>
        <h4>__proto__属性</h4>
        <p class="pl15">__proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象。</p>
      </li>
      <li>
        <h4>Object.setPrototypeOf()</h4>
        <p class="pl15">设置一个对象的prototype对象，返回参数对象本身。</p>
      </li>
      <li>
        <h4>Object.getPrototypeOf()</h4>
        <p class="pl15">读取一个对象的原型对象。</p>
      </li>
    </ul>
    <h3>super 关键字 </h3>
    <p class="f14">this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。</p>
    <p class="fbold col02 f12">注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。</p>
    <h3>Object.keys()，Object.values()，Object.entries()</h3>
    <ul class="f14">
      <li>
        <h4>Object.keys()</h4>
        <p class="pl15">ES5 引入了Object.keys方法，返回对象自身的（不含继承的）所有可遍历（enumerable）属性的键名数组。</p>
      </li>
      <li class="f13">ES2017 引入了跟Object.keys配套的Object.values和Object.entries，作为遍历一个对象的补充手段，供for...of循环使用。</li>
      <li>
        <h4>Object.values()</h4>
        <p class="pl15">返回象自身的（不含继承的）所有可遍历（enumerable）属性的键值数组。</p>
      </li>
      <li>
        <h4>Object.entries()</h4>
        <p class="pl15">Object.entries返回对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。</p>
      </li>

    </ul>
    <h3>解构赋值</h3>
    <p class="f14">对象的解构赋值用于从一个对象取值，分配到指定的对象上面。</p>
    <p class="f14">解构赋值必须是最后一个参数，否则会报错;解构赋值是浅拷贝。</p>
    <p class="f13 col02">{ x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };</p>
    <h3>扩展运算符</h3>
    <p class="f14">对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。</p>
    <p class="f13 col02">let z = { a: 3, b: 4 }; let n = { ...z };</p>
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
        title: '对象的扩展',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
    },
    mounted () {
      let s = Symbol('symbol')
      let obj = {foo: 123, id: 152, [Symbol('cid')]: 12}
      // console.log('getOwnPropertyDescriptor', Object.getOwnPropertyDescriptor(obj, 'foo'))
      console.log('getOwnPropertyDescriptors', Object.getOwnPropertyDescriptors(obj))
      console.log('defineProperty', Object.defineProperty(obj, 'name', {
        value: '鲁旭',
        writable: true,
        enumerable: false,
        configurable: true
      }))
      console.log('getOwnPropertyDescriptors', Object.getOwnPropertyDescriptors(obj))
      for (let i in obj) {
        console.log(obj[i])
      }
      console.log('Object.keys: 不含可枚举属性键名，不含symbol类型', Object.keys(obj))
      console.log('Object.getOwnPropertyNames：包含不可枚举属性键名，不含symbol类型', Object.getOwnPropertyNames(obj))
      console.log('Object.getOwnPropertySymbols： 只获取symbol类型的键名', Object.getOwnPropertySymbols(obj))
      console.log('Reflect.ownKeys： 所有自身键名', Reflect.ownKeys(obj))
      console.log('Object.getPrototypeOf(obj)', Object.getPrototypeOf(obj))
      console.log('Object.entries(obj)', Object.entries(obj))
    },
    methods: {},
    components: {}
  }
</script>

<style type="text/css">

</style>