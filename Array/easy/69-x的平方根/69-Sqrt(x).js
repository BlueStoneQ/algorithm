/**
 * leet: https://leetcode.cn/problems/sqrtx/description/
 * date: 2023-12-26
 * 题解：https://leetcode.cn/problems/sqrtx/solutions/1185134/li-yong-er-fen-fa-qiu-ping-fang-gen-si-l-r847/
 */

/**
本质上 就是二分法的变种
caseList:
整数x的平方根一定小于或等于x
除0之外的所有整数的平方根都大于或等于1
整数x的平方根一定是在1到x的范围内，取这个范围内的中间数字mid，并判断mid的平方是否小于或等于x，如果mid的平方小于x
那么接着判断(mid+1)的平方是否大于x，如果(mid+1)的平方大于x，那么mid就是x的平方根
如果mid的平方小于x并且(mid+1)的平方小于x，那么x的平方根比mid大，接下来搜索从mid+1到x的范围
如果mid的平方大于x，则x的平方根小于mid，接下来搜索1到mid-1的范围
然后在相应的范围内重复这个过程，总是取出位于范围中间的mid
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  // 整数x的平方根一定是在1到x的范围内
  let left = 1, right = x;

  while (left <= right) {
    // 中间值  下面这样写是防止溢出
    let mid = Math.floor(left + ((right - left) / 2));
    // 判断mid的平方是否小于或等于x，如果mid的平方小于x, 这里其实是 mid * mid < x, 为了防止mid * mid溢出，所以转换了下等式：
    if (mid <= x / mid) {
      // 判断(mid+1)的平方是否大于x，如果(mid+1)的平方大于x，那么mid就是x的平方根
      if (mid + 1 > x / (mid + 1)) return mid;
      // 如果mid的平方小于x并且(mid+1)的平方小于x，那么x的平方根比mid大，接下来搜索从mid+1到x的范围
      left = mid + 1;
    } else {
      // 如果mid的平方大于x，则x的平方根小于mid，接下来搜索1到mid-1的范围
      right = mid - 1;
    }
  }
  // 如果输入参数是0，left等于1而right等于0，就直接返回0
  // return 0;
};