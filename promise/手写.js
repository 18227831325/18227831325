//

class Commitment{
    static PENDING = '待定';
    static FULFILLED = '成功';
    static REJECTED = '拒绝';
    constructor(fun){
        this.status = Commitment.PENDING
        this.result = null
        this.resolveCallbacks = [];
        this.rejectCallbacks = []
        try {
            fun(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(result) {
        setTimeout(() => {
            if(this.status === Commitment.PENDING){
                this.status = Commitment.FULFILLED
                this.result = result
                // this.rejectCallbacks.forEach(callback => callback(result))
            }
        })
    }
    reject(result) {
        setTimeout(() => {
            if(this.status === Commitment.PENDING){
                this.status = Commitment.REJECTED
                this.result = result
                // this.rejectCallbacks.forEach(callback => callback(result))
            }
        })
    }
    then(onFULFILLED, onREJECTED) {
        onFULFILLED = typeof onFULFILLED ==='function' ? onFULFILLED : () => {};
        onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : onREJECTED
        if(this.status === Commitment.PENDING){
            this.resolveCallbacks.push(onFULFILLED)
            this.rejectCallbacks.push(onREJECTED)
        }
        if(this.stats === Commitment.FULFILLED){
            setTimeout(() => {
                onFULFILLED(this.result)
            })
        }
        if(this.stats === Commitment.REJECTED){
            setTimeout(() => {
                onREJECTED(this.result)
            })
        }
    }
}
// console.log('第一步');


Promise.all = function(arr) {
    let results = [], count=0;
    return new Promise(function(resolve, rejected) {
        for(let item of arr){
            Promise.resolve(item).then(resolve => {
                count++
                results[item] = resolve
                if(count === results.length){
                    resolve(results)
                }
            },function(err){
                rejected(err)
            })
        }
    });
}
//手写Promise.all
const isPromise = (obj) => {
    return ((typeof obj === 'object' && typeof obj != null ) || typeof obj === 'function')  && typeof obj.then === 'function'
}
const customPromiseAll = (arr) => {
    let result =[];
    return new Promise((resolve, rejected) => {
        for(let i=0;i<arr.length;i++){
            if(isPromise(arr[i])){
                arr[i].then(data => {
                    result[i] = data
                    if(result.length === arr.length){
                        resolve(result)
                    }
                }).catch(err => {
                    rejected(err)
                })
            }else{
                result[i] = arr[i]
                return result
            }
        }
    })
}
const p1 = Promise.resolve(3)
const p2 = 1337
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo')
})
customPromiseAll([p1,  p2, p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

let commitment = new Commitment((resolve, reject) => {
    // console.log('第二步');
    // console.log(commitment.status);
    resolve('resolve')
    // reject('reject')
    // throw new Error('白嫖')
})
commitment.then(
    result =>  {console.log(commitment.status);console.log(result)},
    // result =>  {console.log(result.message)}
)
// console.log(commitment.status);

// console.log('第三步');
