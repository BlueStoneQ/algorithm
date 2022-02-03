/**
 * leet: https://leetcode-cn.com/problems/linked-list-cycle/
 * Date: 2022-2-3
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492022&idx=1&sn=35f6cb8ab60794f8f52338fab3e5cda5&scene=21#wechat_redirect
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针：是否相遇
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  // 防御
  // 初始化变量
  let slowP = head, fastP = head;
  // 核心算法: fast是slow的二倍速 看2个指针是否相遇 相遇则代表有环
  while (fastP !== null && fastP.next !== null) {
      fastP = fastP.next.next;
      slowP = slowP.next;
      // 先步进 因为起点2个都是head 则会一直输出true
      if (slowP === fastP) return true;
  }
  // 返回结果
  return false;
};