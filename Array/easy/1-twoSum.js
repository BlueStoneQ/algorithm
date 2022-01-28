/**
 * 工具函数
 */

/**
 * 校验入参是否合法
 * @param {*} nums 
 * @param {*} target 
 */
function isValid(nums, target) {
  if (!Array.isArray(nums)) return false;
  if (typeof target !== "number") return false;
  if (nums.length < 2) return false;
  return true;
}








/**
 * 原题-返回下标
 * 1. 利用hash记录value:index的映射，空间换时间，降低空间复杂度到O(n)
 * 2. 时间：O(n)
 * 3. 空间：O(n)
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
 const twoSum = function(nums, target) {
  // 防御
  if (!isValid(nums, target)) return [-1, -1];
  // 初始变量
  const len = nums.length;
  // 建立nums中 value到index的映射
  const v2IMap = new Map();
  for (let i = 0; i < len; i++) {
    v2IMap.set(nums[i], i);
  }
  // 核心算法
  for (i = 0; i < len; i++) {
    // 找到另一个加数 看是否在map中 在的话 返回其坐标
    const rest = target - nums[i];
    // 剩下的一个加数 存在该数组 并且 下标不是当前元素（避免同一元素被加2次 3 + 3 = 6）
    if (v2IMap.has(rest) && v2IMap.get(rest) !== i) {
      return [i, v2IMap.get(rest)];
    }
  }
  // 返回默认值
  return [-1, -1];
}



/**
 * 原题-返回下标
 * 1. 暴力枚举：双层循环
 * 2. 时间：O(n^2)
 * 3. 空间：O(1)
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
const twoSum1 = function(nums, target) {
  // 防御
  if (!isValid(nums, target)) return [-1, -1];
  // 初始变量
  const len = nums.length;
  // 核心算法
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[j] + nums[i] === target) {
        return [i, j];
      }
    }
  }
  // 返回结果
  return [-1, -1];
}



/**
 * 变体：返回值本身
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var twoSumToValue = function(nums, target) {  
  // 防御 nums target
  if (!isValid(nums, target)) return [-1, -1];
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
      return [leftNum, rightNum];
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