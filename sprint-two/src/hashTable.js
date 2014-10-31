var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var _grow = function(hashTable) {
    hashTable._limit *= 2;
    var tempStorage = makeLimitedArray(hashTable._limit);

    hashTable._storage.each(function(linkedList) {
      var k, v;
      if (linkedList === undefined) { debugger; }
      while (k = linkedList.removeHead()) {
        v = linkedList.removeHead();
        var i = getIndexBelowMaxForKey(k, hashTable._limit);
        var tempValue = makeLinkedList();
        tempValue.addToTail(k);
        tempValue.addToTail(v);
        tempStorage.set(i, tempValue);
      }
    });
    hashTable._storage = tempStorage;
  };

  this._size++;
  if (this._size > 0.75 * this._limit) { _grow(this); }

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
  this._size--;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
