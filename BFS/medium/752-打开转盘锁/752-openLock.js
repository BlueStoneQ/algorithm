/**
 * leet: https://leetcode-cn.com/problems/open-the-lock/
 * 2022-3-8
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485134&idx=1&sn=fd345f8a93dc4444bcc65c57bb46fc35&scene=21#wechat_redirect
 * 题解: https://leetcode-cn.com/problems/open-the-lock/solution/da-kai-zhuan-pan-suo-by-leetcode-solutio-l0xo/
 *  - 官方的题解写得思路更清晰
 */

/**
 * BFS不是最优解 复杂度比较高 甚至爆炸！！！
 * 建议了解下官方的第二种解法：启发式搜索
 * 每个节点有8个相邻节点 本质上 就是求一幅图中的最短距离 所以 最短距离 优先考虑BFS
 * 本质上就是尝试穷举所有的密码组合 在穷举过程中避开deadends + 在找到target后 直接停止穷举 返回波动次数
 * 不过 这个题目 使用BFS的解法 时间复杂度有些高啊
 1、会走回头路。比如说我们从"0000"拨到"1000"，但是等从队列拿出"1000"时，还会拨出一个"0000"，这样的话会产生死循环。
2、没有终止条件，按照题目要求，我们找到target就应该结束并返回拨动的次数。
3、没有对deadends的处理，按道理这些「死亡密码」是不能出现的，也就是说你遇到这些密码的时候需要跳过。
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  // defend
  if (target === '0000') return 0;
  // 将deadEnds转成Set 后面判断的时候 时间复杂度会比直接用数组小
  const deadendSet = new Set(deadends);
  if (deadendSet.has('0000')) return -1;

  // init data 
  let step = 0; // 旋转次数
  // BFS辅助数据结构：队列
  const queue = [];
  queue.push('0000'); // 从 0 0 0 0开始旋转

  const visitedStatusSet = new Set(); // 已经访问过的密码Set进行记录 防止走回头路 造成死循环
  visitedStatusSet.add('0000');

  // algo
  while (queue.length !== 0) {
      // 增加步数：一个while循环实际上对应一次旋转 一次旋转有可能是4个转盘中的一个 所以 需要四次遍历
      // 转动一次
      step++;

      // 所谓的当前层 是基于上一层所有status所枚举出的所有合法的status的可能性 可以理解为爆炸式枚举
      const curLayerSize = queue.length; // 当前层的size

      // 将当前队列所有节点向周围扩散 - 尝试每一种旋转  枚举一次 相当于旋转一次
      // 其实 这里是上一层枚举了每一种可能性后（push进了queue中） 这里进行遍历判断
      for (let i = 0; i < curLayerSize; i++) {
          // 当前的密码组合
          const curCode = queue.shift();

          // 枚举每一个节点相邻的未遍历节点的旋转得到的情况
          const allStatus = enumAllChange(curCode);
          // 基于这些枚举的情况 进行旋转 发散出更多的可能性
          for (status of allStatus) {
              // 判断是否 在deadends中 或者 已经在访问过的情况中
              if (!deadendSet.has(status) && !visitedStatusSet.has(status)) {
                  // 找到目标 返回step
                  if (status === target) return step;
                  // 其他情况：未找到target 并且 也不在visitedStatus
                  visitedStatusSet.add(status); // 放入到visitedStatusSet中
                  queue.push(status); // 这个情况记录下来 作为下一层的其中一个status
              };
          }
      }
  }

  // return 经过上面旋转 没有找到 则返回-1
  return -1; 
};

/**
* 向上转动 或者 逆时针转动 数值 + 1 或者 9 -> 0
* @return {Array} 类似['0', '1', '2', '3']这样 一个密码组合的数组表示
*/
function plusOne(num) {
  return num === '9' ? '0' : `${+num + 1}`;
}

/**
* 顺时针转动 或者 向下转动 数值 -1 或者 0 -> 9
*/
function minusOne(num) {
  return num === '0' ? '9' : `${+num - 1}`;
}

/**
* 枚举基于当前status相邻的未遍历节点的一次旋转可能得到的情况
* 4个转盘 每次旋转只能旋转4个转盘中的一个 一个转盘可有2种旋转方法：向上 向下
* @param {array} status 一次旋转得到的密码情况 例如 '1234'
* @return {Array} 基于status旋转得到的所有密码情况 例如 ['1234', '1244']
*/
function enumAllChange(status) {
   const result = [];
   const statusArr = status.split('');
   // 一个一个转盘旋转 每个转盘有2次旋转可能性
   for (let i = 0; i < 4; i++) {
       // 记录转盘当前值
       const curNumStr = statusArr[i];
        
       // 当前转盘逆时针旋转
       statusArr[i] = plusOne(curNumStr);
       result.push(statusArr.join(''));

       // 当前转盘顺时针旋转
       statusArr[i] = minusOne(curNumStr);
       result.push(statusArr.join(''));

       // 恢复当前转盘 继续枚举下一个转盘
       statusArr[i] = curNumStr;
   }

   return result;
}