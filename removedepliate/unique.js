let arr=[1,2,3,3,4,4]
let arr2 = [{id:1,name:'tom'},{id:2,name:'tom1'},{id:1,name:'tom2'}]
let arr3 = [1,3,7,6,5,6];
function unique(arr){
  let result =[];
  arr.forEach( item => {
    if(result.indexOf(item) === -1){
      result.push(item)
    }
  })
  return result;
}

function unique2(arr){
  let result =[];
  let obj={};
  arr.forEach( item => {
    if(!obj[item]){
      obj[item]=true;
      result.push(item)
    }
  })
  return result;
}

function unique3(arr){
  let set=new Set(arr)
  return [...set];
}

function unique4(arr) {
    return res = arr.filter((item, index, array) => {
      return array.indexOf(item) === index;
    })
}

function unique5(arr) {
  let map = new Map();
  for(const item of arr) {
    if(!map.has(item.id)){
      map.set(item.id, item)
    }
  }
 return [...map.values()];
}

function unique6(arr) {
  if(!arr) return false;
  if(arr.length === 0) return 0
  let i = 0, arr2 = [];
  for (let j = 1; j < arr.length; j++) {
    arr2[0] = arr[0]
    if(arr2[i] != arr[j]) {
      i++;
      arr2[i] = arr[j]
    }
  }
  return arr2;
  // return i + 1;
}
// console.log(unique6(arr));

//寻找数组的中心下标，左侧相加等于右侧
 function findIndex(arr3) {
// let arr3 = [1,3,7,6,5,6];
  // 1 27
  // 4 24
  // 11 17
  //17 11

  //算出数组总和sum，定义一个total左侧叠加,返回下标
  let sum = arr3.reduce((total, current, arr) => {return total += current}, 0);
  let total = 0;
  for (let i = 0; i < arr3.length; i++) {
    const element = arr3[i];
    total += element;
    if(total === sum) {
      return i
    }
    sum = sum - element;
  }
  total > 0 ? total : -1
  return total;
}
// console.log(findIndex(arr3));
let arr4 = [7,6,5,6,1,3];

function twoSum(nums, target){
  if(!nums) return []
  const map = new Map()
  for(let i=0;i<nums.length;i++){
      let n = nums[i]
      let n2 = target - n
      if(map.has(n2)){
          debugger;
          return [map.get(n2), i]
      }
      //key设置成value， value设置成下标，方便返回
      map.set(n, i)
  }
}

console.log(twoSum(arr4, 4));