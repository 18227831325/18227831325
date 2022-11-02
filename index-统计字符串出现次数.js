// 最常见的写法
function fn() {
  // 统计字符串出现的次数
  const str = 'abcabcab'
  let result = {}
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]]++ 
    } else {
      result[str[i]] = 1
    }
  }
  return result
}
// console.log(fn())

// 不一样的写法

function fn2() { 
  const str = 'abcabcabcd'
  // const res = str.split('').reduce(function (total, item) {
  //   if (total[item]) {
  //     total[item]++
  //   } else {
  //     total[item] = 1
  //   }
  //   return total
  // }, {})

  // (xx, xxx, xxxx) // 括号会把前面的全部执行了，然后再返回最后一个的结果
  const res = str.split('').reduce((total, item) => (total[item]++ || (total[item] = 1), total)
  , {})
  return res
}
console.log(fn2())