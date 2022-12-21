// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

//  

// 例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。
// 示例 1：

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
// 示例 2：

// 输入：board = [["a","b"],["c","d"]], word = "abcd"
// 输出：false


const boar = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
const st = 'ABCCED'
const exist = (board, word) => {
  const h = board.length, w = board[0].length
  // 为了防止重复遍历相同的位置，创建一个与board等大的数组，标识每个位置是否被访问过
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  let visited = new Array(h).fill(false)
  for (let i = 0; i < h; i++) {
    visited[i] = new Array(w).fill(false)
  }
  const check = (i, j, word, index) => {
    // 如果current !== word[j] return false
    if (board[i][j] !== word.charAt(index)) {
      return false
    } else if (index === word.length - 1) { //如果当前已经访问到字符串的末尾，且对应字符串依然匹配（这个判断能证明对应字符串匹配？？？？），直接返回true
      return true
    }
    // 其他情况 遍历当前位置的相邻位置。如果从某个相邻位置出发能够找到 word.charAt(index) 相等则返回true,反之返回false
    visited[i][j] = true
    let result = false
    for (const [dx, dy] of directions) {
      let newH = i + dx, newW = j + dy
      if (newH >= 0 && newH < h && newW >= 0 && newW < w) {
        if (!visited[newH][newW]) {
          const flag = check(newH, newW, word, index + 1)
          if (flag) {
            result = true
            break
          }
        }
      }
    }
    visited[i][j] = false
    return result
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const flag = check(i, j, word, 0)
      if (flag) {
        return true
      }
    }
  }
  return false
}
const res = exist(boar, st)
console.log(res)
