/**
 * 2022-7-1
 * leet: https://leetcode.cn/problems/binary-tree-level-order-traversal/
 * kaer: https://programmercarl.com/0102.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86.html
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (root === null) return [];

  const result = [];
  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
      const layerSize = queue.length;
      const layerArr = [];
      // 遍历一层
      for (let i = 0; i < layerSize; i++) {
          const curNode = queue.shift();
          if (curNode.left) {
              queue.push(curNode.left);
          }

          if (curNode.right) {
              queue.push(curNode.right);
          }

          layerArr.push(curNode.val);
      }
      // 将当前层结果作为一个数组push进结果
      result.push(layerArr);
  }

  return result;
};

/**
 * 下面可以写一个适用于多叉树的通用版本
 * 2022-10-4
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder2 = function(root) {
    // defend
    if (root === null) return [];
    // init data
    const result = [];
    const queue = [];
    queue.push(root);
    // algo
    while (queue.length > 0) {
        // 遍历当前层
        const layerLen = queue.length;
        const layerArr = [];
        for (let i = 0; i < layerLen; i++) {
            const curRoot = queue.shift();
            // [关键点⭕️]多叉树遍历
            for (let key in curRoot) {
                // 只有有效的属性加入：left right, 跳过不是有效key的属性:val
                if (['left', 'right'].includes(key)) {
                    const item = curRoot[key];
                    // 这里要注意 item要判空 就是之前遍历二叉树方案中的 if (curRoot.left) {}
                    item && queue.push(item)
                }
            }
            layerArr.push(curRoot.val);
        }
        // 当前层的遍历结果加入result中
        result.push(layerArr);
    }
    // return
    return result;
};

/**
 * 变种面试题：
 * 2022-10-4
 * 多叉树, 获取每一层的节点之和
 */

function layerSum(root) {
    // defend   
    if (!root) return [];
    // init data
    const result = [];
    const queue = [];
    queue.push(root);
    // algo
    while (queue.length > 0) {
        const layerLen = queue.length;
        let layerSum = 0; // 当前层的节点和
        for (let i = 0; i < layerLen; i++) {
            const curNode = queue.shift();
            // 遍历children 将子元素都加入queue
            curNode.children && [].forEach.call(curNode.children, item => {
                queue.push(item);
            });
            
            layerSum += curNode.value;
        }
        result.push(layerSum);
    }
    // return
    return result;
}

// test
(() => {
    const res = layerSum({
        value: 2,
        children: [
            { value: 6, children: [ { value: 1 } ] },
            { value: 3, children: [ { value: 2 }, { value: 3 }, { value: 4 } ] },
            { value: 5, children: [ { value: 7 }, { value: 8 } ] }
        ]
    });
    
    console.log(res);
})()