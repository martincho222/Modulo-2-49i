// Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

let timerInterval;
let isRunning = false;
let currentTime = 0;

function updateDisplay() {
  const displayElement = document.getElementById('display');
  const hours = Math.floor(currentTime / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((currentTime % 3600) / 60).toString().padStart(2, '0');
  const seconds = (currentTime % 60).toString().padStart(2, '0');
  displayElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    timerInterval = setInterval(() => {
      currentTime++;
      updateDisplay();
    }, 1000);

    isRunning = true;
    document.getElementById('startBtn').textContent = 'Continuar';
    document.getElementById('pauseBtn').disabled = false;
  } else {
    clearInterval(timerInterval);
    isRunning = false;
    document.getElementById('startBtn').textContent = 'Iniciar';
    document.getElementById('pauseBtn').disabled = true;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  currentTime = 0;
  isRunning = false;
  updateDisplay();
  document.getElementById('startBtn').textContent = 'Iniciar';
  document.getElementById('pauseBtn').disabled = true;
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', startTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
