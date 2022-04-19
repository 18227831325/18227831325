
function throttle(callback,wait){
  let start=0
  return function(e){
    // console.log('iloveyou');
    let now=Date.now();
    if(now - start>=wait){
      callback.call(this,e)
      start=now
    }
  }
}