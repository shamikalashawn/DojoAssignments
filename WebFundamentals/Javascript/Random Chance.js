function slotMachine(quarters){
  var prize = Math.floor((Math.random() * 50))+ 50
  for (quarters; quarters > 0; quarters--) {
    var turn = Math.random()
    if (Math.floor((100 * turn)) == 25){ //how do I make the odds 1 out of 100?
      console.log("You won " + prize + " quarters and have " + quarters + " remaining.");
      return quarters + prize
    }
  }
  return 0
}

console.log(slotMachine(500));
