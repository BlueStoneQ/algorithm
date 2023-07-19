/**
 * 2022-6-28
 * leet: https://leetcode.cn/problems/kth-largest-element-in-an-array/
 * 大名鼎鼎的TopK的问题哈哈
 * 维持一个size为k的minHeap 来解决这个问题，很好的题目
 * 核心操作:
 * - push：-> 队尾 -> floatUp(while(getParent -> compare -> swap))
   - pop：-> return 队头 -> 队尾元素拉到队头位置 -> floatDown(while(getChildren -> compare -> swap))
 */

/**
 * 维持一个优先级队列[小顶堆]
 * [二叉堆:政采云](https://www.zoo.team/article/binary-heap-with-js)
 */
 class PriorityQueue {
  constructor () {
      this.queue = [];
  }

  peak () {
      return this.queue[0];
  }

  // 插入元素：从底部插入 不断上浮
  push (val) {
      this.queue.push(val);
      this._floatUp();
  }

  // 移除堆顶
  pop () {
      const result = this.queue[0];
      // 调整相对顺序
      this._floatDown();
      // 下沉 - 直到新堆顶找到合适的位置
      return result;
  }

  size () {
      return this.queue.length;
  }

  _floatUp () {
      let curIndex = this.size() - 1;
      let parentIndex = this._getParentIndex(curIndex);
      // 调整相对顺序 - 直到父小于当前元素
      while (parentIndex >= 0 && this._compare(parentIndex, curIndex) > 0) {
          // 交换
          this._swap(parentIndex, curIndex);
          // index步进
          curIndex = parentIndex;
          parentIndex = this._getParentIndex(curIndex);
      }
  }

  // 下沉 - 直到新堆顶找到合适的位置 
  _floatDown () {
      // 将堆底的元素移动到堆顶 然后从堆顶进行下沉
      this.queue[0] = this.queue.pop();
      let parentIndex = 0;
      let childIndex = this._getSelectedChildIndex(parentIndex);
      // 调整相对顺序 - 直到父小于当前元素
      while (childIndex < this.size() && this._compare(parentIndex, childIndex) > 0) {
          this._swap(parentIndex, childIndex);
          parentIndex = childIndex;
          childIndex = this._getSelectedChildIndex(parentIndex);
      }
  }

  _getParentIndex (index) {
      // ⭕️推导：leftChildIndex = parentIndex * 2 + 1, rightChildIndex = parentIndex * 2 + 2
      // Math.floor((index - 1) / 2) 和 Math.floor((index - 2) / 2) 值是一样的 所以 这里不用作区分
      return Math.floor((index - 1) / 2);
  }

  // 找出左右子节点的最小值（这里具体是小顶堆）的index 作为和父节点比较的子节点
  _getSelectedChildIndex (parentIndex) {
      const leftIndex = parentIndex * 2 + 1;
      const rightIndex = parentIndex * 2 + 2;

      return this._compare(leftIndex, rightIndex) > 0 ? rightIndex : leftIndex;
  }

  // 这里的默认比较方式 是最小堆的方式, 返回
  _compare (leftIndex, rightIndex) {
      // 主要是为了 _getSelectedChildIndex， 在堆底的情况中 有时候 堆底有时候 不一定有右孩子
      if (this.queue[rightIndex] === undefined) return -1;
      return this.queue[leftIndex] - this.queue[rightIndex];
  }

  _swap (index1, index2) {
      const temp = this.queue[index1];
      this.queue[index1] = this.queue[index2];
      this.queue[index2] = temp;
  }
}


/**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
var findKthLargest = function(nums, k) {
  // defend
  if (nums.length < k) return;
  // init data: 需要一个小顶堆 小顶堆每次pop都会去掉当前heap中最小的元素，留下的就是最大的一组，而堆顶就是当前最大的元素中最小的一个
  const minHeap = new PriorityQueue((a, b) => a - b); // 小顶堆：小 -> 大
  for (const num of nums) {
    minHeap.push(num);
    if (minHeap.size() > k) {
        minHeap.pop();
    }
  }
  // return 
  return minHeap.peak();
};