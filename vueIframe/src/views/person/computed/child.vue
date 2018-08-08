<template>
  <div class="border_solid_1 inline-block h3 lh3 pl1 pr1">
    <input v-bind:inputInfo="inputInfo"
           v-bind:type="inputInfo.type"
           v-bind:value="value"
           v-bind:placeholder="inputInfo.placeholder"
           v-bind:class="inputInfo.inputClass"
           v-on:input="updateValue($event.target.value)"
           @focus="onFocus"
           @blur="onBlur">
  </div>
</template>
<script>
  export default {
    props: {
      change: {
        type: Function,
        default: () => {}
      },
      inputInfo: {
        type: Object,
        default: () => {
          return {
            value: '',
            type: 'text',
            placeholder: '请输入信息',
            inputClass: ''
          }
        }
      }
    },
    data: () => {
      return {
        value: ''
      }
    },
    created () {
    },
    mounted () {

    },
    methods: {
      updateValue (val) {
        this.$store.commit('SET_SEARCH_EL', {
          type: 'value',
          content: val
        })
      },
      onFocus () {

      },
      onBlur () {

      }
    },
    components: {}
  }
</script>

<style type="text/css">

</style>