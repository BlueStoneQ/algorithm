/**
 * leet: https://leetcode-cn.com/problems/next-greater-element-ii/
 * 2022-3-29
 * kaer: https://programmercarl.com/0503.%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%A4%A7%E5%85%83%E7%B4%A0II.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */


/**
 寻找next Greater num  我们使用 单调栈 方法

 单调栈 + 双倍数组 模拟环形遍历

 1. 单调栈选择
    - 寻找下一个更大的元素 我们需要一个单调递增的stack
    - 单调栈 一般建议存储下标 这里也是存储下标
 2. 分析当前遍历元素curNum 和 栈顶元素peekNum的关系：
    - curNum < peekNum
    - curNum === peekNum
    - curNum > peekNum

 * @param {number[]} nums
 * @return {number[]}
 */
    var nextGreaterElements = function(nums) {
      // init data
      const numsLen = nums.length;
      const result = new Array(numsLen).fill(-1); // 默认值填充-1 没有找就默认next Greater Num
  
      // defend   
      if(numsLen === 0) return result;
  
      const stack = [];
      // stack.push(0); // 先填入一个栈顶
  
      // algo 注意 循环数组的处理：可以使用拼接起来 就可以了，这里没有真实的拼接 不过是模拟拼接（将nums遍历2遍，注意下标要和环的长度取余）
      for (let i = 0; i < numsLen * 2; i++) {
          const curNum = nums[i % numsLen]; // 注意 所有的i必须和环的长度取余 才能映射到真正的数组下标上
          const stackPeek = stack.length - 1;
          const stackPeekNum = nums[stackPeek];
          // case 1 + 2：当前元素 小于 等于 栈顶元素 - 环形这里不要这样做 会让stack也变成双倍的
          // if (curNum <= stackPeekNum) {
          //     stack.push(i % numsLen); // 当前元素小于栈顶元素 根据单调递增栈定义 则当前元素入栈
          //     continue;
          // }
          // case 3: 当前元素 大于 栈顶元素
          // 从栈顶 遍历当前栈 - 直到栈空 或者 当前元素找到比自己更大的栈顶值
          while (stack.length > 0 && curNum > nums[stack[stack.length - 1]]) {
              const curPeek = stack[stack.length - 1];
              // 记录结果： 找到了当前栈顶下标指向的值的更大值
              result[curPeek] = curNum;
              // 栈顶出栈 - 更新栈顶
              stack.pop();
          }
          // 结束while循环 找到了 比当前元素大的栈顶 当前元素下标作为新的栈顶 入栈
          stack.push(i % numsLen);
      }
  
      // return
      return result;
  };