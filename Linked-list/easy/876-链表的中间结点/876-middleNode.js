/**
 * leet: https://leetcode-cn.com/problems/middle-of-the-linked-list/
 * Date: 2022-2-3
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492022&idx=1&sn=35f6cb8ab60794f8f52338fab3e5cda5&scene=21#wechat_redirect
 * 类型：快慢指针，快指针是慢指针步长的2倍, 当快指针走到末尾节点（不是null，而是最后一个节点），则慢指针刚停留在链表中间
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
  // 防御
  if (head === null) return;
  // 初始化变量
  let slowP = head, fastP = head;
  // 核心算法: 快指针走2步 慢指针走一步 !!!注意处理边界：走到末尾时的处理
  while (fastP !== null && fastP.next !== null) {
      fastP = fastP.next.next;
      slowP = slowP.next;
  }
  // 返回结果
  return slowP;
};

module.exports = middleNode;