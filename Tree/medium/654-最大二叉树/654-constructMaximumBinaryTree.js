/**
 * leet: https://leetcode-cn.com/problems/maximum-binary-tree/
 * Date: 2022-2-5
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487270&idx=1&sn=2f7ad74aabc88b53d94012ceccbe51be&scene=21#wechat_redirect
 */

/**
  [✅]方法2：使用传递左右边界的分割方法
 * 空间复杂度更优，O(1)
  -  递归法-传递边界index代替slice
 * @param {number[]} nums
 * @return {TreeNode}
 */
  var constructMaximumBinaryTree = function(nums) {
    // defend
    if (nums.length === 0) return null;
    // init data
    const len = nums.length;

    const _findMaxIndex = (startIndex, endIndex) => {
        // 防御
        // 初始化值
        let maxIndex = startIndex;
        // 核心算法 [startIndex, endIndex]这样的区间
        for (let i = startIndex;i <= endIndex;i++) {
            const curVal = nums[i];
            if (curVal > nums[maxIndex]) {
                // 如果最大值 发生了更新（和之前不一致） 则更新最大值下标
                maxIndex = i;
            }
        }
        // 返回值
        return maxIndex;
    }

    // 这种要处理数组2端情况的边界问题
    const _constructMaximumBinaryTree = (startIndex, endIndex) => {
        // defend base-case 关于左右边界下标越界的处理 
        if (startIndex > endIndex) {
            return null;
        }

        const maxIndex = _findMaxIndex(startIndex, endIndex);
        const node = new TreeNode(nums[maxIndex]);
        node.left = _constructMaximumBinaryTree(startIndex, maxIndex - 1);
        node.right = _constructMaximumBinaryTree(maxIndex + 1, endIndex);

        return node;
    }
    // algo
    // return
    return _constructMaximumBinaryTree(0, len - 1);
};


/**
 * *****************************方法一：递归法*****************************************************
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
 * 找到数组中的最大值的下标
 */
 const findMaxIndex = function(nums) {
  // 防御
  // 初始化值
  let maxIndex = 0;
  // 核心算法
  for (let i = 0;i < nums.length;i++) {
      const curMaxVal = Math.max(nums[maxIndex], nums[i]);
      if (curMaxVal !== nums[maxIndex]) {
          // 如果最大值 发生了更新（和之前不一致） 则更新最大值下标
          maxIndex = i;
      }
  }
  // 返回值
  return maxIndex;
}

/**
* me: 递归法
* 定义合适的递归函数
me: 但是这个方案空间复杂度略高，可以使用传递左右边界的分割方法
* @param {number[]} nums
* @return {TreeNode}
*/
var constructMaximumBinaryTree = function(nums) {
  // 防御
  // base case
  if (nums.length === 0) return null;
  // 找到nums中的最大数 作为root 构造TreeNode
  const maxIndex = findMaxIndex(nums);
  const maxVal = nums[maxIndex];
  const node = new TreeNode(maxVal, null, null);
  // 递归调用 构建左区间 右区间 通过返回值拿到 左子树 右子树
  const leftSubNums = nums.slice(0, maxIndex);
  const rightSubNums = nums.slice(maxIndex + 1);
  const leftTree = constructMaximumBinaryTree(leftSubNums);
  const rightTree = constructMaximumBinaryTree(rightSubNums);  
  // 构建好的左右子树 拼接待当前节点上
  node.left = leftTree;
  node.right = rightTree;
  // 返回当前节点
  return node;
};

module.exports = constructMaximumBinaryTree;