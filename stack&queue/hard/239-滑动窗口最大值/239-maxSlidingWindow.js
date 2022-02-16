/**
 * leet: https://leetcode-cn.com/problems/sliding-window-maximum/
 * Date: 2022-2-16
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247488087&idx=1&sn=673aa4e8deb942b951948650928c336e&scene=21#wechat_redirect
 * kaer: https://programmercarl.com/0239.%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC.html
 */

/**
 * 单调队列
 * 此时我们需要一个队列，这个队列呢，放进去窗口里的元素，然后随着窗口的移动，队列也一进一出，每次移动之后，队列告诉我们里面的最大值是什么。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
  // defend
  // init data
  const res = [];
  const windowQueue = new MonotonicQueue();
  // algo
  for (let i = 0; i < nums.length; i++) {
      // 先压入最开始的k-1个值 塞满window 然后对第k个值进行处理
      if (i < k - 1) {
          windowQueue.push(nums[i]);
      } else {
          // 右边数字滑入窗口
          windowQueue.push(nums[i]);
          // 当前窗口的最大值入结果
          res.push(windowQueue.max());
          // 左边数字滑出窗口
          windowQueue.shift(nums[i - k + 1]);
      }
  }
  // return
  return res;
};


// 设计单调队列: 这里是单调递减队列，则最大值在队头，最小值在队尾,底层需要一个双向队列实现
class MonotonicQueue {
  constructor() {
      this.queue = [];
  }

  push(n) {
      while (this.queue.length > 0 && n > this.queue[this.queue.length - 1]) {
          this.queue.pop();
      }
      // 排除队尾小于n的元素 将n压入队尾
      this.queue.push(n);
  }

  shift(n) {
      // n代表将要滑出窗口的数字 如果n正好等于队头（窗口内最大值） 则滑出队头，否则 可能队头已经被之前压入的更大的数字压扁（弹出）了 就不用删除了
      if (n === this.queue[0]) {
          this.queue.shift();
      }
  }

  max() {
      return this.queue[0];
  }
}