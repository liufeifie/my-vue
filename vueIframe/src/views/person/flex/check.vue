<template>
  <div>
    <ul :style="flexbox" class="mt1 h6 border_solid_1 bcolor03">
      <li class="wp20 h4 lh4 tc" v-for="(item, key) in flexItem"
          :style="{'background-color': item}" v-if="key < flexItemIndex">{{key}}</li>
    </ul>
    <ul :style="flexbox" class="mt1 h6 border_solid_1 bcolor03">
      <li class="wp20 h4 lh4 tc" v-for="(item, key) in flexItem"
          :style="{'background-color': item}">{{key}}</li>
    </ul>
    <div class="mt1 bgcolor01 pl1_5 pr1_5 pt1 pb1 f1_2">容器弹性布局样式： {{flexbox}}</div>
    <transition name="filter-slide-fade">
      <div v-if="filterShow" class="filterWrap" @click="filterShow = false">
        <div class="filterCont">
          <div class="filterHeader pt1 pl1_5 pr1_5">
            <div v-for="(props, key) in flexProp" class="mb2">
              <h3 class="fbold f1_5" v-text="key">flex-direction</h3>
              <ul class="flex flex-item-center tc mt1 f1_3 minH3 lh3" style="flex-wrap: wrap;">
                <li class="wp25 hp100 mt_5" v-for="(prop, index) in props">
                  <p class="mr_5 ws hp100 border_solid_1 bcolor05 b_ra_3"
                     :class="{'bgcolor03 color01': prop.active}"
                     @click.stop="selectProp(key, index)"
                     v-text="prop.prop">row</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="filterFooter">
            <ul class=" flex flex-item-center hp100 wp100">
              <li class="wp50" @click.stop="resetFun">重置</li>
              <li class="wp50 bgcolor03 color01" @click.stop="submitFun">确定</li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        filterShow: false,
        flexbox: {display: 'flex'},
        flexProp: { // flex 属性
          'flex-direction': [
            {prop: 'row', active: false}, {prop: 'row-reverse', active: false},
            {prop: 'column', active: false}, {prop: 'column-reverse', active: false}
          ],
          'flex-wrap': [
            {prop: 'nowrap ', active: false}, {prop: 'wrap', active: false},
            {prop: 'wrap-reverse', active: false}
          ],
          'justify-content': [
            {prop: 'flex-start ', active: false}, {prop: 'flex-end', active: false},
            {prop: 'center', active: false}, {prop: 'space-between', active: false},
            {prop: 'space-around', active: false}
          ],
          'align-items': [
            {prop: 'flex-start ', active: false}, {prop: 'flex-end', active: false},
            {prop: 'center', active: false}, {prop: 'baseline', active: false},
            {prop: 'stretch', active: false}
          ],
          'align-content': [
            {prop: 'flex-start ', active: false}, {prop: 'flex-end', active: false},
            {prop: 'center', active: false}, {prop: 'space-between', active: false},
            {prop: 'space-around', active: false}, {prop: 'stretch', active: false}
          ]
        },
        flexItem: ['#fe0000', '#fea500', '#ffff00', '#008001', '#3fe0d0', '#400097', '#9400d4'],
        flexItemIndex: 3
      }
    },
    pageConfig () {
      return {
        title: 'flex测试',
        bodyStyle: 'background-color:  #f3f3f3;'
      }
    },
    created () {
    },
    mounted () {
      let _this = this
      this.$store.commit('HEADER_RIGHT', {
        html: '<span>筛选</span>',
        even: function () {
          _this.filterShow = true
        }
      })
    },
    methods: {
      /*  重置 */
      resetFun: function () {
        console.log('重置')
      },
      selectProp: function (p, c) {
        for (let i = 0; i < this.flexProp[p].length; i++) {
          if (i === c) {
            if (this.flexProp[p][c].active) {
              this.flexProp[p][c].active = false
              delete this.flexbox[p] // 删除属性
            } else {
              this.flexProp[p][c].active = true
              this.flexbox[p] = this.flexProp[p][c].prop
            }
          } else {
            this.flexProp[p][i].active = false
          }
        }
      },
      /* 确定 */
      submitFun: function () {
        this.filterShow = false
      }
    },
    components: {}

  }
</script>

<style type="text/css">
  .filterWrap {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 99;
  }

  .filterCont {
    position: absolute;
    width: 100%;
    height: 70%;
    bottom: 0;
    left: 0;
    background-color: #fff;
    padding-bottom: 5rem;
  }
  .filterHeader{
    height: 100%;
    overflow-y: scroll;
  }
  .filterFooter {
    position: absolute;
    height: 5rem;
    line-height: 5rem;
    width: 100%;
    bottom: 0;
    left: 0;
    border-top: 1px solid #cacaca;
    text-align: center;
    font-size: 1.4rem;
  }
</style>