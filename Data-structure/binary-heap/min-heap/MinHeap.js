/**
 * 小顶堆
 * 2022-2-2
 * 《学习js数据结构与算法》3版
 */
const { defaultCompare, COMPARE_RESULT } = require('../../utils/compareFn');
const { swapArr } = require('../../utils/swap');

const siftDown = Symbol('siftDown');
const siftUp = Symbol('siftUp');
const getParentIndex = Symbol('getParent');
const getLeftChildIndex = Symbol('getLeftChild');
const getRightChildIndex = Symbol('getRightChild');

class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.heap = []; // 二叉堆底层使用数组存储数据
    this.compareFn = compareFn;
  }

  /**
   * 向堆中插入一个新的值。如果插入成功，它返回 true，否 则返回 false
   */
  insert(val) {
    // 防御
    if(val === null) return false;
    // 插入核心数据结构 插入到堆的底部叶子节点（就是数组heap的末尾）
    this.heap.push(val);
    // 上浮 调整堆结构
    this[siftUp](this.heap.length - 1);

    return true;
  }

  /**
   * 返回最小值(最小堆)或最大值(最大堆)且不会移除这个值
   */
  findMin() {
    if (this.isEmpty()) return;
    return this.heap[0];
  }

  /**
   * 移除最小值(最小堆)或最大值(最大堆)，并返回这个值
   */
  extract() {
    // 防御
    if (this.isEmpty()) return;
    if (this.size() === 1) return this.heap.shift();
    // 取出（记录）堆顶值
    const res = this.heap[0];
    // 交换末尾元素和第一个元素
    swapArr(this.heap, 0, this.heap.length - 1);
    // 删除交换后的末尾元素 - 交换前的堆顶元素
    this.heap.pop();
    // 下沉(新的堆顶下沉到正确位置)
    this[siftDown](0);
    return res;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  /**
   * 私有方法
   */

  /**
   * 获取父节点的索引
   */
  [getParentIndex](curIndex) {
    if (curIndex === 0) return;
    // 索引必须是整数 而除法容易产生小数 所以必须有取整的处理 一般保守处理 可以考虑 0 1 这样的边界情况 采用floor
    return Math.floor(curIndex / 2);
  }

  /**
   * 获取左孩子的索引
   */
  [getLeftChildIndex](curIndex) {
    return curIndex * 2 + 1;
  }

  /**
   * 获取右孩子的索引
   */
  [getRightChildIndex](curIndex) {
    return curIndex * 2 + 2;
  }

  /**
   * 上浮
   * 1. 上浮的本质 就是节点交换
   */
  [siftUp](index) {
    let parentIndex = this[getParentIndex](index);
    // 当前节点 没有上浮到最顶端 && 小于其父节点时 需要不断进行上浮操作
    while (index > 0 && this.compareFn(this.heap[index], this.heap[parentIndex]) === COMPARE_RESULT.LITTLER) {
      swapArr(this.heap, index, parentIndex);
      // 循环index步进:双指针滚动遍历
      index = parentIndex;
      parentIndex = this[getParentIndex](index);
    }
  }
  /**
   * 下沉
   * 1. 下沉的本质 就是节点交换
   * 2. 还有一种使用递归实现的下沉操作（见《学习javascript数据结构和算法（第三版）》p207），考虑到性能隐患（如果数据量过大，递归的消耗较大，容易引起内存溢出），这里采用迭代的方式
   */
  [siftDown](index) {
    while (index < this.heap.length - 1) {
      // 先假定左孩子比较小
      let littlerElementIndex = this[getLeftChildIndex](index);
      // 如果有右孩子 先比较左右孩子 大的那个 和当前的index的值比较 （这里的比较不对）？？
      const rightChildIndex = this[getRightChildIndex](index);
      if (rightChildIndex < this.size() - 1 && this.compareFn(this.heap(rightChildIndex), this.heap(littlerElementIndex)) === COMPARE_RESULT.LITTLER) {
        littlerElementIndex = rightChildIndex;
      }
      // 不大于任何子节点 即找到了合littlerElementIndex适的位置 打断循环 停止下沉
      if (this.compareFn(this.heap[index], this.heap[littlerElementIndex]) === COMPARE_RESULT.LITTLER) break;
      // index的值小于左右孩子的最小值 用决出的左右孩子中最小的和index进行值交换
      swapArr(this.heap, index, littlerElementIndex);
      index = littlerElementIndex;
    }
  }
}

module.exports = MinHeap;