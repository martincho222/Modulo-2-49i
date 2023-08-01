// Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 
let timerInterval;
let isRunning = false;
let currentTime = 0;
let originalTime = 0;

function updateDisplay() {
  const displayElement = document.getElementById('display');
  const hours = Math.floor(currentTime / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((currentTime % 3600) / 60).toString().padStart(2, '0');
  const seconds = (currentTime % 60).toString().padStart(2, '0');
  displayElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    const timeInput = document.getElementById('timeInput');
    originalTime = parseInt(timeInput.value, 10);
    if (isNaN(originalTime) || originalTime <= 0) {
      alert('Por favor, ingrese un tiempo válido mayor a 0 segundos.');
      return;
    }

    currentTime = originalTime;
    updateDisplay();

    timerInterval = setInterval(() => {
      currentTime--;
      updateDisplay();
      if (currentTime === 0) {
        clearInterval(timerInterval);
        isRunning = false;
        document.getElementById('startBtn').textContent = 'Iniciar';
        document.getElementById('pauseBtn').disabled = true;
      }
    }, 1000);

    isRunning = true;
    document.getElementById('startBtn').textContent = 'Continuar';
    document.getElementById('pauseBtn').disabled = false;
  } else {
    clearInterval(timerInterval);
    isRunning = false;
    document.getElementById('startBtn').textContent = 'Continuar';
    document.getElementById('pauseBtn').disabled = true;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  currentTime = 0;
  originalTime = 0;
  isRunning = false;
  updateDisplay();
  document.getElementById('startBtn').textContent = 'Iniciar';
  document.getElementById('pauseBtn').disabled = true;
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', startTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
