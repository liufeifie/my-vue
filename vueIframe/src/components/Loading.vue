<template>
  <!-- <div></div>-->
   <div v-bind:class="loadingClass" v-show="loadShow" class="loadingWrap">
      <div class="pageloader ">
          <div class=" loader-inner ball-triangle-path ">
              <div class="bcolor08"></div>
              <div class="bcolor08"></div>
              <div class="bcolor08"></div>
          </div>
          <p class="">处理等待中......</p>
      </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        loadingClass: 'loadingout',
        loadShow: false,
        timeout: null
      }
    },
    methods: {
      setLoading (status) {
        if (status) {
          this.loadShow = true
          this.loadingClass = 'loadingin'
        } else {
          this.loadingClass = 'loadingout'
          this.timeout = window.setTimeout(() => {
            this.loadShow = false
            window.clearTimeout(this.timeout)
          }, 900)
        }
      }
    },
    mounted () {}
  }
</script>

<style scoped>
  .loadingWrap {
    height: 100%;
    width: 100%;
    top:0;
    left:0;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.5);
    filter: Alpha(opacity = 50);
  }

  .pageloader {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    margin-left: -40px;
    margin-top: -50px;
    background-color: rgba(0, 0, 0, 0.5);
    /*background-color: #000;*/
    filter: Alpha(opacity = 50);
    border-radius: 5px;
  }

  .pageloader p {
    margin-top: 70px;
    color: #fff;
    text-align: center;
    font-size: 12px;
  }

  @-webkit-keyframes ball-triangle-path-1 {
    33% {
      -webkit-transform: translate(20px, -30px);
      transform: translate(20px, -30px);
    }
    66% {
      -webkit-transform: translate(40px, 0px);
      transform: translate(40px, 0px);
    }
    100% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
  }

  @keyframes ball-triangle-path-1 {
    33% {
      -webkit-transform: translate(20px, -30px);
      transform: translate(20px, -30px);
    }
    66% {
      -webkit-transform: translate(40px, 0px);
      transform: translate(40px, 0px);
    }
    100% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
  }

  @-webkit-keyframes ball-triangle-path-2 {
    33% {
      -webkit-transform: translate(20px, 30px);
      transform: translate(20px, 30px);
    }
    66% {
      -webkit-transform: translate(-20px, 30px);
      transform: translate(-20px, 30px);
    }
    100% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
  }

  @keyframes ball-triangle-path-2 {
    33% {
      -webkit-transform: translate(20px, 30px);
      transform: translate(20px, 30px);
    }
    66% {
      -webkit-transform: translate(-20px, 30px);
      transform: translate(-20px, 30px);
    }
    100% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
  }

  @-webkit-keyframes ball-triangle-path-3 {
    33% {
      -webkit-transform: translate(-40px, 0px);
      transform: translate(-40px, 0px);
    }
    66% {
      -webkit-transform: translate(-20px, -30px);
      transform: translate(-20px, -30px);
    }
    100% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
  }

  @keyframes ball-triangle-path-3 {
    33% {
      -webkit-transform: translate(-40px, 0px);
      transform: translate(-40px, 0px);
    }
    66% {
      -webkit-transform: translate(-20px, -30px);
      transform: translate(-20px, -30px);
    }
    100% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
  }

  .ball-triangle-path {
    position: relative;
    -webkit-transform: translate(25px, 15px);
    -ms-transform: translate(25px, 15px);
    transform: translate(25px, 15px);
  }

  .ball-triangle-path > div:nth-child(1) {
    -webkit-animation-name: ball-triangle-path-1;
    animation-name: ball-triangle-path-1;
    -webkit-animation-delay: 0;
    animation-delay: 0;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .ball-triangle-path > div:nth-child(2) {
    -webkit-animation-name: ball-triangle-path-2;
    animation-name: ball-triangle-path-2;
    -webkit-animation-delay: 0;
    animation-delay: 0;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .ball-triangle-path > div:nth-child(3) {
    -webkit-animation-name: ball-triangle-path-3;
    animation-name: ball-triangle-path-3;
    -webkit-animation-delay: 0;
    animation-delay: 0;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .ball-triangle-path > div {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: #bbbdc7;
  }

  .ball-triangle-path > div:nth-of-type(1) {
    top: 30px;
  }

  .ball-triangle-path > div:nth-of-type(2) {
    left: 20px;
  }

  .ball-triangle-path > div:nth-of-type(3) {
    top: 30px;
    left: 40px;
  }

  @-webkit-keyframes scalecenterout {
    0% {
      transform: scale(1);
      -webkit-transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.6);
      -webkit-transform: scale(0.6);
      opacity: 0
    }
  }

  @keyframes scalecenterout {
    0% {
      transform: scale(1);
      -webkit-transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.6);
      -webkit-transform: scale(0.6);
      opacity: 0
    }
  }

  @keyframes visiblehidden {
    0% {
      display: block;
    }
    100% {
      display: none;
    }
  }

  .loadingin {
    z-index: 9999;
  }

  .loadingout {
    z-index: 9999;
  }

  .loadingin .pageloader {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1
  }

  .loadingout .pageloader {
    animation: scalecenterout 1s ease 0s 1 normal;
    -webkit-animation: scalecenterout 1s ease 0s 1 normal;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }
</style>
