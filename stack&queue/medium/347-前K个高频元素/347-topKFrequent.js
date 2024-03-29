/**
 * TopK问题
 *  2022-6-12
 *  leet: https://leetcode.cn/problems/top-k-frequent-elements/
 *  [采用][kaer](https://programmercarl.com/0347.%E5%89%8DK%E4%B8%AA%E9%AB%98%E9%A2%91%E5%85%83%E7%B4%A0.html)
 *  [二叉堆:政采云](https://www.zoo.team/article/binary-heap-with-js)
 */
 (() => {
  Map.prototype.$addCount = function (key, val) {
      const originalVal = this.get(key) || 0;
      this.set(key, originalVal + +val);
  }

  const undefined = void 0; 
})()

/**
* 

优先级队列：小顶堆 + Map


首先统计元素出现的频率，这一类的问题可以使用map来进行统计。

然后是对频率进行排序，这里我们可以使用一种 容器适配器就是优先级队列。

截取优先级队列：size超过k时 pop出堆顶的小值 则保留的就是最大的k个的值

复杂度分析：
时间：O(nlogk), n = nums.length
    - 主流程中的循环遍历nums O(n)
    - heap中的操作：O(logK), 注意：二叉堆是一种完全二叉树，满二叉树的时间复杂度分析，总共有k个元素的二叉树，其便利操作一般是logK 
        - 其实 就是完全二叉树有多少层： 2 ^ 层数 — 1 = k个节点，在堆中每次操作就是跳一层，一共操作的次数其实就是层数
空间：O(n), n = nums.length,
    - map消耗的空间为：O(n)
    - 优先级队列消耗：O(k)

@param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var topKFrequent = function(nums, k) {
  // defend
  // init data
  const result = new Array(k).fill(0);
  const num2FreqMap = new Map();
  const minPriorityQueue = new PriorityQueue((a, b) => a[1] - b[1]);

  for (const num of nums) {
      num2FreqMap.$addCount(num, 1);
  }
  // algo
  // ⭕️关键数据结构：数字到频率的map映射
  const num2FreqEntries = num2FreqMap.entries();
  for (let entry of num2FreqEntries) {
      minPriorityQueue.push(entry); // entry: [num, freq]
      if (minPriorityQueue.size() > k) {
          minPriorityQueue.pop();
      }
  }

  for (let i = k - 1; i >= 0; i-- ) {
      // k个最高频 堆顶始终是当前频率最小的一个 所以result填充需要从后向前填充
      result[i] = minPriorityQueue.pop()[0]; // entry: [num, freq], 我们只需要num
  }

  // return
  return result;
};

class PriorityQueue {
  constructor (compareFn) {
      // defend 
      if (!compareFn && typeof compareFn !== 'function') {
          throw Error(`PriorityQueue need a function to be params of constructor`);
      }

      this.queue = [];
      this.compareFn = compareFn;
  }

  // 插入元素：从底部插入 不断上浮
  push (val) {
      // defend
      // init data: 当前下标 + parent下标
      this.queue.push(val);
      let curIndex = this.queue.length - 1;
      let parentIndex = this._getParentIndex(curIndex);
      // algo: 上浮
      while (parentIndex >= 0 && this._compare(parentIndex, curIndex) > 0) {
          // 交换
          this._swap(parentIndex, curIndex);
          // 步进
          curIndex = parentIndex;
          parentIndex = this._getParentIndex(curIndex);
      }
  }

  // 获取堆顶 并移除堆顶
  pop () {
      const res = this.queue[0];

      // 将堆底的元素移动到堆顶 然后从堆顶进行下沉
      this.queue[0] = this.queue.pop();

      // 构建初始index： 当前index(parentIndex) + 左右子节点的最大子节点的下标 maxIndex
      let curIndex = 0; 
      let selectedChildIndex = this._getSelectedChildIndex(curIndex); // 找出左右子节点的最小值（这里具体是小顶堆） 作为和父节点比较的子节点

      while (selectedChildIndex && this._compare(curIndex, selectedChildIndex) > 0) {
          // 交换
          this._swap(curIndex, selectedChildIndex);
          // 步进 更新curIndex 
          curIndex = selectedChildIndex;
          selectedChildIndex = this._getSelectedChildIndex(curIndex);
      }

      return res;
  }

  size () {
      return this.queue.length;
  }

  _compare (index1, index2) {
      //defend 注意这里的防御2个case！！！！！ 主要是为了 _getSelectedChildIndex， 在堆底的情况中 有时候 堆底有时候 不一定有右孩子
      // case1 index1所在值无效 则此时需要选择index2 故返回值要大于0
      if (this.queue[index1] === undefined) {
          return 1;
      }
      // case2 index2所在值无效 则此时需要选择index1 故返回值要小于0
      if (this.queue[index2] === undefined) {
          return -1;
      }

      return this.compareFn(this.queue[index1], this.queue[index2]);
  }

  _swap (index1, index2) {
      const temp = this.queue[index1];
      this.queue[index1] = this.queue[index2];
      this.queue[index2] = temp;
  }

  /**
   * 获取左右子节点中较大/小的那一个
   */
  _getSelectedChildIndex (parentIndex) {
      const leftIndex = parentIndex * 2 + 1, rightIndex = parentIndex * 2 + 2;
      return this._compare(leftIndex, rightIndex) > 0 ?
        rightIndex 
        : leftIndex; // 找出左右子节点的最小值（这里具体是小顶堆） 作为和父节点比较的子节点
  }

  _getParentIndex (index) {
    // 推导：leftChildIndex = parentIndex * 2 + 1, rightChildIndex = parentIndex * 2 + 2
    // Math.floor((index - 1) / 2) 和 Math.floor((index - 2) / 2) 值是一样的 所以 这里不用作区分
    return Math.floor((index - 1) / 2); // https://www.zoo.team/article/binary-heap-with-js
  }
}