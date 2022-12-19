
var findNumberIn2DArray = function(matrix, target) {
  // 双重for循环，判断target是否存在
  let isExist = false
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        const item = matrix[i][j]
          if (item === target) {
              isExist = true
          }
      }
  }
  return isExist
};
const arr = [[-1,3]]
const num = 3
const res = findNumberIn2DArray(arr, num)
console.log(res)

let s = "We are happy."
// 输出："We%20are%20happy."

console.log(s.split(' ').join('%20'))