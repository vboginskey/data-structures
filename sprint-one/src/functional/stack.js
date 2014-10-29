var makeStack = function(){
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    someInstance[size] = value;
    size++;
  };

  someInstance.pop = function(){
    if (size) {
      size--;
      var pop = someInstance[size];
      delete someInstance[size]
      return pop;
    }
  };

  someInstance.size = function(){
    return size;

  };

  return someInstance;
};