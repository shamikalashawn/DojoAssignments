//On New Year's Eve, have fun but don't forget your way home! For this challenge create four functions (reset, moveBy, xLocation, and yLocation) to track the travels of Clair, a wanderer. Calling reset() moves Claire home to the origin (0,0). The moveBy(xOffset, yOffset) function moves her by those amounts, in those directions. Finally, xLocation() and yLocation() return how far Claire is from home, in X and Y directions respectively.  After the calls of reset(), moveBy(1,-2), and moveBy(3,1), subsequently calling xLocation() and yLocation() should return 4 and -1.

var x = 0;
var y = 0;

function reset() {
  x = 0;
  y = 0;
}

function moveBy(xOffset, yOffset) {
  x = x + xOffset;
  y = y + yOffset;
}

function xLocation() {
  return x;
}

function yLocation() {
  return y;
}

reset();
moveBy(1,-2);
moveBy(3,1);
// console.log(xLocation());
// console.log(yLocation());


// Create distFromHome(). Assuming she moves diagonally, return her distance from home.
function distFromHome() {
  x = xLocation();
  y = yLocation();
  home = Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
  return "Claire is " + home + " away from home."
}

reset();
moveBy(1,-2);
moveBy(3,1);
console.log(distFromHome());
