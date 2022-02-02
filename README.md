# sTone's algorithm-note
A record of algorithm practice.

# 题型清单
## 链表
### 双指针
#### easy
- [83-删除排序链表中的重复元素](Linked-list/easy/83-删除排序链表中的重复元素/83-deleteDuplicates.js)
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
- 528. 按权重随机选择（中等）
  - [题解](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492884&idx=1&sn=e9583238c67e417df41feaa4ed62871d&scene=21#wechat_redirect)
- 382
- 298
  - [随机算法之水塘抽样算法](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484974&idx=1&sn=795a33c338d4a5bd8d265bc7f9f63c03&chksm=9bd7f826aca07130e303d3d6f5c901b8aa00f9c3d02ffc26d45b56f1d36b538990c9eebd06a8&scene=21#wechat_redirect)
#### medium
- [×][380-O(1) 时间插入、删除和获取随机元素](Array/medium/380-O(1)时间插入、删除和获取随机元素/380-RandomizedSet.js)
  - 剩最后2个用例，输入量太大，暂时难以排查，后面再看，思路okay

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