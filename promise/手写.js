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

const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 延时一秒')
    }, 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 延时两秒')
    }, 2000);
})
const p4 = Promise.reject('p4 rejected')
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p5 reject1.5秒')
    }, 1500);
})

customPromiseAll([p1,  p2, p3]).then(res => {
    // console.log(res);
}).catch(err => {
    // console.log(err);
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

Promise.promiseAll = promises => {
    return new Promise((resolve, reject) => {
        let ret = [], count = 0;
        for(let i=0;i<promises.length;i++) {
            Promise.resolve(promises[i]).then(res => {
                ret[i] = res;
                count += 1;
                if(count === promises.length) {
                    resolve(arr)
                }
            }).catch(reject)
        }
    })
}

Promise.promiseRace = promises => {
    return new Promise((resolve, reject) => {
        for(const item of promises) {
            Promise.resolve(item).then(resolve, reject)
        }
    })
}


// Promise.promiseAll([p1,p2,p3,p4,p5])
// .then(res => console.log(res))
// .catch(err => console.log(err))

Promise.promiseRace([p5,p2,p3])
.then(res => console.log(res))
.catch(err => console.log(err))
