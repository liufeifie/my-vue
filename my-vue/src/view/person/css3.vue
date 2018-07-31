<template>
    <div class="pl15 pr15 hp100">
       <ul class="flex flex-wrap">
           <li class="css3">矩形</li>
           <li class="css3 round">圆形</li>
           <li class="css3 semicircle">半圆形</li>
           <li class="css3 sector">扇形</li>
           <li class="css3 arc">弧形</li>
           <li class="triangle"></li>
           <li class="arrow"></li>
           <li class="rectangle">疑问框</li>
       </ul>
    </div>
</template>
<script>
  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: 'css3',
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
    .css3 {
        width: 10rem;
        height: 10rem;
        line-height: 10rem;
        text-align: center;
        background-color: red;
        margin-top: 1rem;
    }
    .round{border-radius: 50%;}
    /*左上 右上  右下  左下*/
    .semicircle{border-radius: 10rem 10rem 0 0;height: 5rem;}
    .sector{border-radius: 10rem 0 0;}
    .arc{border-radius: 10rem 0;}
    .triangle{
        border: 5rem solid green;
        width: 0;
        height: 0;
        border-top-color: yellow;
        border-right-color: blue;
        border-bottom-color: pink;
        border-left-color: orange;
    }
    .arrow{
        background: none;
        border: 5rem solid #40ff60;
        width: 0;
        height: 0;
        border-color: #40ff60 transparent transparent transparent;
    }
    .rectangle{
        width: 20rem;
        height: 10rem;
        line-height: 10rem;
        text-align: center;
        border-radius: 1.5rem;
        position: relative;
        background-color: #22ff3d;
    }
    /*小三角*/
    .rectangle::before{
        content: "";
        width: 0;
        height: 0;
        border: 1.5rem solid red;
        border-color: #22ff3d transparent transparent transparent;
        position:absolute;
        bottom: -2.9rem;
        left: 4rem;
    }
</style>