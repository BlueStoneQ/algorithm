/**
 * leet: https://leetcode-cn.com/problems/linked-list-random-node/
 * Date: 2022-2-27
 * me: 我对这个算法和场景很有兴趣 感觉很有意义 应该对大数据场景很有意义 是实际工作中比较能用得上的算法
 */

/**
 * 方法1：是遍历链表 将链表中每个值放到数组中 然后 生成random的下标 返回该下标数组 
 * [√]方法2：水塘采样算法
 * 进阶：
 * 如果链表非常大且长度未知，该怎么处理？
 * 你能否在不使用额外空间的情况下解决此问题？
 * 针对进阶 我们需要使用 水塘采样算法
 * 一定要理解水塘采样的算法证明 这才是最重要的
 * 这里 leet官方的解释就很清楚 推荐参考
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
 var Solution = function(head)  {
  this.head = head;
};

/**
* @return {number}
*/
Solution.prototype.getRandom = function() {
  let res = 0; // 这里给什么初始值不重要 因为一般下面都会改变
  let i = 1;  // [0, i) 动态区间的右边界 该区间中 任何一个值 === 0的概率 = 1/i, Math.random() * i的取值[0, i)

  // 动态遍历链表 不断更新随机值
  for (let p = this.head; p !== null; p = p.next) {
      const randomVal = Math.floor(Math.random() * i); // randomVal本身就是数组[0, ..., i)中的值
      if (randomVal === 0)  res = p.val;
      i++; // 右边界扩大一步 计算下一个区间的随机值
  }

  return res;
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(head)
* var param_1 = obj.getRandom()
*/