<template>
    <div>
        <button v-if="submitType" v-on:submit.prevent="onSubmit" class="btnDefault" v-bind:class="btnClass">
          <div v-show='loadingShow' class="loading loading_btn">
              <span class="box">
                <span class="timer-loader"></span> 
              </span>
            </div>
            <slot>确认</slot>
        </button>
        <button v-else v-on:click.stop="onSubmit" class="btnDefault" v-bind:class="btnClass">
            <div v-show='loadingShow' class="loading loading_btn">
              <span class="box">
                <span class="timer-loader"></span> 
              </span>
            </div>
            <slot>确认</slot>
        </button>
    </div>
</template>
<script>
  /**
   * 2017.10.25
   * lj
   * create
   */
  export default {
    props: {
      formSign: {
        type: String,
        required: true
      },
      loadingShow: {
        type: Boolean,
        default: false
      },
      checked: Array,
      submitType: {
        type: Boolean,
        default: false
      },
      btnClass: {
        type: String,
        default: ''
      },
      submitFun: Function,
      unSubmitFun: Function,
      errorNotice: {
        type: Boolean,
        default: true
      },
      value: String,
      btnAvailable: {
        type: Boolean
      }
    },
    methods: {
      onSubmit () {
        // anti-resubmission
        let submitSatus = this.$store.getters[`${this.formSign}/SUBMIT_STATUS`]()
        if (submitSatus) { return false } // console.log('this.formSign',this.formSign)
        if(this.btnAvailable) this.$store.commit(`${this.formSign}/SUBMIT_STATUS`, true)
        // anti-resubmission
        let errStatus = this.$store.getters[`${this.formSign}/FORMS_ERROR`](this.checked)
        if (errStatus) { this.$store.commit(`${this.formSign}/SUBMIT_STATUS`, false) }
        if (this.submitFun) {
          this.submitFun(errStatus, this.$store.getters[`${this.formSign}/FORMS_VALUE`]())
        }
        if (this.unSubmitFun) {
          this.unSubmitFun(errStatus, this.$store.getters[`${this.formSign}/FORMS_VALUE`]())
        }
        
      }
    }
  }
</script>

<style lang="stylus">
</style>
