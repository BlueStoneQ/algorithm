/**
 * leet: https://leetcode-cn.com/problems/linked-list-cycle-ii/
 * Date: 2022-2-3
 * dong: 
 * - https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492022&idx=1&sn=35f6cb8ab60794f8f52338fab3e5cda5&scene=21#wechat_redirect
 * - https://labuladong.gitee.io/algo/2/21/59/
 * 类型：快慢指针，环起点
 * - 这个重点是一定要能解释这个算法：为什么这样可以拿到起点 - 最好画图说明，推导等式、
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 2倍速指针的话 如果把环形的部分铺开 相遇点就是链表的中点；
 * 此时 如果双方以相同速度前进 走到环起点的路程都是（初次相遇慢指针走的距离）k-m（初次相遇点距离环的距离）
 *  所以 再次以相同速度走到环起点 走过的路程都是k-m 就会相遇
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  // 防=
  if (head === null) return null; // 注意这里要返回题目要求的无效值
  // 初始化值
  let slowP = head, fastP = head;
  // 核心算法
  // 1. 快慢指针走 直到相遇 或者没有环 走到末尾
  while (fastP !== null && fastP.next !== null) {
      // 先步进
      fastP = fastP.next.next;
      slowP = slowP.next;
      // 判断是否有环 有环则退出循环
      if (fastP === slowP) break;
  }
  // 2. fast遇到了空指针或者fast.next遇到了空指针 则没有环 （case上面循环的退出条件是因为到了末尾空指针 而不是发现了环）  
  if (fastP === null || fastP.next === null) return null; // 注意：这里是||的关系，要理解语句含义
  // 3. 如果有环 则再次同样的速度遍历 直到2个指针相遇 找到环起点
  // 重置一个指针到head
  slowP = head;
  while (slowP !== fastP) {
      fastP = fastP.next;
      slowP = slowP.next;
  }
  // 返回结果
  return slowP;
};