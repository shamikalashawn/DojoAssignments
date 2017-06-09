var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for(var idx = 0; idx < x.length; idx++){
  console.log(x[idx]);
}
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);
var sum = 0;
for (var i = 0; i < 500; i++) {
  sum += i;
}
console.log("sum ", sum);
var y = [1, 5, 90, 25, -3, 0];
var min = Infinity;
for (var i = 0; i < y.length; i++) {
  if(y[i] < min){
    min = y[i];
  }
}
console.log('min ', min);
var avg = sum/y.length;
console.log('avg ', avg);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var property in newNinja) {
  if (newNinja.hasOwnProperty(property)) {
    console.log(property, newNinja[property]);
  }
}
