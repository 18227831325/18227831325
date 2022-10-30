// # https://leetcode.cn/problems/generate-parentheses/

// 括号生成
// 思路：
// 1. 先把括号放入数组中，然后按照顺序拼接
// 2. 先把括号放入数组中，然后按照顺序拼接
// 3. 先把括号放入数组中，然后按照顺序拼接
// 4. 先把括号放入数组中，然后按照顺序拼接
// 5. 先把括号放入数组中，然后按照顺序拼接
const generateParenthesis = function(n) {
    // body
    let res = []
    backtrack(res, '', 0, 0, n)
    return res
}

const backtrack = function(res, str, open, close, max) {
    // body
    if(str.length === max * 2) {
        res.push(str)
        return
    }

    if(open < max) {
        backtrack(res, str + '(', open + 1, close, max)
    }

    if(close < open) {
        backtrack(res, str + ')', open, close + 1, max)
    }
}
