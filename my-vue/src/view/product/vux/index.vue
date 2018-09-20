<template>
    <div>
        <group>
            <cell :title="item.title" :value="item.value" v-for="(item, key) in dataList" :key="key"></cell>
            <cell title="使用 is-link 显示右边箭头" is-link></cell>
            <router-link to="/product/vux/pull" tag="div">
                <cell title="修改右边箭头">
                    <x-icon slot="value" class="vm" type="ios-arrow-forward" size="30"></x-icon>
                </cell>
            </router-link>
        </group>
         <group :title="'Default format: YYYY-MM-DD'">
          <datetime
            v-model="value1"
            @on-change="change"
            :title="'Birthday'"
            :clear-text="'clear-text'"
            @on-cancel="cancel"
            @on-confirm="confirm"
            @on-hide="hide">
          </datetime>
    </group>
    </div>
</template>
<script>
  import { Group, Cell, Datetime } from 'vux'
  export default {
    data: () => {
      return {
        dataList: [
          {title: '图标', value: 'icon'}
        ],
        value1: ''
      }
    },
    pageConfig () {
      return {
        title: 'vux',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
    },
    mounted () {

    },
    methods: {  
       change (value) {
        console.log('change', value)
      },
       confirm (value) {
        console.log('confirm', value)
        console.log('current value', this.value1)
      },
      cancel (value) {
        console.log('cancel', value)
      },
      hide (value) {
        console.log('hide', value)
      }
    },
    components: {
      Group,
      Cell,
      Datetime
    }
  }
</script>

<style type="text/css">

</style>