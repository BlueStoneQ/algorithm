/**
 * leet: https://leetcode-cn.com/problems/fibonacci-number/
 * 2022-3-9
 * kaer: https://programmercarl.com/0509.%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0.html#%E6%80%9D%E8%B7%AF
 */

/**
 * DP法
 * dp数组定义描述：dp[i]代表第i个数的斐波那契数值
 * 状态转移方程：dp(i) = dp(i - 1) + dp(i - 2)
 * dp数组初始化：dp[0] = 0 dp[1] = 1
 * dp数组举例：
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  // defend
  if (n <= 1) return n;
  // init data
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  // algo
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1]+ dp[i - 2];
  }
  // return 
  return dp[n];
};

/**
 * 方法2: 被memo缓存高阶函数优化的：递归法
 */
const memoize = (fn) => {
  // 这里可以采用对象字面量 也可以直接使用Map
  const memo = new Map(); // 或者也可以挂载到函数句柄上 memoize.memo = new Map()

  return (...args) => {
    // 生成key ： 这里的算法 采用将所有args进行序列化, 排序后保证序列化的字符串排列顺序始终一致
    const key = JSON.stringify(args.sort());
    // 缓存中有 就返回缓存值
    if (memo.has(key)) return memo.get(key);
    // 缓存中没有 调用函数逻辑 
    const result = fn(...args);
    // 返回值进入缓存
    memo.set(key, result);
    // 返回调用后的结果
    return result;
  }
}

let fabonaci = memoize((n) => {
  if (n < 2) return n;
  // 已经不推荐使用arguments.callee 因为arguments是个很大的参数 比较耗能，我们可以在内部给一个函数名 - 用一个高阶函数处理
  return fabonaci(n - 1) + fabonaci(n - 2);
})