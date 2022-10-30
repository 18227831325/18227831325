// cloneDeep
function cloneDeep (obj = {}) {
    let newObj = null
    if (typeof obj === 'object' && obj !== null) {
        for (let key in obj) {
            newObj[key] = cloneDeep(obj[key])
        }
    } else {
        newObj = obj
    }
    return newObj
}