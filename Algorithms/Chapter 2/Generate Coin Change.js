/*
Change is inevitable (especially when you break a twenty!). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with the smallest number of coins possible. Common American coins are penny (1 cent), nickel (5 cents), dime (10 cents) and quarter (25 cents).

Example: Given generateCoinChange(94):

94 cents can be represented by:

quarters:	3
dimes	1
nickels:	1
pennies:	4
*/

function generateCoinChange(cents) {
  var quarters, dimes, nickels, pennies, qMod, dMod;

  if (cents > 25) {
    qMod = cents % 25;
    quarters = (cents - qMod)/25;

    if (qMod < 5) {
      pennies = qMod;
      nickels = 0;
      dimes = 0;
    } else if (qMod < 10) {
      nickels = 1;
      pennies = qMod - 5;
      dimes = 0;
    } else if (qMod > 10) {
      dMod = qMod % 10;
      dimes = (qMod - dMod)/10;

      if (dMod < 5) {
        pennies = dMod;
        nickels = 0;
      } else if (dMod < 10) {
        nickels = 1;
        pennies = dMod - 5;
      }
    }

    else if (cents < 25) {
      dMod = cents % 10;
      dimes = (cents - dMod)/10

      if (dMod < 5) {
        pennies = dMod;
      } else if (dMod < 10) {
        nickels = 1;
        pennies = dMod - 5;
      }
    }

    else if (cents < 10) {
      nickels = 1;
      pennies = cents - 5;
    }
  }

  console.log(cents + ' cents can be represented by: ' + '\n' + 'quarters: ' + quarters + '\n' + 'dimes: ' + dimes + '\n' + 'nickels: ' + nickels + '\n' + 'pennies: ' + pennies);
}

// generateCoinChange(99);
//Second: Can you simplify/shorten your code?

function generateCoinChange2(cents) {
  var quarters, dimes, nickels, pennies, originalCents;
  quarters = dimes = nickels = pennies = 0;

  originalCents = cents;

  quarters = Math.floor(cents/25);
  cents = cents % 25;
  dimes = Math.floor(cents/10);
  cents = cents % 10;
  nickels = Math.floor(cents/5);
  pennies = cents % 5;
  console.log(originalCents + ' cents can be represented by: ' + '\n' + 'quarters: ' + quarters + '\n' + 'dimes: ' + dimes + '\n' + 'nickels: ' + nickels + '\n' + 'pennies: ' + pennies);
}

generateCoinChange2(99)

// Third: Add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less

function generateCoinChange3(cents) {
  var coins = ['dollar', 'half-dollar', 'quarters', 'dimes', 'nickels', 'pennies'];

  var coinObj = {
    'dollar': 100,
    'half-dollar': 50,
    'quarters': 25,
    'dimes': 10,
    'nickels': 5,
    'pennies': 1
  }

  function changer(coin) {
    var coinVal = coinObj[coin];
    var count = Math.floor(cents/coinVal);
    cents = cents % coinVal;
    console.log('You got ' + count + " " + coin);
  }

  for (var i = 0; i < coins.length; i++) {
    changer(coins[i])
  }
}

// generateCoinChange3(99);
