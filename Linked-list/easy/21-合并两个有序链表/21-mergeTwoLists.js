/**
 * leet: https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * Date: 2022-2-2
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492022&idx=1&sn=35f6cb8ab60794f8f52338fab3e5cda5&scene=21#wechat_redirect
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // 防御
  // 初始值
  // 建一个虚拟头节点 避免单独处理头结点等边界情况
  const dummyHead = new ListNode();
  let p = dummyHead;
  let p1 = list1, p2 = list2;
  // 核心算法
  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }

    // 指针前进
    p = p.next;
  }

  // 未遍历完的链表的部分 可以直接拼接在p的后面
  if (p1 !== null) {
      p.next = p1;
  }

  if (p2 !== null) {
      p.next = p2;
  }

  // 返回结果 （虚拟头结点本身是不存任何有效数据的，所以真的链表都是从dummy的next开始的 dummy.next才是真正的head）
  return dummyHead.next; 
};


