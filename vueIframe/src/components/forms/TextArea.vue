<template>
    <div class="bcolor11 flex  pb1">
        <slot name='label'></slot>
        <textarea id="myMark"  class="txt  color01 f13 text-area"  
                type="text "
                v-on:focus="inputfocusEven(true)"
                v-on:blur="inputfocusEven(false)"
                v-bind:value="value"
                v-bind:placeholder="placeholder"
                v-bind:class="inputClass"
                maxlength="50"
                v-on:input="updateValue($event.target.value)"></textarea>
         
    </div>
</template>
<script>
  /**
   * 2017.10.25
   * lj
   * create
   * errMsg :{
   *    emptyMsg :
   *    minLenMSg :
   *    maxLenMsag :
   * }
   * minLen:
   * minLen v-model="value"
   */
  import myMixin from '@/util/form'

  let preProps = Object.assign(myMixin.props, {
    minLen: {
      type: Number,
      default: 0
    },
    maxLen: {
      type: Number,
      default: 50
    },
    errMsg: {
      type: Object,
      default: () => {
        return {
          emptyMsg: '',
          minLenMsg: '',
          maxLenMsg: '备注不能超过50个字符'
        }
      }
    }
  })
  export default {
    mixins: [myMixin.mixin],
    props: preProps,
    data () {
      return {
        minLenSatus: false, // watch input max minlength
        emptyOnceSatus: true // input is or not onece empty
      }
    },
    watch: {
      'value' (newvalue) {
        this.checkedValue(newvalue)
      }
    },
    methods: {
      /**
           * handle store  user callback
           * @param msgkey the this.errMsg key
           * @param status form check result
           * @returns {string} errmsg
           */
      handle (msgkey, status = false, value) { // this.value=value;
        let type = `${this.formSign}/SET_FORM`
        let msg = msgkey ? this.handleMsg(this.errMsg[msgkey] || '') : ''
        let mydetail = {
          status: status,
          value: value,
          msg: msg,
          key: this.sign,
          checked: value === '' ? this.required : this.checked
        }
        this.$store.commit(type, mydetail)
        // callback
        if (typeof this.formFun.change === 'function') {
          this.formFun.change(value, mydetail)
        }
        if (status && typeof this.formFun.success === 'function') {
          this.formFun.success(value, mydetail)
          // check form all
          let formStatus = this.$store.getters[`${this.formSign}/FORMS_STATUS`]
          if (formStatus && typeof this.formFun.formsSuccess === 'function') {
            this.formFun.formsSuccess(value, mydetail)
          }
        }
        if (!status && typeof this.formFun.error === 'function') {
          this.formFun.error(value, mydetail)
          if (typeof this.formFun.formsError === 'function') {
            this.formFun.formsError(value, mydetail)
          }
        }
        return msg
      },
      checkedValue (value) {
        this.$emit('input', value)
        // if realTime error and not default
        if (!value && value !== 0 && value !== '0') {
          let emptyMsg = this.handle('emptyMsg')
          if (emptyMsg && this.realTime && this.required) {
            // report minLenMSg error
            this.$notice.setNotice(true, emptyMsg)
          }
          return null
        }
        if (value) {
          this.emptyOnceSatus = false
        }
        let formValue = value.trim()
        let len = formValue.length
        // chenck minlen maxlen report error
        if (len > this.minLen) {
          this.minLenStatus = true
        }
        // error min length
        if (len < this.minLen) {
          let minMsg = this.handle('minLenMsg')
          if (this.minLenStatus && minMsg && this.realTime && this.checked) {
            // report minLenMSg error
            this.$notice.setNotice(true, minMsg)
          }
          return null
        }
        // error max length
        if (len > this.maxLen) {
          let maxMsg = this.handle('maxLenMsg')
          if (maxMsg && this.realTime && this.checked) {
            // report minLenMSg error
            this.$notice.setNotice(true, maxMsg)
          }
          this.value = this.value.slice(0, this.maxLen)
          return null
        }
        // success
        this.handle(null, true, value)
      },
      /**
           * update input
           * @param value
           * @returns {null}
           */
      updateValue (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="stylus">

</style>
