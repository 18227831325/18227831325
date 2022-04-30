function mySqrt(x) {
    if (x === 0) {
        return 0 
    }
    if (x === 1) {
        return 1
    }
    let ret = -1, left = 0, right = x;
    while(left <= right) {
        let mid = left + ((right - left) >> 1) // >> 防止溢出 移位运算， 
        if(mid * mid <= x) {
            ret = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return ret
}
console.log(mySqrt(8));