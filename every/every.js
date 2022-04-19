
function every(arr,callback){
  for (let i = 0; i < arr.length; i++) {
    let res=callback(arr[i])
    // console.log(res);
    if(!res){
      return false
    }
  }
  return true
}

function some(arr,callback){
  for (let i = 0; i < arr.length; i++) {
    let res=callback(arr[i])
    if(res){
      return true
    }
  }
  return false
}