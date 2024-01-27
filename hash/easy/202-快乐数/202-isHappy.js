/**
 * leet: https://leetcode-cn.com/problems/happy-number/
 * Date: 2022-2-17
 * kaer: https://programmercarl.com/0202.%E5%BF%AB%E4%B9%90%E6%95%B0.html
 */

/**
 * 方法1： 集合查找法
 * 1. 理解一般查找引用循环或者各种无限循环的方法，都是借助于hash （Map 或者 Set）,每次都对遍历到的值进行查表，表里面有的一定就是发生了无限循环
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  // defend
  // init data
  const set = new Set();
  // algo
  while (true) {
      // 结果等于1 return true
      if (n === 1) return true;
      // 在set中查到 证明有循环 return false
      if (set.has(n)) return false;
      // 记录进set
      set.add(n);
      n = getBitSquareSum(n);
  }
};

/**
* [!!!]求n各个位上的数字平方之和
* 也可以n直接变成str，然后分解出每一位求出每位的平方和
*/
function getBitSquareSum(n) {
  // 防御
  // init data
  let res = 0;
  // 循环计算各位
  while (n) {
      const curBit = n % 10;
      res += curBit * curBit;
      n = Math.floor(n / 10);
  }
  // 返回结果
  return res;
}

/**
 * *********************************** *********************************** ***********************************
 */

/**
 * 方法2： 双指针判断是否有环 有环则存在循环 
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  // defend
  if (getBitSquareSum(n) === 1) return true;
  // init data
  let slow = getBitSquareSum(n);
  let fast = getBitSquareSum(getBitSquareSum(n)); // slow每次计算1次位平方和 fast每次计算2次平方和 2个相等的时候 就说明存在有环
  // algo 到达1的时候 2个指针始终在1上打转 就会相遇
  while (slow !== 1 && slow !== fast) {
      // 指针步进
      slow = getBitSquareSum(slow);
      fast = getBitSquareSum(getBitSquareSum(fast));
  }
  // return 相遇时 slow为1 则为快乐数
  return slow === 1; 
};

/**
* 求n各个位上的数字平方之和
*/
function getBitSquareSum(n) {
// 防御
// init data
let res = 0;
// 循环计算各位
while (n) {
    const curBit = n % 10;
    res += curBit * curBit;
    n = Math.floor(n / 10);
}
// 返回结果
return res;
}

/**
 * [🔥优先考虑]方法3：方法1的另一种实现s
 * 1. 求各个位上的平方和
 * 2. 拆解各位比较清晰
 */
const getPowSum = (arr) => {
  return arr.reduce((preVar, curVal) => {
      return +preVar + (+curVal * +curVal)
  }, 0)
}

/**
* @param {number} n
* @return {boolean}
*/
var isHappy = function(n) {
  const set = new Set()

  while (n !== 1) {
      const nArr = n.toString().split('').map(v => +v)
      n = getPowSum(nArr)
      // 查表
      if (set.has(n)) return false
      set.add(n)
  }

  return true
};
