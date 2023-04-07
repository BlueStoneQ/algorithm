/**
 * leet: https://leetcode-cn.com/problems/lru-cache/
 * Date: 2022-2-24 
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247486428&idx=1&sn=3611a14535669ba3372c73e24121247c&scene=21#wechat_redirect
 * 方法1： 使用Map
 */

 const addRecently = Symbol('addRecently');

 /**
  * [√]方法1：使用Map
  *    方法2：使用hash双向链表
  1. 有序
  2. 增删改查满足时间O(1)
  这种数据结构：
  1. Map
  2. hash双向链表

  map中队尾是最新的
  * @param {number} capacity
  */
 var LRUCache = function(capacity) {
     this.cache = new Map(); // map的队尾：最近set的是 最近访问的
     this.capacity = capacity;
 };
 
 /** 
  * @param {number} key
  * @return {number}
  */
 LRUCache.prototype.get = function(key) {
     // 防御：不存在key
     if (!this.cache.has(key)) return -1;
 
     // 次序提升：该条提升至Map的尾部 = 具体操作：删除该条 并重新set
     const val = this.cache.get(key);
     this[addRecently](key, val);
 
     return val;
 };
 
 /** 
  * @param {number} key 
  * @param {number} value
  * @return {void}
  */
 LRUCache.prototype.put = function(key, value) {
     // key已存在
     if (this.cache.has(key)) {
         this[addRecently](key, value);
         return;
     }
     // key不存在 先判满 然后delete第一条记录(最久未访问的) 重新set进新的k:v => 存满后淘汰一次缓存
     if (this.cache.size >= this.capacity) {
         const oldestKey = this.cache.keys().next().value;
         this.cache.delete(oldestKey);
     }
 
     this.cache.set(key, value);
 };
 
 /**
  * 将key提升至最近访问（map最新插入的位置（末尾）, 并赋值val）
  */
 LRUCache.prototype[addRecently] = function(key, val) {
     // 次序提升：该条提升至Map的尾部 = 具体操作：删除该条 并重新set
     this.cache.delete(key);
     this.cache.set(key, val);
 }
 
 
 /**
  * Your LRUCache object will be instantiated and called as such:
  * var obj = new LRUCache(capacity)
  * var param_1 = obj.get(key)
  * obj.put(key,value)
  */