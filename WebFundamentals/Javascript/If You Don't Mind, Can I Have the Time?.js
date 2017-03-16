function time(HOUR, MINUTE, PERIOD){
  var clock = ""
  if (HOUR == 12 && PERIOD == "AM"){
    HOUR = "noon"
    PERIOD = ""
  } else if (HOUR == 12 && PERIOD == "PM") {
    HOUR = "midnight"
    PERIOD = ""
  }
  if (PERIOD == "AM"){
    PERIOD = " in the morning."
  } else if (PERIOD == "PM" && HOUR >= 5 && HOUR <=8 ){
    PERIOD = " in the evening."
  } else if (PERIOD == "PM" && HOUR < 5){
    PERIOD = " in the afternoon."
  } else if (PERIOD == "PM" && HOUR >=9){
    PERIOD = " at night."
  }

  if (MINUTE%5==0){
    if(MINUTE == 15){
      clock = "It's a quarter after " + HOUR
    } else if (MINUTE == 30){
      clock = "It's half past " + HOUR
    } else if (MINUTE == 5){
      clock = "It's 5 after " + HOUR
    }
  }
  else if (MINUTE < 30){
    clock = "It's just after " + HOUR
  }else if (MINUTE > 30){
    clock = "It's almost " + (HOUR + 1)
  }
  console.log(clock + PERIOD)
}

time (12, 15, "PM")
