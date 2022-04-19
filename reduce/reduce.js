/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @param {*} initialValue 
 * @returns 
 */
function reduce(arr,callback,initialValue){
  let result=initialValue;
  for(let i=0;i<arr.length;i++){
    result=callback(result,arr[i])
  }
  return result;
}