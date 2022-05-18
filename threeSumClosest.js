// https://leetcode.cn/problems/3sum-closest/solution/gu-ding-yi-ge-shu-zai-shuang-zhi-zhen-shun-bian-fu/
const threeSumClosest = function (nums, target) {
    // body
    let arr = nums.sort((a, b) => a - b)
    let len = arr.length
    let res = arr[0] + arr[1] + arr[len - 1]
    for (let i = 0; i < len - 2; i++) { // len - 2:双指针占据了两个位置，可以少遍历两次
        let n1 = arr[i]
        let l = i + 1, r = len - 1
        while(l < r) {
            let n2 = arr[l], n3 = arr[r]
            let sum = n1 + n2 + n3
            if(sum >= target) {
                r--
            } else {
                l++
            }
            if(Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum
            }
        }
    }
    return res
}