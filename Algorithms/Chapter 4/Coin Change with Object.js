// As before, given a number of U.S. cents, return the optimal configuration of coins, in an object.

function coinChange(cents) {
  var change = {}
  var remainder = cents % 25;
  change.quarters = (cents - remainder)/25;
  cents = remainder;
  remainder = cents % 10;
  change.dimes = (cents - remainder)/10;
  cents = remainder;
  remainder = cents % 5;
  change.nickels = (cents - remainder)/5;
  change.pennies = remainder;
  console.log(change);
  return change;
}

coinChange(94);
