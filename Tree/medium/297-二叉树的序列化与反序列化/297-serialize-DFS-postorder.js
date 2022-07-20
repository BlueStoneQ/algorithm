/**
 * 2022-2-6
 * https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485871&idx=1&sn=bcb24ea8927995b585629a8b9caeed01&scene=21#wechat_redirect
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
  * 方法1： DFS-后序遍历
  * Encodes a tree to a single string.
  * null = '#', 树与树 以及 root 之间用','来分隔
  * @param {TreeNode} root
  * @return {string}
  */
 var serialize = function(root) {
     let res = '';
 
     const _serialize = function(curRoot) {
         // base case
         if (curRoot === null) {
             res += NULL + SEP;
             return;
         };
         // 调用递归
         _serialize(curRoot.left);
         _serialize(curRoot.right);
         // 序列完左右子树后 序列化当前节点
         res +=  curRoot.val + SEP;
     }
 
     // 调用辅助递归函数
     _serialize(root);
 
     // 这里的序列化 会给后面多加一个SEP 可以修剪掉 保证后面反序列化程序的平滑
     return res.substring(0, res.length - 1);
 };
 
 
 
 /**
  * Decodes your encoded data to tree.
  *
  * @param {string} data
  * @return {TreeNode}
  */
 var deserialize = function(data) {
     // 先用序列化的字符串生成Array
     const nodes = data.split(SEP);
     return  _deserialize(nodes);
 };
 
 function _deserialize(nodes) {
     // base case
     if (nodes.length === 0) return null;
     // 找到当前的根节点：后续遍历的根节点为最后一个元素，处理过后的元素 需要排出序列
     const curRootVal = nodes.pop();
     // 判断当前节点是否为空节点
     if (curRootVal === NULL) return null;
     // 构造当前root节点
     const curRoot = new TreeNode(+curRootVal); // 记得转变为数字再存入Tree中
     // 递归调用 用剩余的序列 获得左右子树: 后续序列的特点：left - right - root，目前从后向前遍历序列，所以，接下来遍历的是右子树 然后是左子树
     const right = _deserialize(nodes);
     const left = _deserialize(nodes);
     // 挂载左右子树到当前节点上
     curRoot.left = left;
     curRoot.right = right;
     // 返回值
     return curRoot;
 }
 
 /**
  * Your functions will be called as such:
  * deserialize(serialize(root));
  */