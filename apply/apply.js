
function apply(fn,obj,arr){
  if(obj === null || obj === undefined){
    obj=globalThis;
  }
  obj.temp=fn
  let result=obj.temp(...arr)
  delete obj.temp
  return result
}