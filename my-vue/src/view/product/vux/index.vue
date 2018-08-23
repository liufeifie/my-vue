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
    </div>
</template>
<script>
  import { Group, Cell } from 'vux'
  export default {
    data: () => {
      return {
        dataList: [
          {title: '图标', value: 'icon'}
        ]
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
    methods: {},
    components: {
      Group,
      Cell
    }
  }
</script>

<style type="text/css">

</style>