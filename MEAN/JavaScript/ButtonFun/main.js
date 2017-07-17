$(document).ready(function () {
  //when user presses enter, another button with the same functionality appears
  document.onkeydown = function (a) {
    var btndiv = document.getElementById('newbtns');
    if (a.keyCode === 13) {
      btndiv.innerHTML += "<button type='button' name='button'>Click Me</button>";
    }
  }
//toggle color class from red to blue and vice versa when button is clicked
$(document).on('click', 'button', function () {
  $(this).toggleClass('red');
});

$(document).hover(function () {
  $(this).addClass('green');
}, function () {
  $(this).removeClass('green');
});

});
