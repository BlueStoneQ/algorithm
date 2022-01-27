/**
 * Date: 2021-5-20
 * 寻找2个数组的交集
 */

/**
 * 算法1：
 * 双层循环, 使用一个数组存放结果，结果去重一次
 * 1. 优化：应该将短的数组置为内循环？？
 */
const getIntersectionAbort2Arr1 = (arr1, arr2) => {
  let i = 0;
  const len1 = arr1.length;
  const len2 = arr2.length;
  const res = [];
  while(i < len1) {
    let j = 0;
    while(j < len2) {
      if (arr1[i] === arr2[j]) {
        res.push(arr1[i]);
        break;
      }
      j++;
    }
    i++;
  }
  // 作一次去重操作
  // return Array.from(new Set(res));
  // 题目要求：不去重 但是 出现次数和最少的数组中的出现次数一致 ??
  return res;
}

(() => {
  const arr1 = [1, 2, 3, 4, 4, 5, 5, 6];
  const arr2 = [4, 5, 5, 5, 7, 8];
  console.log('getIntersectionAbort2Arr1 expect [4, 5]: ', getIntersectionAbort2Arr1(arr2, arr1));
})()