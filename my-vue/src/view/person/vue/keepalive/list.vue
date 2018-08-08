<template>
  <div class="pl15 pr15 pb20 pt10">
    <ul class="flex tc fbold pb5 f18 b_solid_b_1 bcolor10">
      <li class="wp25 ws" :class="currentIndex===index ? 'color02' : ''"
          v-for="(item, index) in indexVal" :key="index"
          @click="sortFun(index)" v-text="item.val">序列号</li>
    </ul>
    <ul class="flex tc f15 mt5 pb5 b_solid_b_1 bcolor10"
        v-for="(item, index) in dataList" :key="index"
        @click="detail(item)">
      <li class="wp20" v-text="item.id">01</li>
      <li class="wp30 ws" v-text="item.name">鲁旭</li>
      <li class="wp25" v-text="item.start">28</li>
      <li class="wp25" v-text="item.address">河南</li>
    </ul>
  </div>
</template>
<script>
  import dynasty from './dynasty'
  export default {
    data: () => {
      return {
        indexVal: [{val: '序列号', zhCn: 0, str: 'id'}, {val: '姓名', zhCn: 1, str: 'name'}, {val: '开始', zhCn: 0, str: 'start'}, {val: '朝代', zhCn: 1, str: 'address'}],
        dataList: [],
        currentIndex: 0
      }
    },
    pageConfig () {
      return {
        title: 'index',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
      this.dataList = dynasty || []
    },
    mounted () {
    },
    methods: {
      sortFun (index) {
        this.currentIndex = index
        // name start address
        let currentStr = this.indexVal[index].str
        this.dataList.sort(function (item1, item2) {
          if (currentStr === 'start') {
            return parseFloat(item1[currentStr]) - parseFloat(item2[currentStr])
          } else {
            return item1[currentStr].localeCompare(item2[currentStr], 'zh-CN')
          }
        })
      },
      detail (item) {
        this.goPush('/person/vue/keepalive/12')
      }
    },
    components: {}
  }
</script>

<style type="text/css">

</style>