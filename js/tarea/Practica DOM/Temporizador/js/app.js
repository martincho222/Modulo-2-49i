document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

let timerInterval;
let remainingTime;
let isRunning = false;



function startTimer() {
  if (!isRunning) {
    remainingTime = parseInt(document.getElementById('timeInput').value, 10);
    updateTimerDisplay();
    timerInterval = setInterval(decrementTimer, 1000);
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
  isRunning = false;
  remainingTime = parseInt(document.getElementById('timeInput').value, 10);
  updateTimerDisplay();
  document.getElementById('startButton').removeAttribute('disabled');
  document.getElementById('pauseButton').setAttribute('disabled', 'true');
}

function decrementTimer() {
  remainingTime--;
  updateTimerDisplay();
  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    isRunning = false;
    document.getElementById('startButton').removeAttribute('disabled');
    document.getElementById('pauseButton').setAttribute('disabled', 'true');
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  document.getElementById('timer').textContent = `${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`;
}

function formatTwoDigits(number) {
  return number < 10 ? '0' + number : number;
}

    