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
      list.tail.previous = list.head;
    } else {
      list.tail.next = makeNode(value);
      list.tail.previous = list.tail;
      list.tail = list.tail.next;
    }
  };
  list.removeHead = function(){
    var value = list.head.value;
    list.head = list.head.next;
    if (list.head) {
      list.head.previous = null;
    }
    return value;
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

  list.addToHead = function(value) {
    list.head.previous = makeNode(value);
    list.head = list.head.previous;
  };

  list.removeTail = function() {
    var value = list.tail.value;
    list.tail = list.tail.previous;
    return value;
  };

  return list;
};



/////////////////////////////

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
