/**
 * leet: https://leetcode-cn.com/problems/candy/
 * 2022-3-24
 * kaer: https://programmercarl.com/0135.%E5%88%86%E5%8F%91%E7%B3%96%E6%9E%9C.html#%E6%80%9D%E8%B7%AF
 */

/**
 *

 贪心：两次贪心：两次遍历

 1. 先正向遍历 确定每个评分比左边孩子高的 得到的糖果高于左边孩子

 2. 然后逆向遍历 确定每个评分比右边孩子高的 得到的糖果是 max(右边孩子糖果 + 1，自身原本的值（该值是前面经历过统一大于左边评分低孩子的糖果）)，取这2个最大值 能保证该孩子 如果高于左右孩子的评分 分得的糖果也高于左右孩子 并且，所有都是按照+1的最小增长量，也就保证这个局部，该孩子比左右评分低孩子得到的最多苹果 大 1
 
 经过以上2次循环 每次循环都取局部的最优解（第一次循环（局部：当前孩子 + 左孩子） 保证每个相对高分孩子的糖果大于左孩子（+1），第二次循环（局部：当前孩子 + 右孩子（同时确保了左孩子）） 取了当前值和右边孩子+1的最大值 作为糖果数）
 
 @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
  const childCount = ratings.length;
  // 下标对应每个孩子 每个孩子应该分得的糖果 初始值为1
  const candy = new Array(childCount).fill(1);
  // 第一次遍历 正向确定每个相对高分孩子得到的糖果大于左边孩子
  for (let i = 1; i < childCount; i++) {
      if (ratings[i] > ratings[i - 1]) {
          candy[i] = candy[i - 1] + 1;
      }
  }
  // 第二次遍历 反向遍历（因为要用i+1 => i的值） 确定每个相对高分孩子 得到的糖果大于右孩子（如果分高于左孩子 也不会小于左孩子）
  // 这里初始值 取len - 2 因为它要访问到右孩子 len - 1，同时也是最末尾的孩子
  for (let i = childCount - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1]) {
          candy[i] = Math.max(candy[i], candy[i + 1] + 1);
      }
  }

  // return 
  return candy.reduce((preVal, curVal) => preVal + curVal, 0);
};