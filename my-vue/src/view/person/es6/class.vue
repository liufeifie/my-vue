<template>
 <div>

 </div>
</template>

<script>
export default {
 data: () => {
 return {

  }
 },
 pageConfig () {
 return {
   title: 'class',
   bodyStyle: '',
   bodyClass: ''
  }
 },
 created () {

 },
 mounted () {
   // es5
  /*  function Point (x, y) {
     this.x = x
     this.y = y
   }

   Point.prototype.toString = function () {
     return '(' + this.x + ',' + this.y + ')'
   } */

   // es6
   class Point {
     constructor (x, y) {
      this.x = x
      this.y = y
     }

     toString () {
       return '(' + this.x + ',' + this.y + ')'
     }
   }
  
   var p = new Point('登科', '鲁旭')
   console.log('point: ', p.toString(), typeof Point)
   console.log(Point.prototype.constructor === Point)

   // 继承
   // super 当作函数使用 代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
   // 作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
   // 当作对象使用 在普通方法中，指向父类的原型对象；在静态方法中，指向父类。


  },
 methods: {

 },
 components: {

 }
}
</script>

<style> 

</style>
