
function filter(arr,callback){
  let result=[];
  for(let i=0;i<arr.length;i++){
    let res=callback(arr[i],i)
    //如果为true，则push
    if(res){
      result.push(arr[i])
    }
  }
  return result;
}