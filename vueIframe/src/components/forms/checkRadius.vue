<template>  
  <section >
      <span @click="setStatus()" :id="selectId" class="icon" :class="preSelectStatus ? checkClass.activeClass : checkClass.class">
        <slot></slot>
      </span>
  </section>
</template>
<script>
 import myMixin from '@/util/form'

 let preProps = Object.assign({},myMixin.props, {
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
   mixins: [myMixin.mixin],
   props: preProps,
   data () {
     return {
       defaultId: 100, // 编号值
       preSelectStatus: false,
       selected: { // 每个选项的状态

       }
     }
   },
   created () {
     let value = {}
    // console.log('this.defaultcheckStatus',this.defaultcheckStatus)
     value[this.selectId] = this.preSelectStatus = this.defaultcheckStatus
     let values = this.$store.getters[`${this.formSign}/VALE`](this.sign)
     let status = value[this.selectId]
     if (values) {
       for (let key in values) {
         if (values[key]) {
           status = true
           break
         }
       }
     }
     this.handle(null, status, value)
   },
   computed: {
     selectStatus () {
       return this.$store.state[this.formSign]
     }
   },
   watch: {
     defaultcheckStatus (cal, old) { // 只建议在 created 以及之前用
       this.preSelectStatus = cal
       this.check(cal)
     },
     selectStatus: {
       handler (curVal, oldVal) {
         if (curVal.value[this.sign].value && typeof curVal.value[this.sign].value[this.selectId] !== 'undefined') {
           this.preSelectStatus = curVal.value[this.sign].value[this.selectId]
         } else {
           this.preSelectStatus = this.defaultcheckStatus
         }
       },
       deep: true
     }
   },
   methods: {
     setStatus (status) { // 只建议在 created 之后用
       let curvalues = {}
       curvalues[this.selectId] = typeof status !=="undefined"? status : !this.$store.getters[`${this.formSign}/VALE`](this.sign)[this.selectId]
      //  console.log('curvalues[this.selectId]', curvalues[this.selectId])
       let values = this.$store.getters[`${this.formSign}/VALE`](this.sign)
       // 单选， 多选
       if (this.checkedType === '0') {
         for (let key in values) {
           if (key !== this.selectId) {
             curvalues[key] = false
           }
         }
         this.handle(null, curvalues[this.selectId], curvalues)
       } else {
         let status = curvalues[this.selectId]
         if (!status) {
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
