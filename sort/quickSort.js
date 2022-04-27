/**
 * 快速排序
 * 2022-4-27
 * 选择一个元素作为基数，把比基数小的元素放在它左边，比它大的放在右边（相当于二分），
 * 再不断递归基数左右的序列。快速排序是一种分而治之思想在排序算法上的典型应用。
 * 本质上来看，快速排序应该算是在冒泡排序基础上递归分治法。
 * 快速排序的名字起的是简单粗暴，因为一听到这个名字你就知道它存在的意义，它是处理大数据最快的排序算法之一。
 * https://interview.html5.wiki/section/17-%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.html#%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F
 */

/**
 * 实现1：
 * 1. 本质上是一个递归函数 所以 一定有base-case
 * 2. 在排序过程中需要不断申请新空间：leftArr rightArr, 所以对内存消耗会多一些
 * 3. 非原地排序，返回一个新的排序后的数组，原数组顺序不变
 * 4. 资料中的这个方法实现有缺陷,以我手写的为准
 */
const quickSort1 = (arr) => {
  // defend
  if (!Array.isArray(arr)) {
    throw new TypeError('quickSort入参必须是Array类型');
  }
  
  // base-case 单个或者0个元素的时候 无需排序 直接进行返回入参数组
  const len = arr.length;
  if (len <= 1) return arr;

  // 1. 找基准
  const pivotIndex = Math.floor(len / 2); 
  const pivot = arr[pivotIndex];
  // 1.1 准备容器, right因为包含了所有>=pivot的 所以 midVal作为rightArr中最大的 需要先进去 排在前面
  const leftArr = [], rightArr = []; // 这里需要申请一个新数组 所以 这个方法 可能对内存消耗比较大
  // 2. 遍历arr 以基准为中心分成左右2份
  for (let i = 0; i < len; i++) {
    // 基准元素不要重复加入left或者right, 需要跳过，在return语句中会插在left和right中间
    if (pivotIndex === i) continue;
    // 这里是升序 我们也可以传入自定义的compare函数来决定升序 还是 降序
    const val = arr[i];
    if (val < pivot) {
      leftArr.push(val);
    } else {
      rightArr.push(val);
    }
  }
  // 2. 将左右2份作为新的入参 进行递归 并将递归结果拼接起来 作为本次函数的return
  return quickSort1(leftArr).concat([pivot]).concat(quickSort1(rightArr));
}

/**
 * 实现2val
 */


/**
 * test
 */
const input = [4, 6, 2, 3, 1, 2 , 7, 8];
console.log('quickSort1: ', quickSort1(input));