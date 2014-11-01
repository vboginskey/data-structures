var makeBinarySearchTree = function(value){
  var newTree = Object.create(bstMethods);
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;
  return newTree;
};

var bstMethods = {};

bstMethods.insert = function(value) {

  // var _insert = function(val, numOfCalls) {
  //   var direction = val < this.value ? 'left' : 'right';

  //   if (this[direction]) {
  //     numOfCalls = _insert.call(this[direction], val, numOfCalls);
  //     if (numOfCalls > this[direction].maxDepth) {
  //       this[direction].maxDepth = numOfCalls;
  //     } else {
  //       this[direction].minDepth = numOfCalls;
  //     }
  //   } else {
  //     this[direction] = makeBinarySearchTree(val);
  //   }
  //   return ++numOfCalls;
  // };
  // var callDepth = _insert.call(this, value, 0);
  // if (callDepth > this.maxDepth) {
  //   this.maxDepth = callDepth;
  // } else {
  //   this.minDepth = callDepth;
  // }
  var direction = value < this.value ? 'left' : 'right';

  if (this[direction]) {
    this[direction].insert(value);
  } else {
    this[direction] = makeBinarySearchTree(value);
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

bstMethods.breadthFirstLog = function(callback, child) {
  if (!child) { callback(this.value); }
  if (this.left) { callback(this.left.value); }
  if (this.right) { callback(this.right.value); }
  if (this.left) { this.left.breadthFirstLog(callback, true); }
  if (this.right) { this.right.breadthFirstLog(callback, true); }
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

/*
 * Complexity: What is the time complexity of the above functions?
 */





