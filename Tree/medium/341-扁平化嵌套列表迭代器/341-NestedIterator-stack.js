/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */


/**
 * 利用栈实现一个惰性求值的方案
 * 一般的迭代器求值应该是「惰性的」，也就是说，如果你要一个结果，我就算一个（或是一小部分）结果出来，而不是一次把所有结果都算出来。这样对内存比较友好
 * 题解：https://leetcode-cn.com/problems/flatten-nested-list-iterator/solution/zhan-he-di-gui-liang-chong-jie-fa-341-bi-lunq/
 */

 const updateStack = Symbol('updateStack');

 /**
  * 惰性求值：栈
  * @constructor
  * @param {NestedInteger[]} nestedList
  */
 var NestedIterator = function(nestedList) {
     this.stack = [];
     // 先把当前层push进栈, 为了pop时是顺序 必须倒着入栈！！！
     for (let i = nestedList.length - 1; i >= 0; i--) {
         this.stack.push(nestedList[i]);
     }
 };
 
 
 /**
  * @this NestedIterator
  * @returns {boolean}
  */
 NestedIterator.prototype.hasNext = function() {
     this[updateStack]();
     return this.stack.length > 0;
 };
 
 /**
  * @this NestedIterator
  * @returns {integer}
  */
 NestedIterator.prototype.next = function() {
     this[updateStack]();
     return this.stack.pop().getInteger();
 };
 
 /**
  * 辅助方法：
  * 1. 更新当前的this.stack
  * 2. 将当前栈最顶层不断展开入栈，直到保证栈的顶层为int
  */
 NestedIterator.prototype[updateStack] = function() {
     while (this.stack.length > 0) {
         const peek = this.stack[this.stack.length - 1];
         // 当前栈顶为int 则不做什么动作 结束函数
         if (peek.isInteger()) return;
         // 当前栈顶是list 则将当前栈顶pop 然后将栈顶list展开 一项项入栈
             // 为了pop时是顺序 必须倒着入栈！！！
         this.stack.pop();
         const peekList = peek.getList();
         for (let i = peekList.length - 1; i >= 0; i--) {
             this.stack.push(peekList[i]);
         }
     }
 }
 
 
 /**
  * Your NestedIterator will be called like this:
  * var i = new NestedIterator(nestedList), a = [];
  * while (i.hasNext()) a.push(i.next());
 */