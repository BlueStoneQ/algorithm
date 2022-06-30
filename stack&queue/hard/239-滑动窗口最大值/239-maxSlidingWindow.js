/**
 * leet: https://leetcode-cn.com/problems/sliding-window-maximum/
 * Date: 2022-2-16
 * dong[优先]: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247488087&idx=1&sn=673aa4e8deb942b951948650928c336e&scene=21#wechat_redirect
 * kaer: https://programmercarl.com/0239.%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC.html
 */

/**
 * 单调队列
 * 
 * 时间复杂度：O(n)
 *  - 时间复杂度分析见末尾：
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
  // algo kaer的那个写法也可以 保证始终是一个k的窗口在移动
  // 写法2： 窗口滑动模拟
  let start = 0, end = 0; // 窗口的起终点下标
  // 先填充好第一个长度为k的窗口
  while (end < k) {
    windowQueue.push(nums[end]);
    end++;
  }
  // 取下第一个窗口的值
  res.push(windowQueue.max());
  // 遍历剩下的nums
  while (end < nums.length) {
    windowQueue.push(nums[end]); // 一定要先push 因为可能会"压扁/挤出”第一个元素
    windowQueue.shift(nums[start]);
    res.push(windowQueue.max());

    start++;
    end++;
  }
// 写法1： 窗口滑动模拟
//   for (let i = 0; i < nums.length; i++) {
//       // 先压入最开始的k-1个值 塞满window 然后对第k个值进行处理
//       if (i < k - 1) {
//           //先把窗口的前 k - 1 填满
//           windowQueue.push(nums[i]);
//       } else {
//           // 右边数字滑入窗口, 此时窗口的长度由k-1变成k,则可以采集当前窗口的最大值了
//           windowQueue.push(nums[i]);
//           // 当前窗口的最大值入结果
//           res.push(windowQueue.max());
//           // 左边数字滑出窗口
//           windowQueue.shift(nums[i - k + 1]);
//       }
//   }
  // return
  return res;
};


// 设计单调队列: 这里是单调递减队列，则最大值在队头，最小值在队尾,底层需要一个双向队列实现
// 单调队列 概念：push 方法依然在队尾添加元素，但是要把前面比自己小的元素都删掉，直到遇到更大的元素才停止删除。
  // 单调队列在push的时候 有个特点就是：好像大的数从后面进去后，更小的数一路被压扁，直到遇到一个比当前push进去的数更大的数，才会刹车
// 现在需要一种新的队列结构，既能够维护队列元素「先进先出」的时间顺序，又能够正确维护队列中所有元素的最值，这就是「单调队列」结构。
// 优先级队列概念 可以看看这篇：dong[优先]: https://labuladong.github.io/algo/2/21/61/
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

/**
 * 关于单调队列 API 的时间复杂度，读者可能有疑惑：push 操作中含有 while 循环，时间复杂度应该不是 O(1) 呀，那么本算法的时间复杂度应该不是线性时间吧？

这里就用到了 算法时空复杂度分析使用手册 中讲到的摊还分析：

单独看 push 操作的复杂度确实不是 O(1)，但是算法整体的复杂度依然是 O(N) 线性时间。要这样想，nums 中的每个元素最多被 push 和 pop 一次，没有任何多余操作，所以整体的复杂度还是 O(N)。空间复杂度就很简单了，就是窗口的大小 O(k)。
 */