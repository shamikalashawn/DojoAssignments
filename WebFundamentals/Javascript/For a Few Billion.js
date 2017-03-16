//How much was the reward after 30 days?
var amount = 0.01;
for (var i = 1; i < 31; i++) {
  amount = amount * 2
  console.log(amount)
}
//How many days would it take the servant to make $10,000?
var amount = 0.01
var count = 0
for (var i = 1; i < 31; i++){
  if (amount >= 10000){
    break;
  }
  amount = amount * 2
  count++
  console.log(amount)
}
console.log("It took " + count + " days for the reward to exceed $10,000.");
//How about one billion?
var amount = 0.01
var count = 0
for (var i = 1; i < 31; i++){
  if (amount >= 1000000000){
    break;
  }
  amount = amount * 2
  count++
  console.log(amount)
}
console.log("It took " + count + " days for the reward to exceed $1,000,000,000.");
//How many days until the servant has infinite money?
var amount = 0.01
var count = 0
for (var i = 1; i < 10000; i++){
  if (amount == Infinity){
    break;
  }
  amount = amount * 2
  count++
  console.log(amount)
}
console.log("It took " + count + " days for the reward to reach infinity");
