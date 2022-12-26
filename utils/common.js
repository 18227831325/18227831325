// deepClone
function deepClone (obj) {
    let map = new Map()
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    if (map.has(obj)) {
        return map.get(obj)
    }
    const res = Array.isArray(obj) ? [] : {}
    map.set(obj, res)
    for (const item in obj) {
        res[item] = deepClone(obj[item])
    }
    return res
}
// 新版deepClone, 可以让面试官眼前一亮的deepClone
// https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel
function deepClone2(obj) {  
    return new Promise((resolve) => {
        const { port1, port2 } = new MessageChannel()
        port1.postMessage(obj)
        port2.onmessage = (msg) => {
            resolve(msg.data)
        }
    })
}
// deepClone({a: 1})
const obj = { a: 1}
deepClone2(obj).then(res => {
    console.log(obj === res)
    console.log(res)
})