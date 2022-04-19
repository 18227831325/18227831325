
function debounce(callback,time){
  let timeId=null;

  return function(e){
    if(timeId !== null){
      clearTimeout(timeId);
    }
    timeId=setTimeout(() => {
      //执行回调
      callback.call(this,e)
      timeId=null;
    }, time);
  }
}