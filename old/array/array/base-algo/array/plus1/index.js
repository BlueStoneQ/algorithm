/**
 * 2021-5-22
 * 加一
 * 用数组表示数字，最高位存储在数组的首位。
 * 对该数组进行加1. 十进制
 */

const plus1 = (arr) => {
  // 防御
  // 最低位加1，然后循环进位 
  const len = arr.length;
  let i= len-1; // 从最高位开始计算
  arr[i]++; // 最低位加1
  while(i >= 0) {
    if (arr[i] < 10) {
      // 当前位不进一的情况下，则终止循环（不会发生进位了）
      break;
    }
    // 当前位满10 则高位加1 当前位和10取余
    // 当前位和10取余
    arr[i] %= 10;
    // 防止index溢出:保证下标值值合法
    if (i-1 >= 0) {
      // 上一位非首位的处理
      arr[i-1]++;
    } else {
      // 上一位为首位的处理: 如果最高位满10 需要再数组首位加一个1
      arr.unshift(1);
    }
    i--;
  }
  return arr;
}

(() => {
  const input1 = [1, 2, 3]
  // expect [1, 2, 4]
  console.log('expect plus1([1, 2, 3]): ', plus1(input1));

  const input2 = [9, 9, 9]
  // expect [1, 2, 4]
  console.log('expect plus1([9, 9, 9]): ', plus1(input2));
})()