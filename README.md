# sTone's algorithm-note
A record of algorithm practice.

# 目录
- [题集](#题集)
- [标签](#标签)
- [sort](#sort)
- [data-structor](#data-structor)
- [数组](#数组)
- [串](#串)
- [栈和队列](#栈和队列)
- [hash](#hash)
- [链表](#链表)
- [树](#树)
- [others](#others)
  - [LRU](#LRU)
  - [LFU](#LFU)
  - [水塘抽样](#水塘抽样)
  - [随机数](#随机数)
  - [Math](#Math)
- [BFS](#BFS)
- [DFS回溯](#DFS回溯)
- [DP动态规划](#DP动态规划)
- [greedy](#greedy)
- [单调栈](#单调栈)

## sort
- [快速排序](sort/quickSort.js)
- [归并排序](sort/mergeSort.js)
- [插入排序](sort/insertSort.js)
- [选择排序](sort/selectSort.js)
- [冒泡排序](sort/bubbleSort.js)

## data-structor
- [MinHeap](Data-structure/binary-heap/min-heap/MinHeap.js)

# 题型清单
## 数组

### 双指针
```
双指针可以把需要双层遍历的事情 合并在一层遍历中
```
#### TODO
- 870 优势洗牌
  - [题解](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247491139&idx=1&sn=10cb35e0056ac8f8c540fccd0156f333&scene=21#wechat_redirect)
#### easy
- [26-删除有序数组中的重复项](Array/easy/26-删除有序数组中的重复项/26-removeDuplicates.js)
- [27-移除元素](Array/easy/27-移除元素/27-removeElement.js)
- [844-比较含退格的字符串](Array/easy/844-比较含退格的字符串/844-backspaceCompare.js)
- [977-有序数组的平方](Array/easy/977-有序数组的平方/844-sortedSquares.js)
- [88-合并两个有序数组](Array/easy/88-合并两个有序数组/88-merge.js)
  - 类似的思路[21-合并两个有序链表](Linked-list/easy/21-合并两个有序链表/21-mergeTwoLists.js)
#### medium
- [15-三数之和](hash/medium/15-三数之和/15-threeSum.js)
- [18-四数之和](hash/medium/18-四数之和/18-fourSum.js)

### 滑动窗口
```
1. 滑动窗口的题的特征： 
  1. 理解滑动窗口的作用：就是动态遍历子串，提供访问时机
  2. 一般是2个串 子串问题，子串也就是要求顺序是和原来母字符串一致，这个时候，遍历所有的子串，需要一个滑动窗口遍历所有情况
2. 滑动窗口本质上是双指针的一个特例
3. 常见题目就是找满足某一条件的（最长/最短）子数组/子串
4. 常配合 willInChar willOutChar 和 一些charCountMap,例如目标串可以建立一个mapz作为查表，每个item [char, count]
5. 滑动窗口的左右边界指针 left right, 其实都是从0出发的，更像快慢指针。一般都是right先行扩大窗口，直到窗口的子串满足某一要求，这个时候又开始尝试缩小窗口（left++）,直到条件不满足，此时刚好拿到一个满足条件的临界值。不断刷新记录的最值，直到right到达母串的末尾。
```
#### medium
- [209-长度最小的子数组](Array/medium/209-长度最小的子数组/209-minSubArrayLen.js)
- [567-字符串的排列](Array/medium/567-字符串的排列/567-checkInclusion.js)
- [438-找到字符串中所有字母异位词](Array/medium/438-找到字符串中所有字母异位词/438-findAnagrams.js)
- [3-无重复字符的最长子串](Array/medium/3-无重复字符的最长子串/3-lengthOfLongestSubstring.js)
#### hard
- [76-最小覆盖子串](Array/hard/76-最小覆盖子串/76-minWindow.js)

### 二维数组遍历
```
一般是螺旋相关问题，常用的方法有：
1. 对角线对折 + reverse （使用于矩阵旋转）
2. 四边界无限逼近 （矩阵的螺旋遍历）
```
#### medium
- [48-旋转图像](Array/medium/48-旋转图像/48-rotate.js)
- [54-螺旋矩阵](Array/medium/54-螺旋矩阵/54-spiralOrder.js)
- [59-螺旋矩阵II](Array/medium/59-螺旋矩阵II/59-generateMatrix.js)

### 去重
#### TODO
- 1081 不同字符的最小子序列 Medium (和316是一个题其实 同一套解法 表述不同)
#### easy
- [26-删除有序数组中的重复项](Array/easy/26-删除有序数组中的重复项/26-removeDuplicates.js)
  - 类似思路的 [83-删除排序链表中的重复元素](Linked-list/easy/83-删除排序链表中的重复元素/83-deleteDuplicates.js)
- [27-移除元素](Array/easy/27-移除元素/27-removeElement.js)
- [283-移动零](Array/easy/283-移动零/283-moveZeroes.js)
- [剑指Offer-03-数组中重复的数字](Array/easy/剑指Offer-03-数组中重复的数字/剑指offer-03-findRepeatNumber.js)
#### medium 
- [316-去除重复字母](Array/medium/316-去除重复字母/316-removeDuplicateLetters.js)

### 二分法
```
1. 二分法一般适用于求某个区间的最值（左边界值 === min; 右边界值 === max;）
```
#### easy
- [704-二分查找](Array/easy/704-二分查找/704-search.js)
#### medium
- [875-爱吃香蕉的珂珂](Array/medium/875-爱吃香蕉的珂珂/875-minEatingSpeed.js)
- [1011-在D天内送达包裹的能力](Array/medium/1011-在D天内送达包裹的能力/1011-shipWithinDays.js)
#### hard
- [×][410-分割数组的最大值](Array/hard/[×]410-分割数组的最大值/410-splitArray.js)

### 随机算法
```
随机算法是Array中掌握得最不好的 需要找时间专项训练下
```
#### TODO
- 528-按权重随机选择（中等）
  - [题解](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492884&idx=1&sn=e9583238c67e417df41feaa4ed62871d&scene=21#wechat_redirect)
- 382
- 298
  - [随机算法之水塘抽样算法](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484974&idx=1&sn=795a33c338d4a5bd8d265bc7f9f63c03&chksm=9bd7f826aca07130e303d3d6f5c901b8aa00f9c3d02ffc26d45b56f1d36b538990c9eebd06a8&scene=21#wechat_redirect)
#### medium
- [×][380-O(1) 时间插入、删除和获取随机元素](Array/medium/380-O(1)时间插入、删除和获取随机元素/380-RandomizedSet.js)
  - 剩最后2个用例，输入量太大，暂时难以排查，后面再看，思路okay

### 前缀和数组
```
前缀和主要适用的场景是原始数组不会被修改的情况下，频繁查询某个区间的累加和。
```
#### easy
- [Array/easy/303-区域和检索-数组不可变](Array/easy/303-区域和检索-数组不可变/303-NumArray.js)
#### medium
- [304-二维区域和检索-矩阵不可变](Array/medium/304-二维区域和检索-矩阵不可变/304-NumMatrix.js)
- [560-和为K的子数组](Array/medium/560-和为K的子数组/560-subarraySum.js)

### 差分数组
```
差分数组的主要适用场景是频繁对原始数组的某个区间的元素进行增减
```
#### TODO
- 1109 航班预订统计
- 1094 拼车
#### medium
- [370-区间加法](Array/medium/370-区间加法/370-getModifiedArray.js)

## 串
### 高频[🔥🔥🔥]
- [14. 最长公共前缀](String/easy/14-最长公共前缀/14-longestCommonPrefix.js)

### 翻转字符串
#### easy
- [344-反转字符串](String/easy/344-反转字符串/344-reverseString.js)
- [541-反转字符串II](String/easy/541-反转字符串II/542-reverseStr.js)
- [151-翻转字符串里的单词](String/easy/151-翻转字符串里的单词/151-reverseWords.js)
- [剑指Offer58-II-左旋转字符串](String/easy/剑指Offer58-II-左旋转字符串/Offer58-II-reverseLeftWords.js)
### 子串匹配（KMP）
#### easy
- [28-实现strStr(KMP经典题目)](String/easy/28-实现strStr()/28-strStr.js)
- [459-重复的子字符串](String/easy/459-重复的子字符串/459-repeatedSubstringPattern.js)


### 串-其他
#### easy
- [剑指Offer05-替换空格](String/easy/剑指Offer05-替换空格/剑指offer05-replaceSpace.js)

## hash
### 异位词
#### easy
- [242-有效的字母异位词](hash/easy/242-有效的字母异位词/242-isAnagram.js)
- [383-赎金信](hash/easy/383-赎金信/383-canConstruct.js)
#### medium
- [49-字母异位词分组](hash/medium/49-字母异位词分组/49-groupAnagrams.js)
### 数组-其他
#### easy
- [349-两个数组的交集](hash/easy/349-两个数组的交集/349-intersection.js)
- [202-快乐数](hash/easy/202-快乐数/202-isHappy.js)
#### medium
- [454-四数相加II](hash/medium/454-四数相加II/454-fourSumCount.js)
## 栈和队列
### easy
- [232-用栈实现队列](stack&queue/easy/232-用栈实现队列/232-MyQueue.js)
- [225-用队列实现栈](stack&queue/easy/225-用队列实现栈/225-MyStack.js)
- [20-有效的括号](stack&queue/easy/20-有效的括号/20-isValid.js)
- [1047-删除字符串中的所有相邻重复项](stack&queue/easy/1047-删除字符串中的所有相邻重复项/1047-removeDuplicates.js)
### medium
- [921-使括号有效的最少添加](stack&queue/medium/921-使括号有效的最少添加/921-minAddToMakeValid.js)
- [1541-平衡括号字符串的最少插入次数](stack&queue/medium/1541-平衡括号字符串的最少插入次数/1541-minInsertions.js)
- [150-逆波兰表达式求值](stack&queue/medium/150-逆波兰表达式求值/150-evalRPN.js)
- [🔥][347-前K个高频元素](stack&queue/medium/347-前K个高频元素/347-topKFrequent.js)
- [🔥🔥🔥][超高频][topK问题-同347]215-数组中的第K个最大元素
  - [215-数组中的第K个最大元素](stack&queue/medium/215-数组中的第K个最大元素/215-findKthLargest.js)
  - [❌][只适合机试的方法-借助了sort](Array/medium/215-数组中的第K个最大元素/215-findKthLargest-机考版.js)
### hard
- [239-滑动窗口最大值](stack&queue/hard/239-滑动窗口最大值/239-maxSlidingWindow.js)

## 链表
```
注意：链表中的虚拟头结点 是一个很重要的技巧, 用来防止很多边界错误
```
### TODO
- 23. 合并K个升序链表 ([MinHeap](Data-structure/binary-heap/min-heap/MinHeap.js)已有)
  - [题解](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492022&idx=1&sn=35f6cb8ab60794f8f52338fab3e5cda5&scene=21#wechat_redirect)
- [25-K个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)
  - 边界 基础反转的掌握不够
- 约瑟夫环问题-循环链表
### 链表基本操作
#### easy
- [203-移除链表元素](Linked-list/easy/203-移除链表元素/203-removeElements.js)
#### medium
- [19-删除链表的倒数第N个结点](Linked-list/medium/19-删除链表的倒数第N个结点/19-removeNthFromEnd.js)
- [707-设计链表](Linked-list/medium/707-设计链表/707-MyLinkedList.js)
### 链表反转
#### easy
- [206-反转链表](Linked-list/easy/206-反转链表/206-reverseList.js)
  - [同206][剑指OfferII-024-反转链表](https://leetcode.cn/problems/UHnkqh/)
- [234-回文链表](Linked-list/easy/234-回文链表/234-isPalindrome.js)
#### medium
- [24-两两交换链表中的节点](Linked-list/medium/24-两两交换链表中的节点/24-swapPairs.js)
### 链表合并
#### easy 
- [21-合并两个有序链表](Linked-list/easy/21-合并两个有序链表/21-mergeTwoLists.js)
### 双指针
#### easy
- [83-删除排序链表中的重复元素](Linked-list/easy/83-删除排序链表中的重复元素/83-deleteDuplicates.js)
- [876-链表的中间结点](Linked-list/easy/876-链表的中间结点/876-middleNode.js)
- [判断环形链][141-环形链表](Linked-list/easy/141-环形链表/141-hasCycle.js)
- [160-相交链表](Linked-list/easy/160-相交链表/160-getIntersectionNode.js)
- [面试题02.07-链表相交](Linked-list/easy/面试题02.07-链表相交/面试题02.07-getIntersectionNode.js)
#### medium
- [环起点][142-环形链表II](Linked-list/medium/142-环形链表II/142-detectCycle.js)
- [92-反转链表II](Linked-list/medium/92-反转链表II/92-reverseBetween.js)


## 树
```
tree的核心处理框架就是它的遍历框架：
遍历的顺序：
DFS
  - 递归实现
  - 迭代法实现
BFS
```
### TODO
- [1373. 二叉搜索子树的最大键值和](https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree/)
  - [题解](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247490891&idx=1&sn=677a7e887fa551e994ba73bcb2538cea&scene=21#wechat_redirect)
- [代码随想录：这里的习题都刷一下，知识结构较好](https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%A7%8D%E7%B1%BB)
### 遍历
#### easy 
- [144-二叉树的前序遍历](Tree/easy/144-二叉树的前序遍历/144-preorderTraversal.js)
  - [144-二叉树的前序遍历-迭代法](Tree/easy/144-二叉树的前序遍历/144-preorderTraversal-iteration.js)
  - [144-二叉树的前序遍历--迭代法-非统一写法](Tree/easy/144-二叉树的前序遍历/144-preorderTraversal-迭代法-非统一写法.js)
- [94-二叉树的中序遍历-迭代法-通用模版](Tree/easy/94-二叉树的中序遍历/94-inorderTraversal.js)
#### medium
- [114-二叉树展开为链表](Tree/medium/114-二叉树展开为链表/114-flatten.js)
- [多叉树遍历][341-扁平化嵌套列表迭代器](Tree/medium/341-扁平化嵌套列表迭代器/341-NestedIterator.js)
  - [栈+迭代+惰性求值](Tree/medium/341-扁平化嵌套列表迭代器/341-NestedIterator-stack.js)
### 层序遍历BFS
#### medium
- [102-二叉树的层序遍历](Tree/medium/102-二叉树的层序遍历/102-levelOrder.js)
- [116-填充每个节点的下一个右侧节点指针](Tree/medium/116-填充每个节点的下一个右侧节点指针/116-connect.js)
### 二叉树的属性
#### easy
- [104-二叉树的最大深度](Tree/easy/104-二叉树的最大深度/104-maxDepth.js)
- [111-二叉树的最小深度](Tree/easy/111-二叉树的最小深度/111-minDepth.js)
  - [111-二叉树的最小深度-BFS](Tree/easy/111-二叉树的最小深度/111-minDepth-BFS.js)
- [101-对称二叉树](Tree/easy/101-对称二叉树/101-isSymmetric.js)
  - [101-对称二叉树-迭代法](Tree/easy/101-对称二叉树/101-isSymmetric-iteration.js)
- [543-二叉树的直径](Tree/easy/543-二叉树的直径/543-diameterOfBinaryTree.js)
- [110-平衡二叉树](Tree/easy/110-平衡二叉树/110-isBalanced.js)
- [257-二叉树的所有路径](Tree/easy/257-二叉树的所有路径/257-binaryTreePaths.js)
  - [257-DFS方法](Tree/easy/257-二叉树的所有路径/257-binaryTreePaths-DFS.js)
- [404-左叶子之和](Tree/easy/404-左叶子之和/404-sumOfLeftLeaves.js)
- [112-路径总和](Tree/easy/112-路径总和/112-hasPathSum.js)
- [100-相同的树](Tree/easy/100-相同的树/100-isSameTree.js)
- [572-另一棵树的子树](Tree/easy/572-另一棵树的子树/572-isSubtree.js)
#### medium
- [222-完全二叉树的节点个数](Tree/medium/222-完全二叉树的节点个数/222-countNodes.js)
  - [222-利用满二叉树性质优化版](Tree/medium/222-完全二叉树的节点个数/222-countNodes-optimize.js)
- [513-找树左下角的值](Tree/medium/513-找树左下角的值/513-findBottomLeftValue.js)
  - [513-找树左下角的值-BFS](Tree/medium/513-找树左下角的值/513-findBottomLeftValue-BFS.js)
- [113-路径总和II](Tree/medium/113-路径总和II/113-pathSum.js)
### 二叉树的修改与构造
#### easy
- [617-合并二叉树](Tree/easy/617-合并二叉树/617-mergeTrees.js)
- [226-翻转二叉树](Tree/easy/226-翻转二叉树/226-invertTree.js)
#### medium
- [654-最大二叉树](Tree/medium/654-最大二叉树/654-constructMaximumBinaryTree.js)
- [105-从前序与中序遍历序列构造二叉树](Tree/medium/105-从前序与中序遍历序列构造二叉树/105-buildTree.js)
- [106-从中序与后序遍历序列构造二叉树](Tree/medium/106-从中序与后序遍历序列构造二叉树/106-buildTree.js)

### 序列化
#### medium
- [652-寻找重复的子树](Tree/medium/652-寻找重复的子树/652-findDuplicateSubtrees.js)
#### hard
- [297-二叉树的序列化与反序列化-后序遍历法](Tree/medium/297-二叉树的序列化与反序列化/297-serialize-DFS-postorder.js)
- [297-二叉树的序列化与反序列化-前序遍历法](Tree/medium/297-二叉树的序列化与反序列化/297-serialize-DFS-preorder.js)
- [297-二叉树的序列化与反序列化-层序遍历法](Tree/medium/297-二叉树的序列化与反序列化/297-serialize-BFS.js)

### 最近公共祖先
#### easy
- [235-二叉搜索树的最近公共祖先](Tree/easy/235-二叉搜索树的最近公共祖先/235-lowestCommonAncestor.js)
#### medium
- [236-二叉树的最近公共祖先](Tree/medium/236-二叉树的最近公共祖先/236-lowestCommonAncestor.js)
### BST
#### easy
- [700-二叉搜索树中的搜索](Tree/easy/700-二叉搜索树中的搜索/700-searchBST.js)
- [剑指Offer-54-二叉搜索树的第k大节点](Tree/easy/剑指Offer-54-二叉搜索树的第k大节点/剑指offer-54-kthLargest.js)
- 530-二叉搜索树的最小绝对差
  - [方法1](Tree/easy/530-二叉搜索树的最小绝对差/530-getMinimumDifference-1.js)
  - [方法2](Tree/easy/530-二叉搜索树的最小绝对差/530-getMinimumDifference-2.js)
- 501-二叉搜索树中的众数
  - [方法1-二叉树通用递归方法](Tree/easy/501-二叉搜索树中的众数/501-findMode.js)
  - [方法2-推荐-无需额外的空间](Tree/easy/501-二叉搜索树中的众数/501-findMode-2.js)
- [108-将有序数组转换为二叉搜索树](Tree/easy/108-将有序数组转换为二叉搜索树/108-sortedArrayToBST.js)
#### medium 
- [230-二叉搜索树中第K小的元素](Tree/medium/230-二叉搜索树中第K小的元素/230-kthSmallest.js) 
- [1038-把二叉搜索树转换为累加树](Tree/medium/1038-把二叉搜索树转换为累加树/1038-bstToGst.js)
- [98-验证二叉搜索树](Tree/medium/98-验证二叉搜索树/98-isValidBST.js)
- [701-二叉搜索树中的插入操作](Tree/medium/701-二叉搜索树中的插入操作/701-insertIntoBST.js)
- [450-删除二叉搜索树中的节点](Tree/medium/450-删除二叉搜索树中的节点/450-deleteNode.js)
- [669-修剪二叉搜索树](Tree/medium/669-修剪二叉搜索树/669-trimBST.js)
- [96-不同的二叉搜索树]
  - [递归法+备忘录](Tree/medium/96-不同的二叉搜索树/96-numTrees.js)
  - [DP法](Tree/medium/96-不同的二叉搜索树/96-numTrees-DP.js)
- [95-不同的二叉搜索树II]
  - [递归法+备忘录](Tree/medium/95-不同的二叉搜索树II/95-generateTrees.js)

---

## DFS回溯
### TODO
- [332-重新安排行程](https://programmercarl.com/0332.%E9%87%8D%E6%96%B0%E5%AE%89%E6%8E%92%E8%A1%8C%E7%A8%8B.html#%E5%9B%9E%E6%BA%AF%E6%B3%95)
### 排列
```
排列的去重一般使用usedArray[i] = true
```
#### medium
- [46-全排列](DFS/medium/46-全排列/46-permute.js)
- [47-全排列II](DFS/medium/47-全排列II/47-permuteUnique.js)
### 组合
```
1. 组合的去重一般使用startIndex
2. 组合中的去重 一般往往需要先对选择列表排序，让重复的元素相邻起来，然后利用 arr[i - 1] === a[i] 来去重
3. 下面的子集 分割 子序列，这3个问题本质上还是组合问题
```
#### medium
- [77-组合](DFS/medium/77-组合/77-combine.js)
- [40-组合总和II](DFS/medium/40-组合总和II/40-combinationSum2.js)
- [216-组合总和III](DFS/medium/216-组合总和III/216-combinationSum3.js)
- [39-组合总和](DFS/medium/39-组合总和/39-combinationSum.js)
- [17-电话号码的字母组合](DFS/medium/17-电话号码的字母组合/17-letterCombinations.js)
- [22-括号生成](DFS/medium/22-括号生成/22-generateParenthesis.js)
### 子集
```
本质为组合问题
```
#### medium
- [78-子集](DFS/medium/78-子集/78-subsets.js)
- [90-子集II](DFS/medium/90-子集II/90-subsetsWithDup.js)
### 分割
```
本质为组合问题
```
- [131-分割回文串](DFS/medium/131-分割回文串/131-partition.js)
- [93-复原IP地址](DFS/medium/93-复原IP地址/93-restoreIpAddresses.js)
### 子序列
```
本质为组合问题
```
#### medium
- [491-递增子序列](DFS/medium/491-递增子序列/491-findSubsequences.js)
### 棋盘
#### hard
- [51-N皇后](DFS/hard/51-N皇后/51-solveNQueens.js)
- [37-解数独](DFS/hard/37-解数独/37-solveSudoku.js)

### 岛屿问题
```
full-flood算法
```
#### medium
- [200-岛屿数量](DFS/medium/200-岛屿数量/200-numIslands.js)
- [1254-统计封闭岛屿的数目](DFS/medium/1254-统计封闭岛屿的数目/1254-closedIsland.js)
- [695-岛屿的最大面积](DFS/medium/695-岛屿的最大面积/695-maxAreaOfIsland.js)
- [1905-统计子岛屿](DFS/medium/1905-统计子岛屿/1905-countSubIslands.js)
- [694-不同岛屿的数量](DFS/medium/694-不同岛屿的数量/694-numDistinctIslands.js)

### 其他

---

## BFS
### easy
- [111-二叉树的最小深度-BFS](Tree/easy/111-二叉树的最小深度/111-minDepth-BFS.js)
### medium
- [752-打开转盘锁](BFS/medium/752-打开转盘锁/752-openLock.js)
### hard
- [773-滑动谜题](BFS/hard/773-滑动谜题/773-slidingPuzzle.js)


## DP动态规划
### 基础题目
#### easy
- [509-斐波那契数](DP/基础题目/easy/509-斐波那契数/509-fib.js)
- [70-爬楼梯](DP/基础题目/easy/70-爬楼梯/70-climbStairs.js)
- [746-使用最小花费爬楼梯](DP/基础题目/easy/746-使用最小花费爬楼梯/746-minCostClimbingStairs.js)
#### medium
- [62-不同路径](DP/基础题目/medium/62-不同路径/62-uniquePaths.js)
- [63-不同路径II](DP/基础题目/medium/63-不同路径II/63-uniquePathsWithObstacles.js)
- [343-整数拆分](DP/基础题目/medium/343-整数拆分/343-integerBreak.js)
### 背包
#### 01背包
- 416-分割等和子集
  - （帮助过渡理解）[416-分割等和子集-二维dp数组法](DP/背包/01背包/416-分割等和子集/416-canPartition-二维dp数组.js)
  - （主推的01背包阶梯方法）[416-分割等和子集-一维dp数组法](DP/背包/01背包/416-分割等和子集/416-canPartition-一维dp数组.js)
- [1049-最后一块石头的重量II](DP/背包/01背包/1049-最后一块石头的重量II/1049-lastStoneWeightII.js)
- 494-目标和
  - [DFS回溯](DP/背包/01背包/494-目标和/494-findTargetSumWays-DFS.js)
  - [DP-转换为01背包-用背包模型解决组合问题](DP/背包/01背包/494-目标和/494-findTargetSumWays-DP.js)
- [474-一和零](DP/背包/01背包/474-一和零/474-findMaxForm.js)
#### 完全背包
- [518-零钱兑换II](DP/背包/完全背包/518-零钱兑换II/518-change.js)
- [377-组合总和Ⅳ](DP/背包/完全背包/377-组合总和Ⅳ/377-combinationSum4.js)
- [70-爬楼梯-完全背包模板解决](DP/基础题目/easy/70-爬楼梯/70-climbStairs-完全背包模板解决.js)
- [322-零钱兑换](DP/背包/完全背包/322-零钱兑换/322-coinChange.js)
- [279-完全平方数](DP/背包/完全背包/279-完全平方数/279-numSquares.js)
- [139-单词拆分](DP/背包/完全背包/139-单词拆分/139-wordBreak.js)
#### 多重背包
```md
将数量摊平后，可以转化为0-1背包问题
```
- [多重背包问题模型分析](https://programmercarl.com/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80%E5%A4%9A%E9%87%8D%E8%83%8C%E5%8C%85.html#%E5%A4%9A%E9%87%8D%E8%83%8C%E5%8C%85)
### 打家劫舍
- [198-打家劫舍](DP/打家劫舍/198-打家劫舍/198-rob.js)
- [213-打家劫舍II](DP/打家劫舍/213-打家劫舍II/213-rob.js)
- [337-打家劫舍III](DP/打家劫舍/337-打家劫舍III/337-rob.js)
### 股票问题
- [121-买卖股票的最佳时机](DP/股票问题/121-买卖股票的最佳时机/121-maxProfit.js)
  - [121-买卖股票的最佳时机-滚动数组优化空间复杂度版](DP/股票问题/121-买卖股票的最佳时机/121-maxProfit-滚动数组优化版.js)
- [122-买卖股票的最佳时机II](DP/股票问题/122-买卖股票的最佳时机II/122-maxProfit.js)
- [123-买卖股票的最佳时机III](DP/股票问题/123-买卖股票的最佳时机III/123-maxProfit.js)
- [188-买卖股票的最佳时机IV](DP/股票问题/188-买卖股票的最佳时机IV/188-maxProfit.js)
- [309-最佳买卖股票时机含冷冻期](DP/股票问题/309-最佳买卖股票时机含冷冻期/309-maxProfit.js)
- [714-买卖股票的最佳时机含手续费](DP/股票问题/714-买卖股票的最佳时机含手续费/714-maxProfit.js)
### 子序列问题
#### 不连续子序列
- [300-最长递增子序列](DP/子序列问题/编辑距离/300-最长递增子序列/300-lengthOfLIS.js)
- [1143-最长公共子序列](DP/子序列问题/不连续子序列/1143-最长公共子序列/1143-longestCommonSubsequence.js)
- [1035-不相交的线](DP/子序列问题/不连续子序列/1035-不相交的线/1035-maxUncrossedLines.js)
#### 连续子序列
- [674-最长连续递增序列](DP/子序列问题/连续子序列/674-最长连续递增序列/674-findLengthOfLCIS.js)
- [718-最长重复子数组](DP/子序列问题/连续子序列/718-最长重复子数组/718-findLength.js)
- [53-最大子数组和](DP/子序列问题/连续子序列/53-最大子数组和/53-maxSubArray.js)
#### 编辑距离
- [392-判断子序列](DP/子序列问题/编辑距离/392-判断子序列/392-isSubsequence.js)
- [115-不同的子序列](DP/子序列问题/编辑距离/115-不同的子序列/115-numDistinct.js)
- [583-两个字符串的删除操作](DP/子序列问题/编辑距离/583-两个字符串的删除操作/583-minDistance.js)
- [72-编辑距离](DP/子序列问题/编辑距离/72-编辑距离/72-minDistance.js)
#### 回文
- [647-回文子串](DP/子序列问题/回文/647-回文子串/647-countSubstrings.js)
- [5-最长回文子串](DP/子序列问题/回文/5-最长回文子串/5-longestPalindrome.js)
- [516-最长回文子序列](DP/子序列问题/回文/516-最长回文子序列/516-longestPalindromeSubseq.js)
### 用动态规划玩游戏


## greedy
```
其实一般而言
贪心是动规的一个特别情况
也就是说 贪心一般用来解决和动规同类型的问题
能用贪心解的 一般都可以用动规
但是 能用动规的 不一定能用贪心
```
### 区间问题
- [55-跳跃游戏](greedy/medium/55-跳跃游戏/55-canJump.js)
- [45-跳跃游戏II](greedy/medium/45-跳跃游戏II/45-jump.js)
- [452-用最少数量的箭引爆气球](greedy/medium/452-用最少数量的箭引爆气球/452-findMinArrowShots.js)
- [435-无重叠区间](greedy/medium/435-无重叠区间/435-eraseOverlapIntervals.js)
- [763-划分字母区间](greedy/medium/763-划分字母区间/763-partitionLabels.js)
- [56-合并区间](greedy/medium/56-合并区间/56-merge.js)
### 2个维度权衡问题
```
遇到两个维度权衡的时候，一定要先确定一个维度，再确定另一个维度。如果两个维度一起考虑一定会顾此失彼。
一般2个维度：也采用两次循环 一个循环确定给一个维度
2个维度的特征：一般就是二维数组之类的，有2个特征值
```
- [135-分发糖果](greedy/hard/135-分发糖果/135-candy.js)
- [406-根据身高重建队列](greedy/medium/406-根据身高重建队列/406-reconstructQueue.js)
### 序列问题
- [376-摆动序列](greedy/medium/376-摆动序列/376-wiggleMaxLength.js)
  - TODO[376-动规解法](https://programmercarl.com/0376.%E6%91%86%E5%8A%A8%E5%BA%8F%E5%88%97.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC)
- 738-单调递增的数字
  - [贪心](greedy/medium/738-单调递增的数字/738-monotoneIncreasingDigits-greedy.js)
  - [暴力法-会超时-训练下编程模拟能力](greedy/medium/738-单调递增的数字/738-monotoneIncreasingDigits-force.js)

### other
#### easy
- [455-分发饼干](greedy/easy/455-分发饼干/455-findContentChildren.js)
- [53-最大子数组和](greedy/easy/53-最大子数组和/53-maxSubArray.js)
- [1005-K次取反后最大化的数组和](greedy/easy/1005-K次取反后最大化的数组和/1005-largestSumAfterKNegations.js)
- [860-柠檬水找零](greedy/easy/860-柠檬水找零/860-lemonadeChange.js)
#### medium
- [122-买卖股票的最佳时机II](greedy/medium/122-买卖股票的最佳时机II/122-maxProfit.js)
- 134-加油站
  - [方法1: 暴力](greedy/medium/134-加油站/134-canCompleteCircuit-force.js)
  - [方法2：贪心](greedy/medium/134-加油站/134-canCompleteCircuit-greedy.js)
#### hard
- [968-监控二叉树](greedy/hard/968-监控二叉树/968-minCameraCover.js)


## 单调栈
### medium
- [739-每日温度](单调栈/medium/739-每日温度/739-dailyTemperatures.js)
- [496-下一个更大元素I](单调栈/medium/496-下一个更大元素I/496-nextGreaterElement.js)
- [503-下一个更大元素II](单调栈/medium/503-下一个更大元素II/503-nextGreaterElements.js)
### hard
- 42-接雨水
  - [方法1-动态规划](单调栈/hard/42-接雨水/42-trap-dp.js)
  - [方法2-单调栈](单调栈/hard/42-接雨水/42-trap-stack.js)
  - [方法3-双指针-最优的解法](单调栈/hard/42-接雨水/42-trap-stac-doublePoints.js)
- 84-柱状图中最大的矩形
  - [暴力法-会超时](单调栈/hard/84-柱状图中最大的矩形/84-largestRectangleArea-force.js)
  - [84-柱状图中最大的矩形](单调栈/hard/84-柱状图中最大的矩形/84-largestRectangleArea-stack.js)

## others
### LRU
- 146-LRU缓存
  - [146-LRU缓存:Map法](others/LRU/146-LRU缓存/146-LRUCache-map.js)
### LFU
- [460-LFU缓存](others/LFU/460-LFU缓存/460-LFUCache.js)

### 水塘抽样
- [382-链表随机节点](others/水塘抽样/382-链表随机节点/382-Solution.js)
- [398-随机数索引](others/水塘抽样/398-随机数索引/398-Solution.js)
### 数据结构设计
#### TODO
- [流中位数-需要大小顶堆](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487197&idx=1&sn=0cb587fda164bda7fbcaa54cb9630fde&scene=21#wechat_redirect)
- [设计推特](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484499&idx=1&sn=64f75d4bdbb4c5777ba199aae804d138&scene=21#wechat_redirect)
- [前缀树](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247495471&idx=1&sn=fd180d7e207e92a87a9c9cce69b8cdb9&scene=21#wechat_redirect)
- [单调栈](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487704&idx=1&sn=eb9ac24c644aa0950638c9b20384e982&scene=21#wechat_redirect)
- [单调队列](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247488087&idx=1&sn=673aa4e8deb942b951948650928c336e&scene=21#wechat_redirect)

#### 随机数
- [mid][380-O(1)时间插入、删除和获取随机元素](others/数据结构设计/随机数/380-O(1)时间插入、删除和获取随机元素/380-RandomizedSet.js)
- [mid][380-O(1)时间插入、删除和获取随机元素-主流解法](others/数据结构设计/随机数/380-O(1)时间插入、删除和获取随机元素/380-RandomizedSet-2.js)
- [hard][710-黑名单中的随机数](others/数据结构设计/随机数/710-黑名单中的随机数/710-Solution.js)

### Math
#### 快速幂算法
- [50-Pow(x,n)](others/Math/快速幂算法/50-Pow(x,n)/50-myPow-quikMue.js)


---

## 题集
```
labuladong + 代码随想录 + code_top + 剑指offer + 结构化刷题清单
- 所有题都得2刷，这些都是建设武器库部分
```
- [labuladong](https://mp.weixin.qq.com/s/ir1Hk06HcT8W_qz0MtyONA)
  - [labuladong-算法秘籍](https://mp.weixin.qq.com/s/00yRZUaU5c5KV-yTWhoDig)
- [代码随想录-题型体系也是很好的](https://github.com/youngyangyang04/leetcode-master)
  - [代码随想录-gitbook](https://programmercarl.com/)
  - TODO: 最终整理出自己的一份体系化的算法清单
- [codetop](https://codetop.cc/home)
  - MS
    - 苏州 - FE
    - FE (17)
    - freq >= 2
  - BT
    - 杭州 - FE
    - FE（156）
- 《剑指offer》[🔥🔥🔥-必刷]
- [leetcode](https://leetcode-cn.com/problemset/all/)
  - [hot100](https://leetcode-cn.com/problem-list/2cktkvj/)
  - 剑指offer题库（80）
  - top200
  - 名企题库（会员）
- [结构化刷题清单](https://leetcode-cn.com/circle/article/48kq9d/)
- [要注意ACM模式-一定要提前练习并熟悉](https://programmercarl.com/%E5%89%8D%E5%BA%8F/%E4%BB%80%E4%B9%88%E6%98%AF%E6%A0%B8%E5%BF%83%E4%BB%A3%E7%A0%81%E6%A8%A1%E5%BC%8F%EF%BC%8C%E4%BB%80%E4%B9%88%E5%8F%88%E6%98%AFACM%E6%A8%A1%E5%BC%8F%EF%BC%9F.html)
- 注意：leet在面试阶段需要准备新账号 以前练习过的会有题解和提交记录 会比较尴尬~~
- [32道高频必刷](https://biaodigit.github.io/LeetCode)
- [一份不错的系统的题集-从各个书中来的](http://www.leetcodecn.com/)
- [按公司和岗位分类的题集-来自codeTop](https://github.com/afatcoder/LeetcodeTop)

---
## 标签
- 推荐！！！[结构化刷题清单](https://leetcode-cn.com/circle/article/48kq9d/)
### 基本
- 数组
- 字符串
- 排序
- 矩阵
- 枚举
- 字符串匹配
- 桶排序
- 计数排序
- 基数排序
### 算法
- 动态规划
- 深度优先搜索
- 广度优先搜索
- 贪心
- 二分查找
- 回溯
- 递归
- 分治
- 记忆化搜索
- 归并排序
- 快速排序
### 基础数据结构
- 哈希表
- 树
- 栈
- 堆（优先队列）
- 图
- 链表
- 二叉搜索树
- 单调栈
- 单调队列
- 队列
- 有序集合
- 拓扑排序
- 最短路
- 双向链表
- 最小生成树
- 欧拉回路
- 强连通分量
- 双联通分量
### 高级数据结构
- 并查集
- 字典树
- 线段树
- 树状数组
- 后缀数组
### 技巧
- 双指针
- 位运算
- 前缀和
- 滑动窗口
- 计数
- 状态压缩
- 哈希函数
- 滚动哈希
- 扫描线
### 数学
- 数学
- 几何
- 博弈
- 组合数学
- 随机化
- 数论
- 概率与统计
- 水塘抽样
- 拒绝采样
### 其他
- 数据库
- 设计
- 数据流
- 交互
- 脑筋急转弯
- 迭代器
- 多线程
- shell

---

## 2022-1-28~2022-2-7 11pd
```
1. js没有的 需要手动实现
2. 简单10 + 中等3 / day
3. 按标签顺着题集：集中刷，便签内排序：按照考频+意向度排序刷
 数组：MS-数组，
4. 在网页上做题，通过后，代码记录到github
5. 每一个都要给出复杂度分析，很重要
```
线性数据结构
- 数组
- 字符串
- 链表
- 栈
- 队列
- 堆（优先队列）
- map
- set
- hash
非线性数据结构
- 二叉树
- AVL树
- Trie
常用武器库
- 双指针
- 滑动窗口
- 递归-尾递归
- LRU/LFU
- DFS/BFS
- 二分查找
- 排序
- 位运算
- 回溯
- 动规？
  - 贪心？
