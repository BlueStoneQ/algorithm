/**
 * Date: 2021-5-20
 * 寻找只出现一次的数字，
 * 给定一个数组，只有一个数字出现了一次，其他的数字都出现了2次及以上
 * 找出这个只出现一次的数字
 */

/**
 * 方法1：还是双层遍历 优先解决问题
 * @param {*} array 
 */
const findOnceNumInArray1 = (array) => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (array[i] === array[j]) {
        //array[i] 存在和其一样的数字 结束本次内层循环
        break;
      }
      if (j === len-1) {
        // 如果内存循环走到了最后 则证明没找到和array[1]相同的数字
        return array[i];
      }
    }
  }
}

(() => {
  const arr = [1,2,3,4,5,6, 1, 2, 3, 4, 5];
  console.log('findOnceNumInArray1 expect 6： ', findOnceNumInArray1(arr));
})()