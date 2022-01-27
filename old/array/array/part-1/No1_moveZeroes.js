/**
 * 移动0
 * Date: 2021-3-15
 * leetcode: https://leetcode-cn.com/leetbook/read/all-about-array/x9rh8e/
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 1. 必须在原数组上操作，不能拷贝额外的数组。
 * 2. 尽量减少操作次数。
 * me: 在foreach中数组被改变，会动态变化
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const curNum = nums[i];
    if (curNum === 0) {
      nums.push(curNum);
    }
  }
};

// const 

// 题解：左右双指针交换法（本质还是快慢指针，快慢指针之间的间隔是恒定的，始终为1）
const moveZeroes1 = function(nums) {
  const len = nums.length;
  for (let lI = 0; lI < len; lI++) {
    const cur = nums[lI];
    if (cur === 0) {
      // 交换左右2个指针的值 将左侧的0和右侧交换
      let temp = nums[lI+1];
      nums[lI+1] = cur;
      nums[lI] = temp;
    }
  }
};


/**
 * test
 */
(function() {
  const params1 = [0, 0, 1];
  moveZeroes1(params1);
  console.log('params1: ', params1);
})();