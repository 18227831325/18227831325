// 如何将class 转换为function
class Example {
  constructor(name) {
    this.name = name
  }
  func(param) {
    console.log(this.name)
  }
}
const e = new Example('gzy')
new e.func()

'use strict'

// 1.class中没有this指向问题，fn中存在this指向问题，所以需要判断this指向
// 2.class中的fn不可被枚举
// 3.通过object.defineProperty定义的函数也存在this指向问题
// return
function Example2(name) {
  // 验证this的指向
  if (!(this instanceof Example2)) {
    throw new TypeError('Class constructor Example2 cannot be invoked without "new"')
  }
  this.name = name
}
Object.defineProperty(Example2.prototype, 'func', {
  value: function () {
    if (!(this instanceof Example2)) {
      throw new TypeError('e.func is not a constructor')
    }
    console.log(this.name);
  },
  enumerable: false
})

// new Example2('gzy')
// Example2('gzy')
new Example2('gzy').func()
