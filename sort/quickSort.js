/**
 * 快速排序
 * 2022-4-27
 * 选择一个元素作为基数，把比基数小的元素放在它左边，比它大的放在右边（相当于二分），
 * 再不断递归基数左右的序列。快速排序是一种分而治之思想在排序算法上的典型应用。
 * 本质上来看，快速排序应该算是在冒泡排序基础上递归分治法。
 * 快速排序的名字起的是简单粗暴，因为一听到这个名字你就知道它存在的意义，它是处理大数据最快的排序算法之一。
 * https://interview.html5.wiki/section/17-%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.html#%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F
 * 
 * 基础类型的数组 稳定性是无用的，但是有多个维度时，稳定性就是要关注的
 * - 其实 稳定与否 是由程序的细节决定的
 */

/**
 * 实现2：为准
 * 1. 更推荐，优先掌握
 * 2. 原地排序，递归时传递index信息
 * 3. 内存更优异：基于原地交换-在arr上本身进行交换 而不是 申请新的内存空间
 *  - 小于基准的 交换到left侧的index中
 *  - 大于基准的 交换到right侧的index中
 * 4. 比上一个方法稍微难懂一些
 * 5. [优化]可以通过在算法中引入随机性，使得算法对所有输入都能获得较好的期望性能。避免完全逆序 则退化成O(n^2)的复杂度
 * @param {*} arr 被排序数组引用
 * @param {*} leftIndex 该数组需要本次排序的左边界
 * @param {*} rightIndex 该数组需要本次排序的右边界
 */
 const quickSort2 = (arr) => {
  // defend
  if (!Array.isArray(arr)) {
    throw new TypeError('quickSort入参必须是Array类型');
  }
  // init data
  // 交换
  const _swap = (i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  /**
   * @param {*} leftIndex 
   * @param {*} rightIndex 
   * @returns index 返回最终pivot所在的下标
   */
  const _partition = (leftIndex, rightIndex) => {  
    console.log('leftindex: ', leftIndex, '--rightIndex: ', rightIndex)    
    const pivotIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
    const pivotVal = arr[pivotIndex];

    while (leftIndex < rightIndex) {
      // 🟥pivot取中间的值 然后让pivot左右两侧的值 与pivot比较大小 左侧遇到比pivot大的 右侧遇到比pivot小的（或者等于pivot的） 就交换这个元素
      while (leftIndex < rightIndex && arr[leftIndex] < pivotVal) {
        leftIndex++;
      }

      while (leftIndex < rightIndex && arr[rightIndex] > pivotVal) {
        rightIndex--;
      }

      if (leftIndex < rightIndex) {
        // 如果leftIndex大于了rightIndex 则循环应该终止 不用再交换了
        _swap(leftIndex, rightIndex);
        leftIndex++;
        rightIndex--;
      }
      console.log('pivotIndex: ', pivotIndex,'--pivot: ', pivotVal, '--arr: ', arr)
    }

    console.log('leftIndex: ', leftIndex)
    return leftIndex;
  }

  // 对区间进行-快速排序 [left, right]
  const _quikeSort = (leftIndex, rightIndex) => {
    // base case 
    if (rightIndex <= leftIndex) return;
    // defend
    const pivotIndex = _partition(leftIndex, rightIndex);
    console.log(arr)
    _quikeSort(leftIndex, pivotIndex); // 排序pivot左边
    _quikeSort(pivotIndex + 1, rightIndex); // 排序pivot右边
  }

  _quikeSort(0, arr.length - 1);

  return arr;
}

/**
 * 实现1：
 * 1. 本质上是一个递归函数 所以 一定有base-case
 * 2. 在排序过程中需要不断申请新空间：leftArr rightArr, 所以对内存消耗会多一些
 * 3. 非原地排序，返回一个新的排序后的数组，原数组顺序不变
 * 4. 资料中的这个方法实现有缺陷,以我手写的为准
 * [重要!!!]复杂度：
 * 时间复杂度：O(nlogN) （n = arr.length）
 * 递归算法复杂度 = 递归层数 * 每层的复杂度 = logN *  n = nLogN;
 *  - logN：因为层都分为left和right2部分，那么 一共 分 log（2）N次 就分完了，层数就是2的多少次方是N，也就是logN
 *  - 最坏情况下的时间复杂度：O(n^2)
 *    - 每次划分只能将序列分为一个元素与其他元素两部分，这时的快速排序退化为冒泡排序
 *    - 这样的话：分层部分的复杂度：O(logN) 就退化成了 O(n)
 *      - 数组已经是正序（same order）排过序的。
        - 数组已经是倒序排过序的。
        - 所有的元素都相同（1、2的特殊情况）
    - 改善：可以考虑使用洗牌算法在排序前对数组进行一次乱序
      - 随机算法保证了对任何的输入而言，都可以保证Θ(𝑛lg𝑛)的时间复杂度。
 * 
 * 空间复杂度：快排的空间复杂度是Θ(logN)，因为快排的实现是递归调用的， 而且每次函数调用中只使用了常数的空间，因此空间复杂度等于递归深度Θ(logN)。
 * 
 * 是否稳定: 不稳定，同值的元素有可能相对位置被改变
 * 
 * [复杂度分析](https://harttle.land/2015/09/27/quick-sort.html)
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
 * test
 */
const input1 = [0, 1,2,3,4,5,6,7,8];
const input2 = [4, 6, 2, 3, 1, 2 , 7, 8];
const input3 = [5,1,1,2,0,0];
const input4= [-1,2,-8,-10]
const input5= [-1,-10, -8]
// console.log('quickSort1: ', quickSort1(input));
// console.log('quickSort2-1: ', quickSort2(input1));
// console.log('quickSort2-2: ', quickSort2(input2));
// console.log('quickSort2-3: ', quickSort2(input3));
console.log('quickSort2-4: ', quickSort2(input4));
// console.log('quickSort2-5: ', quickSort2(input5));