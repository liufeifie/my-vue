<template>
    <div>
      <div class=" pr" style="height:4.4rem">
        <div class="wb100" style="position:absolute; top:0;left:0">
          <transition name="zoom">
            <ButtonItem :loadingShow = "loadingShow"  v-show="!btnAvailable" :btnClass="btnNoAvailableClass" :form-sign="formSign" :btnAble = 'btnAvailable' :unSubmitFun="unSubmitFun"   >
              <slot name="available">确认</slot>
            </ButtonItem>
          </transition>
        </div>
        <div class="wb100" style="position:absolute; top:0;left:0">
            <transition name="zoom">
              <ButtonItem
              :loadingShow = "loadingShow"
              :error-notice="errorNotice"
              :checked="checked"
              :submitType="submitType"
              v-show="btnAvailable"
              :submitFun="submitFun"
              :btnClass="btnAvailableClass"
              :form-sign="formSign"
              :btnAble = 'btnAvailable'
              >
              <slot name="notavailable">确认</slot>
              </ButtonItem>
            </transition>
        </div>
      </div>
    </div>
</template>
<script>
  /**:submitFun="submitFun"
   * 2017.10.25
   * lj
   * create
   */
  import ButtonItem from './ButtonItem'
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
      btnAvailable: {
        type: Boolean,
        default: false
      },
      btnAvailableClass: {
        type: String,
        default: 'btn-Available btn-lg'
      },
      btnNoAvailableClass: {
        type: String,
        default: 'btn-noAvailable btn-lg'
      },
      submitFun: Function,
      unSubmitFun: Function,
      errorNotice: {
        type: Boolean,
        default: true
      },
      value: String
    },
    components: {
      ButtonItem
    }
  }
</script>

<style lang="stylus">
  

</style>
