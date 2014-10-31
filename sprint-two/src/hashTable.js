var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var tableValue = this._storage.get(i) || makeLinkedList();
  tableValue.addToTail(k);
  tableValue.addToTail(v);
  this._storage.set(i, tableValue);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var tableValue = this._storage.get(i);
  if (!tableValue) {
    return null;
  }
  var listValue = tableValue.removeHead();

  while (listValue !== k) {
    listValue = tableValue.removeHead();
  }

  return tableValue.removeHead();

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
