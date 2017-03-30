// Create an array with all the odd integers between 1 and 255 (inclusive).

var odds = [];
for (var i = 1; i < 256; i+=2) {
  odds.push(i);
}
console.log(odds);
