/**
 * 插入排序
 * 1. 以第一个元素为有序元素 后面的元素通过从后向前移动找到合适的位置插入
 * 
 * 时间复杂度：O(n^2)
 * 空间复杂度：o(1), 因为在空间上没有利用什么辅助空间
 * 原地排序: 是
 * 是否稳定: 是
 */

const insertSort = (arr) => {
  // defend

  const len = arr.length;
  
  for (let i = 1; i < len; i++) {
    // 记录当前元素 这样 遇到不合适的位置的元素 那个元素可以后退 给当前元素留出位置
    const curVal = arr[i];
    let preIndex = i - 1;
    // 内层循环: 从后向前遍历i之前的元素 直到找到当前元素插入的index 并插入该元素
    while (preIndex >= 0 && arr[preIndex] > curVal) {
      // 未到达左边界 并且 遇到的元素都大于当前要插入的元素 都向后移动一个位置  腾出接下来要移动插入的位置
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }

    arr[preIndex + 1] = curVal;
  }

  return arr;
}


/**
 * test
 */
 const input = [4, 6, 2, 3, 1, 2 , 7, 8];
 console.log('insertSort: ', insertSort(input));