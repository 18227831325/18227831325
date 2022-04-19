
function map(arr,callback){
  let list=[];
  for(let i=0;i<arr.length;i++){
    list.push(callback(arr[i],i))
  }
  return list;
}