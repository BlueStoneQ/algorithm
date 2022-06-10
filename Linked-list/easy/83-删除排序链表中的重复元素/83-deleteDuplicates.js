/**
 * leet: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * Date: 2022-2-2
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487466&idx=1&sn=e0c21cf8c3a76cfc4844b1269b658344&scene=21#wechat_redirect
 * 类型：有序链表去重
 *  - 双指针：快慢指针
 *  - 所谓的删除 其实就是跳过 断开链接
 *    - 数组中就是覆盖
 *  - 记得最后：断开和后面元素的链接
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
var deleteDuplicates = function(head) {
  // 防御
  if (head === null) return null;
  // 初始化变量
  let slowPoint = head, fastPoint = head;
  // 核心算法

  while (fastPoint !== null) {
    if (fastPoint.val !== slowPoint.val) {
      // 要删除的其实是 slowP.next
      slowPoint.next = fastPoint; // 删除了原来的slowP.next
      // slow++
      slowPoint = slowPoint.next; // 移动slowP 相当于数组中slow++
    }
    // fast++
    fastPoint = fastPoint.next;
  }
  // 断开和后面元素的链接 【重要】
  slowPoint.next = null;
  // 返回结果
  return head;
};