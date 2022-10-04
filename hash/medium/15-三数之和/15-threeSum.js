/**
 * leet: https://leetcode-cn.com/problems/3sum/
 * Date: 2022-2-17
 * kaer: https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 方法1：经典解法 排序后 利用循环穷举第一个数组 剩余的部分使用左右指针进行类滑动窗口
 * 注意：该题是下标不敏感 所以 可以数组原地排序
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  // defend
  const len = nums.length;
  if (nums.length < 0) return [];
  // init data
  const res = [];
  // 排序是为了防止遗漏某个组合 而排序后 因为找的sum呈现递增/减的变化 所以 不会遗漏
  nums.sort((a, b) => a - b); // 递增排序
  // algo 这里注意：第一个数的边界是len-2 因为后面至少有2个数 left right
  for (let firstIndex = 0; firstIndex < len - 2; firstIndex++) {
      // 计算加上第一个数后剩下的部分: 剩余区间2个数需要满足的和
      const firstVal = nums[firstIndex];
      if (firstVal > 0) break; // !!注意 如果第一项（剩余有序数组最小值）就大于0 因为排为了递增 则后面就不会再有小于0的了 自然加不出来0了 就可以中断了
      if (firstIndex > 0 && firstVal === nums[firstIndex - 1]) continue; // [!!!去重] 注意！！ 当前项与之前一项一样：a跳过连续的重复项 - 跳过当前项，因为相同的firstVal 很容易产生重复的三元组
      let left = firstIndex + 1, right = len - 1; // 对于firstIndex后面的区间进行左右指针滑动
      while (left < right) {
          const leftVal = nums[left], rightVal = nums[right];
          const curSum =  firstVal + leftVal + rightVal;
          if (curSum > 0) {
              // 窗口两端值大于目标值 缩小窗口
              right--;
              continue;
          }
          if (curSum < 0) {
              // 窗口两端值小于目标值 扩大窗口
              left++;
              continue;
          }
          // curSum === 0
          res.push([firstVal, leftVal, rightVal]);
          while (left < right && nums[left] === leftVal) left++; // [!!!去重]b跳过重复项 排序后重复项相邻
          while (left < right && nums[right] === rightVal) right--; // [!!!去重]c跳过重复项 排序后重复项相邻
      }
  }
  // return 
  return res;
};