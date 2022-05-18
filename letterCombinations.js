// https://leetcode.cn/problems/letter-combinations-of-a-phone-number/solution/shou-hua-tu-jie-liang-chong-jie-fa-dfshui-su-bfsya/ 电话号码的字母组合

const letterCombinations = (digits) => {
    if(digits.length == 0) return []
    let map = new Map()
    map.set("2", 'abc')
    map.set("3", 'def')
    map.set("4", 'ghi')
    map.set("5", 'jkl')
    map.set("6", 'mno')
    map.set("7", 'pqrs')
    map.set("8", 'tuv')
    map.set("9", 'wxyz')
    const res = []
    const dfs = (curStr, index) => {
        debugger;
        if(index > digits.length - 1) {
            res.push(curStr)
            return
        }
        let item = map.get(digits[index])
        for(const key of item) {
            dfs(curStr + key, index + 1)
        }
    }
    dfs('', 0)
    return res
}

const letterCombinations2 = (digits) => {
    if(digits.length == 0) return []
    let map = new Map()
    map.set("2", 'abc')
    map.set("3", 'def')
    map.set("4", 'ghi')
    map.set("5", 'jkl')
    map.set("6", 'mno')
    map.set("7", 'pqrs')
    map.set("8", 'tuv')
    map.set("9", 'wxyz')
    const queen = []
    queen.push('')
    for (let i = 0; i < digits.length; i++) {
        let len = queen.length
        for (let j = 0; j < len; j++) {
            let curStr = queen.shift()
            let item = map.get(digits[i])
            for(const key of item) {
                queen.push(curStr + key)
            }
        }
        
    }
    return queen
}