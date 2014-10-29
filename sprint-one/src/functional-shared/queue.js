var makeQueue = function(){
  var newQueue = {};
  newQueue.storage = {};
  newQueue.front = 0;
  newQueue.back = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

queueMethods.dequeue = function() {
  if (this.back - this.front > 0) {
    var value = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return value;
  }
};

queueMethods.size = function() {
  return this.back - this.front;
};
