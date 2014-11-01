var makeBinarySearchTree = function(value){
  var newTree = Object.create(bstMethods);

  newTree.left = null;
  newTree.right = null;
  newTree.value = value;

  return newTree;
};

var bstMethods = {};


bstMethods.insert = function(value, enableRebalance) {
  var direction = value < this.value ? 'left' : 'right';

  if (this[direction]) {
    if (enableRebalance) {
      this[direction] = this[direction].insert(value, enableRebalance);
    } else {
      this[direction].insert(value, enableRebalance);
    }
  } else {
    this[direction] = makeBinarySearchTree(value);
  }
  if (enableRebalance) {
    return this._rebalance();
  }
};

bstMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.left && this.left.contains(value)) {
    return true;
  } else if (this.right && this.right.contains(value)) {
    return true;
  }
  return false;
};

bstMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) { this.left.depthFirstLog(callback); }
  if (this.right) { this.right.depthFirstLog(callback); }
};

bstMethods.breadthFirstLog = function(callback) {

  var walkTree = function() {
    var curNode;
    if (curNode = queue.dequeue()) {
      callback(curNode.value);
      if (curNode.left) { queue.enqueue(curNode.left); }
      if (curNode.right) { queue.enqueue(curNode.right); }
      walkTree();
    }
  };

  var queue = new Queue();
  queue.enqueue(this);
  walkTree();

};

bstMethods._findDepth = function(depth) {
  depth = depth || 0;
  depth++;

  if (this.left) { var leftDepth = this.left._findDepth(depth); }
  if (this.right) { var rightDepth = this.right._findDepth(depth); }
  if (leftDepth && rightDepth) {
    return leftDepth > rightDepth ? leftDepth : rightDepth;
  } else if (leftDepth) {
    return leftDepth;
  } else if (rightDepth) {
    return rightDepth;
  } else {
    return depth;
  }
};

bstMethods._rotate = function(direction) {
  var pivot;
  var root = this;
  if (direction === 'left') {
    pivot = root.right;
    root.right = pivot.left;
    pivot.left = root;
  } else {
    pivot = root.left;
    root.left = pivot.right;
    pivot.right = root;
  }
  return pivot;
};

bstMethods._rebalance = function() {
  var root = this;

  var leftDepth = root.left ? root.left._findDepth() : 0;
  var rightDepth = root.right ? root.right._findDepth() : 0;

  if (leftDepth > rightDepth) {
    var leftChildLeftDepth = root.left.left ? root.left.left._findDepth() : 0;
    var leftChildRightDepth = root.left.right ? root.left.right._findDepth() : 0;

    if (leftChildLeftDepth > leftChildRightDepth) {
      root = root._rotate('right');
    } else if (leftChildLeftDepth < leftChildRightDepth){
      root.left = root.left._rotate('left');
      root = root._rotate('right');
    }
  } else if (leftDepth < rightDepth) {
    var rightChildLeftDepth = root.right.left ? root.right.left._findDepth() : 0;
    var rightChildRightDepth = root.right.right ? root.right.right._findDepth() : 0;

    if (rightChildLeftDepth < rightChildRightDepth) {
      root = root._rotate('left');
    } else if (rightChildLeftDepth > rightChildRightDepth) {
      root.right = root.right._rotate('right');
      root = root._rotate('left');
    }
  }
  return root;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var Queue = function() {
  this.storage = {};
  this.back = 0;
  this.front = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

Queue.prototype.dequeue = function() {
  if (this.back - this.front > 0) {
    var value = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return value;
  }
};

Queue.prototype.size = function() {
  return this.back - this.front;
};

