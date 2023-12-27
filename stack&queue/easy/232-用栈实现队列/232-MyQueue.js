/**
 * leet: https://leetcode-cn.com/problems/implement-queue-using-stacks/
 * Date: 2022-2-15
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484567&idx=1&sn=e70930648967a0e4cbf0f594bc9f059d&scene=21#wechat_redirect
 * kaer: https://programmercarl.com/0232.%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */
const inStack2OutStack = Symbol('inStack2OutStack');

/**
 * 用2个互逆的栈实现队列
 */
 var MyQueue = function() {
  this.inStack = [];
  this.outStack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.inStack.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  // [关键]如果outStack为空 需要把inStack全部逆序放入到inStack中
  this[inStack2OutStack]();

  return this.outStack.pop();
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  // [关键]如果outStack为空 需要把inStack全部逆序放入到inStack中
  this[inStack2OutStack]();
  // 读取outStack的栈顶
  return this.outStack[this.outStack.length - 1];
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  // 2个栈为空 则整个队列就空了 因为该队列是2个栈元素之和
  return this.outStack.length === 0 && this.inStack.length === 0;
};

// 将instack注入到outStack
MyQueue.prototype[inStack2OutStack] = function() {
  // 在outStack为空的时候，将inStack 导入到 outStack
  if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
          this.outStack.push(this.inStack.pop());
      }
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/