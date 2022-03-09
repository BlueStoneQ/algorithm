/**
 * leet: https://leetcode-cn.com/problems/sliding-puzzle/
 * 2022-3-9
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485383&idx=1&sn=4cd4b5b70e2eda33ad66562e5c007a1e&scene=21#wechat_redirect
 */

 const TARTET = boardToString([[1,2,3],[4,5,0]]);

 /**
  * 题型分析：寻找最小步数 还是 优先考虑BFS
  * BFS 暴力穷举
  * 将二维数组降维成一维数组 降低复杂度
  * 降维：记录二维数组中每个元素下标相邻元素在一维数组中的下标映射关系
  * 这样的话 利用这个下标映射关系 就能找到相邻元素 进行尝试性的交换
  * 一个status就是一次排列后的情况：例如： '123450'
  * @param {number[][]} board
  * @return {number}
  */
 var slidingPuzzle = function(board) {
     // defend 
     if (boardToString(board) === boardToString(TARTET)) return 0; // 如果起始就是target 就不用走了 0步
     // init data
     let step = 0;
     // 将起点board统一拉平为字符串
     const startBoardFlatStr = boardToString(board);
     // 压平后 一维数组中下标i 与 二维数组中与i位置元素相邻的元素在一维数组中的下标 主要是为了在一维数组中实现和二维数组一样的交换
     // 这里要理解 请画图：二维数组 和 一维数组 并且 枚举他们之间下标到二维数组相邻位置下标的关系
     const INDEX_NEIGHBOR = [
         [1, 3], // 下标0位置在二维数组中相邻的位置 其在一维数组中的下标 为 1 3
         [0, 2, 4],
         [1, 5],
         [0, 4],
         [1, 3, 5],
         [2, 4]
     ];
 
     /** *************BFS算法框架开始****************** */
     // BFS辅助数据结构：queue
     const queue = [];
     queue.push(startBoardFlatStr); // queue的BFS初始值 将board拉平后序列化的字符串 例如 '123450'
 
     // 防止走回头路 使用set记录已经遍历过的status
     const visitedSet = new Set();
     visitedSet.add(startBoardFlatStr);
 
     // algo
     while (queue.length !== 0) {
         // 获取当前层的size
         const size = queue.length;
 
         for (let i = 0; i < size; i++) {
             // 获取当前status
             const status = queue.shift(); // 一个status就是一种排列情况的序列化字符串：例如'123450'
             // 判断下当前status是否为target
             if (status === TARTET) return step;
             // 找到该status中0的下标位置
             const IndexOf0 = status.split('').indexOf('0');
             // 从neighbor中拿到当前0相邻的元素的下标
             const willSwapIndexList = INDEX_NEIGHBOR[IndexOf0];
             // 遍历可能尝试交换的下标 生成由当前status生成的各种新的status 压入队列
             for (const willSwapIndex of willSwapIndexList) {
                 const newStatus = swapStr(status, IndexOf0, willSwapIndex);   
                 if (!visitedSet.has(newStatus)) {
                     // 寻找target 防止走回头路（重复出现的status必然导致同样的结果 就会无限循环）
                     queue.push(newStatus);
                     visitedSet.add(newStatus);
                 }
             }
         }
 
         // 步数自增
         step++;
     }
 
     // return
     return -1;
 };
 
 /**
  * 将一个二维数组拉平为字符串（可以理解为一种序列化） 用于对比2个二维数组是否一致
  */
 function boardToString(boardArray) {
     return [...boardArray[0], ...boardArray[1]].join('');
 }
 
 /**
  * 交换某个字符串的2个元素，并返回交换后的新字符串
  */
  function swapStr(str, index1, index2) {
      const arr = str.split('');
 
      const temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
 
      return arr.join('');
  }