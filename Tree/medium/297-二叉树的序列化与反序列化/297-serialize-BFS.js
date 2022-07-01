/**
 * 2022-2-6
 * dong: https://labuladong.gitee.io/algo/2/19/36/
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 const SEP = ',';
 const NULL = '#';
 
 /**
  * 层序遍历
  * Encodes a tree to a single string.
  *
  * @param {TreeNode} root
  * @return {string}
  */
 var serialize = function(root) {
     // 防御
     if (root === null) return '';
     // 初始化变量
     let res = '';
     const queue = [];
     queue.push(root);
 
     while (queue.length > 0) {
         // 访问当前元素 d对当前元素进行序列化
         const curNode = queue.shift();
 
         if (curNode === null) {
             res += NULL + SEP; 
             continue;
         }
 
         res += curNode.val + SEP;
 
         queue.push(curNode.left);
         queue.push(curNode.right);
     }
     // 返回结果 去掉最后一个SEP
     return res.substring(0, res.length - 1);
 };
 
 /**
  * Decodes your encoded data to tree.
  * 这里依然使用BFS的思想去遍历 借助queue
  * @param {string} data
  * @return {TreeNode}
  */
 var deserialize = function(data) {
     // 防御
     if (!data) return null;
     // 初始化数据
     const nodes = data.split(SEP);
     // 层序遍历辅助队列：这里注意区分 queue 和 nodes的各自作用
     let queue = [];
     // 构筑root节点: 层序的第一个元素就是root的值
     const rootVal = nodes[0];
     const root = new TreeNode(+rootVal); // 注意转换数据类型
 
     // 队列 queue 动态记录父节点，将 root 加入队列
     queue.push(root);
 
     // 遍历nodes 借助queue构筑剩下的树， 
         // 第一个节点已经访问并处理过了 这里下标从1开始 + 下标的步进在循环体内
     for (let i = 1; i < nodes.length;) {
         // 取出当前节点
         const curRoot = queue.shift();   
 
         // 关键程序: 获得左节点值： 可以看图过一下层序遍历的过程 就理解了 
         const leftVal = nodes[i++];
         if (leftVal === NULL) {
             // 如果left序列记录为空节点
             curRoot.left = null;
         } else {
             curRoot.left = new TreeNode(+leftVal);
             // 当前节点作为接下来要遍历的父节点 装入queue
             queue.push(curRoot.left);
         }
         // 关键程序：获得右节点值：左节点 过去 就是 curRoot的rightVal了
         const rightVal = nodes[i++];
         if (rightVal === NULL) {
             // 如果left序列记录为空节点
             curRoot.right = null;
         } else {
             curRoot.right = new TreeNode(+rightVal);
             // 当前节点作为接下来要遍历的父节点 装入queue
             queue.push(curRoot.right);
         }
     }
     // 返回根节点
     return root;
 };
 
 // console.log(serialize([1,2,3,null,null,4,5]));
 
 /**
  * Your functions will be called as such:
  * deserialize(serialize(root));
  */