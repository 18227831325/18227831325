
function flatten(arr){
  let list=[];
  arr.forEach(item => {
    // console.log(item);
    if(Array.isArray(item)){
      list = list.concat(flatten(item))
    }else{
      list = list.concat(item)
    }
  })
  return list;
}

function flatten2(arr){
  let list=[...arr];
  while(list.some(item => {
    return Array.isArray(item)
  })){
    list=[].concat(...list)
  }
  
  return list;
}