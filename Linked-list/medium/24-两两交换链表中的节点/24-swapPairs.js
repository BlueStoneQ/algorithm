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
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  // defend
  // init data
  const dummy = new ListNode(0, head);
  let temp = dummy; // temp是在被交换的2个节点之前的一个前驱节点
  
  // algo
  while(temp.next !== null && temp.next.next !== null) {
      // 交换 pre 和 cur
      const pre = temp.next, cur = temp.next.next;
      temp.next = cur; // 因为这一步 所以 头节点在这里完成了替换 dummy.next = 交换后的头节点
      pre.next = cur.next;
      cur.next = pre;
      // 步进
      temp = pre; // 这里为什么要指向pre呢 其实 因为pre和cur已经换了位置，pre现在是之前的位置（也就是之前temp.next.next了）画个图就知道了哈哈
  }
  // return 
  return dummy.next;
};