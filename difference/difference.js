
// function difference(arr,arr2){
//   let list=[];
//   arr2.forEach(item => {
//     let a=arr.includes(item)
//     console.log(a);
//     if(!a){
//       list.push(item)
//     }
//   })
//   return list;
// }

function difference(arr,arr2=[]){
  if(arr.length ===0){
    return []
  }
  if(arr2.length ===0){
    return arr.slice(0)
  }
  let result=arr.filter( item => !arr2.includes(item))
  return result;
}