/**
 * Date: 2021-5-20
 * 判断一个数组是否存在重复元素，存在返回true, 不存在返回false
 */

/**
 * 算法1：
 * 变成set或者object，然后再看长度是否变短 - 如果变短 则证明重复元素在转化时被去掉了
 * @param {*} arr 
 */
const isRepeatArray1 = (arr) => {
  return arr.length > new Set(arr).size;
}

/**
 * 算法2：
 * 使用内外双指针 + 内外双层循环
 */
const isRepeatArray2 = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }  
    }
  }
  return false;
}



(() => {
  const arr1 = [1,2,3];
  const arr2 = [1,2,3,1,2];
  console.log('isRepeatArray1 expect false: ', isRepeatArray1(arr1))
  console.log('isRepeatArray1 expect true: ', isRepeatArray1(arr2))

  console.log('isRepeatArray2 expect false: ', isRepeatArray2(arr1))
  console.log('isRepeatArray2 expect true: ', isRepeatArray2(arr2))
})()