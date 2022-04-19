const s = '()}';

function fn(s) {
    if(s.length % 2 === 1) return false;
    const map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
        // {')': '('},
        // {']': '['},
        // {'}': '{'},
    ])
    let arr = [];
    for(const item of s) {
        // console.log([...map]);
        if(map.has(item)) {
            // console.log(map.has(item));
            if(!arr.length || arr[arr.length - 1] !== map.get(item)) {
                return false
            }
            arr.pop()
        }
        else {
            arr.push(item)
        }
    }
    return !arr.length;
}
console.log(fn(s));