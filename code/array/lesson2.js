export default (arr) => {
  //卡牌排序
  let str = arr.sort((a, b) => a - b).join('')
  //分组(单张或多张)
  let group = str.match(/(\d)\1+|\d/g)
  let gcd = (a,b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  while (group.length > 1) {
    let a = group.shift().length
    let b = group.shift().length
    let v = gcd(a,b)
    if (v === 1) {
      return false
    } else {
      group.unshift('0'.repeat(v))
    }
  }
  return group.length ? group[0].length > 1 : false
}