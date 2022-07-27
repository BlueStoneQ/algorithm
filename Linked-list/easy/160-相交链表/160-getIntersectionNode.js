/**
 * leet: https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * Date: 2022-2-3
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492022&idx=1&sn=35f6cb8ab60794f8f52338fab3e5cda5&scene=21#wechat_redirect
 * 类型：
 * 双指针：双链构造为单链
 * TODO: hashMap法：用HashSet记录一个链表的所有节点，然后和另一条链表对比，但这就需要额外的空间
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  // 防御
  if (headA === null || headB === null) return null;
  // 初始化变量 
  let pA = headA, pB = headB;
  // 核心算法: 将A B逻辑上连成环 pA遍历完A则遍历B, pB遍历完B则遍历A 相遇的地方 就是交点 （A走过的长度lenA + lenB； B走过的长度：lenB + lenA）
  while (pA !== pB) {
      // pA遍历完headA 则去遍历headB
      if (pA === null) {
          pA = headB;
      } else {
          // 步进
          pA = pA.next;
      }
      // pB遍历完headB 则去遍历headA
      if (pB === null) {
          pB = headA;
      } else {
          pB = pB.next;
      }
  }
  // 返回结果 （2个链表不存在焦点的时候 就是2个走走到了末尾null, 满足了 pA === pB 也就退出循环了） 
  // - 其实上面这个算法保证了在指针交换后，2次循环的时候，2个指针就是同步的，如果有交点或者终点，一定是同时到达
  return pA;
};

module.exports = getIntersectionNode;