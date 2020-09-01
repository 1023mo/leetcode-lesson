export default str => {
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

// // 正则
// export default str => {
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

//match
// export default str => {
//   return str.match(/[\w']+/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }