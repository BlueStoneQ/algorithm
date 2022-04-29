/**
 * 选择排序
 * 2022-4-29
 * 参考: https://interview.html5.wiki/section/17-%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.html#%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F
 * 1. 依次找到剩余元素的最小值或者最大值，放置末尾或者开头。
 */

/**
 * 复杂度：
 *  时间：O(n^2)
 *  空间：O(1)
 * 是否原地：是
 * 是否稳定：不稳定-相同值的相对顺序会被打乱
 * 这里采用: 依次找到剩余元素的 最小值，放置在arr的开头
 * @param {*} arr 
 */
const selectSort = (arr) => {
  // defend
  // algo
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    // 小循环找出i后面的元素中最小的 
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // 将找到的最小元素 和 当前i元素进行交换
    const temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

/**
 * test
 */
 const input = [4, 6, 2, 3, 1, 2 , 7, 8];
 console.log('selectSort: ', selectSort(input));