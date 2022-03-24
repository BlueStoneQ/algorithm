/**
 * leet: https://leetcode-cn.com/problems/lemonade-change/
 * 2022-3-24
 * kaer: https://programmercarl.com/0860.%E6%9F%A0%E6%AA%AC%E6%B0%B4%E6%89%BE%E9%9B%B6.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 

 贪心

 很像加油站问题：其实只要每个局部（给每个当前乘客）能找开，那么全局就一定能找开

 每次找零：
 case1: 支付5 直接收下
 case2: 支付10 收下后 找出一张5
 case3: 支付20 收下 找钱有2种策略：
    - 找出 10 + 5 （优先用10找 因为10只能找开20 而5可以找开10 或者 20，这里是一种贪心策略）
    - 不行的话 找出 5 + 5 + 5

 在遍历过程中 以上有一项无法找开 就可以判定整个全局无法找开
 
 
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
  // defend
  if (bills[0] !== 5) return false; // 第一个顾客大于5 手里无零钱 肯定找不开
  // init data
  const billsLen = bills.length;
  let restBill = {
      fiveBillCount: 0, // 5元零钱张数
      tenBillCount: 0, // 10元零钱张数
      twentyBillCount: 0, // 20元零钱张数
  }; // 手里目前剩余的零钱夹

  // algo
  for (let i = 0; i < billsLen; i++) {
      // case1 支付5 直接收下
      if (bills[i] === 5) {
          restBill.fiveBillCount++;
          continue;
      }
      // case2 支付10 收下 找出一张5
      if (bills[i] === 10) {
          // 没有5元了 找不开
          if (restBill.fiveBillCount <= 0) {
              return false; 
          }
          // 能找开
          restBill.fiveBillCount--;
          restBill.tenBillCount++; // 收钱
          continue;
      }
      // case3 支付20 收下 2种找钱策略 找不开就返回false
      if (bills[i] === 20) {
          if (restBill.tenBillCount > 0 && restBill.fiveBillCount > 0) {
              // 策略1： 找出一张10元 + 一张5元
              restBill.tenBillCount--; // 找出10元
              restBill.fiveBillCount--; // 找出5元
          } else if (restBill.fiveBillCount >= 3) {
              // 策略2：找出3张5元
              restBill.fiveBillCount -= 3;
          } else {
              // 以上2种找钱策略都找不开
              return false;
          }
          restBill.twentyBillCount++; // 收钱
      }
  }

  // return 经历以上遍历 没有中途return掉 证明全部可以找开
  return true;
};