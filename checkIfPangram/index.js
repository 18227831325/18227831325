

/**
 * 全字母句 指包含英语字母表中每个字母至少一次的句子。

给你一个仅由小写英文字母组成的字符串 sentence ，请你判断 sentence 是否为 全字母句 。

如果是，返回 true ；否则，返回 false 。
示例 1：

输入：sentence = "thequickbrownfoxjumpsoverthelazydog"
输出：true
解释：sentence 包含英语字母表中每个字母至少一次。
示例 2：

输入：sentence = "leetcode"
输出：false

 * @param {*} sentence 
 * @returns 
 */
const checkIfPangram = (sentence) => {
  const exist = new Array(26).fill(0)
  for (let i = 0; i < sentence.length; i++) {
    const item = sentence[i]
    exist[item.charCodeAt() - 'a'.charCodeAt()] = true
  }
  for (const key of exist) {
    debugger;
    if (!key) {
      return false
    }
  }
  return true
}
const sentence = "thequickbrownfoxjumpsoverthelazydog"
const sentence2 = "leetcode"

// console.log(checkIfPangram(sentence2))

var generate = function(numRows) {
  const ret = [];
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
        row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
    }
    ret.push(row);
  }
  return ret;
};
console.log(generate(3))


