"use strict";

function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let midday = "AM";
  midday = (hour >= 12) ? "PM" : "AM";
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
  hour = updateTime(hour);
  min = updateTime(min);
  document.getElementById("clock").innerText = hour + ":" + min + " " + midday;
  setTimeout(currentTime, 1000);
}

function updateTime(singleDigit) {
  if (singleDigit < 10) {
    return "0" + singleDigit;
  }
  else {
    return singleDigit;
  }
}

currentTime();