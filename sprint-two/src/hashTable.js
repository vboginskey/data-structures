var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype._rebuildHashTable = function() {
  var tempStorage = makeLimitedArray(this._limit);

  this._storage.each(function(linkedList) {
    if (linkedList) {
      var linkedListValue, k, v;

      while (linkedListValue = linkedList.removeHead()) {
        k = linkedListValue[0];
        v = linkedListValue[1];

        var i = getIndexBelowMaxForKey(k, this._limit);
        var tempValue = makeLinkedList();
        tempValue.addToTail([k, v]);
        tempStorage.set(i, tempValue);
      }
    }
  });
  this._storage = tempStorage;
};

HashTable.prototype.insert = function(k, v){
  this._size++;
  if (this._size > 0.75 * this._limit) {
    this._limit *= 2;
    this._rebuildHashTable();
  }

  var i = getIndexBelowMaxForKey(k, this._limit);

  var tableValue = this._storage.get(i) || makeLinkedList();
  tableValue.addToTail([k,v]);
  this._storage.set(i, tableValue);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var tableValue = this._storage.get(i);
  if (!tableValue) { return null; }

  var listValue = tableValue.removeHead();

  while (listValue && listValue[0] !== k) {
    listValue = tableValue.removeHead();
  }

  return listValue[1];
};

HashTable.prototype.remove = function(k){
  this._size--;
  if (this._size < 0.25 * this._limit) {
    this._limit /= 2;
    this._rebuildHashTable();
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?

  insert:             constant
  retrieve:           constant
  remove:             constant
  _rebuildHashTable:

 */
