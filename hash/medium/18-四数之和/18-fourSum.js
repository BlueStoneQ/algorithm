/**
 * leet: https://leetcode-cn.com/problems/4sum/
 * Date: 2022-2-21
 * kaer: https://programmercarl.com/0018.%E5%9B%9B%E6%95%B0%E4%B9%8B%E5%92%8C.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  // defend
  if (nums.length < 4) return [];
  // init data
  const res = [];
  const len = nums.length;
  // 1. 数组排序
  nums.sort((a, b) => a - b); 
  // algo
  // 2. 遍历枚举第一个加数 + 第二个加数 对剩下的2个加数 使用双指针 在一次循环中枚举
  for (let i = 0; i < len - 3; i++) { // 注意 这里的边界 len - 3
      const num1 = nums[i];
      // 每一层(每一个加数)都要去重 与上一个数比较 一样的就跳过这次循环枚举
      if (i > 0 && num1 === nums[i - 1]) continue;
      for (let j = i + 1; j < len - 2; j++) { // 注意 这里的边界 len - 2
          const num2 = nums[j];
          // ！！！每一层(每一个加数)都要去重 
          if (j > i + 1 && num2 === nums[j - 1]) continue;

          let left = j + 1, right = len - 1;
          while (left < right) {
              const num3 = nums[left];
              const num4 = nums[right];
              const curSum = num1 + num2 + num3 + num4;
              // 双指针 在有序数组上进行滑动窗口遍历
              if (curSum < target) {
                  // 小于目标 扩大窗口
                  left++;
                  continue;
              }

              if (curSum > target) {
                  // 大于目标 缩小窗口
                  right--;
                  continue;
              }

              // curSum === target 
              res.push([num1, num2, num3, num4]);
              
              // 跳过有序数组的重复项
              while (left < right && nums[left] === num3) left++;                
              while (left < right && nums[right] === num4) right--;                
          }
      }
  }
  // return 
  return res;
};