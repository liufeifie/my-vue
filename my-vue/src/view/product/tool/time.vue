<template>
    <div class="pl15 pr15">
        <ul class="f18 ">
            <li v-for="(item, key) in timeArr" :key="key" class="flex mt10">
                <p class="wp30 bgcolor04 pt10 pb10 tc" v-text="item.time"></p>
                <p class="wp70 pt10 pb10 "
                   v-text="item.timeStr.slice(0, 3).join('-') + ' ' + item.timeStr.slice(3).join(':')"></p>
            </li>
        </ul>
    </div>
</template>
<script>
  export default {
    data: () => {
      return {
        // timeArr: ['当天', '最近一周', '最近一月', '最近三月', '最近六月', '最近一年']
        timeArr: [
          {time: '当天', timeStr: '', type: 1, num: 0},
          {time: '最近一周', timeStr: '', type: 1, num: 7},
          {time: '最近三周', timeStr: '', type: 1, num: 21},
          {time: '最近一月', timeStr: '', type: 2, num: 1},
          {time: '最近两月', timeStr: '', type: 2, num: 2},
          {time: '最近三月', timeStr: '', type: 2, num: 3},
          {time: '最近四月', timeStr: '', type: 2, num: 4},
          {time: '最近五月', timeStr: '', type: 2, num: 5},
          {time: '最近六月', timeStr: '', type: 2, num: 6},
          {time: '最近七月', timeStr: '', type: 2, num: 7},
          {time: '最近九月', timeStr: '', type: 2, num: 9},
          {time: '最近一年', timeStr: '', type: 2, num: 12}
        ]
      }
    },
    pageConfig () {
      return {
        title: '时间处理',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
      this.timeArr.forEach((item, key) => {
        this.timeArr[key].timeStr = this.getTime(item.num, item.type)
      })
      console.log(this.timeArr)
    },
    mounted () {
    },
    methods: {
      getTime (num, type) {
        let date = new Date()
        let [Y, M, D, h, m, s] = [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()]
        if (type === 1) { // 天数
          let time_stamp = date.setDate(D - num)
          date = new Date(time_stamp)
          Y = date.getFullYear()
          M = date.getMonth()
          D = date.getDate()
        } else { // 月份
          let temp = new Date()
          temp.setMonth(M - num + 1)
          let maxDay = new Date(temp.setDate(0)).getDate()
          date = new Date(new Date().setMonth(M - num))
          Y = date.getFullYear()
          M = date.getMonth()
          if (D > maxDay) {
            M -= 1 // 月
            D = maxDay // 天
          }
        }
        let arr = [Y, M + 1, D, h, m, s]
        arr.forEach((item, key) => {
          arr[key] = item < 10 ? '0' + item : item
        })
        return arr
      }
    },
    components: {}
  }
</script>

<style type="text/css">

</style>