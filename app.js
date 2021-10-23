const countDownTimer = () => {
  // here update the date for the countdown you want
  const baseDate = new Date("October 23, 2021 09:00:00").getTime();
  //for getting the current time
  const currentDate = new Date().getTime();
  const timeDiff = baseDate - currentDate;

  //Converting time parts into milliseconds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //calculating the current time
  const dayText = Math.floor(timeDiff / day);
  const hourText = Math.floor((timeDiff % day) / hour);
  const minuteText = Math.floor((timeDiff % hour) / minute);
  const secondText = Math.floor((timeDiff % minute) / second);

  document.querySelector(".day").innerHTML = dayText;
  document.querySelector(".hour").innerHTML = hourText;
  document.querySelector(".minute").innerHTML = minuteText;
  document.querySelector(".second").innerHTML = secondText;

//   if (minuteText == 0) {

//   }
    if (dayText == 0 && hourText == 0 && minuteText == 0 && secondText == 0) {
      clearInterval(countdown);
      let fram = setInterval(frame, 500);
      let title = document.getElementById("title");
      title.style.display = "block";
    }
};

function frame() {
  confetti({
    particleCount: 100,
    angle: 60,
    spread: 80,
    origin: { x: 0 },
    // colors: colors,
  });
  confetti({
    particleCount: 100,
    angle: 120,
    spread: 80,
    origin: { x: 1 },
    // colors: colors,
  });
}



//calling of the function
let countdown = setInterval(countDownTimer);
// window.onload = frame();