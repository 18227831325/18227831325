// console.log('第一步');
const promise = new Promise((resolve, reject) => {
    // console.log('第二步');
    // resolve('resolve')
    // reject('reject')
    // throw new Error('白嫖')
})
promise.then(
    // result =>  {console.log(result)},
    result =>  {console.log(result.message)}
)
// console.log('第三步');
