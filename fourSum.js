// https://leetcode.cn/problems/4sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    // nums: [2,2,2,2,2] target: 8
    let res = []
    if (nums.length < 4) return []
    const arr = nums.sort((a, b) => a - b)
    const len = nums.length
    for (let i = 0; i < len - 3; i++) {
        //相同的值去重
        if (i > 0 && arr[i] === arr[i - 1]) continue
        for (let a = i + 1; a < len - 2; a++) {
            if(a > i + 1 && arr[a] === arr[a - 1]) continue
            let left = a + 1, right = len - 1

            while(left < right) {
                const sum = arr[i] + arr[a] + arr[left] + arr[right]
                if(sum > target) {
                    right--
                    continue
                }

                if(sum < target) {
                    left++
                    continue
                }

                res.push([arr[i], arr[a], arr[left], arr[right]])
                //继续滑动指针寻找符合条件的值
                left++
                right--
                //如果左右指针滑动后的值和之前的值相等则继续滑动
                while(arr[left] === arr[left - 1]) {
                    left++
                }
                while(arr[right] === arr[right + 1]) {
                    right--
                }
            }
        }
    }
    return res
};