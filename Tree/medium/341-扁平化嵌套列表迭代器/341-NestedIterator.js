/**
 * leet: https://leetcode-cn.com/problems/flatten-nested-list-iterator/
 * Date: 2022-2-7
 * dong：https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485629&idx=1&sn=fc0d0fc2b8618a9b8a575cfa9d5b1c4a&scene=21#wechat_redirect
 *  - 好好读题 学会审题 是成功的第一步
 */

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

 const flatten = Symbol('flatten');

 /**
  * 核心数据结构：我们选择数组
  * 将数据拉平后 存入数组中
  * 1. 本质上就是一个json型数据的递归遍历（深拷贝算法中有），而json是典型的多叉树
  * 2. 缺点：对内存不友好：如果nestedList数据量很大的话 一次存入数组（内存）有内存溢出的风险
  * @constructor
  * @param {NestedInteger[]} nestedList
  */
 var NestedIterator = function(nestedList) {
     // 核心逻辑：将nestedList拉平后存到this.storage中, 拉平，就是把一个树拉成线性数据结构
     this.storage = this[flatten](nestedList);
 };
 
 
 /**
  * @this NestedIterator
  * @returns {boolean}
  */
 NestedIterator.prototype.hasNext = function() {
     return this.storage.length !== 0;
 };
 
 /**
  * @this NestedIterator
  * @returns {integer}
  */
 NestedIterator.prototype.next = function() {
     return this.storage.shift();
 };
 
 /**
  * 辅助函数：flatten 帮助 把输入的nestedList拉平为一个数组 然后return出来
  * 核心原理：遍历一个多叉树状数据结构 可以理解为json中的Array遍历 在深拷贝中 我们有类似的遍历
  */
 NestedIterator.prototype[flatten] = function(nestedList) {
     // 防御
     if (nestedList.length === 0) return [];
     // 初始化变量
     const res = [];
     // 辅助函数
     function _flatten(nestedList) {
         // 如果当前值为nestedList(不是数字的话 就必须是nestedList了) 则需要循环每个值 并递归调用_flatten 直到它是基础结构
         for (let i = 0; i < nestedList.length; i++) {
             if (nestedList[i].isInteger()) {
                 // 如果当前值为单值（基础结构） 则直接push到res中
                 res.push(nestedList[i].getInteger());
                 continue;
             };
             _flatten(nestedList[i].getList());
         }
     }
 
     // 调用辅助函数
     _flatten(nestedList);
 
     return res;
 }
 
 /**
  * Your NestedIterator will be called like this:
  * var i = new NestedIterator(nestedList), a = [];
  * while (i.hasNext()) a.push(i.next());
 */