/**
 * leet: https://leetcode-cn.com/problems/lfu-cache/
 * Date: 2022-2-25
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247486545&idx=1&sn=315ebfafa82c0dd3bcd9197eb270a7b6&scene=21#wechat_redirect
 */

 const increaseFreq = Symbol('increaseFreq');
 const removeMinFreqKey = Symbol('removeMinFreqKey');
 const addKeyVal = Symbol('addKeyVal');
 
 /**
  * 3个Map互相配合：key2ValMap key2FreqMap freq2KeyMap
  * @param {number} capacity
  */
 var LFUCache = function(capacity) {
     this.capacity = capacity;
     // 3个数据结构 分散操作 很容易不同步 所以封装一层 统一操作 屏蔽每个数据结构的操作细节
     this.key2ValMap = new Map(); 
     this.key2FreqMap = new Map(); 
     this.freq2KeyMap = new Map(); // 频率映射到key， 一定存在多个key的freq是一样的，也就是freq:key是一对多的映射关系，这里我们freq的每一个对应的value采用Set, 最先加入Set的就是最早的，优先删除的
     // 记录最小的freq
     this.minFreq = 0;
 };
 
 /** 
  * @param {number} key
  * @return {number}
  */
 LFUCache.prototype.get = function(key) {
     // 查找是否在key2ValMap中 不在 返回-1
     if (!this.key2ValMap.has(key)) return -1;
     // 增加key对应的freq
     this[increaseFreq](key);
     // 返回结果
     return this.key2ValMap.get(key);
 };
 
 /** 
  * @param {number} key 
  * @param {number} value
  * @return {void}
  */
 LFUCache.prototype.put = function(key, value) {
     if (this.capacity <= 0) return;
 
     // 如果key已经存在 则变更其值和对应的freq
     if (this.key2ValMap.has(key)) {
         this[increaseFreq](key);
         this.key2ValMap.set(key, value);
         return;
     }
     // key不存在 则插入
     // 1. 检测是否达到容量 达到容量 进行一次淘汰处理（最少使用 最旧的） 腾出位置
     if (this.key2ValMap.size >= this.capacity) {
         this[removeMinFreqKey]();
     }
     // 2. 新key:val的插入 更新freq
     this[increaseFreq](key);
     this.key2ValMap.set(key, value);
     // 3. 更新minFreq 最新插入的 freq必然是1 必然是最小的
     this.minFreq = 1;
 };
 
 /**
  * 删除最小频率的key 
  * 相同频率下 删除最旧的
  */
 LFUCache.prototype[removeMinFreqKey] = function() {
     // 找到当前最小频率的key
     const minFreqKeySet = this.freq2KeyMap.get(this.minFreq);
     const minFreqKey = minFreqKeySet.values().next().value;
 
     // 删除当前最小频率的key (3个数据结构同步删除)
     this.key2ValMap.delete(minFreqKey);
     this.key2FreqMap.delete(minFreqKey);
     minFreqKeySet.delete(minFreqKey);
     if (minFreqKeySet.size <= 0) {
         // 如果这个freq对应的Set已经空了 这个freq对应的key在map就可以删除掉了
         this.freq2KeyMap.delete(this.minFreq);
     }
     // 更新 minFreq ？？ - 这里不需要更新minFreq 因为removeMinFreqKey是在put时调用 在put中会设置minFreq为1（刚put进来的key:val）
 }
 
 
 LFUCache.prototype[increaseFreq] = function(key) {
     const oldFreq = this.key2FreqMap.get(key) || 0;
     const newFreq = oldFreq + 1;
     
     // 更新key2FreqMap
     this.key2FreqMap.set(key, newFreq);
 
     // 更新freq2KeyMap
     //  1. 将key从oldFreq对应的Set中移除
     if (this.freq2KeyMap.has(oldFreq)) {
         const oldFreqKeySet = this.freq2KeyMap.get(oldFreq);
         oldFreqKeySet.delete(key);
         // oldFreq对应的Set如果空了 记得移除该newFreq
         if (oldFreqKeySet.size <= 0) {
             this.freq2KeyMap.delete(oldFreq);
             // 关键：如果这个oldFreq恰好是minFreq 则需要更新minFreq为newFraq
             if (oldFreq === this.minFreq) this.minFreq = newFreq;    
         }
     }
     //  2. 将key加入到newFreq对应的Set中
     if (this.freq2KeyMap.has(newFreq)) {
         // newFreq已经有了
         this.freq2KeyMap.get(newFreq).add(key);
     } else {
         // newFreq还没有
         this.freq2KeyMap.set(newFreq, new Set().add(key));
     }
 }
 
 
 
 /**
  * Your LFUCache object will be instantiated and called as such:
  * var obj = new LFUCache(capacity)
  * var param_1 = obj.get(key)
  * obj.put(key,value)
  */