
// # setTimeout 和 promise 谁先执行的问题

const promise1 = new Promise((res, rej) => {
  console.log('promise1')
  setTimeout(() => {  // 宏任务 放入事件池中
    res('success promise1')
  });
})

const promise2 = promise1.then(() => { // .then微任务 放入事件池中
  console.log('success promise2')
  return 666 // 作为 promise1 的resolve返回结果
})

const promise3 = promise2.then((res) => {
  console.log('success promise3', res)
  return Promise.resolve(818)
})

promise3.then((res) => {
  console.log('success promise4', res)
})

setTimeout(() => {
  console.log('timer duration=10')
}, 10);

setTimeout(() => {
  console.log('timer duration=0')
}, 0);

console.log('just test')

// 顺序分析：
// new Promise内部代码直接执行
'promise1'
'just test'
'success promise2'
'success promise3', '666'
'success promise4', '818'
'timer duration=0'
'timer duration=10'