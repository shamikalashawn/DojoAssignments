/*
Create a linked list with a head and pointer
Create a node that is pointed to by head if first node or last node in list otherwise
*/
class LinkedList {
  constructor() {
    this.head = null;
}
var Node = function (val) {
  this.value = val;
  this.next = null;
}
LinkedList.prototype.addNode = function (val) {
  var runner = this.head;
  if (!runner) {
    this.head = new Node(val);
    return this;
  }
  while (runner.next) {
    runner = runner.next;
  }
  runner.next = new Node(val);
  return this;
}
