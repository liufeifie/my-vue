<template>
  <div class="p15 pr15 pb20">
    <h3>模板字符串</h3>
    <p class="f14">模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。</p>
    <div class="f14">
      <textarea>
        // 普通字符串
        `In JavaScript '\n' is a line-feed.`

        // 多行字符串
        `In JavaScript this is
         not legal.`

        console.log(`string text line 1
        string text line 2`);

        // 字符串中嵌入变量
        let name = "Bob", time = "today";
        `Hello ${name}, how are you ${time}?`
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
        title: '字符串的扩展',
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