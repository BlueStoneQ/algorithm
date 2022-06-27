/**
 * leet: https://leetcode-cn.com/problems/binary-search/
 * 2022-3-31
 * kaer: https://programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 
  二分-迭代实现

  最好画下x-y图

  这里采用的区间 [left, right]

  时间复杂度：
  总共有n个元素，每次查找的区间大小就是n，n/2，n/4，…，n/2^k（接下来操作元素的剩余个数），其中k就是循环的次数。
    由于n/2^k取整后>=1，即令n/2^k=1，
    可得k=log2n,（是以2为底，n的对数），所以时间复杂度可以表示O()=O(logn)
 
 @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  // defend
  // init data
  const numsLen = nums.length;
  let left = 0, right = numsLen - 1;
  // algo
  while (left <= right) {
      const mid = left + Math.floor((right - left) / 2); // 注意 除法一般要考虑取整
      if (nums[mid] === target) {
          // 找到target了
          return mid;
      } else if (nums[mid] > target) {
          // target在mid的左侧 所以 区间right会向左移动（向target移动）
          right = mid - 1;
      } else {
          // nums[mid] < target target在mid的右侧 区间left需要向右移动（向target移动）
          left = mid + 1;
      }
  }
  // return
  return -1;
};




/**
 * 
 
   二分-迭代实现

  最好画下x-y图

  这里采用的区间 [left, right)
 
 @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  // defend
  // init data
  const numsLen = nums.length;
  let left = 0, right = numsLen;
  // algo
  while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] > target) {
          // target在左区间 区间需要向左收缩 新区间应该是 [left, mid)
          right = mid;
      } else if (nums[mid] < target) {
          // target在右区间 区间需要向右收缩 新区间应该是 [mid + 1, right)
          left = mid + 1;
      } else {
          // nums[mid] === target
          return mid;
      }
  }
  // return 
  return -1;
};