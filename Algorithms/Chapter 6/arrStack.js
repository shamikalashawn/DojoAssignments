//last in first out
function arrStack() {
  var stack = [];

  this.push = function (val) {
    stack[stack.length] = val;
    console.log(stack);
    return this;
  }

  this.pop = function () {
    if (stack.length) {
      var returned = stack[stack.length-1];
      stack.length = stack.length-1;
      return returned;
    }
    return null;
  }

  this.top = function () {
    var top = this.pop();
    if (top) {
      this.push(top);
    }
    return top;
  }

  this.contains = function (val) {
    var stack2 = new arrStack();
    var found = false;
    while(this.top()){
      if (this.top() == val) {
        found = true;
        break;
      }
      stack2.push(this.pop());
    }
    while(stack2.top()){
      this.push(stack2.pop())
    }
    console.log(stack);
    return found;
  }

  this.isEmpty = function () {
    if(!stack.length){
      return true;
    }
    return false;
  }

  this.isEmpty2 = function () {
    if (this.top()) {
      return false;
    }
    return true;
  }

  this.size = function () {
      var stack2 = new arrStack();
      var counter = 0;
      while(this.top()){
        counter ++;
        stack2.push(this.pop());
      }
      while(stack2.top()){
        this.push(stack2.pop())
      }
      return counter;
    }


}

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



}
function slNode(val) {
  this.value = val;
  this.nextNode = null;
}

function copyStack(stack) {
  var newStack = new arrStack();
  var newQueue = new slQueue();
  while(stack.top()){
    newStack.push(stack.pop());
  }
  while(newStack.top()){
    newQueue.enqueue(newStack.pop());
  }
  while (newQueue.front()) {
    var temp = newQueue.dequeue();
    stack.push(temp)
    newstack.push(temp);
  }
  return newStack;
}

var newStack = new arrStack();

console.log(newStack);
newStack.push(4).push(5).push(6)
console.log(newStack.pop());
