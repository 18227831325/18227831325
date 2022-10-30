// 红绿灯
// 绿灯 5s => 黄灯 => 2s => 红灯3s

async function light () {
  await timer('green', 5000)
  await timer('yellow', 2000)
  await timer('red', 3000)
  light()
}
light()

async function timer (color, delay) {
  return new Promise((res, rej) => {
    console.log(color)
    setTimeout(() => {
      res()
    }, delay);
  })
}
