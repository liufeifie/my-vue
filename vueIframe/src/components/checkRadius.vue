<template>  
  <section >
      <slot name="radius" @click="checked" :class="selectStatus ? checkClass.activeClass : checkClass.class"></slot> 
  </section>
</template>
<script>
 import myMixin from '@/util/form'

 let preProps = Object.assign(myMixin.props, {
   checkedType: {
     type: String,
     default: '0' // 0 : 单选  1： 复选 
   },
   selectId: {
     type: String,
     required: true
   },
   checkClass: {
     type: Object,
     default () {
       return {
         activeClass: 'checked-sm-ico',
         class: 'nochecked-sm-ico'
       }
     }
   },
   defaultcheckStatus: {
     type: Boolean,
     default: false // 选项默认选择状态
   },
   errMsg: {
     type: Object,
     default: () => {
       return {
         emptyMsg: ''
       }
     }
   }
 })
 export default {
   pmixins: [myMixin.mixin],
   props: preProps,
   data () {
     return {
       defaultId: 100, // 编号值
       selected: { // 每个选项的状态

       }
     }
   },
   created () {
     let value = {}
     value[this.selectId] = this.defaultcheckStatus
     this.handle(null, true, value)
   },
   computed: {
     selectStatus () {
       return this.$store.getters[`${this.formSign}/VALE`](this.sign)[this.selectId] || false
     }
   },
   methods: {
     checked (items, num) {
       let curvalues = {}
       curvalues[this.selectId] = this.selectStatus
       let values = this.$store.getters[`${this.formSign}/VALE`](this.sign)
       // 单选， 多选
       if (this.checkedType === 0) {
         for (let key in values) {
           if (key !== this.selectId) {
             curvalues[key] = false
           }
         }
         this.handle(null, this.selectStatus, curvalues)
       } else {
         let status = this.selectStatus
         if (!this.selectStatus) {
           for (let key in values) {
             if (key !== this.selectId && values[key]) {
               status = true
               break
             }
           }
         }
         this.handle(null, status, curvalues)
       }
     }
   },
   destoryed () {
   }
 }
</script>

<style lang="stylus">

</style>
