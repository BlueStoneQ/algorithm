/**
 * 2021-5-27
 * 寻找出字符串中第一个不重复的字符下标
 */

/**
 * 算法1：使用一个map来记录每个字母出现的次数，字母本身作为key,出现的次数作为值
 * @param {*} str 
 */
const findFirstUnRepeatChar1 = (str) => {
  // 作为字典提供缓存查询-辅助数据结构 { char: 出现的次数 }
  const map = {};
  // str转成arr方便遍历处理
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    // 遍历到的当前字符
    const cur = arr[i];
    if (map[cur]) {
      // 如果该字符之前出现过 在原来的字符数量基础上自增
      map[cur]++;
    } else {
      // 该字符第一次出现 出现次数初始化为1
      map[cur] = 1;
    }
  }
  // 对map进行check
  for (let key in map) {
    if (map[key] === 1) return arr.indexOf(key);
  }
}

(() => {
  const input1 = 'lfggefl';
  console.log('expect findFirstUnRepeatChar1(): ', findFirstUnRepeatChar1(input1));
})()