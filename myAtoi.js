// https://leetcode.cn/problems/string-to-integer-atoi/solution/js-by-luckyanne-3yhf/

const myAtoi = function (s) {
    // body
    s = s.trim()
    let flag = 0
    const e = ['0','1','2','3','4','5','6','7','8','9']
    const c = ['-','+']
    if(c.indexOf(s[0]) !== -1) {
        if(e.indexOf(s[1]) == -1) {
            return 0
        }
        if(s[0] === '-') {
            flag = 1
        }
        s = s.slice(1)
    }

    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if(e.indexOf(s[i]) == -1) {
            s = s.slice(0, i)
            break
        }
    }

    while(s[0] === '0') {
        s = s.slice(1)
    }

    s -= 0
    if(flag) s = -s
    if(s < -Math.pow(2, 31)) return -Math.pow(2, 31)
    if(s > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
    return s
}