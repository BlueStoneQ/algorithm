/**
 * 冒泡排序
 * 2022-4-29
 * 通过相邻元素比较和交换，使得每一趟循环都能找到未排序的子数组。
 * https://interview.html5.wiki/section/17-%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.html#%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F
 */


/**
 * 复杂度:
 * 时间：O(n^2)
 * 空间：O(1)
 * 是否原地: 是
 * 是否稳定：稳定 - 值相同的元素 算法不会进行交换
 * @param {*} arr 
 * @returns 
 */
const bubbleSort = (arr) => {
  // defend

  const len = arr.length;
  
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i + 1; j++) {
      // 在[0, i]范围内 比较每一个相邻 最大的元素想后不断交换 - 小的自然就在前面了
      if (arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

// test
const input = [4, 6, 2, 3, 1, 2 , 7, 8];
console.log('bubbleSort: ', bubbleSort(input));