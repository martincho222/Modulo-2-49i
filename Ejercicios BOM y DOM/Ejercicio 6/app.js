const timeInput = document.getElementById("timeInput");
    const timerDisplay = document.getElementById("timer");
    const startButton = document.getElementById("startButton");
    const pauseButton = document.getElementById("pauseButton");
    const resetButton = document.getElementById("resetButton");

    let timeLeft = parseInt(timeInput.value);
    let intervalId = null;

    function updateTimer() {
      if (timeLeft > 0) {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      } else {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    startButton.addEventListener("click", function () {
      if (!intervalId) {
        intervalId = setInterval(updateTimer, 1000);
      }
    });

    pauseButton.addEventListener("click", function () {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    });

    resetButton.addEventListener("click", function () {
      clearInterval(intervalId);
      intervalId = null;
      timeLeft = parseInt(timeInput.value);
      updateTimer();
    });