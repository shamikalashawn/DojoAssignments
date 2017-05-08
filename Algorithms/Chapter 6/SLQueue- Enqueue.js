<<<<<<< HEAD
// first in first out
=======

>>>>>>> e4de77c6658cc96ede9876b91759915171675027
function slQueue() {
  var head = null;
  var tail = null;

  this.enqueue = function (val) {
    var newNode = new slNode(val)
    if (tail is null) {
      tail = newNode;
      head = newNode;
    }
    else {
      tail.nextNode = newNode;
      tail = newNode;
    }
    return this;
  }

  this.dequeue = function () {
    if (head) {
      var front = head.value
      if (head.nextNode is null) {
        head = tail = null;
      }
      else {
        head = head.nextNode;
      }
      return front;
    } else {
      return null;
    }
  }

  this.front = function () {
    if (head) {
      return head.value
    }
    return null
  }

  this.contains = function (val) {
    var runner = head;
    while(runner){
      if(runner.value != val){
        runner = runner.nextNode;
      } else {
        return true;
      }
    }
    return false;
  }

  this.isEmpty = function () {
    if (!head) {
      return true;
    }
    return false;
  }

  this.size = function () {
    var counter = 0;
    var runner = head;
    while (runner) {
      counter ++;
      runner = runner.nextNode;
    }
    return counter;
  }

<<<<<<< HEAD

=======
  
>>>>>>> e4de77c6658cc96ede9876b91759915171675027

}
function slNode(val) {
  this.value = val;
  this.nextNode = null;
}
