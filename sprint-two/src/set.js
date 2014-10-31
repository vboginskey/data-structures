var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.stringify = function(item) {
  var itemString;
  if (_.isUndefined(item)) {
    itemString = 'undefined';
  } else if (_.isFunction(item)) {
    itemString = item.toString();
  } else {
    itemString = JSON.stringify(item);
  }
  return itemString;
};

setPrototype.add = function(item){
  var itemString = this.stringify(item);
  this._storage[itemString] = item;
};

setPrototype.contains = function(item){
  var itemString = this.stringify(item);
  return itemString in this._storage;
};

setPrototype.remove = function(item){
  var itemString = this.stringify(item);
  delete this._storage[itemString];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
