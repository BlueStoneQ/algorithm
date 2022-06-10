/**
 * leet: https://leetcode-cn.com/problems/remove-duplicate-letters/
 * date：2022-2-2
 * dong: https://labuladong.github.io/algo/2/18/31/
 * 参考：[字符编码](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)
 *  - 对于英语字母，UTF-8 编码和 ASCII 码是相同的
 * 同类型题：[1081](https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters/)
 */

/**
 * dongge: 借助单调栈（js中提供了天然的栈结构：Array）：
 * 1. 选择性去重
 *  - 借助Set Map 或者 Array 等 都可以实现查重的作用
 * 2. 所有去重结果中 字典序最小的
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
  // 防御
  if (typeof s !== 'string') return;
  if (s.length <= 0) return s;
  // 初始化值
  // 存放去重结果的栈
  const resStack = [];
  // 查重用的数据结构：布尔数组初始值为 false，记录栈中是否存在某个字符(输入字符均为 ASCII 字符，所以大小 256 够用了)
  const boolArr = new Array(256).fill(false);
  // 统计下该字符串未访问的部分中每个字符的个数，下标是该字符的code码
  const count = new Array(256).fill(0);
  for (const char of s) {
    count[char.charCodeAt()]++;
  }
  // 核心算法
  for (let i= 0; i < s.length; i++) {
    // 当前元素
    const curChar = s[i];
    const curCharCode = s.charCodeAt(i);
    // 访问过的则count中元素减一
    count[curCharCode]--;
    // 查重: 查到重复的跳过 
    if (boolArr[curCharCode]) continue;
    // 保证字典序：判断下字典序的大小 如果当前字符的字典序小于之前进入resStack的字符 则pop之前的字符 （字符之间的比较：会比较第一个不一样的字符的ascll码值）
    while (resStack.length > 0 && curChar < resStack[resStack.length - 1]) {
      // 如果该字符只有唯一一个 则停止pop （否则就会造成结果中缺失该字符） 保持有序
      if (count[resStack[resStack.length - 1].charCodeAt()] === 0) break;
      // 出栈字典序大的元素 同时更新boolArr （出栈的元素 其实就是最后结果中排在curChar前面的字符，也就是最后排在curChar前面的元素 如果有字典序大于当前cur的，并且后面s中还有的（不是唯一一个） 需要出栈）
      const popCharCode = resStack.pop().charCodeAt();
      boolArr[popCharCode] = false;
    }
    // 通过查重的字符 就是非重复的 存入stack
    resStack.push(s[i]);
    boolArr[curCharCode] = true;
  }
  // 返回结果
  return resStack.join('');
};

// /**
//  * 给array增加stack的peek方法 返回值同pop 但是不会删除栈顶元素
//  */
// (function() {
//   Array.prototype.$peek = function() {
//     return this[this.length - 1];
//   }
// })()

// /**
//  * // 构造辅助数据结构：记录s中每个字符的code 在s中出现的次数
//  */
// class sMap {
//   constructor(s) {
//     this.map = new Map();
//     for (const char of s) {
//       this.addCount(char);
//     }    
//   }

//   addCount(char) {
//     this.setCount(char, +1);
//   }

//   reduceCount(char) {
//     this.setCount(char, -1);
//   }

//   set(char, { count = 0, isReaded = false }) {
//     let originalCount = 0;
//     if (this.map.has(char)) {
//       // 更新下count值
//       originalCount = this.map.get(char).count;
//     }
//     sMap.set(char, {
//       isReaded: isReaded, // 是否已经被读过, 用来查重
//       count: originalCount + count, // 出现的次数
//     });
//   }

//   // 标记已读的元素 已读：true
//   markReaded(char) {
//     this.set();
//   }
// }

// /**
//  * me:
//  * 在东哥思路基础上，优先构造一个辅助数据结构(见上面) 避免零散的辅助数据结构 对主逻辑的可读性造成影响
//  * @param {*} s 
//  * @returns 
//  */
// var removeDuplicateLetters2 = function(s) {
//   // 防御
//   if (typeof s !== 'string') return;
//   if (s.length <= 0) return s;
//   // 初始化值
//   const resStack = [];
//   // 构造辅助数据结构：记录s中每个字符的code 在s中出现的次数
//   const sMap = new Map();
//   for (const char of s) {
//     let originalCount = 0;
//     if (sMap.has(char)) {
//       // 更新下count值
//       originalCount = sMap.get(char).count;
//     }
//     sMap.set(char, {
//       isReaded: false, // 是否已经被读过, 用来查重
//       count: originalCount + 1, // 出现的次数
//     });
//   }
//   // 核心算法
//   for (const curChar of s) {
//     while() {}
//     // 更新resStack 和 sMap
//     sMap
//   }
//   // 返回结果
//   return resStack.join('');
// }


const res = removeDuplicateLetters('bcabc');
console.log(res);