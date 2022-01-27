/**
 * 2021-5-24
 * n*n矩阵(本质上就是二维数组)顺时针旋转90度
 * 1，2，3      7, 4, 1
 * 4，5，6  =>  8, 5, 2
 * 7，8，9      9, 6, 3
 * 即：
 * [[1,2,3], [4,5,6]，[7，8，9]]  => [[7,4,1], [8,5,2], [9,6,3]]
 */

/**
 * 算法1：矩阵方向转换，两个点之间的下标和维度n之间有一定的计算关系：newIndex = f(oldIndex, n)
 * 具体而言：[newN][newM] = [f(oldN, n), f(oldm, n)] = []
 * 类推，找规律（和维度已经当前所在的层数（一维数组下标）和位置（二维数组下标））：
 * 1
 * [0][0] => [0][2]
 * 2
 * [0][1] => [1][2]
 * 3
 * [0][2] => [2][2]
 * 
 * 4
 * [1][0] => [0][1]
 * 5
 * [1][1] => [1][1]
 * 6 
 * [1][2] => [2][1]
 * 
 * 7
 * [2][0] => [0][0]
 * 8
 * [2][1] => [1][0]
 * 9
 * [2][2] => [2][0]
 * 
 * N*N矩阵
 * [n][m] => [0-(N-1)][(N-1)-当前的层数]
 * 
 * @param {*} arr 
 */
const rotate90deg1 = (arr) => {
  // 防御
  // 矩阵的维度
  const len = arr.length;
  // resArr需要初始化下(依照arr动态初始化)
  const resArr = arr.map(v => []);
  for (let i = 0; i < len;i++) {
    // 新的数组的一维下标
    let j = 0;
    while(j < len) {
      resArr[j][len-1-i] = arr[i][j];
      console.log(`resArr[${j}][${len-1-i}] = arr[${i}][${j}]: ${arr[i][j]}`);
      j++;
    }
  }
  return resArr;
}

/**
 * 算法2：
 * TODO:实现原地旋转,不借助其他空间
 * 那么 只要将算法1中放到结果数组中的操作 改成内部交换即可 ？？ 是这样吗 
 */
 const rotate90deg2 = (arr) => {
  // 防御
  // 矩阵的维度
  const len = arr.length;
  for (let i = 0; i < len;i++) {
    // 新的数组的一维下标
    let j = 0;
    while(j < len) {
      arr[j][len-1-i] = arr[i][j];
      console.log(`resArr[${j}][${len-1-i}] = arr[${i}][${j}]: ${arr[i][j]}`);
      j++;
    }
  }
}

(() => {
  const input1 = [[1,2,3], [4,5,6],[7,8,9]];
  // expect [[7,4,1], [8,5,2], [9,6,3]];
  console.log('expect rotate90deg1([[1,2,3], [4,5,6],[7,8,9]]): ', rotate90deg1(input1));
})()
