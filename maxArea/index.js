const arr = [1,8,6,2,5,4,8,3,7]
function maxArea(arr) {
    let max = 0;
    for(let i = 0, j = arr.length - 1; i < j;) {
        const minHeight = arr[i] < arr[j] ? arr[i++] : arr[j--]

        const area = (j - i + 1) * minHeight
        max = Math.max(max, area)
    }
    return max
}
// console.log(maxArea(arr))
// export { maxArea }