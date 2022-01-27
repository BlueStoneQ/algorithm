/**
 * tree
 */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null; 
  }
}

class BTree {
  constructor() {
    this.root = null;
    this.head = null;
  }

  // 遍历引擎
  // tranverse(node) {
  //   if(this.node ) {}
  // }

  // 增
  addNode(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      this.head = this.root;
      return;
    }
    if (this.head.left === null) {
      this.head.left = newNode;
    }
    this.head.right = newNode;
    this.head = this.head.left;
  }
  // 删
  // 改
  // 查
}