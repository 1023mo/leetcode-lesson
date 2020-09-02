export default str => {
  if (!str) return []
  //建立电话号码键盘映射
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  //把输入的字符串按单字符切割成数组，234 ==> [2，3，4]
  let num = str.split('')
  //保存键盘映射后的字母内容，如23 ==> ['abc', 'def']
  let code = []
  num.forEach(item => {
    map[item] ? code.push(map[item]) : ''
  })
  let comb = arr => {
    let tmp = []
    for(let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    }
    return arr[0]
  }
  return comb(code)
}