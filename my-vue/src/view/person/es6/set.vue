<template>
  <div class="pl15 pr15">
    <h3>作用</h3>
    <p class="f16">ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。</p>
    <h3 class="mt10">/去除数组的重复成员</h3>
    <p class="f16">[...new Set(array)]</p>
    <p class="f16"> Array.from(new Set(array));</p>
    <p class="f13 col02 fbold">Array.from方法可以将 Set 结构转为数组。</p>
    <h3 class="mt10">Set 实例的属性和方法</h3>
    <div class="f16">
      <p>Set 结构的实例有以下属性。</p>
      <p>Set.prototype.constructor：构造函数，默认就是Set函数。</p>
      <p>Set.prototype.size：返回Set实例的成员总数。</p>
      <p>Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。</p>
      <p>add(value)：添加某个值，返回 Set 结构本身。</p>
      <p>delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。</p>
      <p>has(value)：返回一个布尔值，表示该值是否为Set的成员。</p>
      <p>clear()：清除所有成员，没有返回值。</p>
    </div>

  </div>
</template>
<script>
  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: 'Set',
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