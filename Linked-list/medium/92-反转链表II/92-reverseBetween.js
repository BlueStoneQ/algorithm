/**
 * leet: https://leetcode-cn.com/problems/reverse-linked-list-ii/
 * Date: 2022-2-3
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484467&idx=1&sn=beb3ae89993b812eeaa6bbdeda63c494&scene=21#wechat_redirect
 * leet-题解：https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/
 * 链表问题：一定要注意边界：头结点 尾节点 空链表的情况，一般的最佳实践就是：
 *  - 虚拟头结点
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 找到链表head中的第index个节点，index从1开始
 * 比较工整 和 比较好理解的方法：分解法（分治法：分解成几个小问题，分别解决）
 * 1. 根据left 和 right 找到对应的node的指针p（重要的是：找到left的前驱节点，right的后驱节点）
 * 2. 上面找到切割点，将要翻转的链表切割出来
 * 2. 翻转切割出来链表
 * 3. 将翻转后的链表接进去（注意这个时候左右已经颠倒了）
 */
 const findPByIndex = (head, index) => {
  if (index < 1) return null;
  let resP = head;
  while (resP !== null && index > 0) {
      resP = resP.next;
      index--;
  }
  return resP;
}

/**
* 反转一个链表
* 1. 为了更清晰主思路 将这一部分封装出来
*/
const reverseLinkedList = function(head) {
   // 准备3个辅助指针
   let pre = null, curP = head, next = null;
   while (curP !== null) {
      // 反转
      next = curP.next;
      curP.next = pre;
      // 步进
      pre = curP;
      curP = next;
   }
   // 返回结果
   return pre;
}

/**
* 迭代法1：切断left -> right的子链subLink 对subLink进行反转 然后 再反向接入原来的链表中
* 注意保存好left 和 right的前后节点，可以把[left,right]看作一个单独的链表处理
* @param {ListNode} head
* @param {number} left
* @param {number} right
* @return {ListNode}
*/
var reverseBetween = function(head, left, right) {
  // 防御
  // 1. 初始化数据
  // 初始化虚拟头结点 避免对于head多种情况的判断（或者一些边界情况）
  const dummy = new ListNode(-1, null);
  dummy.next = head;
  // 先找到leftP 和 rightP, dummy相当于给链表增加了一个0下标 这样left就可以从0计数了 也就是left就可以理解为一个下标了 left处，就是从0（dummy）走了left步 （添加一个0节点 让下标和数组的一样 方便处理）
  let leftP = findPByIndex(dummy, left), rightP = findPByIndex(dummy, right);
  // 保存leftP和rightP的前驱和后继节点（方便后面重新接入原链表）
  const leftPreP = findPByIndex(dummy, left - 1) || dummy, rightNextP = rightP.next || null;
  // 2. 切割出子链表
  leftPreP.next = null;
  rightP.next = null;
  // 3. 反转子链表
  reverseLinkedList(leftP);
  // 4. 反转后的子链表接入原来链表
  leftPreP.next = rightP;
  leftP.next = rightNextP;
  // 5. 返回结果
  return dummy.next;
};



/***
 * ********************************************方法2：迭代法-头插法****************************************************************
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 迭代法2：头插法 - 一次遍历
 * 1. 注意：多个指针可以指向同一个节点 理解：指针 指针 指针！！
 * 2. 所谓头插法，就是把一个一个节点插到head部分
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
   // 防御
   // 初始化变量
   // - 初始化虚拟头节点 (防止head在算法中改变 都是头的情况，保证head可以和其他节点一致的操作)
   const dummy = new ListNode(-1, null);
   dummy.next = head;
   // 定义反转需要的三个指针 pre指针的起点设置为dummy 这样left就和可以理解为数组下标了 和下标对齐了（从0起步了，节点0就是dummy这个虚拟的节点）
   // cur 和  pre的指向始终不变： pre始终指向要反转的子链表的前一个节点 cur始终指向反转的子链表的第一个节点 
   let pre = dummy, cur = dummy, next = null;
   // 初始化pre到left的前一个位置:pre向右移动left - 1个位置[0, left - 1 - 1]
   for (let i = 0; i < left - 1; i++) {
       pre = pre.next;
   }
   cur = pre.next;
   // 核心算法：https://leetcode.cn/problems/reverse-linked-list-ii/solutions/663921/yi-ge-neng-ying-yong-suo-you-lian-biao-t-vjx6/
   for (let i = 0; i < right - left; i++) {
       // 头插式反转 (核心其实是交换cur 和 next)
       next = cur.next; // 步进：指向接下来要被头插的节点
       // 开始头插：将next插入到pre和cur之间
       cur.next = next.next;
       next.next = pre.next;
       pre.next = next;
       // 不用步进 pre 和 cur 始终指向一个各自的节点 节点不变, pre始终指向整个子链表的前驱节点：就是哨兵节点
   }
   // 返回结果
   return dummy.next;
};