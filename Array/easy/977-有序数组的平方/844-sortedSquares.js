/**
 * 2022-6-9
 * leet: https://leetcode.cn/problems/squares-of-a-sorted-array/
 * kaer: https://programmercarl.com/0977.%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B3%E6%96%B9.html
 */

/**
 * 双指针 + 双端迫近

 
  复杂度分析：
   - 时间 O(n)
   - 空间 O(n) // 主要是结果的result， n = nums.length

 1. 数组其实是有序的， 只不过负数平方之后可能成为最大数了。
 2. 那么数组平方的最大值就在数组的两端，不是最左边就是最右边，不可能是中间
 3. 非递减 就是递增，则大的数先入栈，然后reverse一次 或者 在遍历的过程中记录插入到数组的位置
  @param {number[]} nums
 * @return {number[]}
 */
  var sortedSquares = function(nums) {
    // defend
    // init data
    const len = nums.length;
    const result = new Array(len).fill(0);
    let leftIndex = 0, rightIndex = len - 1;
    let insertIndex = len - 1;
    // algo
    // 这里的终止条件使用<= 是为了不遗漏最后一个index
    while (leftIndex <= rightIndex) {
        const leftVal = nums[leftIndex] * nums[leftIndex];
        const rightVal = nums[rightIndex] * nums[rightIndex];
        if (leftVal > rightVal) {
            // case1 大的值在左端
            result[insertIndex--] = leftVal;
            // 左指针向里移动
            leftIndex++;
        } else {
            // case2 大(等于)的值在右端
            result[insertIndex--] = rightVal;
            // 右指针向里移动
            rightIndex--;
        }
    }
    // return
    return result;
};