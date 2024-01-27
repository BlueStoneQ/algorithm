/**
 * leet: https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * Date: 2022-2-22
 * kaer: https://programmercarl.com/0024.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 单指针 驱动 双指针步进
 * 这个交换最好画图哈，然后用代码模拟一个交换的最小单元操作，然后遍历即可
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  const dummy = new ListNode()
  dummy.next = head

  let pre = dummy // pre是在被交换的2个节点之前的一个前驱节点

  while (pre.next !== null && pre.next.next !== null) {
      // 交换 cur 和 next
      const cur = pre.next, next = pre.next.next
      pre.next = next // 因为这一步 所以 头节点在这里完成了替换 dummy.next = 交换后的头节点
      cur.next = next.next
      next.next = cur
      // 步进
      pre = cur
  }

  return dummy.next
};