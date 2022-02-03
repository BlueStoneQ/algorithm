/**
 * leet: https://leetcode-cn.com/problems/reverse-linked-list/
 * Date: 2022-2-3
 * 方法：
 * 1. 迭代法
 * 2. 递归法
 *    - dong：https://leetcode-cn.com/problems/reverse-linked-list/
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 方法1： 迭代法
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 防御
  if (!head || !head.next) return head;
  // 初始化变量
  let preP = null, curP = head, temp = null;
  // 核心算法
  while (curP !== null) {
      // 利用3个指针 进行next指向的反转
      temp = curP.next;
      curP.next = preP;
      // 步进
      preP = curP;
      curP = temp;
  }
  // 返回结果
  return preP;
};

module.exports = reverseList;