/**
 * leet: https://leetcode-cn.com/problems/range-addition/
 * Date: 2022-1-30
 * 题解：[差分数组](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247494095&idx=3&sn=1f13cb4b49e6ff698d396220ad6c54f7&scene=21#wechat_redirect)
 */

// 构造差分数组类
class Difference {
  constructor(nums) {
    // 防御 这里选择throw 是为了阻止使用者进一步使用 不能return静默处理 否则使用者会把返回值undefined继续作为合法实例进行使用 
    if (!Array.isArray(nums)) throw new Error("Difference constructor need a Array as param");
    // 初始化属性
    this.diffArr = [];
    // 构造差分数组
    this.diffArr[0] = nums[0]; // 下面遍历中访问了i-1下标 所以需要对i=0的情况处理 防止下标越界
    for (let i = 1; i < nums.length; i++) {
      this.diffArr[i] = nums[i] - nums[i - 1];
    }
  }

  /**
   * 给某个闭区间进行增减
   * @param {*} LIndex 增加的区间左下标
   * @param {*} RIndex 增加的区间右下标
   * @param {*} increamentVal 增加的值
   */
  increament(LIndex, RIndex, increamentVal) {
    // 防御
    const diffLen = this.diffArr.length;
    if (typeof LIndex !== 'number') return;
    if (typeof RIndex !== 'number') return;
    if (typeof increamentVal !== 'number') return;
    if (LIndex < 0 || LIndex > diffLen - 1) return;
    if (RIndex < 0 || RIndex > diffLen - 1) return;
    // 可以画图理解下
    // LIndex+1 由于构造结果时 前一项是下一项的base 所以 这个1就会滚动加下去 相当于每一项都加上1 直到遇到diff中抵消的动作 -1
    this.diffArr[LIndex] += increamentVal;
    if (RIndex + 1 < this.diffArr.length) {
      // 在这里斩断增加值的传递
      this.diffArr[RIndex + 1] -= increamentVal;
    }
  }

  /**
   * 由差分数组构建出结果
   */
  getResult() {
    const resArr = [];
    // base case: 很重要的,
    resArr[0] = this.diffArr[0];
    // 遍历diffArr 滚动生成resArr的每一项（也就是前一项新值 是下一项的base）
    for (let i = 1; i < this.diffArr.length; i++) {
      resArr[i] = resArr[i - 1] + this.diffArr[i];
    }
    return resArr;
  }
}

/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
  // 防御
  if (typeof length !== 'number') return;
  if (typeof length === 0) return;
  if (!Array.isArray(updates)) return;
  // 初始化值
  const nums = new Array(length).fill(0);
  const diff = new Difference(nums);
  // 核心算法
  // 区间加法操作
  updates.forEach(([ startIndex, endIndex, inc ]) => {
    diff.increament(startIndex, endIndex, inc);
  });
  // 返回结果
  return diff.getResult();
};

module.exports = getModifiedArray;
