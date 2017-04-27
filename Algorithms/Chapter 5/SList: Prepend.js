// Create a method to insert a new value

function sList() {
  this.head = null

  this.prepend = function (val, before) {
    var runner = this.head
    var newNode = new ListNode(val);
    if (runner) {
      if (runner.value == before) {
        newNode.nextNode = runner
        this.head = newNode
      } else{
        while (runner.nextNode) {
          if (runner.nextNode.value != before) {
            runner = runner.nextNode;
          }
          else {
            break;
          }
        }
        newNode.nextNode = runner.nextNode;
        runner.nextNode = newNode;
      }
    }
    else {
      this.head = newNode
    }
    return this
  }
}
