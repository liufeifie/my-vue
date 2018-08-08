<template>
  <div>
    <h3 class="fbold f1_4 tc pt_5 pb_5 pl1 pr1">检测数据类型</h3>
    <ul class="bgcolor01 pl1_5 pr1_5 f1_2 pt1 pb1">
      <li class="fbold f1_3">Object.prototype.toString.call(prams}</li>
      <li class="pt_5 pb_5" v-for="item in dataType">{{item.typeStr}} === > {{Object.prototype.toString.call(item.value).slice(8, -1)}}</li>
    </ul>
    <h3 class="fbold f1_4 tc pt_5 pb_5 pl1 pr1">js 作为属性的变量</h3>
    <div class="bgcolor01 pl1_5 pr1_5 f1_2 pt1 pb1 lh2">
      当声明一个javascript全局变量时，实际上是定义了全局对象的一个属性。
      当使用var声明一个变量时，创建的这个属性是不可配置的，也就是说这个变量无法通过delete运算符来删除。可能你已经注意到，如果你没有使用严格模式并给一个未声明的变量赋值的话，javascript会自动创建一个全局变量。以这种方式创建的变量是全局对象的正常可本会属性，并可以删除它们：
    </div>
    <h3 class="fbold f1_4 tc pt_5 pb_5 pl1 pr1">
      <a href="http://www.cnblogs.com/Ziksang/p/5203551.html" class="color04">js 不可变的原始值和可变的对象引用</a>
    </h3>
    <ul class="bgcolor01 pl1_5 pr1_5 f1_2 pt1 pb1 lh2">
      <li style="list-style-type: decimal;">javascript中的原始值（undefined、null、布尔值、数字和字符串）与对象（包括数组和函数）有着根本区别。</li>
      <li style="list-style-type: decimal;">原始值是不可更改的：任何方法都无法更改（或“突变”）一个原始值。对数字和布尔值来说显然如此----改变数字的值本身就说不通，
        而对字符串来说就不那么明显了，因为字符串看起来像由字符组成的数组，我们期望可以通过指定索引来假改字符串中的字符。
        实际上，javascript是禁止这样做的。<b class="fbold">字符串中所有的方法看上去返回了一个修改后的字符串，实际上返回的是一个新的字符串值。</b>
      </li>
      <li style="list-style-type: decimal;">对象和原始值不同，首先，它们是可变的--它们的值是可修改的</li>
      <li style="list-style-type: decimal;">对象的比较并非值的比较：即使两个对象包含同样的属性及相同的值，它们也是不相等的。各个索引元素相等的两个数组也不相等。</li>
      <li style="list-style-type: decimal;">我们通常将对象称为引用类型（reference type），以此来和javascript的基本类型区分开来。依
        照术语的叫法，对象值都是引用（reference）,对象的比较均是引用的比较：当且仅当 <b class="fbold">它们引用同一个基对象时，它们才相等</b>。</li>
      <li style="list-style-type: decimal;">将对象（或数组）赋值给一个变量，仅仅是赋值的引用值：对象本身并没有复制一次。如果你想得到一个对象或数组的副本，则必须显式复制对象的每个属性或数组的每个元素</li>
      <li style="list-style-type: decimal;">如果我们想比较两个单独的对象或者数组，则必须比较它们的属性或元素。</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        dataType: [ //  数据类型
          {value: 1, type: 'Number', typeStr: '1'},
          {value: '1', type: 'String', typeStr: '1'},
          {value: true, type: 'Boolean', typeStr: 'true'},
          {value: undefined, type: 'Undefined', typeStr: 'undefined'},
          {value: null, type: 'Null', typeStr: 'null'},
          {value: [1, 2, 3], type: 'Array', typeStr: '[1, 2, 3]'},
          {value: {a: 1, b: 2}, type: 'Object', typeStr: '{ a: 1, b: 2 }'},
          {
            value: (function () {
            }), type: 'Function', typeStr: '(function () {})'
          }
        ]
      }
    },
    pageConfig () {
      return {
        title: 'js对象',
        bodyStyle: 'background-color:  #f3f3f3'
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