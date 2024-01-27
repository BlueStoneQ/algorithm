/**
 * leet: https://leetcode-cn.com/problems/lru-cache/
 * Date: 2022-2-24 
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247486428&idx=1&sn=3611a14535669ba3372c73e24121247c&scene=21#wechat_redirect
 * 方法1： 使用Map
 * 利用Map的有序性：旧 -> 新, set每次都是在队尾添加元素
 * 
    算法骨架:
    - Map<>: 队头是旧的，队尾是新的
    - get: addRecently(k) -> return map.get(k)
    - set: 
        - 是否已存在：
            - 存在: addRecently(k)
            - 不存在 -> 判满: 
                - 已满：则del.队头k（del map.keys().next().value） -> set(k, v)
                - 未满：直接map.set(key, value)
    - addRecently: map.del(k), set(k, v)
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
         // 这里获得map的第一个key也可以用Array.from(this.cache.keys())[0]
         const oldestKey = this.cache.keys().next().value;
         this.cache.delete(oldestKey);
     }
 
     this.cache.set(key, value);
 };
 
 /**
  * ⭕️[关键]将key提升至最近访问（map最新插入的位置（末尾）, 并赋值val）
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