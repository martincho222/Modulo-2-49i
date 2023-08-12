document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    isRunning = true;
    document.getElementById('startButton').setAttribute('disabled', 'true');
    document.getElementById('pauseButton').removeAttribute('disabled');
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  document.getElementById('startButton').removeAttribute('disabled');
  document.getElementById('pauseButton').setAttribute('disabled', 'true');
}
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  isRunning = false;
  document.getElementById('timer').textContent = '00:00:00';
  document.getElementById('startButton').removeAttribute('disabled');
  document.getElementById('pauseButton').setAttribute('disabled', 'true');
}
function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById('timer').textContent = formattedTime;
}
function formatTime(time) {
  const totalSeconds = Math.floor(time / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`;
}
function formatTwoDigits(number) {
  return number < 10 ? '0' + number : number;
}