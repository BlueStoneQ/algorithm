# sTone's algorithm-note
A record of algorithm practice.

# 目录
- [题集](#题集)
- [标签](#标签)
- [数组](#数组)
- [链表](#链表)
- [树](#树)

# 数据结构
## Heap
- [MinHeap](Data-structure/binary-heap/min-heap/MinHeap.js)

# 题型清单
## 树
### TODO
- [1373. 二叉搜索子树的最大键值和](https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree/)
  - [题解](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247490891&idx=1&sn=677a7e887fa551e994ba73bcb2538cea&scene=21#wechat_redirect)
- [代码随想录：这里的习题都刷一下，知识结构较好](https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%A7%8D%E7%B1%BB)
- [leetCode上没有这道题-计算完全二叉树的节点数-高效方法](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485057&idx=1&sn=45a3b89a4efef236cb662d5505d7ce36&scene=21#wechat_redirect)
### 遍历
#### easy 
- [144-二叉树的前序遍历](Tree/easy/144-二叉树的前序遍历/144-preorderTraversal.js)
- [226-翻转二叉树](Tree/easy/226-翻转二叉树/226-invertTree.js)
#### medium
- [114-二叉树展开为链表](Tree/medium/114-二叉树展开为链表/114-flatten.js)
- [多叉树遍历][341-扁平化嵌套列表迭代器](Tree/medium/341-扁平化嵌套列表迭代器/341-NestedIterator.js)
  - [栈+迭代+惰性求值](Tree/medium/341-扁平化嵌套列表迭代器/341-NestedIterator-stack.js)
### 层序遍历BFS
#### medium
- [116-填充每个节点的下一个右侧节点指针](Tree/medium/116-填充每个节点的下一个右侧节点指针/116-connect.js)
### 二叉树的属性
#### easy
- [104-二叉树的最大深度](Tree/easy/104-二叉树的最大深度/104-maxDepth.js)
- [111-二叉树的最小深度](Tree/easy/111-二叉树的最小深度/111-minDepth.js)
- [101-对称二叉树](Tree/easy/101-对称二叉树/101-isSymmetric.js)
  - [101-对称二叉树-迭代法](Tree/easy/101-对称二叉树/101-isSymmetric-iteration.js)
- [543-二叉树的直径](Tree/easy/543-二叉树的直径/543-diameterOfBinaryTree.js)
#### medium
- [222-完全二叉树的节点个数](Tree/medium/222-完全二叉树的节点个数/222-countNodes.js)
### 二叉树构建
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
### BST 与 中序遍历
#### easy
- [700-二叉搜索树中的搜索](Tree/easy/700-二叉搜索树中的搜索/700-searchBST.js)
#### medium 
- [230-二叉搜索树中第K小的元素](Tree/medium/230-二叉搜索树中第K小的元素/230-kthSmallest.js)
- [1038-把二叉搜索树转换为累加树](Tree/medium/1038-把二叉搜索树转换为累加树/1038-bstToGst.js)
- [98-验证二叉搜索树](Tree/medium/98-验证二叉搜索树/98-isValidBST.js)
- [701-二叉搜索树中的插入操作](Tree/medium/701-二叉搜索树中的插入操作/701-insertIntoBST.js)
- [450-删除二叉搜索树中的节点](Tree/medium/450-删除二叉搜索树中的节点/450-deleteNode.js)
### 最近公共祖先
#### easy
- [235-二叉搜索树的最近公共祖先](Tree/easy/235-二叉搜索树的最近公共祖先/235-lowestCommonAncestor.js)
#### medium
- [236-二叉树的最近公共祖先](Tree/medium/236-二叉树的最近公共祖先/236-lowestCommonAncestor.js)
## 链表
```
注意：链表中的虚拟头结点 是一个很重要的技巧, 用来防止很多边界错误
```
### TODO
- 23. 合并K个升序链表 ([MinHeap](Data-structure/binary-heap/min-heap/MinHeap.js)已有)
  - [题解](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492022&idx=1&sn=35f6cb8ab60794f8f52338fab3e5cda5&scene=21#wechat_redirect)
- [25-K个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)
  - 边界 基础反转的掌握不够

### 链表反转
#### easy
- [206-反转链表](Linked-list/easy/206-反转链表/206-reverseList.js)
- [234-回文链表](Linked-list/easy/234-回文链表/234-isPalindrome.js)
### 链表合并
#### easy 
- [21-合并两个有序链表](Linked-list/easy/21-合并两个有序链表/21-mergeTwoLists.js)
### 双指针
#### easy
- [83-删除排序链表中的重复元素](Linked-list/easy/83-删除排序链表中的重复元素/83-deleteDuplicates.js)
- [876-链表的中间结点](Linked-list/easy/876-链表的中间结点/876-middleNode.js)
- [判断环形链][141-环形链表](Linked-list/easy/141-环形链表/141-hasCycle.js)
- [160-相交链表](Linked-list/easy/160-相交链表/160-getIntersectionNode.js)
#### medium
- [环起点][142-环形链表II](Linked-list/medium/142-环形链表II/142-detectCycle.js)
- [92-反转链表II](Linked-list/medium/92-反转链表II/92-reverseBetween.js)
### 其他
#### medium
- [19-删除链表的倒数第N个结点](Linked-list/medium/19-删除链表的倒数第N个结点/19-removeNthFromEnd.js)
## 数组
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
### 滑动窗口
```
1. 滑动窗口的题的特征： 
  1. 理解滑动窗口的作用：就是动态遍历子串，提供访问时机
  2. 一般是2个串 子串问题，子串也就是要求顺序是和原来母字符串一致，这个时候，遍历所有的子串，需要一个滑动窗口遍历所有情况
```
#### medium
- [567-字符串的排列](Array/medium/567-字符串的排列/567-checkInclusion.js)
- [438-找到字符串中所有字母异位词](Array/medium/438-找到字符串中所有字母异位词/438-findAnagrams.js)
- [3-无重复字符的最长子串](Array/medium/3-无重复字符的最长子串/3-lengthOfLongestSubstring.js)
#### hard
- [76-最小覆盖子串](Array/hard/76-最小覆盖子串/76-minWindow.js)

### 去重
#### TODO
- 1081 不同字符的最小子序列 Medium (和316是一个题其实 同一套解法 表述不同)
#### easy
- [26-删除有序数组中的重复项](Array/easy/26-删除有序数组中的重复项/26-removeDuplicates.js)
  - 类似思路的 [83-删除排序链表中的重复元素](Linked-list/easy/83-删除排序链表中的重复元素/83-deleteDuplicates.js)
- [27-移除元素](Array/easy/27-移除元素/27-removeElement.js)
- [283-移动零](Array/easy/283-移动零/283-moveZeroes.js)
#### medium 
- [316-去除重复字母](Array/medium/316-去除重复字母/316-removeDuplicateLetters.js)
### 二分法
```
1. 二分法一般适用于求某个区间的最值（左边界值 === min; 右边界值 === max;）
```
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


## 动态规划DP
### 矩阵中的动态规划
#### medium
- [96-不同的二叉搜索树](Tree/medium/96-不同的二叉搜索树/96-numTrees.js)
- [95-不同的二叉搜索树II](Tree/medium/95-不同的二叉搜索树II/95-generateTrees.js)

---

## 题集
- [labuladong](https://mp.weixin.qq.com/s/ir1Hk06HcT8W_qz0MtyONA)
- [codetop](https://codetop.cc/home)
  - MS
    - 苏州 - FE
    - FE (17)
  - BT
    - 杭州 - FE
    - FE（156）
- [leetcode](https://leetcode-cn.com/problemset/all/)
  - 剑指offer题库（80）
  - top200
  - 名企题库（会员）
- [结构化刷题清单](https://leetcode-cn.com/circle/article/48kq9d/)
- [代码随想录-题型体系也是很好的](https://github.com/youngyangyang04/leetcode-master)
  - TODO: 最终整理出自己的一份体系化的算法清单
- [要注意ACM模式-一定要提前练习并熟悉](https://programmercarl.com/%E5%89%8D%E5%BA%8F/%E4%BB%80%E4%B9%88%E6%98%AF%E6%A0%B8%E5%BF%83%E4%BB%A3%E7%A0%81%E6%A8%A1%E5%BC%8F%EF%BC%8C%E4%BB%80%E4%B9%88%E5%8F%88%E6%98%AFACM%E6%A8%A1%E5%BC%8F%EF%BC%9F.html)

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
