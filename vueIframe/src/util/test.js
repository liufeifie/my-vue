// export default class {
//   // constructor () {}
//   post () {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('this____________',this)
//         resolve({code: 'success'})
//       }, 5000)
//     })
//   }
// }
export default {
  post () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('this____________',this)
        resolve({code: 'success'})
      }, 5000)
    })
  }
}