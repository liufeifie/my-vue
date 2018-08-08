<template>
  <div>
    <div class="authInut">
      <div class="authInputBg" @click="inputFocus"></div>
        <div :id="id" class="inputBox">
          <div  v-for="(items,index) in numLength" :id="'authinput'+index" :key = "index">
            <input type="tel"   @keyup="upVal($event,index)"  @keydown="downVal($event,index)"  >
          </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
  * 2017.11.20
  * lizhi
  * 验证码input
  * lj
  * 2017.11.27
  * 修改
  */
import myMixin from '@/util/form'
let preProps = Object.assign({}, myMixin.props, {
  numLength: {
    type: Number,
    default: 6
  },
  id: {
    type: String,
    default: 'inputBox'
  },
  value: {
    type: String,
    default: ''
  }
})
export default {
  mixins: [myMixin.mixin],
  props: preProps,
  data () {
    return {
      codeArr: []
    }
  },
  computed: {
    mylength () {
      var m = this.numLength
      var v = this.value.length
      return m >= v ? v : m
    }
  },
  mounted () {
    let inputBox = document.getElementById(this.id).getElementsByTagName('input')
    for (var i = 0; i < this.mylength; i++) {
      this.codeArr[i] = this.value[i]
      inputBox[i].value = this.value[i]
      //  inputBox[i].addEventListener('change', function(ev){
      //    console.log(111111111111111)
      //   inputBox[i+1].focus()
      // });
    }
  },
  methods: {
    inputFocus () {
      let inputBox = document
        .getElementById(this.id)
        .getElementsByTagName('input')
      let inputLength = inputBox.length

      for (let i = 0; i < inputLength; i++) {
        if (inputBox[i].value === '') {
          inputBox[i].focus()
          break
        } else {
          inputBox[inputLength - 1].focus()
        }
      }
    },
    upVal (e, num) {
      let inputBox = document
        .getElementById(this.id)
        .getElementsByTagName('input')
      if (inputBox[num].value !== '') {
        if (num < this.numLength - 1) {
          // console.log('inputBox[num + 1].parentNode',inputBox[num + 1].parentNode)
          // inputBox[num + 1].focus()
          inputBox[num + 1].focus()
        }
      }

      this.codeArr[num] = inputBox[num].value
      var inputValue = this.codeArr.join('')
      let value = inputValue.replace(/\s/g, '')
      this.$emit('input', inputValue)
      if (!value && value !== 0 && value !== '0') {
        this.handle('emptyMsg', false, value)
        return false
      }
      this.handle('err', value.length === this.numLength, inputValue)
    },
    checkedValue () {      
    },
    downVal (e, num) {
      let inputBox = document.getElementById(this.id).getElementsByTagName('input')
      if (e.keyCode === 8) {
        if (inputBox[num].value === '' && num >= 1) {
          inputBox[num - 1].focus()
        }
      } else {
        inputBox[num].value = ''
      }
    }
  }
}
</script>

<style>
.authInut {
  /* padding-left: 3rem; */
  position: relative;
  height: 5rem;
}
.authInputBg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.authInut input {
  border-bottom: 1px solid #bebebe;
  /* width: 3rem; */
  /* display: block; */
  /* float: left; */
  /* margin-right: 1rem; */
  text-align: center;
  height: 5rem;
  line-height: 3rem;
  padding: 1rem 0;
  font-size: 2.1rem;
  transition: all ease 0.5s;

  width: 100%;
}
.authInut input:focus {
  border-bottom: 1px solid #313131;
}
.inputBox {
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
}
.inputBox > div {
  flex: 1;
  -webkit-box-flex: 1;
  /* padding-right: 1rem; */
  margin-right: 1rem;
}
.authInputBg input {
  border-radius: 0;
}
</style>
