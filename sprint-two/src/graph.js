var Graph = function(){
  this.graph = {};
};

Graph.prototype.addNode = function(newNode, toNode){

  var graphSize = Object.keys(this.graph).length;

  if (toNode) {
    this.graph[newNode] = [];
    this.addEdge(newNode, toNode);
  } else if (graphSize === 1) {
    var curNode = Object.keys(this.graph)[0];
    this.graph[newNode] = [];
    this.addEdge(newNode, curNode);
  } else {
    this.graph[newNode] = [];
  }
};

Graph.prototype.contains = function(node){
  return node in this.graph;
};

Graph.prototype.removeNode = function(node){
  delete this.graph[node];

  for (var graphNode in this.graph) {
    this.graph[graphNode] = _.without(this.graph[graphNode], node);
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return _.contains(this.graph[fromNode],toNode) &&
    _.contains(this.graph[toNode], fromNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.graph[fromNode].push(toNode);
  this.graph[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this.graph[fromNode] = _.without(this.graph[fromNode], toNode);
  this.graph[toNode] = _.without(this.graph[toNode], fromNode);
  if (!this.graph[fromNode].length) {
    delete this.graph[fromNode];
  }
  if (!this.graph[toNode].length) {
    delete this.graph[toNode];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
