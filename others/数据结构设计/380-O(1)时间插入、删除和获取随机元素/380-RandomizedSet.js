/**
 * leet: https://leetcode-cn.com/problems/insert-delete-getrandom-o1/
 * Date: 2022-2-26
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487414&idx=1&sn=2be87c0c9279da447f8ac8b8406230fe&scene=21#wechat_redirect
 */

 const getRandomIndex = Symbol('getRandomIndex');

 /**
  * 方法1：使用内置的Set实现该Set
  */
 var RandomizedSet = function() {
     this.chache = new Set();
 };
 
 /** 
  * @param {number} val
  * @return {boolean}
  */
 RandomizedSet.prototype.insert = function(val) {
     if (this.chache.has(val)) {
         return false;
     }
 
     this.chache.add(val);
     return true;
 };
 
 /** 
  * @param {number} val
  * @return {boolean}
  */
 RandomizedSet.prototype.remove = function(val) {
     if (this.chache.has(val)) {
         this.chache.delete(val);
         return true;
     }
 
     return false;
 };
 
 /**
  * @return {number}
  */
 RandomizedSet.prototype.getRandom = function() {
     // 生成size内的下标
     const randomIndex = this[getRandomIndex]();
     // 将Set转为数组 用下标找到元素 返回该随机元素
     return Array.from(this.chache)[randomIndex];
 };
 
 /**
  * 求各种区间随机数的方法很实用 能很熟练写出来
  */
 RandomizedSet.prototype[getRandomIndex] = function() {
     const k = Math.random();
     const res = Math.floor(this.chache.size * k);
     return res;
 }
 
 /**
  * Your RandomizedSet object will be instantiated and called as such:
  * var obj = new RandomizedSet()
  * var param_1 = obj.insert(val)
  * var param_2 = obj.remove(val)
  * var param_3 = obj.getRandom()
  */