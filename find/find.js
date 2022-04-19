
function find(arr,callback){
  // let value=null;
  for (let i = 0; i < arr.length; i++) {
    let res=  callback(arr[i])
    // console.log(res);
    if(res){
      return arr[i]
    }
  }
  return undefined
}

function findIndex(arr,callback){
  // let value=null;
  for (let i = 0; i < arr.length; i++) {
    let res=  callback(arr[i])
    // console.log(res);
    if(res){
      return i
    }
  }
  return undefined
}