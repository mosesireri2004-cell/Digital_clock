function clock() {
  const secDots = document.querySelector("#sec-dots");
  const minDots = document.querySelector("#min-dots");
  const hrDots = document.querySelector("#hr-dots");

  let date = new Date();
  let hours = date.getHours() % 12; //convert to 12-hr format
  let amPm = date.getHours() >= 12 ? "PM" : "AM";

  hours = hours === 0 ? 12 : hours; //handle midnight (0 hrs)

  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let secondDots = "";

  for (let i = 1; i < 61; i++) {
    let rotation = i * 6; //rotate each line by 6 degrees

    if (i === seconds) {
      secondDots += `<div class="dot active" style="transform: rotate(${rotation}deg)"></div>`;
    } else {
      secondDots += `<div class="dot" style="transform: rotate(${rotation}deg)"></div>`;
    }
  }

  let minuteDots = "";

  for (let i = 1; i < 61; i++) {
    let rotation = i * 6; //rotate each line by 6 degrees

    if (i === minutes) {
      minuteDots += `<div class="dot active" style="transform: rotate(${rotation}deg)"></div>`;
    } else {
      minuteDots += `<div class="dot" style="transform: rotate(${rotation}deg)"></div>`;
    }
  }

  let hourDots = "";

  for (let i = 1; i < 13; i++) {
    let rotation = i * 30; //rotate each line by 30 degrees

    if (i === hours) {
      hourDots += `<div class="dot active" style="transform: rotate(${rotation}deg)"></div>`;
    } else {
      hourDots += `<div class="dot" style="transform: rotate(${rotation}deg)"></div>`;
    }
  }

  secDots.innerHTML =
    secondDots +
    `<b>${amPm}</b>` +
    `<h2>${zero(seconds)}<br><span>Seconds</span></h2>`;
  minDots.innerHTML =
    minuteDots + `<h2>${zero(minutes)}<br><span>Minutes</span></h2>`;
  hrDots.innerHTML = hourDots + `<h2>${zero(hours)}<br><span>Hours</span></h2>`;
}

//add 0 in a single digit number
function zero(number) {
  if (number < 10) return "0" + number;

  return number;
}

setInterval(clock, 1000);
