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
 * 双指针 + 虚拟头结点
 * 从head开始合并 很像合拉链
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
    // 其实就是不断填充p.next所指的指针位置 p不断沿着next前移 确定新链表的每一环
    if (p1.val < p2.val) {
      p.next = p1;
      // 指针前进
      p1 = p1.next;
    } else {
      p.next = p2;
      // 指针前进
      p2 = p2.next;
    }

    // 结果的指针前进
    p = p.next;
  }

  // 程序走到这里 p1 或者 p2 一定有一个已经遍历到末尾了 值为null 所以下面的2个case 只会走进一个，把未遍历结束的剩下的链表贴在当前新链表的末尾
  // 未遍历完的链表的部分 可以直接整段拼接在p的后面（此时p正指向新链表的末尾节点, 只要把剩余链表的头p1拼在p的后面即可）
  if (p1 !== null) {
      p.next = p1;
  }

  if (p2 !== null) {
      p.next = p2;
  }

  // 返回结果 （虚拟头结点本身是不存任何有效数据的，所以真的链表都是从dummy的next开始的 dummy.next才是真正的head）
  return dummyHead.next; 
};


