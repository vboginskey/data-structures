var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function(){
    // debugger;
    if (back - front > 0) {
      var value = storage[front];
      delete storage[front];
      front++;
      console.log('back: ' + back + ' front: ' + front);
      return value;
    }

  };

  someInstance.size = function(){
    return back - front;
  };

  return someInstance;
};
