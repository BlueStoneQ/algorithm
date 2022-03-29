/**
 * leet: https://leetcode-cn.com/problems/daily-temperatures/
 * 2022-3-29
 * kaer: https://programmercarl.com/0739.%E6%AF%8F%E6%97%A5%E6%B8%A9%E5%BA%A6.html#%E6%80%9D%E8%B7%AF
 * me: https://leetcode-cn.com/problems/daily-temperatures/comments/1472436
 */

/**
 *

 方法1： 暴力解法 - 双层循环，统计每一个温度后面遇到的第一个高于当前温度的温度的下标差
 [√]方法2： 单调栈 - 时间：O(n)

 我怎么能想到用单调栈呢？ 什么时候用单调栈呢？

 通常是一维数组，要寻找任一个元素的右边或者左边第一个比自己大或者小的元素的位置，此时我们就要想到可以用单调栈了。

 单调栈是一个动态数组 边构造边使用 它本身的特性就已经拥有了单调性了 也就是说 始终保持有序
 辅助数据结构
 单调性 很容易找出临近的大值 或者 小值

 - 数组
 - 单调：有序
 
 @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
  // defend
  // init data
  const tempLen = temperatures.length;
  // 默认初始化为0 - 因为当后面没有比当前温度大的值的时候（也就是栈空），根据题意，该温度不会再升高 应该是0
  const answer = new Array(tempLen).fill(0);
  // 该数组存的是下标 是用一个单调递增栈 存的下标, 这个栈用数组实现： 左 -> 右， 等于 栈底 -> 栈顶， 高温 -> 低温
  const stack = [];
  stack.push(0);
  // algo
  for (let i = 1; i < tempLen; i++) {
      const curTemp = temperatures[i]; // 当前温度值
      const stackPeek = stack[stack.length - 1]; // 栈顶值 - 温度下标值
      const stackPeekTemp = temperatures[stackPeek]; // 栈顶值 对应的温度值
      // case1: 当前温度 小于 等于 栈顶温度 - 直接入栈
      if (curTemp <= stackPeekTemp) {
          stack.push(i); // 栈 存的是下标哦
          continue;
      }
      // case2: 当前温度 大于 栈顶温度 计算栈顶下标的右边最近的高温：就是将要入栈的元素
      // 栈顶温度出栈 然后当前温度入栈
      // 当然 对于单调栈的访问 必须用while 直到遇到一个比当前温度高的(或者栈为空) 当前温度下标就可以入栈了
      if (curTemp > stackPeekTemp) { // 这一句可以不要的 这里为了程序可读性强 便于理解 加上
          while (stack.length > 0 && curTemp > temperatures[stack[stack.length - 1]]) {
              const curPeek = stack[stack.length - 1]; // 当前栈顶的值 - 温度下标
              answer[curPeek] = i - curPeek; // 找到高于当前栈顶温度的右边最近的值的下标 i，距离就是 i - 当前栈顶下标，也就是当前栈顶下标的温度 经过 i - curPeek天就会比当前栈顶高 
              stack.pop();
          }
          // 可以入栈了 栈中比当前温度低的温度都pop 并记录了结果值
          stack.push(i);
      }
  }
  // return 
  return answer;
};