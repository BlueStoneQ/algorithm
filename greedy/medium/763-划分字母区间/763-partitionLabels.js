/**
 * leet: https://leetcode-cn.com/problems/partition-labels/
 * 2022-3-25
 * kaer: https://programmercarl.com/0763.%E5%88%92%E5%88%86%E5%AD%97%E6%AF%8D%E5%8C%BA%E9%97%B4.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 
   greedy-区间调度问题

    1. 统计每一个字符最后出现的位置
    2. 从头遍历字符，并更新字符的最远出现下标，如果找到字符最远出现位置下标和当前下标相等了，则找到了分割点
        - 可画图：可以画图 这个边界 因为是截止到目前最大的边界 所以 之前的元素 都属于这个区间内了 
    
 * @param {string} s
 * @return {number[]}
 */
        var partitionLabels = function(s) {
          // defend
          // init data
          let result = [];
          let left = 0, right = 0; // 动态标记 每一个字符串片段的左右边界下标
          const sLen = s.length;
          // 因为S是只包括 ['a'-'z'] 所以 可以用字符的ascll码作为下标 一个len=27的数组就可以包含
          const charHash = new Array(27);
      
          for (let i= 0; i < sLen; i++) {
              // 该字符相对于‘a’的ascll码差值
              charHash[s[i].charCodeAt() - 'a'.charCodeAt()] = i; // 不断更新每个字符最远所在的下标
          }
      
          // algo
          for (let i= 0; i < sLen; i++) {
              // right始终标记遍历到当前最大的边界
              right = Math.max(right, charHash[s[i].charCodeAt() - 'a'.charCodeAt()]);
              if (i === right) {
                  // 找到一个分割点 push 一个截取的字符串长度给结果
                  result.push(right - left + 1);
                  left = i + 1; // i之前的已经切割了 接下来 去切割下一段 更新下left right则无更新的必要（因为目前right === i, 而后面下标肯定大于i）
              }
          }
      
          // return 
          return result;
      };