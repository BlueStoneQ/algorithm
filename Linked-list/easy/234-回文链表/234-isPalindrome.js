/**
 * leet: https://leetcode-cn.com/problems/palindrome-linked-list/
 * Date: 2022-2-4
 * dong：(未采用递归的方法 用了迭代 + 栈的方法)
 *  - https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484822&idx=1&sn=44742c9a3557038c8da7150100d94db9&scene=21#wechat_redirect
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 思路1: 把原始链表反转存入一条新的链表，然后比较这两条链表是否相同
 * [采用]思路2: 把原始链表存入一个stack中 然后再顺向遍历该链表 同时stack同步pop 对比结果（stack的特点，顺序存入，逆序输出）
    - 时间复杂度：O(n)
    - 空间复杂度：O(n)
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 防御
  // 初始化变量
  const stack = [];
  // 构建stack
  let curP = head;
  while (curP !== null) {
    stack.push(curP.val);
    // 步进
    curP = curP.next;
  }
  // 核心算法：循环遍历
  // 重置遍历指针 curP
  curP = head;
  while (curP !== null) {
    if (stack.pop() !== curP.val) return false;
    // 步进
    curP = curP.next;
  }
  // 返回结果
  return true;
};

module.exports = isPalindrome;