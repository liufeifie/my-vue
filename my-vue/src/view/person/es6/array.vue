<template>
  <div class="pl15 pr15">
    <h2>数组的扩展</h2>
    <h3 class="mt10">1.扩展运算符</h3>
    <p class="f16">扩展运算符（spread）是三个点（...）</p>
    <p class="f16">...[1, 2, 3] ==> 1,2,3</p>
    <p>数组最大值: Math.max(...[3,4,5,1]) ==> 5</p>
    <h4>合并数组</h4>
    <p class="f16"><b class="fbold">es5</b>: Array.prototype.push.apply(arr1, arr2);</p>
    <p class="f16"><b class="fbold">es6</b>: arr1.push(...arr2) ==> arr1为两数组合并后的数据集</p>
    <p class="f16"><b class="fbold">es5</b>: new (Date.bind.apply(Date, [null, 2015, 1, 1]))</p>
    <p class="f16"><b class="fbold">es6</b>:  new Date(...[2015, 1, 1])</p>
  </div>
</template>
<script>
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