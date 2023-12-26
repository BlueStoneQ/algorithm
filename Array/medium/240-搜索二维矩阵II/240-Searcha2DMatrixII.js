/**
 * leet: https://leetcode.cn/problems/search-a-2d-matrix-ii/description/
 * Date: 2023-12-26
 */

/**
 * 从右上角开始出发：如果向左移动，元素在减小，如果向下移动，元素在增大，
 * 这样的话我们就可以根据当前位置的元素和 target 的相对大小来判断应该往哪移动，不断接近从而找到 target 的位置
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const n = matrix[0].length, m = matrix.length
  let i = 0, j = n - 1

  while (j >= 0 && i < m) {
      if (matrix[i][j] === target) return true

      if (matrix[i][j] > target) {
          // 当前元素大于target 需要向左移动
          j--
      } else {
          // 当前元素小于target 需要向下移动
          i++
      }
  }

  return false
};