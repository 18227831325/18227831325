
function chunk(arr,size=1){
  if(arr.length === 0){
    return []
  }
  let list=[],temp=[];
  arr.forEach( item => {
    if(temp.length === 0){
      list.push(temp)
    }
    temp.push(item)
    console.log(temp);
    if(temp.length === size){
      temp=[]
    }
  })
  return list;
}