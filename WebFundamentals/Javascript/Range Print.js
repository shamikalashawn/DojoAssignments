function printRange(startPoint, endPoint, skip = 1){
  if(endPoint === undefined){
    for (var i = 0; i < startPoint; i++) {
        console.log(i);
    }
  }
  else{
    for (var i = startPoint; i < endPoint; i = i + skip) {
      console.log(i);
    }
  }
}
printRange(4)
