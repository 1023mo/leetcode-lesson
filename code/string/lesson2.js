export default str => {
  let r = []
  let match = s => {
    let j = s.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    // let reg = new RegExp(`^(${j}${o})`)
    let sum = j + o
    if (str.indexOf(sum)>-1) {
      return sum
    } else {
      return ''
    }
    // if (reg.test(s)) {
    //   return RegExp.$1
    // } else {
    //   return ''
    // }
  }
  for (let i = 0,len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) r.push(sub)
  }
  return r
}