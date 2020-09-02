import subStr from '../../code/string/lesson2'

test('subStr(0110101)', () => {
  expect(subStr('0110101')).toEqual([
    "01", "10", "01", "10", "01"
  ])
})