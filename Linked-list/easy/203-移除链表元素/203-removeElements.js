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
 * 删除链表节点的核心就是找到删除节点的前驱节点
 * - 一定要学会考虑链表开头和结尾这样的边界问题
 * - 开头边界：就是设置好访问指针p的初始值
 * - 结尾边界：就是while循环退出条件的设计
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
  // defend
  // init data
  // 重要 定义虚拟头结点 就不用对删除第一个节点的边界case进行特殊处理了
  const dummy = new ListNode(0, null); 
  dummy.next = head;
  let p = dummy;

  // algo 
  while (p !== null && p.next !== null) {
      // 第一个p.next其实就是head
      if (val === p.next.val) {
          // 这里删除的是 p.next
          p.next = p.next.next;
          continue; // 注意删除后跳过当前节点, 删除所有，所以不一定只有一个节点.val === val需要删除
      }
      p = p.next;
  }
  // return 因为第一个head原来所指的也可能会被删掉 这里使用dummy.next
  return dummy.next;
};