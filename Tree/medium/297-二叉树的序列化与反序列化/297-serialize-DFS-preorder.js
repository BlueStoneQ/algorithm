/**
 * 2022-2-6
 * leet: https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
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
  * 一般语境下，单单前序遍历结果是不能还原二叉树结构的，因为缺少空指针的信息，至少要得到前、中、后序遍历中的两种才能还原二叉树。
  * 但是这里的 node 列表(data)包含空指针的信息，所以只使用 node 列表就可以还原二叉树。
  * 
  * 先确定根节点 root，然后遵循前序遍历的规则，递归生成左右子树即可：
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
     // 前序序列的特点：root - left - right，目前从前向后遍历序列，所以，接下来遍历的是left子树 然后是right子树
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