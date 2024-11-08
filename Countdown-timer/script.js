const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = '01 Jan 2025';

function countdown(){
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = new Date(newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24); 
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);

}

// Used Ternary Operator

function formatTime(time){
  return time < 10 ? (`0${time}`) : time;
}

countdown()

setInterval(countdown, 1000)

