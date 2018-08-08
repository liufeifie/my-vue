<template>
  <div>
    <slot name="precontent"></slot>
    <div class="text-center nodata-model">
      <span class="nodata-ico"></span>
      <p class="mt1_2 f14 color22"><slot name="text">暂无数据</slot></p>
    </div>
    <slot name="content"></slot>
  </div>
</template>
<script>
  /*
  * 2017.11.14
  * wyf
  * 暂无数据
  */
</script>
<style lang="stylus">
.nodata-model{
   position:absolute;
   top:50%;
   width:100%;
   left:0
   -webkit-transform:translateY(-50%);
   -moz-transform:translateY(-50%);
   -ms-transform:translateY(-50%);
   transform:translateY(-50%);
}

</style>
