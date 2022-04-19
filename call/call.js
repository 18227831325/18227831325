function call(Fn, obj, ...args){
  if(obj == null || obj == undefined){
    obj=globalThis
  }
  //为obj添加临时的方法
  obj.temp=Fn;
  let result=obj.temp(...args);
  delete obj.temp
  return result
}