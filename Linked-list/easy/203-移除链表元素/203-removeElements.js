/**
 * leet: https://leetcode-cn.com/problems/remove-linked-list-elements/
 * Date: 2022-2-21
 * kaer: https://programmercarl.com/0203.%E7%A7%BB%E9%99%A4%E9%93%BE%E8%A1%A8%E5%85%83%E7%B4%A0.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
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
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
  // defend
  // init data
  // 重要 定义虚拟头结点 就不用对第一个节点的边界进行特殊处理了
  const dummy = new ListNode(0, null); 
  dummy.next = head;
  let p = dummy;

  // algo 
  while (p !== null && p.next !== null) {
      if (val === p.next.val) {
          // 这里删除的是 p.next
          p.next = p.next.next;
          continue; // 注意删除后跳过当前节点
      }
      p = p.next;
  }
  // return 因为第一个head原来所指的也可能会被删掉 这里使用dummy.next
  return dummy.next;
};