<template>
  <div class="pl15 pr15">
    <h3>跨域的原因：</h3>
    <p class="f16 mb10">浏览器的同源策略</p>
    <h3>jsonP 跨域</h3>
    <p class="f16">JSONP只能发GET请求</p>
    <textarea class="mb10" readonly>
      前端代码：
      window.resdata = function (data) {
        resolve(data)
      }
      let script = document.createElement('script')
      script.src = 'http://www.server.com/' + api[reqdata.urlKey].url + '?callback=resdata'
      document.body.appendChild(script)

      后端代码（php）：
      $jsonp = ['id'=>1, 'name'=>'tom', 'age'=> 28];
      echo $_GET['callback'].'('.json_encode($jsonp).')'
    </textarea>
    <h3>空iframe加form 跨域</h3>
    <p class="f16">可以发post请求</p>

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
        title: 'ajax 跨域',
        bodyStyle: 'background-color: #fff;',
        bodyClass: 'ajax_cross'
      }
    },
    created () {
    },
    mounted () {
      let iframe = document.createElement('iframe')
      iframe.name = 'iframePost'
      iframe.style.display = 'none'
      document.body.appendChild(iframe)
      iframe.onload = function () {
        console.log('post success', iframe.contentWindow)
      }
      let form = document.createElement('form')
      let input = document.createElement('input')
      form.action = 'http://www.server.com/cross_iframe.php'
      form.method = 'post'
      form.target = iframe.iframePost
      let data = {id: 12, name: '鲁旭', sex: '女'}
      for (let name in data) {
        input.name = name
        input.value = data[name].toString()
        form.appendChild(input.cloneNode())
      }
      form.style.display = 'none'
      document.body.appendChild(form)
      // form.submit()
      document.body.removeChild(form)
      /* this.$store.dispatch('JSONP', {
        urlKey: 'iframe',
        key: 'iframe'
      }).then(data => {
        console.log('jsonp跨域：', data)
      }) */
    },
    methods: {
    },
    components: {}
  }
</script>

<style type="text/css">

</style>