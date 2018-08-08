<template><!-- input-organize b_b_1 bcolor02 -->
  <span class=" flex flex-item-center">
        <slot name='label'></slot>
        <input ref="input"
               v-bind:readonly="readonly"
               v-bind:type="type"
               v-on:focus="inputfocusEven(true)"
               v-on:blur="inputfocusEven(false)"
               v-bind:value="value"
               v-bind:placeholder="placeholder"
               v-bind:class="inputClass"
               v-bind:checkNum="checkNum"
               v-bind:minVal="minVal"
               v-bind:maxVal="maxVal"
               :isReplace='isReplace'
               :formConfig="formConfig"
               v-on:input="updateValue($event.target.value)"
               maxlength="50"
               class="rightSpan f16 layout_flex_field"/>
        <slot name='notice'></slot>
   </span>
</template>
<script>
  /**
   * 2018.1.2
   * lzh
   *
   */
  import myMixin from '@/util/form'

  let preProps = Object.assign(myMixin.props, {
    isReplace: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    minLen: {
      type: Number,
      default: -1
    },
    maxLen: {
      type: Number,
      default: 99999
    },
    minVal: {
      type: Number,
      default: -Infinity
    },
    maxVal: {
      type: Number,
      default: Infinity
    },
    checkNum: {
      type: Boolean,
      default: false
    },
    checkMail: {//邮箱过滤
      type: Boolean,
      default: false
    },
    number: {//禁止输入非数字
      type:Boolean,
      default:false
    },
    formConfig: {
      type: Object,
      default: () => {
        return {}
      }
    },
    errMsg: {
      type: Object,
      default: () => {
        return {
          emptyMsg: '',
          minLenMsg: '',
          maxLenMsg: '',
          checkNumMsg: '',
          checkMailMsg: '',
          minValMsg: '',
          maxValMsg: ''
        }
      }
    }
  })
  export default {
    mixins: [myMixin.mixin],
    props: preProps,
    data () {
      return {
        emptyOnceSatus: true // input is or not onece empty
      }
    },
    methods: {
      checkedValue (value) {
        // if realTime error and not default
        if (!value && value !== 0 && value !== '0') {
          let emptyMsg = this.handle('emptyMsg')
          if (emptyMsg && this.realTime && this.required) {
            // report minLenMSg error
            this.$notice.setNotice(true, emptyMsg)
          }
          return null
        }
        let status = true
        let msgKey = ''
        if (value) {
          this.emptyOnceSatus = false
        }
        let formValue = value.trim()
        let len = formValue.length
        // error min length
        if (len < this.minLen) {
          msgKey = 'minLenMsg'
          status = false
        }
        // error max length
        // let result = value
        if (len > this.maxLen) {
          msgKey = 'maxLenMsg'
          formValue = value.slice(0, this.maxLen)
        }
        if (this.checkNum) {
          let regNum = /[^\d]/g
          if (regNum.test(formValue)) {
            status = false
            msgKey = 'checkNumMsg'
            formValue = formValue.replace(/[^\d]/g, '')
          }
          if (formValue && formValue.indexOf('.') < 0 && formValue != '') { // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于   01、02的金额 
            formValue = parseFloat(formValue) + ''
          }
        }
        //邮箱过滤
        //鲁旭
        if(this.checkMail){
          let regMail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
          if(!regMail.test(formValue)){
            status = false
            msgKey = 'checkMailMsg'
          }
        }
        //输入的非数字转换为空
        //鲁旭
        if (this.number) {
          formValue = formValue.replace(/\D/g, '')
        }
        // minVal
        if (value < this.minVal) {
          status = false
          msgKey = 'minValMsg'
          if (this.formConfig && this.formConfig.minMsg) {
            this.errTips = this.formConfig.minMsg
          }
          // console.log(this.errTips)
        }
        // maxVal
        if (value > this.maxVal) {
          status = false
          msgKey = 'maxValMsg'
          if (this.isReplace) {
            formValue = this.maxVal + ''
            status = true
          } else if (this.formConfig && this.formConfig.maxMsg) {
            this.errTips = this.formConfig.maxMsg
          }
        }
        this.$emit('input', formValue)
        if (formValue !== value) {
          this.$refs.input.value = formValue
        }
        // success
        this.handle(msgKey, status, value)
      },
      /**
       * update input
       * @param value
       * @returns {null}
       */
      updateValue (value) {
        this.checkedValue(value)
      }
    }
  }
</script>

<style lang="stylus">

</style>
