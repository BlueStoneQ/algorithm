/**
 * 2022-2-2
 * leet: https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
 * dong: https://labuladong.github.io/algo/2/18/17/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 核心方法：快慢指针
 * 找到倒数第n个节点
 * 构建一个辅助函数 保证主流程逻辑清晰
 */
 const findFromEnd = function (head, n) {
  // 防御
  // 初始化数据
  let slowP = head, fastP = head;
  // 核心算法
  // 1. fast先走n步
  let fastStepsCount = 0; // fast先走的步数n
  while (fastP !== null && fastStepsCount < n) {
      fastP = fastP.next;
      fastStepsCount++;
  }
  // 2. slow此时触发 slow和fast之间距离始终为n 当fast走到终点时 slow走到了倒数第n个节点(应该走到倒数第n+1一个节点)
  while (fastP !== null) {
      fastP = fastP.next;
      slowP = slowP.next;
  }
  return slowP;
}

/**
* @param {ListNode} head
* @param {number} n
* @return {ListNode}
*/
var removeNthFromEnd = function(head, n) {
  // 防御
  if (head === null) return;
  // 初始化数据
  const dummyHead = new ListNode();
  dummyHead.next = head;
  // ⭕️要删除倒数第n个节点 必须找到其前驱节点 也就是倒数第n+1个节点
  const preNode = findFromEnd(dummyHead, n + 1);
  // 使用倒数第n+1个节点删除倒数第n个节点
  preNode.next = preNode.next.next;
  // 返回结果
  return dummyHead.next;
};

module.exports = removeNthFromEnd;