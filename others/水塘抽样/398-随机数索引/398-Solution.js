/**
 * leet: https://leetcode-cn.com/problems/random-pick-index/
 * Date: 2022-2-27
 * 其实阶段性1/i的求法可以有好几种 但是 这里就都统一使用 i === 0 来判定
 */

/**
 * 水塘采样-获取随机数等
 * @param {number[]} nums
 */
 var Solution = function(nums) {
  this.nums = nums;
};

/** 
* @param {number} target
* @return {number}
*/
Solution.prototype.pick = function(target) {
  let res = 0, count = 1, len = this.nums.length;

  for (let i = 0; i < len; i++) {
      if (this.nums[i] === target) {
          // 由count产生的random === 0的概率 为 1/count, 注意这里取随机数的算法 要确保能取到
          const randomIndex = Math.floor(Math.random() * count);
          if (randomIndex === 0) res = i;
          count++;
      }
  }

  return res;
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.pick(target)
*/