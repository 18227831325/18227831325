
// i, n - i; i 
const cuttingRope = (n) => {
  let arr = new Array(n + 1).fill(0), bigger
  arr[2] = 1
  for (let i = 2; i <= n; i++) {
     for (let j = 1; j < i; j++) {
       bigger = Math.max(j * (i - j), j * arr[i - j])
       arr[i] = Math.max(arr[i], bigger)
     }
  }
  return arr[n]
}
const res = cuttingRope(10)
console.log(res)