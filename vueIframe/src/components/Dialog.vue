<template>
    <div v-bind:class="dialogClass" class="boxflex updialog">
            <div class="updialogout noticePopup cd-popup-containerr "><span v-show="closeShow" v-on:click="closeEven" class="icon noticePopupClose" ></span>
                <div class="updialogbox" v-bind:class="dialogboxClass" >  
                    <div class="noticePopupTitle f17">
                      <slot name="title">提示</slot>
                    </div>
                    <div class="noticePopupContent f13">
                        <slot name="content">内容</slot>
                    </div>
                </div>
                <div v-show="btnShow" v-bind:class="dialogBtnClass" class="noticePopupbtnBox f17 color04">
                    <div v-show="leftbtnShow" class="noticePopupbtn leftbtn" v-on:click="leftEven">
                        <slot name="leftBtnText">取消</slot>
                    </div>
                    <div v-show="rightbtnShow" class="noticePopupbtn rightbtn" v-on:click="rightEven" :class="rightBtnClass">
                        <slot name="rightBtnText">确定</slot>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
  /**
   * 2017.10.27
   * lj
   * create
   */
  export default {
    props: {
      rightBtnClass: {
        type: String,
        default: ' '
      },
      dialogClass: {
        type: String,
        default: ''
      },
      dialogboxClass: {
        type: String,
        default: ''
      },
      dialogBtnClass: {
        type: String,
        default: ''
      },
      leftbtnShow: {
        type: Boolean,
        default: true
      },
      closeShow: {
        type: Boolean,
        default: true
      },
      rightbtnShow: {
        type: Boolean,
        default: true
      },
      btnShow: {
        type: Boolean,
        default: true
      },
      closeEven: {
        type: Function,
        default () {}
      },
      rightEven: {
        type: Function,
        default () {}
      },
      leftEven: {
        type: Function,
        default () {}
      }
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus">

</style>
