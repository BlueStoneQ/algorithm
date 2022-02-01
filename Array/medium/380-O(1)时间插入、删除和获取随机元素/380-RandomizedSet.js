/**
 * leet: https://leetcode-cn.com/problems/insert-delete-getrandom-o1/
 * Date: 2022-2-1
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487414&idx=1&sn=2be87c0c9279da447f8ac8b8406230fe&scene=21#wechat_redirect
 * 类型：数组的随机算法
 * 关注复杂度要求：时间O(1)
 * 读：如果想「等概率」且「在 O(1) 的时间」取出元素，一定要满足：底层用数组实现，且数组必须是紧凑的
 * 写：但如果用数组存储元素的话，插入，删除的时间复杂度怎么可能是 O(1) 呢？
 * 可以做到！对数组尾部进行插入和删除操作不会涉及数据搬移，时间复杂度是 O(1)。
 * 所以，如果我们想在 O(1) 的时间删除数组中的某一个元素val，可以先把这个元素交换到数组的尾部，然后再pop掉
 */


const swapFn = Symbol('swapFn');
const getRandom = Symbol('getRandom');

var RandomizedSet = function() {
  this.nums = []; // 底层使用数组来存储数据
  this.val2Index = new Map(); // 建立val到index的映射，来查重之类的

  /**
   * 私有方法：交换i j 2个元素
   * @param {*}} i 
   * @param {*} j 
   */
  this[swapFn] = function(i, j) {
    const temp = this.nums[i];
    this.nums[i] = this.nums[j];
    this.nums[j] = temp;
  }

  /**
   * 私有方法 生成 [min,max]之间的随机整数
   * @param {*} min 
   * @param {*} max 
   */
  this[getRandom] = function(min, max) {
    // 防御...
    const _getRandom = () => Math.round(Math.random() * (max + 1 - min) + min);
    let res = _getRandom();
    while (res > max) {
      // 超出边界 则再取一次随机值
      res = _getRandom();
    }
    return res;
  }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  // 查重 查到则返回false
  if (this.val2Index.has(val)) return false;
  this.nums.push(val);
  this.val2Index.set(val, this.nums.length - 1);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  // 查重 是否已存在 不存在的话 则return false
  if (!this.val2Index.has(val)) return false;
  // 交换到末尾 并 更新map记录
  const willDelIndex = this.val2Index.get(val);
  const lastVal = this.nums[this.nums.length - 1];
  this[swapFn](willDelIndex, this.nums.length - 1);
  this.val2Index.set(lastVal, willDelIndex);
  // 删除交换到末尾的元素val的记录
  this.nums.pop();
  this.val2Index.delete(val);
  
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  // 在调用 getRandom 方法时，数据结构中 至少存在一个 元素
  if (this.nums.length <= 0) return;
  if (this.nums.length === 1) return this.nums[0];
  // 产生一个合法的随机index 也就是 0 <= index < this.nums.length的随机数
  const index = this[getRandom](0, this.nums.length - 1);
  // 返回这个nums[index]
  return this.nums[index];
};


/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// test 
const randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
// randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
// randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
// randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
// randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
// randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
// randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。

randomizedSet[getRandom](0, 0);