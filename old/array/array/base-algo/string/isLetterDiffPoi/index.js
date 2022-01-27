/**
 * 2021-6-1
 * 判断是否为有效的字母异位词
 * 1. 字母异位词：2个词的字母种类和数量一致 只是顺序不一致 例如：abc和bca
 */

/**
 * 算法1：算法设计思想(层层过滤掉false的case)：由简到难，由简单开销到复杂开销 - 层层过滤掉return false的情况
 * 1. 比对长度，长度不一致的 return false
 * 2. 每个char的Ascall码值之和相等
 * 3. 用一个m的每一个char去S中indexOf判断
 * @param {String} s 原串
 * @param {String} m 匹配串
 */
const isLetterDiffPoi1 = (s, m) => {
  // 比对长度，长度不一致的 return false
  if (s.length !== m.length) return false;
  // 每个char的Ascall码值之和若不相等 return false
  const sCodeSum = s.split('').reduce((lastSum, nowVal, index) => lastSum + s.charCodeAt(index), 0);
  const mCodeSum = s.split('').reduce((lastSum, nowVal, index) => lastSum + s.charCodeAt(index), 0);
  if (sCodeSum !== mCodeSum) return false;
  //
  for (let i = 0; i < m.length; i++) {
    // 有一个不存在 则返回false
    if (s.indexOf(m[i]) === -1) return false;
  }
  // 经历层层关卡 才能到这里哈哈
  return true;
}

(() => {
  const input1 = 'abkcnd';
  const inputTrue = 'cdankb';
  const inputFalse = 'cakdd';
  console.log(`expect isLetterDiffPoi1(${input1}, ${inputTrue}): `, isLetterDiffPoi1(input1, inputTrue));
  console.log(`expect isLetterDiffPoi1(${input1}, ${inputFalse}): `, isLetterDiffPoi1(input1, inputFalse));
})()