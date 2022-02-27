/**
 * leet: https://leetcode-cn.com/problems/insert-delete-getrandom-o1/
 * Date: 2022-2-26
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487414&idx=1&sn=2be87c0c9279da447f8ac8b8406230fe&scene=21#wechat_redirect
 * 这一版是一般的主流解法 也是东哥推荐的
 * 不过 和使用了Set一样 这里也使用了Map 也会存在hash碰撞后将时间复杂度降低到O(n)的情况 所以 我个人觉得在js这个语言中最合适的解法就是直接使用Set
 */


/**
 方法2（主流解法）：使用数组 + hashMap实现 - 用更底层的方法
 Set如果底层使用拉链 或者 线性查找 优先级就不会O(1)了
 */

 const swap = Symbol('swap');

 var RandomizedSet = function() {
     this.cache = [];
     this.val2IndexMap = new Map(); // 记录 值在数组中的下标
 };
 
 /** 
  * 默认插入到末尾
  * @param {number} val
  * @return {boolean}
  */
 RandomizedSet.prototype.insert = function(val) {
     // 当val已经存在 返回false
     if (this.val2IndexMap.has(val)) return false;
 
     // 当val不存在时 插入该项 更新相关数据
     this.cache.push(val);
     this.val2IndexMap.set(val, this.cache.length - 1);
     return true;
 };
 
 /** 
  * @param {number} val
  * @return {boolean}
  */
 RandomizedSet.prototype.remove = function(val) {
     // 当val不存在时 返回false
     if (!this.val2IndexMap.has(val)) return false;
 
     // 当val存在时 从map中得到val对应的index 将val和末尾的值 互换位置 并pop出去末尾 
     const index = this.val2IndexMap.get(val);
     const lastIndex = this.cache.length - 1;
     // 同步this.val2IndexMap
     this.val2IndexMap.set(this.cache[lastIndex], index); // 1. 设置交换后的新值的键值对 设置这一步需要放在前面 如果index === lastIndex === 0，则先设置后再删除 不会出现刚刚删除 后来又设置的情况
     this.val2IndexMap.delete(val); // 2. 删除旧值的键值对
     // 交换
     this[swap](index, lastIndex);
     // pop 实际删除
     this.cache.pop();
     return true;
 };
 
 /**
  * @return {number}
  */
 RandomizedSet.prototype.getRandom = function() {
     // 获取随机合法下标
     const index = Math.floor(Math.random() * this.cache.length);
     // 返回值 数组的下标访问 O(1)
     return this.cache[index];
 };
 
 /**
  * 互换this.cache中index1 和 index2 位置的值
  */
 RandomizedSet.prototype[swap] = function(index1, index2) {
     const temp = this.cache[index1];
     this.cache[index1] = this.cache[index2];
     this.cache[index2] = temp;
 }
 
 /**
  * Your RandomizedSet object will be instantiated and called as such:
  * var obj = new RandomizedSet()
  * var param_1 = obj.insert(val)
  * var param_2 = obj.remove(val)
  * var param_3 = obj.getRandom()
  */