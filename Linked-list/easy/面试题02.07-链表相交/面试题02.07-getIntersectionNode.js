/**
 * leet: https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/
 * Date: 2022-2-22
 * kaer: https://programmercarl.com/%E9%9D%A2%E8%AF%95%E9%A2%9802.07.%E9%93%BE%E8%A1%A8%E7%9B%B8%E4%BA%A4.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 * 解法评论：https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/comments/1394527
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * 获得链表的长度
 */
 const getLinkedListLength = function(head) {
  let p = head;
  let count = 0;

  while(p !== null) {
      count++;
      p = p.next;
  }

  return count;
}

/**
* 这里采用方法 2.1
* 方法1：暴力的双层（A B 2个链表）嵌套遍历 发现2个节点一样 就找到了环
* 方法2：使用双指针 可以单层循环 
  - 方法2.1 基于相交链表的后面部分一定是一样的 先得到2个链表的长度 从长链表和短链表等长的地方开始遍历 如果找到交点 就是相交
  - 方法2.2 将2个链表看做连在一起 双指针遍历完A 就去遍历B 这样2个指针总会相遇 就有焦点
* @param {ListNode} headA
* @param {ListNode} headB
* @return {ListNode}
*/
var getIntersectionNode = function(headA, headB) {
  // defend
  // init data
  const lenA = getLinkedListLength(headA);
  const lenB = getLinkedListLength(headB);
  let diffCount = Math.abs(lenA - lenB);// 差值
  // algo
  // 长的链表重新设置起点 等于裁剪长链表和短链表长度一致 设定A为长链表 如果A不是 则进行交换 始终保持headA指向长链表
  if (lenA < lenB) {
      const temp = headA;
      headA = headB;
      headB = temp;
  }
  // 裁剪A链表
  let pA = headA, pB = headB;
  while (pA !== null && diffCount > 0) {
      pA = pA.next;
      diffCount--;
  }
  // 裁剪后的2个等长链表 遍历寻找交点 找到就return
  while (pA !== null && pB !== null) {
      // 判断相交
      if (pA === pB) return pA;
      // 步进
      pA = pA.next;
      pB = pB.next;
  }
  // return 没有找到
  return null;
};