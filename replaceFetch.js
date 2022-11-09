// 可以重复请求的方法，当前五次请求失败了，可以重复发起请求
function replaceFetch(url = 'https://asdadsad.com', maxCount = 5) {
  // 只需要处理请求失败的情况，然后重新发起请求，重新请求的次数不超过maxCount
  return fetch(url).catch(err => {
    maxCount <= 0
      ? Promise.reject(err) : replaceFetch(url, maxCount - 1)
  })
}