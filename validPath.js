// 1971. 寻找图中是否存在路径
// 有一个具有 n 个顶点的 双向 图，其中每个顶点标记从 0 到 n - 1（包含 0 和 n - 1）。图中的边用一个二维整数数组 edges 表示，其中 edges[i] = [ui, vi] 表示顶点 ui 和顶点 vi 之间的双向边。 每个顶点对由 最多一条 边连接，并且没有顶点存在与自身相连的边。

// 请你确定是否存在从顶点 source 开始，到顶点 destination 结束的 有效路径 。

// 给你数组 edges 和整数 n、source 和 destination，如果从 source 到 destination 存在 有效路径 ，则返回 true，否则返回 false 。

// 输入：n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// 输出：true
// 解释：存在由顶点 0 到顶点 2 的路径:
// - 0 → 1 → 2 
// - 0 → 2



// 输入：n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// 输出：false
// 解释：不存在由顶点 0 到顶点 5 的路径.

// 广度优先搜索
// 思路：使用广度优先搜索判断顶点source到destination的连通性，需要我们从顶点source开始按照层次依次遍历每一层的顶点，
//      检测是否可以到达顶点destination。遍历过程我们使用队列存储最近访问过的节点,同时记录每个顶点的访问状态，每次con队列中去除定点vertex时，
//      将其未访问过得临接顶点入队列
const validPath = (n, edges, source, destination) => {
  const arr = new Array(n).fill(0).map(() => new Array())
  for (const [x, y] of edges) {
    arr[x].push(y)
    arr[y].push(x)
  }
  const visited = new Array(n).fill(false)
  const queue = [source]
  visited[source] = true
  while (queue.length) {
    const vertex = queue.shift()
    for (const item of arr[vertex]) {
      if (!visited[item]) {
        queue.push(item)
        visited[item] = true
      }
    }
  }
  return visited[destination]
}
const n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
const res = validPath(n, edges, source, destination)
console.log(res)