var makeStack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.top = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

stackMethods.pop = function() {
  if (this.top > 0) {
    this.top--;
    var value = this.storage[this.top];
    delete this.storage[this.top];
    return value;
  }
};

stackMethods.size = function() {
  return this.top;
};
