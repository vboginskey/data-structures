var makeStack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.top = 0;

  _.extend(newStack, stackMethods);

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
  }
  return this.storage[this.top];
};

stackMethods.size = function() {
  return this.top;
};
