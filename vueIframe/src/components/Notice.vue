<template>
    <div v-show="initStatua"  v-bind:class="[status ? 'noticeshow' : 'noticehide']" id="errMessage" class="errMessage " ><span calss="op" v-html="msg"></span></div>
</template>
<script>
  export default {
    data () {
      return {
        status: false,
        msg: '',
        initStatua: false,
        timeout: null,
        displaytime: null
      }
    },
    methods: {
      setNotice (status, msg, time) {
        this.status = status
        this.initStatua = status
        this.msg = msg || ''
        if (status) {
          let mytime = time || 2
          if (this.timeout) { window.clearTimeout(this.timeout) }
          if (this.displaytime) { window.clearTimeout(this.displaytime) }
          this.timeout = window.setTimeout(() => {
            this.status = false
            this.initStatua = true
            window.clearTimeout(this.timeout)
            this.displaytime = window.setTimeout(() => {
              this.initStatua = false
              window.clearTimeout(this.displaytime)
            })
          }, mytime * 1000)
        }
      }
    },
    destoryed () {
      window.clearTimeout(this.timeout)
    }
  }
</script>

<style lang="stylus">
@keyframes evenin
{
  0%  { opacity:0; display:block;}
  100%  {opacity:1}
}
@keyframes evenout
{
  0%  { opacity:1}
  100%  {opacity:0; display:none;}
}
.errMessage.noticeshow {
  animation: evenin 1s ease forwards;
}
.errMessage.noticehide{
  animation: evenout 1s ease forwards;
}
.errMessage {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform:translate(-50%);
    -moz-transform:translate(-50%);
    transform:translate(-50%);
    text-align: center;
    color: #fff;
    z-index: 10000;
}
.errMessage span {
    display: inline-block;
    /* visibility: hidden; */
    background: #000;
    opacity: 0.7;
    max-width: 80%;
    padding: 1.8rem 1.5rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    line-height: 1.4
}
</style>
