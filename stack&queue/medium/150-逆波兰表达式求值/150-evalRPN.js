/**
 * leet：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 * Date：2022-2-15
 * kaer: https://programmercarl.com/0150.%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B1%82%E5%80%BC.html
 */

/**
 * 逆波兰表达式：计算机思维：适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  // defend
  // init data
  const stack = [];
  const oprateMap = new Map([
      ['+', (a, b) => +a + +b],
      ['-', (a, b) => +a - +b],
      ['*', (a, b) => +a * +b],
      ['/', (a, b) => +a / +b | 0], 
      // 除法这里的处理：使用位运算符时会抛弃小数位，我们可以利用这个特性来给数字取整，比如给任意数字 & 上二进制的 32 个 1，或者 | 上 0，显而易见后者简单些。（也可以直接使用Math.floor）
      // 原理：https://www.fly63.com/article/detial/345
      // 除法 也可以写成这样的： num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2)
  ]); // ！！注意这里的操作数需要转类型
  // algo
  for (let i = 0; i < tokens.length; i++) {
      const curChar = tokens[i];
      // 当前字符不是操作符 入栈
      if (!oprateMap.has(curChar)) {
          stack.push(curChar);
          continue;
      }
      // 当前字符为操作符 出栈2个元素 用对应的操作处理函数 计算后结果入栈
      const rightNum = stack.pop();
      const leftNum = stack.pop();
      const curResult = oprateMap.get(curChar)(leftNum, rightNum);
      stack.push(curResult);
  }
  // return 
  return stack.pop();
};