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
}

var newStack = new arrStack();

console.log(newStack);
newStack.push(4).push(5).push(6)
console.log(newStack.pop());
