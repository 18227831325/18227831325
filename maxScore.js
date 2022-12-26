const maxScore = function (nums) {
  const gcd = (x, y) => {
    if (x % y === 0) {
      return y
    }
    return gcd(y, (x % y))
  }
  const sortArr = nums => nums.sort((a, b) => b - a)
  sortArr(nums)
  let count = nums.length / 2
  let res = 0

  const recursion = (nums) => {
    // const map = new Map()

    const arr = [],   // 存储所有的最大公约数
          arr2 = [];  // 存储所有的最大公约数，和两项的值
    // 全部循环一遍找到最大公约数后，把这两个数组删除掉，再继续找最大公约数，so 我们需要拿到 最大公约数 和当前两位数
    for ( let i = 0; i < nums.length - 1; i++) {
      // 先用笨方法，当前项和后面的每项都去找最大公约数，找完之后能找到所有的最大公约数；
      // 用了两个公约数后就不能再用这两个了, 找出两个值的最大公约数后，这两个值就要在nums中删除
      for (let j = i + 1; j < nums.length; j++) {
        const num = gcd(nums[i], nums[j]) // max 是公约数，x和y是穿进去的值
        const obj = {
          x: nums[i],
          y: nums[j],
          commonDivisorNum: num
        }
        arr.push(num)
        arr2.push(obj)
      }
    }
    // 找到最大值
    // const max = Math.max(...arr)
    // 在第 i 次操作时（操作编号从 1 开始），你需要：
    // 选择两个元素 x 和 y 。
    // 获得分数 i * gcd(x, y) 。
    // 将 x 和 y 从 nums 中删除。
    // 请你返回 n 次操作后你能获得的分数和最大为多少。
    // 如果 count == 1 直接用最大公约数去返回，如果 >= 2 需要从最大公约数去乘最大操作数，才能得到最大值
    while (count > 0) {
      const maxNum = Math.max(...arr)
        res += count * maxNum
        // 需要删除数组重新找
        if (arr2 && arr2.length <= 1) {
          count--
          break
        } else {
          const find = arr2.find(item => item.commonDivisorNum === maxNum)
          if (find) {
            const arr5 = nums.filter(item => item !== find.x).filter(item => item !== find.y)
            if (arr5 && arr5.length) {
              recursion(arr5, count--)
            } else {
              count--
            }
          } else {
            count--
          }
        }
    }
  }
  if (count > 0) {
    recursion(nums)
  }
  console.log(res)
  return res
};
let arr = [9,17,16,15,18,13,18,20]
const res = maxScore(arr)
console.log(res)