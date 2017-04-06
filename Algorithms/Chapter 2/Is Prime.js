//Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.

function isPrime(num) {
  if (num == 0 || num == 1) {
    return false;
  } else {
    for (var i = 2; i < 11; i++) {
      if (num % i == 0 && num != i) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPrime(45464477871));
