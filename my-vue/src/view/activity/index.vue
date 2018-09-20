<template>
  <div id="father">
    <div id='child'>
      你哈
    </div>
    <div class="w60 h60 bgcolor01" id="boxSizing"></div>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: 'index',
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
  #father{
    width: 100%;
    height: 100%;
    /* position: relative; */
    /* flex 布局 */
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
  #child{
    
    /* 宽高不确定 */
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */

    /* 宽高确定 */
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto; */
    /* position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -w/2;
    margin-top: -h/2; */
    border: 1px solid red;
  }
</style>