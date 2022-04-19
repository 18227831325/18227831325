const arr = [-1,0,1,2,-1,-4]
//排序+双指针
var threeSum = function(nums) {
    let nums2 = nums.sort((a,b) => a-b)
    console.log(nums2);
    let l = 0, r = nums2.length - 1;
    for(let i=0;i<nums2.length;i++) {
        
    }   
};
threeSum(arr);

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