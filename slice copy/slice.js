
function slice(arr,start,end){
  //若arr数组长度为0 
  if(arr.length==0){
    return [];
  }
  //判断start
  start=start || 0;
  if(start>=arr.length){
    return [];
  }
  //判断end
  end=end || arr.length;
  if(end<start){
    end=arr.length
  }
  let list=[];
  for(let i=0;i<arr.length;i++){
    if(i>=start && i<end){
      list.push(arr[i])
    }
  }
  return list;
}