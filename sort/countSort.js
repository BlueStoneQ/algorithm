/**
 * 2022-7-27
 * 讲解：https://www.bilibili.com/video/BV1Ur4y1w7tv?p=22&vd_source=9365026f6347e9c46f07d250d20b5787
 * 
 * 1. 适合于元素的范围不要太大，max值不要太大的情况，可以获得O(N)的效率，优于快速排序和归并排序
 * 2. 只能排整数 - 例如根据分数排名
 * 
 * 复杂度分析：
 *  时间：O(n+k) , n = arr.length, k = max, 也就是arr中元素的范围
 *  空间: O(k) 生成的辅助数组countArr大小为k, k = max
 */
const countSort = (arr) => {
  // 1. 获取arr中的max2. 和min值 作为计数用的数组的左右边界（size）
  const getMinAndMax = () => {
    let min = arr[0], max = arr[0]; 
    for (let i = 0; i < arr.length; i++) {
      const cur = arr[i];
      min = Math.min(min, cur);
      max = Math.max(max, cur);
    }

    return [ min, max ];
  }
  // 2. 生成计数数组
  const getCountArr = (len) => {
    const countArr = new Array(len).fill(0);

    for (let i = 0; i < arr.length; i++) {
      countArr[arr[i]] += 1; // countArr：用arr中的值作为其index, 出现的次数作为其值
    }

    return countArr;
  }
  // 3. 遍历计数数组 生成（填充）新的arr
  const resetArr = (countArr, min, max) => {
    let index = 0; // 计数arr中填充到的index
    // 优化：这里用min max来缩小下遍历的范围 
    for (let num = min; num <= max; num++) {
      while (countArr[i]) {
        arr[index++] = num;
        countArr[num]--;
      }
    }
  }

  // 主流程
  const [ min, max ] = getMinAndMax();
  const countArr = getCountArr(max + 1); // 最大的下标为max的话 则必须len为max+1
  resetArr(countArr, min, max);

  // return 原地排序
  return arr;
}

// test
const input1 = [4, 6, 2, 3, 1, 2 , 7, 8];
console.log('countSort: ', countSort(input1));