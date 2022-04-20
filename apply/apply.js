
function apply(fn,obj,arr){
  if(obj === null || obj === undefined){
    obj=globalThis;
  }
  obj.temp=fn
  let result=obj.temp(...arr)
  delete obj.temp
  return result
}

//for和break的区别 break是完全结束一个循环，continue是终止本次循环

let str ='hello'
for(const item of str) {
  if(item === 'l') {
    break;
  }
  // console.log(item);
}

for(const item of str) {
  if(item === 'l') {
    continue;
  }
  console.log(item);
}