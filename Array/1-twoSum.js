var twoSum = function(nums, target) {  
  // 防御 nums target
  if (!Array.isArray(nums)) return [];
  if (typeof target !== "number") return [];
  if (nums.length < 2) return [];
  // 原地排序
  nums.sort((a, b) => a - b);
  // 前置变量定义
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  // 遍历：循环：双指针（下标）从两端向中间靠近
  while(leftIndex < rightIndex) {
    const leftNum = nums[leftIndex];
    const rightNum = nums[rightIndex];
    const curSum = leftNum + rightNum;
    if (curSum === target) {
      return [leftIndex, rightIndex];
    }
    // 类似滑动窗口 当窗口之和大于目标值时 需要移动下标 扩大窗口和
    if (curSum > target) {
      rightIndex--;
      continue;
    }
    if (curSum < target) {
      leftIndex++;
      continue;
    }
    // 注意跳过重复选项
    while(leftNum === nums[leftIndex]) leftIndex++;
    while(rightNum === nums[rightIndex]) rightIndex--;
  }
  // 返回结果
  return [];
};

module.exports=twoSum