<template>
  <div class="pr wb100" v-on:click="getfocus()">
    <ul class="modelviews clearfix">
        <li class="fl pr"  v-for ="index in numLength" :style="'width:'+ width[index-1]+ '%'">
            <span  :id="'authinput' + index + id" class="pa mcursor"  >&nbsp;</span>
            <span class="f21 inputtext">{{codeArr[index-1] || ''}}</span>
        </li>
    </ul>
    <input class="wb100 pa modelinput" name="input" 
        ref="input"
        unselectable="on"
        v-on:focus="inputfocusEven(true)"
        v-on:blur="inputfocusEven(false)"
        v-bind:type ="type"
        v-bind:value="value"
        v-bind:placeholder="placeholder"
        v-bind:class="inputClass"
        
       v-on:input="updateValue($event.target.value)"
      >
  </div>
</template>

<script>
/**
  * lj
  * 2017.12.15
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
  }
})
export default {
  mixins: [myMixin.mixin],
  props: preProps,
  data () {
    return {
      codeArr: [],
      width:[],
      mcursor:[]
    }
  },
  created () {
    let spac = (this.numLength - 1) * 5.1
    let wb = parseInt((100 - spac) / this.numLength)
    let num = 0
    for (let i = 0; i < this.numLength - 1; i++) {
      this.width[i] = wb
      num = num + wb
      this.mcursor[i] = ''
    }
    this.mcursor[this.numLength - 1] = ''
    this.width[this.numLength - 1] = (100 - spac - num).toFixed(2)
    if (this.value) {
      this.codeArr = this.value
    }
  },
  methods: {
    // downVal (e, num) {
    //     if (e.keyCode === 8) {
    //         this.codeArr = this.codeArr.slice(0, this.codeArr.length-1)
            
    //     }
    //     console.log('e.target.value', e.target.value)
    //     let index = this.codeArr.length
    //     this.codeArr[index] = e.target.value
    //     if (this.codeArr.length > this.numLength) {
    //         this.codeArr = this.codeArr.slice(0, this.numLength)
    //     } 
    //     if (index < this.numLength) {
    //       document.getElementById('authinput' + (index + 1) + this.id).className = 'pa mcursor cursoran'
    //       for(let i = 1; i <= this.numLength; i++ ) {
    //         if (i !== (index + 1)) {
    //             document.getElementById('authinput' + i + this.id).className =  'pa mcursor'
    //         }
    //       } 
    //     }
    //     this.$refs.input.value = this.codeArr.toString()
    //     this.$emit('input', this.codeArr.toString())
    //     this.handle('err', true, this.codeArr)
    // },
    /**
     * 点击的时候判断光标位置
     */
    getfocus () {
      let index = this.codeArr.length + 1
      // index = index < 0 ? 0 : index
      let node = document.getElementById('authinput' + index + this.id)
      node.className = 'pa mcursor cursoran'
      node.parentNode.className = 'fl pr curborder'
    },
    ioscheckedValue (value) {
      let result = value
      let re1 = new RegExp('^[\u4E00-\u9FFF]+$')
      if (re1.test(name)) {
        result = result.replace(/[\u4E00-\u9FFF]+$/, '')
      }
      if (!result && result !== 0 && result !== '0') {
        this.codeArr = ['']
        let node1 = document.getElementById('authinput1' + this.id)
        let node2 = document.getElementById('authinput2' + this.id)
        node1.className = 'pa mcursor cursoran'
        node1.parentNode.className = 'fl pr curborder'
        node2.className = 'pa mcursor'
        node2.parentNode.className = 'fl pr'
        this.$emit('input', result)
        this.handle('emptyMsg', false, result)
        return false
      }
      if (result.length > this.numLength) {
        result = result.slice(0, this.numLength)
      }
      let index = result.length
      if (index < this.numLength) {
        // let node1 = document.getElementById('authinput' + (index + 1) + this.id)
        // node1.className = 'pa mcursor cursoran'
        // node1.parentNode.className = 'fl pr curborder'
        // console.log('node1', node1)
        for (let i = 1; i <= this.numLength; i++) {
          if (i !== (index + 1)) {
            let node2 = document.getElementById('authinput' + i + this.id)
            node2.className = 'pa mcursor'
            node2.parentNode.className = 'fl pr'
          } else {
            let node1 = document.getElementById('authinput' + i + this.id)
            node1.className = 'pa mcursor cursoran'
            node1.parentNode.className = 'fl pr curborder'
          }
        } 
      }
      if (result !== value && this.$refs) {
        this.$refs.input.value = result
      }
      this.codeArr = result
      this.$emit('input', result)
      this.handle('err', true, result)
    },
    updateValue (value) {
      this.ioscheckedValue(value)
    }
  }
}
</script>

<style>
    .modelviews li {
        height:5rem; 
        line-height:5rem; 
        border-bottom:1px solid #bebebe;
        margin-right:5.1%;
        }
    .modelviews li.curborder {
        border-bottom:1px solid #313131;
    }
     .modelviews li:last-child{
         margin-right:0;
     }    
     .modelinput {
         height:1px;
         padding:5rem 0 0 0;
         top:0;
         font-size:1px;
         left:0;
         background-color:transparent;
         color: #fff;
         text-shadow: 0 0 0 transparent;
     }
     .inputtext {
         display:block;
         text-align:center;
         width:100%;
         height:100%;
     }
     .mcursor{
         height:40%;
         width:1px;
         top:30%;
         left:0;
         background:#000;
         opacity :0;
     }
    
.cursoran {
     opacity :1;
    animation-name:mycursor;
    animation-duration: .8s;
    -webkit-animation-name: mycursor;
    -webkit-animation-duration: .8s;
    animation-iteration-count:infinite;
    -webkit-animation-iteration-count:infinite; /* Safari 和 Chrome */
}


@-webkit-keyframes mycursor {
    0% {
        opacity :1;
    }
    100% {
        opacity :0;
    }
}

@keyframes mycursor {
    0% {
        opacity :1;
    }
    100% {
       opacity :0;
    }
}
</style>
