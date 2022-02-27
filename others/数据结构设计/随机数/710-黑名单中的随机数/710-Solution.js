/**
 * leet: https://leetcode-cn.com/problems/random-pick-with-blacklist/
 * Date: 2022-2-27
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487414&idx=1&sn=2be87c0c9279da447f8ac8b8406230fe&scene=21#wechat_redirect
 */

/**
 * [0, n-1] 可以分为白名单 和 黑名单 3个逻辑部分
 * 白名单的实际长度为：whiteListLength = n - blackList.length
 * 则将[0, n -1] 分成2个区间进行处理 wList = [0, whiteListLength - 1], bList = [whiteListLength, n - 1]
 * 建立wList中黑名单元素到 bList中白名单元素的映射b2wMap（wList中黑名单元素的个数必然等于bList中白名单的个数 例如交换下 你就知道了 因为白名单元素个数为whiteListLength)
 * 在pick中随机生成一个[0, whileListLength - 1]中的下标 如果该下标（值）位于b2wMap中 则证明该元素为balckList成员，则返回其映射过去的白名单元素
 * @param {number} n
 * @param {number[]} blacklist
 */
 var Solution = function(n, blacklist) {
  // 逻辑白名单长度
  this.whiteListLength = n - blacklist.length;
  this.black2whiteMap = new Map();

  // 初始化 black2whiteMap 记录到每一个blackList元素 方便后面判断是否为blackList元素
  for (const blackVal of blacklist) {
      this.black2whiteMap.set(blackVal, NaN);
  }

  // 建立[0, whiteListLength - 1]中的黑名单元素到[whiteListLength, n - 1]的映射
  let last = n - 1; // 从后向前取值
  for (const blackVal of blacklist) {
      // [whiteListLength, n - 1]中的黑名单元素 不需要映射 因为不会取到（到时候取的范围只有逻辑白名单）
      if (blackVal > this.whiteListLength - 1) continue;
      // 从末尾向前取到一个[whiteListLength, n - 1]中的白名单元素
      while (this.black2whiteMap.has(last)) last--;
      this.black2whiteMap.set(blackVal, last);
      last--;
  }
};

/**
* @return {number}
*/
Solution.prototype.pick = function() {
  const index = Math.floor(Math.random() * this.whiteListLength);
  
  if (this.black2whiteMap.has(index)) return this.black2whiteMap.get(index);

  return index;
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(n, blacklist)
* var param_1 = obj.pick()
*/