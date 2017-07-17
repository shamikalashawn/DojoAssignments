"use strict"
//all buttons on the page are put into an array like obj

//when user presses enter, another button with the same functionality appears
document.onkeydown = function (a) {
  var btndiv = document.getElementById('newbtns');
  if (a.keyCode === 13) {
    var button = document.createElement('button');
    button.className = 'btns';
    button.innerText = 'Click Me';
    btndiv.appendChild(addEvents(button));
  }
}


//when each button is clicked, the color is changed from blue to red or vice versa depending on the starting color
// for (var i = 0; i < btns.length; i++) {
//   console.dir(btns[i]);
//   btns[i].onclick = function () {
//     console.log(this.color);
//     if (this.color == 'red') {
//       this.color = 'blue';
//       this.style.backgroundColor = 'blue';
//     }
//     else{
//       this.color = 'red';
//       this.style.backgroundColor = 'red';
//     }
//   };
// }
document.querySelectorAll('.btns').forEach(addEvents);

function addEvents(el) {
  var currcolor;
  el.addEventListener('click', function() {
    // code…
    if (this.style.backgroundColor == 'blue') {
      this.style.backgroundColor = 'red';
    }
    else{
      this.style.backgroundColor = 'blue';
    }
  });
  el.onmouseenter = function() {
    // code…
    currcolor = this.style.backgroundColor;
    this.style.backgroundColor = 'green';
  };
  el.onmouseleave = function () {
    if (this.style.backgroundColor == 'green') {
      this.style.backgroundColor = currcolor;
    }
  };
  return el;
}
//when mouse hovers over button, the color is changed to green
// for (var i = 0; i < btns.length; i++) {
//   btns[i].onmouseover = function () {
//     currcolor = this.getAttribute('color');
//     this.style.backgroundColor = 'green';
//     this.color = 'green';
//   };
// }
// //when mouse leaves button, if the color was green, it changes back to its original color before the mouseover action.
// for (var i = 0; i < btns.length; i++) {
//   btns[i].onmouseout = function () {
//     if (this.color == 'green') {
//       this.style.backgroundColor = currcolor;
//       this.color = currcolor;
//     }
//   };
// }
