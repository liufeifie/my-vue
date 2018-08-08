<template>
  <div class="pl15 pr15 pb20">
    <h2>数组的扩展</h2>
    <h3 class="mt10">1.扩展运算符</h3>
    <p class="f16">扩展运算符（spread）是三个点（...）,它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。</p>
    <p class="f16">...[1, 2, 3] ==> 1,2,3</p>
    <h4>数组最大值</h4>
    <p><b class="fbold">es5</b>: Math.max.apply(null, [14, 3, 77]) ==> 77</p>
    <p><b class="fbold">es6</b>: Math.max(...[3,4,5,1]) ==> 5</p>
    <h4>合并数组</h4>
    <p class="f16"><b class="fbold">es5</b>: Array.prototype.push.apply(arr1, arr2);</p>
    <p class="f16"><b class="fbold">es6</b>: arr1.push(...arr2) ==> arr1为两数组合并后的数据集</p>
    <p class="f16"><b class="fbold">es5</b>: new (Date.bind.apply(Date, [null, 2015, 1, 1]))</p>
    <p class="f16"><b class="fbold">es6</b>: new Date(...[2015, 1, 1])</p>
    <h3>扩展运算符的应用</h3>
    <div class="f14">
      <textarea>
        （1）复制数组
        es5:  const a1 = [1, 2];
              const a2 = a1.concat();
              a2[0] = 2;   //  a1: [1, 2]
        es6:  const a1 = [1, 2];
              const a2 = [...a1]; // 写法一
              const [...a2] = a1; // 写法二

        （2）合并数组   浅拷贝
        const arr1 = ['a', 'b']; const arr2 = ['c']; const arr3 = ['d', 'e'];
        arr1.concat(arr2, arr3);  // ES5 的合并数组
        [...arr1, ...arr2, ...arr3]  // ES6 的合并数组
        // [ 'a', 'b', 'c', 'd', 'e' ]

        const a1 = [{ foo: 1 }];
        const a2 = [{ bar: 2 }];
        const a3 = a1.concat(a2);
        const a4 = [...a1, ...a2];
        a3[0] === a1[0] // true
        a4[0] === a1[0] // true
      </textarea>
    </div>
    <h3>Array.from()</h3>
    <p class="f14">Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。</p>
    <p class="f14">Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。</p>
    <div class="f14">
      <textarea>
        let arrayLike = { '0': 'a','1': 'b','2': 'c',length: };
        // ES5的写法
        var arr1 = [].slice.call(arrayLike);
        // ES6的写法
        let arr2 = Array.from(arrayLike);
        // ['a', 'b', 'c']

        Array.from([1, 2, 3], (x) => x * x)
        // [1, 4, 9]
      </textarea>
    </div>
    <h3>Array.of()</h3>
    <p class="f14">将一组值，转换为数组。</p>
    <div class="f14">
      <textarea>
        es5:  Array():
        // 1个参数:指定数组的长度。
        // >=2个参数: 由参数组成的新数组
        Array() // []
        Array(3) // [, , ,]
        Array(3, 11, 8) // [3, 11, 8]

        Array.of() // []
        Array.of(undefined) // [undefined]
        Array.of(1) // [1]
        Array.of(1, 2) // [1, 2]
      </textarea>
    </div>
    <h3>数组实例的 copyWithin()</h3>
    <p class="f14">Array.prototype.copyWithin(target, start = 0, end = this.length)</p>
    <ul class="f14" style="text-indent: 1.5rem;">
      <li>target（必需）：从该位置开始替换数据。如果为负值，表示倒数。</li>
      <li>start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。</li>
      <li>end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。</li>
    </ul>
    <p class="f14">[1, 2, 3, 4, 5].copyWithin(0, 3)  // [4, 5, 3, 4, 5]</p>
    <h3>数组实例的 find()</h3>
    <p class="f14">返回符合条件的数组第一个成员，否则返回undefined</p>
    <p class="f14">find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。</p>
    <h3>数组实例的 findIndex()</h3>
    <p class="f14">返回符合条件的数组第一个成员的位置，否则返回-1。</p>
    <p class="f13 color02">这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。</p>
    <h3>数组实例的 fill() </h3>
    <p class="f14">fill方法使用给定值，填充一个数组。</p>
    <p class="f14">fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。</p>
    <h3>entries()，keys() 和 values()</h3>
    <ul class="f14 pl10">
      <li>keys()是对键名的遍历</li>
      <li>values()是对键值的遍历</li>
      <li>entries()是对键值对的遍历</li>
      <li class="pl0">
        <textarea>
          for (let index of ['a', 'b'].keys()) {
            console.log(index);
          }
          // 0  // 1
          for (let elem of ['a', 'b'].values()) {
            console.log(elem);
          }
          // 'a'  // 'b'
          for (let [index, elem] of ['a', 'b'].entries()) {
            console.log(index, elem);
          }
          // 0 "a"  // 1 "b"

          如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
          let letter = ['a', 'b', 'c'];
          let entries = letter.entries();
          console.log(entries.next().value);
          // [0, 'a']
          console.log(entries.next().value);
          // [1, 'b']
          console.log(entries.next().value);
          // [2, 'c']
        </textarea>
      </li>
    </ul>
    <h3>数组实例的 includes()</h3>
    <p class="f14">Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。</p>


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
        title: 'array',
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