// American Idol seems to air singers that are the best, and a few that seem like the worst! Create function max(node) to return list's largest val.  Create min(node) to return list's smallest value.  Create average(node) to return average val.

function sList(){
  this.head = null;

  this.maxMinAvg = function(){
    var runner = this.head;
    if(runner){
    var max = min = sum = runner.value;
    // var sum = 0;
    runner = runner.nextNode;
    while(runner){
      if (runner.value > max) {
        max = runner.value;
      }
      if (runner.value < min) {
        min = runner.value;
      }
      sum += runner.value;
      runner = runner.nextNode;
    }
    var avg = sum/this.length();
    return {'Average': avg, 'Max': max, 'Min': min};
  }
  return null;
}
