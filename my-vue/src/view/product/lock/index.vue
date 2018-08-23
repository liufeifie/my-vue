<template>
    <div>

    </div>
</template>
<script>
  import { lock } from '../../../assets/lock/lock'
  import '../../../assets/lock/lock.css'

  export default {
    data: () => {
      return {}
    },
    pageConfig () {
      return {
        title: '手势密码',
        bodyStyle: 'background-color: #fff;'
      }
    },
    created () {
      // 获取设备屏幕宽度
      var screenWidth = window.screen.width
      // 构造专属于你的手势密码
      var yourLock = new lock({
        size: screenWidth, // 手势区大小由设备screen宽度决定
        title: '小米5s手势密码', // 设置组件头部标题，可自定义
        panelSize: 3 // 设置手势区单边圆圈数，默认为3个，可自定义
      })
      yourLock.renderDom() // 创建DOM结构
      yourLock.init() // 初始化组件
      yourLock.bindEvent() // 绑定事件
    },
    mounted () {

    },
    methods: {},
    components: {}
  }
</script>

<style type="text/css">

</style>