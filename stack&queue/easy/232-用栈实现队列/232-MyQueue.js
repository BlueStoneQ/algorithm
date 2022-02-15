/**
 * leet: https://leetcode-cn.com/problems/implement-queue-using-stacks/
 * Date: 2022-2-15
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484567&idx=1&sn=e70930648967a0e4cbf0f594bc9f059d&scene=21#wechat_redirect
 * kaer: https://programmercarl.com/0232.%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */


/**
 * 用2个互逆的栈实现队列
 */
 var MyQueue = function() {
  this.sTackIn = [];
  this.sTackOut = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.sTackIn.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  // [关键]先调用peek保证stackOut非空
  this.peek();

  return this.sTackOut.pop();
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  // [关键]如果stackOut为空 需要把stackIn全部逆序放入到stackIn中
  if (this.sTackOut.length === 0) {
      while (this.sTackIn.length > 0) {
          this.sTackOut.push(this.sTackIn.pop());
      }
  }
  // 读取stackOut的栈顶
  return this.sTackOut[this.sTackOut.length - 1];
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  // 2个栈为空 则整个队列就空了 因为该队列是2个栈元素之和
  return this.sTackOut.length === 0 && this.sTackIn.length === 0;
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/