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


/**
 *  ***********************************************************************
 */
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 方法2：递归法
 * 1. 不好理解 但是清晰优雅，性能上不如迭代，空间复杂度：O(n) 可以用来理解链表和递归
 * 2. 不要跳入细节 要充分理解递归函数的定义：输入一个节点head，将「以head为起点」的链表反转，并返回反转之后的头结点。
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // base case：如果链表只有一个节点的时候反转也是它自己，直接返回即可
  if (head === null) return head;
  if (head.next === null) return head;
  // 递归
  const last = reverseList(head.next);
  // 递归后的链表 拼接回原来的链表
  head.next.next = head;
  head.next = null;
  // 返回结果
  return last;
};

module.exports = reverseList;