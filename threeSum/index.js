const arr = [-1,0,1,2,-1,-4]
//[ -4, -1, -2, 0, 1, 1 ] l=1, r=5; -4,-1,
// i            l           r
    // -4          -1          1
//排序+双指针
var threeSum = function(nums) {
    let ret = [];
    if(nums == null || nums.length < 3) return ret
    const len = nums.length
    nums.sort((a,b) => a-b)
    for(let i=0;i<len;i++) {
        if(nums[i] > 0) break
        if(i>0 && nums[i] === nums[i-1]) continue
        let l = i+1, r=len - 1
        while(l < r) {
            let sum = nums[i] + nums[l] + nums[r]
            if(sum === 0) {
                ret.push([nums[i], nums[l], nums[r]])
                while(l<r && nums[l] === nums[l+1]) l++
                while(l<r && nums[r] === nums[r-1]) r--
                l++
                r--
            }
            else if(sum < 0) {
                l++
            }
            else {
                r--
            }
        }
    }   
    return ret
};
let result = threeSum(arr);
console.log(result);

const twoSum = function(nums, target = 0) {
    const map = new Map()
    for(let i=0; i<nums.length;i++) {
        let n = nums[i]
        let n2 = target - n
        if(map.has(n2)) {
            return [map.has(n2), i]
        }
        map.set(n, i)
    }
}