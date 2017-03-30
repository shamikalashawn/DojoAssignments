/*
Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (the first star would be very first character in the text field), or right-justified (last star would be very last character in the text field, with potentially some number of spaces at the beginning of the text field before the block of stars start), or centered in the 75 -character text field (with the same number of spaces on either side of the block of stars, plus/minus one).

Write a function drawLeftStars(num) that accepts a number and prints that many asterisks
*/

function drawLeftStars(num, char) {
  console.log("|" + char.repeat(num) + ' '.repeat(75-num) + "|");
}

drawLeftStars(2, "*");

// Write a function drawRightStars(num) that prints 75 characters total. The stars should build from the right side. the last num characters should be asterisks; the other remaining of the 75 should be spaces.
function drawRightStars(num, char) {
  console.log(' '.repeat(75-num) + char.repeat(num));
}

drawRightStars(2, "*");
// Write a function drawCenterStars(num) that prints 75 characters total. The stars should be centered in the 75. the middle num characters should be asterisks; the rest of the 75 characters should be spaces.

function drawCenterStars(num, char) {
  var half = (75-num)/2
  console.log(' '.repeat(half) + char.repeat(num) + ' '.repeat(half));
}

drawCenterStars(2, "*");
// Optional: Create epic text-art Empire vs. Rebellion battle, using formations like "(=*=)" and ">o<".

for (var i = 0; i < 2; i++) {
  drawLeftStars(1, "(=*=)");
  drawRightStars(1, " >o<");
  drawCenterStars(1, "(=*=)");
  drawCenterStars(1, "  |")
  drawCenterStars(1, " >o<");
  drawRightStars(1, "(=*=)");
  drawLeftStars(1, " >o<");
}
