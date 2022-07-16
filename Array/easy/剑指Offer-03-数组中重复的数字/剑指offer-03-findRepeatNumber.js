/**
 * leet: https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * 2022-7-16
 * 题解：https://febook.hzfe.org/awesome-interview/book4/array-repeat-number#%E8%A7%A3%E6%B3%95%E4%BA%8C-%E5%8E%9F%E5%9C%B0%E4%BA%A4%E6%8D%A2
 */

/**
 * 方法1： 哈希表记录 - Map:记录数字和出现的次数
    - 空间复杂度: O(n), n = nums.length
 * 方法2：原地交换
    - 这也是这道题想要考察的方法
    - 空间复杂度优于hash方法：只需要O(1)
    - 重要依据是这一条：在一个长度为 n 的数组 nums 里的所有数字都在 0 ~ n-1 的范围内
    - 题解：https://febook.hzfe.org/awesome-interview/book4/array-repeat-number#%E8%A7%A3%E6%B3%95%E4%BA%8C-%E5%8E%9F%E5%9C%B0%E4%BA%A4%E6%8D%A2
    - 时间复杂度 O(N)：每个元素最多被移动 2 次。
 * @param {number[]} nums
 * @return {number}
 */
    var findRepeatNumber = function(nums) {
      // defend
      // init data
      // algo
      let i = 0;
      while (i < nums.length) {
          const curVal = nums[i];
          // case1 当前元素和下标相等 不用移动
          if (curVal === i) {
              i++;
              continue;
          }
          // case2 当前元素 和 以元素值为下标的位置的值相同 ，则找到了重复值，立刻return
          if (curVal === nums[curVal]) return curVal;
          // case3 当前元素 和 以元素值为下标的位置的值不同 则交换2个元素
          [nums[i], nums[curVal]] = [nums[curVal], nums[i]];
          console.log(nums);
      }
  };