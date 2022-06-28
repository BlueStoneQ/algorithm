/**
 * leet: https://leetcode-cn.com/problems/implement-stack-using-queues/
 * Date: 2022-2-15
 * 卡尔：https://programmercarl.com/0225.%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88.html
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484567&idx=1&sn=e70930648967a0e4cbf0f594bc9f059d&scene=21#wechat_redirect
 */

 var MyStack = function() {
  this.queue = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.queue.push(x);
};

/**
* 核心思路：在写操作（pop）:把队列前面的都取出来再加入队尾，让之前的队尾元素排到队头，这样就可以取出了
* @return {number}
*/
MyStack.prototype.pop = function() {
  // 将队尾元素排到队头 然后弹出队头
  this._adjust();
  return this.queue.shift();
};

/**
* @return {number}
*/
MyStack.prototype.top = function() {
  // 先走一遍pop 拿到最小值 再恢复
  const res = this.pop();

  this.queue.push(res);

  return res; // 或者直接：this.queue[this.queue.length - 1];
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.queue.length === 0;
};

// 把队列前面的都取出来再加入队尾，让之前的队尾元素排到队头，这样就可以取出了
MyStack.prototype._adjust = function () {
  // 这样就遍历到了最后一个元素，将最后一个元素放到了队头
  for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
  }
}

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/