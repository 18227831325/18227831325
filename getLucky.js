// 1945. 字符串转化后的各位数字之和
// 给你一个由小写字母组成的字符串 s ，以及一个整数 k 。

// 首先，用字母在字母表中的位置替换该字母，将 s 转化 为一个整数（也就是，'a' 用 1 替换，'b' 用 2 替换，... 'z' 用 26 替换）。接着，将整数 转换 为其 各位数字之和 。共重复 转换 操作 k 次 。

// 例如，如果 s = "zbax" 且 k = 2 ，那么执行下述步骤后得到的结果是整数 8 ：

// 转化："zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
// 转换 #1：262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
// 转换 #2：17 ➝ 1 + 7 ➝ 8
// 返回执行上述操作后得到的结果整数。

let s = 'iiii'
const fn = (s, k) => {
// 显示转化为数字
  const handleCharCodeAt = (s) => {
    let newS = ''
    for (const key of s) {
      newS += parseInt(key.charCodeAt()) - 96
    }
    return newS.toString()
  }
  let num = handleCharCodeAt(s)
// 2位及2位以上的数字做加法处理直至变成1位
  const handleStrToOneDigit = (str, k) => {
    let newArr = 0
    if (str.length === 1) return str
    // 转换多少次,长度大于1，并且转换多少次
    if (k) {
      k--
      for (const key of str) {
        newArr += parseInt(key)
      }
      return handleStrToOneDigit(newArr.toString(), k)
    }
    return str
  }
  const res = handleStrToOneDigit(num, k)
  return +res
}
const res = fn(s, 1)
console.log(res)