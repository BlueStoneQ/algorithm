/**
 * leet: https://leetcode-cn.com/problems/design-linked-list/
 * Date: 2022-2-21
 * kaer: https://programmercarl.com/0707.%E8%AE%BE%E8%AE%A1%E9%93%BE%E8%A1%A8.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

 const getNode = Symbol('getNode');

 /**
  * 单链表
  */
 class LinkedNode {
     constructor(val, next) {
         this.val = val !== undefined ? val : 0; // 0是一个取不到的值 也就是非法值
         this.next = next !== null ? next : null;
     }
 }
 
 
 var MyLinkedList = function() {
     this.size = 0;
     this.head = null;
     this.tail = null;
 };
 
 /**
  * 私有方法
  * @param {number} index
  * @return {number}
  */
 MyLinkedList.prototype[getNode] = function(index) {
     if (index < 0 || index >= this.size) return null;
     // init data
     // 涉及到链表遍历的 一般使用虚拟头结点 处理头结点的边界情况
     const dummy = new LinkedNode(0, this.head);
     let p = dummy; // 第0个节点 就是dummy
     // 循环 0 -> head 这里index最终走到-1 是因为我们加了虚拟头结点 链表的遍历长度实际上+1了 所以得多步进一步
     while (p !== null && index-- >= 0) {
         // 步进
         p = p.next;
     }
     // 遍历结束
     return p;
 };
 
 /**
  * @param {number} index
  * @return {number}
  */
 MyLinkedList.prototype.get = function(index) {
     // defend
     if (index < 0 || index >= this.size) return -1;
     // return
     const findNode = this[getNode](index);
     return findNode === null ? -1 : findNode.val;
 };
 
 /** 
  * @param {number} val
  * @return {void}
  */
 MyLinkedList.prototype.addAtHead = function(val) {
     // 构造新节点, 注意next是之前的head
     const node = new LinkedNode(val, this.head);
     // 新节点挂载都head上
     this.head = node;
     // 注意tail为null的情况 表明链表之前是空的 增加一个节点后 该节点既是头节点 也是尾节点
     if (this.tail === null) this.tail = node;
     // 更新size
     this.size++;
 };
 
 /** 
  * @param {number} val
  * @return {void}
  */
 MyLinkedList.prototype.addAtTail = function(val) {
     // 构造新节点 注意next应该是null
     const node = new LinkedNode(val, null);
     // 挂载
     if (this.tail === null) {
         // 1. 之前是空链 this.tail 和 head均同时指向该节点
         this.tail = node;
         this.head = node;
     } else {
         // 2. 之前不是空链 挂载到目前tail节点的next上
         this.tail.next = node;
         // 移动tail指针
         this.tail = node;
     }
     // 更新size
     this.size++;
 };
 
 /** 
  * @param {number} index 从0开始
  * @param {number} val
  * @return {void}
  */
 MyLinkedList.prototype.addAtIndex = function(index, val) {
     // defend index
     if (index > this.size) return;
     // 特殊case1 index < 0 插入到头部
     if (index <= 0) {
         this.addAtHead(val);
         return;
     }
 
     // 特殊case2 index === this.size 插入到尾部
     if (index === this.size) {
         this.addAtTail(val);
         return;
     }
 
     // 找到下标为index的前驱节点：即下标为index-1的节点
     const preNode = this[getNode](index - 1);
     // 构造新节点 注意 这里的next已经赋值了 preNode.next 后面就不用再处理了
     const node = new LinkedNode(val, preNode.next);
     // 使用构造的前驱节点插入新节点
     preNode.next = node;
     // 更新size
     this.size++;
 };
 
 /** 
  * @param {number} index
  * @return {void}
  */
 MyLinkedList.prototype.deleteAtIndex = function(index) {
     // defend index
     if (index < 0 || index >= this.size) return;
     // 找到index节点的前驱节点
     const preNode = this[getNode](index - 1);
     // case1 删除头结点
     if (index === 0) {
         this.head = this.head.next;
         // 删除的这个节点同时也是尾节点 也就是单节点的链表
         if (index === this.size - 1) {
             this.tail = this.head;
         }
         this.size--;
         return;
     }
     // case2 删除index节点
     if (preNode !== null && preNode.next !== null) {
         preNode.next = preNode.next.next;
     }
     // 处理尾节点
     if (index === this.size - 1) {
         this.tail = preNode;
     }
     // 更新size
     this.size--;
 };
 
 /**
  * Your MyLinkedList object will be instantiated and called as such:
  * var obj = new MyLinkedList()
  * var param_1 = obj.get(index)
  * obj.addAtHead(val)
  * obj.addAtTail(val)
  * obj.addAtIndex(index,val)
  * obj.deleteAtIndex(index)
  */