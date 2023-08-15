const timerDisplay = document.getElementById("timer");
    const startButton = document.getElementById("startButton");
    const pauseButton = document.getElementById("pauseButton");
    const resetButton = document.getElementById("resetButton");

    let startTime = 0;
    let intervalId = null;

    function updateTimer() {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;
      const hours = Math.floor(elapsedTime / 3600000);
      const minutes = Math.floor((elapsedTime % 3600000) / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      timerDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    startButton.addEventListener("click", function () {
      if (!intervalId) {
        startTime = new Date().getTime();
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
      timerDisplay.textContent = "00:00:00";
    });