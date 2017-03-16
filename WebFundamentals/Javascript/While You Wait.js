function birthdayCountdown(daysUntilMyBirthday){
  for (var i = daysUntilMyBirthday; i >-1; i--) {
    if (i > 30){
      console.log(i + " days until my birthday. Le sigh... :(")
    }
    else if (i < 30 && i > 5){
      console.log(i + " days until my birthday! It's birthday month time ^_^")
    } else if (i < 5 && i > 0){
      console.log(i + " DAYS UNTIL MY BIRTHDAY!!!")
    } else if (i == 0){
      console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•* '\n' ♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪ '\n' *•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«")
    }
  }
}

birthdayCountdown(60)
