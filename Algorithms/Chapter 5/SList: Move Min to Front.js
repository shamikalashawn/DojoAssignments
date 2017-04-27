// Create a standalone function that locates the minimum value in a linked list, and moves that node to the front of the list.  Return the new list, with all nodes still present, and all (except for the new head node) in their original order.

function minToFront(list) {
  var runner = list.head;
  if (runner) {
    var object = list.maxMinAvg();
    var min = object['Min']
    if (runner.value == min) {
      return list;
    }
    while (runner) {
      if (runner.nextNodevalue == min) {
        runner.nextNode = runner.nextNode.nextNode;
        list.addFront(min);
        return list;
      }
      else {
        runner = runner.nextNode;
      }
    }
  }
  return null;
}
