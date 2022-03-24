/**
 * leet: https://leetcode-cn.com/problems/queue-reconstruction-by-height/
 * 2022-3-24
 * kaer: https://programmercarl.com/0406.%E6%A0%B9%E6%8D%AE%E8%BA%AB%E9%AB%98%E9%87%8D%E5%BB%BA%E9%98%9F%E5%88%97.html#%E6%80%BB%E7%BB%93
 */

/**
 * 
 理解题意：将原本乱序的数组 按照规则进行排序

 本题有两个维度，h和k，看到这种题目一定要想如何确定一个维度，然后在按照另一个维度重新排列。

 类似135 分发糖果：遇到两个维度权衡的时候，一定要先确定一个维度，再确定另一个维度。如果两个维度一起考虑一定会顾此失彼。

 也就是说：可以采用2次循环 一次循环确定一个维度

 1. 第一次遍历 按照身高 从 大 到 小排列 这样就确定了身高这个维度 每个元素前面都是>= 自己身高的元素
 2. 第二次遍历 则是将元素直接按照其k插入到index=k的位置 因为在index=k位置 则此时该元素前面恰好有k个元素，且第一次已经排过序了，则前面元素都是大于等于当前元素的

按照身高排序完的people： [[7,0], [7,1], [6,1], [5,0], [5,2]，[4,4]]

二次遍历插入的过程：
插入[7,0]：[[7,0]]
插入[7,1]：[[7,0],[7,1]]
插入[6,1]：[[7,0],[6,1],[7,1]]
插入[5,0]：[[5,0],[7,0],[6,1],[7,1]]
插入[5,2]：[[5,0],[7,0],[5,2],[6,1],[7,1]]
插入[4,4]：[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]

 复杂度：
 
 @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {
  // defend
  // init data
  const result = []; // 需要新建一个数组 用来插入结果（不宜对正在遍历中的数组进行splice这种原地修改的操作，逻辑难以控制-因为splice后 下标会唯一 不能保证遍历到每个元素 并且 每个元素只遍历一次）
  const peopleLen = people.length;
  // algo
  people.sort((a, b) => {
      if (b[0] !== a[0]) {
          // 优先按照身高 从 大 到 小 排序
          return b[0] - a[0];
      } else {
          // 相同身高的 按照前面人数多少 从 小 到 大 排序
          return a[1] - b[1];
      }
  }); // 一次遍历：

  // 二次遍历 插入
  for (let i = 0; i < peopleLen; i++) {
      const shouleInsertIndex = people[i][1]; // 应当插入的下标
      result.splice(shouleInsertIndex, 0, people[i]); 
  }

  // return
  return result;
};