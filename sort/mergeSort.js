/**
 * 归并排序
 * 2022-4-27
 * leet: https://leetcode.cn/problems/sort-an-array/description/
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
    - [logN的底为什么不重要](https://programmercarl.com/%E5%89%8D%E5%BA%8F/%E5%85%B3%E4%BA%8E%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6%EF%BC%8C%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E9%83%BD%E5%9C%A8%E8%BF%99%E9%87%8C%EF%BC%81.html#o-logn-%E4%B8%AD%E7%9A%84log%E6%98%AF%E4%BB%A5%E4%BB%80%E4%B9%88%E4%B8%BA%E5%BA%95)

  空间复杂度: https://blog.csdn.net/u010711495/article/details/117378617
  归并的空间复杂度就是那个临时的数组和递归时压入栈的数据占用的空间：n + logn；所以空间复杂度为: O(n)
    - 这里的logn其实就是所有的递归算法都会造成这样的空间消耗 - 递归本质上就是栈操作 - 该栈一共有logn层 就是递归的层数 每一层都要入栈一次
    - 归并排序需要O(n)的辅助空间，而与之效率相同的快排和堆排分别需要O(logn)和O(1)的辅助空间，在同类算法中归并排序的空间复杂度略高
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

// 这里leftArr和rightArr 除了basecase（len <= 1） 都是被mergeSort排序后的，自底向上，底向上每一层传递的都是排序后的数据
function merge (leftArr, rightArr) {
  // 遍历leftArr 或者 rightArr 将2者中的最小者不断入result 直到一方遍历结束
  const result = [];

  while (leftArr.length && rightArr.length) {
    // 这里加 = 是为了保持稳定性
    if (leftArr[0] <= rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  // 其实只有一种情况会多出来：就是leftArr 和 rightArr 只有其中一个没有被消耗完，则这里的concat只有一个真正发生了拼接
  return result.concat(leftArr).concat(rightArr); // 剩余的多出来的数组 肯定是大于result中元素的&&排好序的，直接拼接在后面即可
}


// test
const input = [4, 6, 2, 3, 1, 2 , 7, 8];
console.log('mergeSort: ', mergeSort(input));