/**
 * topK 高频问题
 * 2022-5-11
 * 方法1: 维护大小为k的小顶堆
    - 需要维护一个小顶堆 对于js而言 需要写更多的代码，另外 如果k很大 空间消耗也会比较多
    - [√-不是考察重点]当然 比较取巧的是 内部可以维护一个长度为k的数组，每次遍历一个元素 对k进行pop 然后加入新元素 重新sort一下 
        - [√]方法0-内部使用sort维持一个始终有序的队列，仅适用于js或者机考，不是主要考察点
 * 方法2: 快速排序的partition模式
    - 快速选择算法是快速排序的变体，效率更高，面试中如果能够写出快速选择算法，肯定是加分项
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
    var findKthLargest = function(nums, k) {
      // defend
  
      // init data
      const len = nums.length;
      const arr = nums.slice(0, k).sort((a, b) => b - a); // 截取arr中的前k个元素 作为一个排序(降序)数组容器（代替优先级队列-小顶堆），始终保持arr的头部是这个小队列的最大值,则这个队列就保存了nums中最大的k个数,这k个数中最小的就是nums中第k大的数
      // 也就是这个方法用一个队列 在每次加入新元素 加入新元素后排序 然后pop出最小的元素 保证队列的长度不要太长 
  
      for (let i = k; i < len; i++) {
          console.log(i, arr, nums[i]);
          // 先把数组中最小的排除出去 也就是队尾的元素
          // 加入新元素
          arr.push(nums[i]);
          // 排序
          arr.sort((a, b) => b - a);
          // 排出最小的 - pop一定要放在sort之后
          arr.pop();
          // 将k-len个元素依次加入数组 对数组进行排序
      }
      // algo
      // return
      return arr[k - 1];
  };