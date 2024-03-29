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
  if (head === null) return head;

  // 这里其实可以不用dummy虚拟头结点 可以直接用head 不影响
  const dummy = new ListNode();
  dummy.next = head; // 其实 dummy.next也像一个快照一样 （始终指向）记录下来了最终为head的节点
  // init data
  let slowP = head, fastP = head;
  // algo
  while (fastP !== null) {
      if (slowP.val !== fastP.val) {
          // 要删除的其实是 slowP.next
          slowP.next = fastP; // 删除了原来的slowP.next
          slowP = slowP.next; // 移动slowP 相当于数组中slow++
      }

      fastP = fastP.next;
  }

  // 断开和后面元素的链接 - 因为现在 从 head 到 slowP 这一段是不重复的，重复的元素已经被fast跳过了
  slowP.next = null;

  // return
  return dummy.next;
};