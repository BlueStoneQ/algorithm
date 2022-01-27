/**
 * Date： 2021-5-19
 * 旋转数组，
 * 例如:
 * input:array=[1,2,3,4], k=2,
 * output: [3, 4, 1, 2]
 * 要求：
 * 1. 采取至少3种方法实现
 * 2. 可以考虑下额外空间O(1)的情况（也就是说指针也只能使用一个，双指针可以通过：指针 + 步长实现其他指针）
 */
/**
 * 方法1： 采用双数组（使用一个额外数组存储结果），这里的slice还是造成了额外双数组的内存消耗
 * 在len-k-1的地方 将数组分成2半，将k之后的部分移到前面组成新数组
 * 始终要记住：数组length到index的映射 index = len - 1
 * @param {*} array 
 * @param {*} k 
 */
const revolveArray1 = (array, k) => {
  const len = array.length;
  const resArr = array.slice(len-k).concat(array.slice(0, len-k));
  return resArr;
}

/**
 * 算法2：
 * 先利用双指针逐个移动数组，让数组整体向后偏移k，在前面空出k个空位来
 * 一个指针始终从将k-len的数组裁剪出来 和 前面0-k的子数组进行逐个交换 知道2个指针发生碰撞 则停止交换
 * 再利用指针将后面k个元素填充到前面的空位中来
 * 1. O(1）要求下实现双指针： inedx + step实现第二 第三指针
 * 2. ?? 交换怎么实现？？
 *
 */
const revolveArray2 = (array, k) => {
  let lIndex = 0;
  while(lIndex < (array.length-k)) {
    lIndex++;
  }
}




/**
 * test
 */
(() => {
  const input1 = [1,2,3,4];
  const k1=2;
  const res1 = revolveArray1(input1, k1);
  console.log('res1: ', res1);
})()