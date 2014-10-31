var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  var found = false;
  var walkTree = function(tree) {
    if (tree.value === target) {
      found = true;
    } else {
      _.each(tree.children, function(branch) {
        walkTree(branch);
      });
    }
  };

  walkTree(this);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
