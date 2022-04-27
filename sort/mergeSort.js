/**
 * 归并排序
 * 2022-4-27
 * 递归将数组分成两个序列，有序合并这两个序列。作为一种典型的分治法思想算法应用，归并排序的实现有两种方法：
自上而下的递归 
  - 其实递归的执行，就是先不断分割，直到最后成为lenth <= 1，即不需要排序的状态
  - 心里最好记着那副归并的算法机制图 最好动起来 切割到底后开始排序 一层一层向上merge 在merge中排序 每次merge时的left right都是下一层排序后的数组
自下而上的迭代
 * https://interview.html5.wiki/section/17-%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.html#%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F
 */


/**
 *- 递归时间复杂度计算：递归的层数 * 每层的复杂度 = logN * n (n = arr.length)
  - 复杂度分析: 递归每次迭代一版，也就是1/2, 则len = n的长度 只需要2^logN = N, 也就是递归次数为logN, 每层的复杂度：就是那个while循环 为n => 则最终的复杂度为nlogN

  空间复杂度: https://blog.csdn.net/u010711495/article/details/117378617
  归并的空间复杂度就是那个临时的数组和递归时压入栈的数据占用的空间：n + logn；所以空间复杂度为: O(n)
  [重要]实际上，递归代码的空间复杂度并不能像时间复杂度那样累加。
  刚刚我们忘记了最重要的一点，那就是，尽管每次合并操作都需要申请额外的内存空间，但在合并完成之后，临时开辟的内存空间就被释放掉了。
  在任意时刻，CPU 只会有一个函数在执行，也就只会有一个临时的内存空间在使用。
  临时内存空间最大也不会超过 n 个数据的大小，所以空间复杂度是 O(n)。

  是否稳定：稳定，相同值的元素 相对位置不变

  非原地排序，因此内存消耗较高，这也是为什么不如快排应用广泛的原因
 * @param {*} arr 
 * @returns 
 */
const mergeSort = (arr) => {
  // defend
  // base case len <= 1 的时候 不需要排序 直接返回数组本身
  const len = arr.length;
  if (len <= 1) return arr;
  // 将arr从mid处分割成left和right
  const midIndex = Math.floor(len / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex, len);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}


function merge (leftArr, rightArr) {
  // 遍历leftArr 或者 rightArr 将2者中的最小者不断入result 直到一方遍历结束
  const result = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  return result.concat(leftArr).concat(rightArr); // 剩余的多出来的数组 肯定是大于result中元素的&&排好序的，直接拼接在后面即可
}


// test
const input = [4, 6, 2, 3, 1, 2 , 7, 8];
console.log('mergeSort: ', mergeSort(input));