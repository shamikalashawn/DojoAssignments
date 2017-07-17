function fib() {
  // Some variables here
  var pred1 = 0;
  var pred2 = 1;
  function nacci() {
    // do something to those variables here
    console.log(pred2);
    var temp = pred1;
    pred1 = pred2;
    pred2 = pred2 + temp;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
