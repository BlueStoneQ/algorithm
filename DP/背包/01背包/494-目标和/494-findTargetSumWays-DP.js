/**
 * leet: https://leetcode-cn.com/problems/target-sum/
 * 2022-3-15
 * 题解：https://leetcode-cn.com/problems/target-sum/solution/mu-biao-he-by-leetcode-solution-o0cp/
 * kaer: https://programmercarl.com/0494.%E7%9B%AE%E6%A0%87%E5%92%8C.html#%E6%80%9D%E8%B7%AF
 * 这个类型 基本上是用DP-01背包模型解决组合问题 
 * 本身是组合问题 但是 转换后 刚好符合01背包模型，就用01背包模型来解决
 */

/**
 *  解决方法：
    1. 回溯法 
    [√]2. dp法-转为0-1背包问题
    背包问题特征：一个数组 + 一个target值 一般就是这样，求这个数组中的元素如何组合能达到target值这样的
        - 最少操作数（最短路径）
        - 多少种组合
        - 01背包问题特征: 则是每个元素只能使用一次
    一般来说 我们必须从nums + target中 结合题意 确定01背包的一个元素：weight[] values[] 以及背包容量package
    // 【重要：问题转换为01背包】在结果为target的表达式中 所有+数的和为positive  所有负数的和为negative
    // 调整顺序 将同符号的放在一起 则原来的表达式就可以写为：positive - negative = taregt
    // positive + negative = sum； target = positive - negative = (sum - negative) - negative = sum - negative * 2  => negative = (sum - target) / 2, 则我们的package就是neative
    另外 根据题意 我们的weight 和 values 均是 nums
    直接套用背包问题阶梯模板即可解题 （构建dp数组等）

    DP五部曲：
    1. 定义dp[j]：当背包容量为j(结果为j)的时候，nums中元素的最大组合数
    或者 填满j（包括j）这么大容积的包，有dp[j]种方法
    2. 确定dp递推公式
    所以求组合类问题的公式，都是类似这种：dp[j] += dp[j - nums[i]], 也就是说：dp[5] = dp[4] + dp[3] + dp[2] + dp[1] + dp[0],因为这个本质上是一个组合问题，只不过刚好符合01背包的问题模型，可以用01背包解决模板去解决
    3. 初始化dp数组
    dp[0] = 1，理论上也很好解释，装满容量为0的背包，有1种方法，就是装0件物品。
    dp[j]其他下标对应的数值应该初始化为0，从递归公式也可以看出，dp[j]要保证是0的初始值，才能正确的由dp[j - nums[i]]推导出来。
    4. 确定遍历顺序
    依然是01背包：双层循环，外层循环物品，正序，内层循环背包容量，倒序
    5. 举例dp数组-验证：

   @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
   var findTargetSumWays = function(nums, target) {
    // defend
    // init data
    // 确定01背包3个要素：weight[] values[] package
    const sum = nums.reduce((preVal, curVal) => preVal + curVal, 0);

    const diff = sum - target;

    // negative一定是正整数 所以 如果diff不能被2整除 则得到的negative一定是一个非整数 则不合提议 就无解 只有0种组合
    if (diff % 2 === 1) return 0; // 此时无解
    if (diff < 0) return 0; // 此时无解 因为target 超出了sum 肯定无法得到target sum就是nums所有元素组合运算的最大值
    // 得到背包的容量
    const bagSize = diff / 2;

    // 定义dp数组 + 初始化dp数组
    const dp = new Array(bagSize + 1).fill(0);
    dp[0] = 1; // 当没有任何元素可以选取时，元素和只能是 0，对应的方案数是 1

    // algo
    for (let i = 0; i < nums.length; i++) {
        for (let j = bagSize; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }

    // return
    return dp[bagSize];
};