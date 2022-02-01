# algorithm
A record of algorithm practice.

# 题型清单
## 数组
### 双指针
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