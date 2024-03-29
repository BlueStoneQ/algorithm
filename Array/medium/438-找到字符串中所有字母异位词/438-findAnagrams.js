/**
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 * leet: date: 2022-1-31
 * dongge: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485141&idx=1&sn=0e4583ad935e76e9a3f6793792e60734&scene=21#wechat_redirect
 * 类型: 滑动窗口
 */

 (() => {
  // 重写一个计数用的Map方法
  Map.prototype.$addCount = function(key, val) {
    const originalCharCount = this.get(key) || 0;
    this.set(key, originalCharCount + val);
  }
})()

/**
 * 该题算法直接从567题改写而来
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
   // 参数转为567题解的参数
   const s2 = s; // sourceStr
   const s1 = p; // targetStr
   // 防御
   if (typeof s1 !== 'string') return;
   if (typeof s2 !== 'string') return;
   if (s1.length > s2.length) return []; // 注意这个边界值要求返回的情况 要返回[]
   // 初始化变量
   const res = [];
   const s2Len = s2.length;
   const s1Len = s1.length;
   let leftIndex = 0, rightIndex = 0;
   let valid = 0; // 表示窗口中满足s1Char2CountMap条件的字符个数，如果valid和s1Char2CountMap.size的大小相同，则说明窗口已满足条件，已经完全覆盖了串s1
   const windowChar2CountMap = new Map(); // 记录窗口中每个有效字符的count
   const s1Char2CountMap = new Map(); // 构造s1映射出来的map { char => count }，记录/描述s2中每个字符出现的次数
   for (const s1Char of s1) {
    s1Char2CountMap.$addCount(s1Char, +1); // addCount为自己手动在Map原型上自定义的方法
   }
   // 核心算法: 滑动窗口 用双指针在s2上滑动遍历 s1只是作为查的表
   while (rightIndex < s2Len) {
     // 记录将要移进窗口的值
     const willInChar = s2[rightIndex];
     // 扩大窗口
     rightIndex++;
     // 更新一系列记录的数据结构（window的）
     if (s1Char2CountMap.has(willInChar)) {
       windowChar2CountMap.$addCount(willInChar, +1); // +只是为了语义 无实际意义
       if (windowChar2CountMap.get(willInChar) === s1Char2CountMap.get(willInChar)) valid++;
     }
     // 缩小窗口: 只要shrink条件满足 就可以一直缩小 所以使用while shrink条件：subStr目前覆盖了s1
     while (valid === s1Char2CountMap.size) {
       // 判断子串是否是s1的全排列 是的话 则找到该子串 return true 程序结束
       // 伪代码：if (subStr.length === s1.length) return true;
       if (rightIndex - leftIndex === s1Len) res.push(leftIndex);
       // 记录将要移出窗口的值
       const willOutChar = s2[leftIndex];
       // 窗口收缩
       leftIndex++;
       // 收缩后更新一系列值 - 首先判断willOutChar是有效字符
       if (s1Char2CountMap.has(willOutChar)) {
        // 1. 如果收缩前 窗口该字符串数量刚好满足s1 则移出后 该平衡被打破 valid需要减一，也就是停止缩小窗口
        if (windowChar2CountMap.get(willOutChar) === s1Char2CountMap.get(willOutChar)) valid--;
        windowChar2CountMap.$addCount(willOutChar, -1); // 注意 这里是-1 就是数量减1
       }
     }
   }
   // 返回值 遍历后没找到 就返回false
   return res;
};

findAnagrams("aaaaaaaaaa", "aaaaaaaaaaaaa");

module.exports = findAnagrams;