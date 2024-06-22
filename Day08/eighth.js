let hours = 0;
let minutes = 0;
let seconds = 0;
let time = document.querySelector(".timer");
let timer;

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
    updateTime();
  }, 1000); // 1초마다 실행
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTime();
}

function updateTime() {
  time.textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}
