var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    if (list.head === null) {
      list.head = list.tail = makeNode(value);
    } else if (list.head === list.tail) {
      list.head.next = makeNode(value);
      list.tail = list.head.next;
    } else {
      list.tail.next = makeNode(value);
      list.tail = list.tail.next;
    }
  };
  list.removeHead = function(){
    if (list.head) {
      var value = list.head.value;
      list.head = list.head.next;
      return value;
    }
  };

  list.contains = function(target){
    var curNode = list.head;
    while (curNode) {
      if (curNode.value === target) {
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
