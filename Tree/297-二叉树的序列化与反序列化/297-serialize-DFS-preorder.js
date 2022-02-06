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
  * 方法1： DFS-前序遍历
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
 
         // 序列化当前节点
         res +=  curRoot.val + SEP;
 
         // 调用递归
         _serialize(curRoot.left);
         _serialize(curRoot.right);
     }
 
     // 调用辅助递归函数
     _serialize(root);
 
     return res;
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
     // 找到当前的根节点：前续遍历的根节点为第一个元素，处理过后的元素 需要排出序列
     const curRootVal = nodes.shift();
     // 判断当前节点是否为空节点
     if (curRootVal === NULL) return null;
     // 构造当前root节点
     const curRoot = new TreeNode(+curRootVal); // 记得转变为数字再存入Tree中
     // 递归调用 用剩余的序列 获得左右子树: 
     // 前续序列的特点：right - left - root，目前从前向后遍历序列，所以，接下来遍历的是left子树 然后是right子树
     const left = _deserialize(nodes);
     const right = _deserialize(nodes);
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