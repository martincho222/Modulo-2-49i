document.addEventListener("DOMContentLoaded", function () {
      const startButton = document.getElementById("startButton");
      const gameContainer = document.getElementById("gameContainer");
      const guessInput = document.getElementById("guessInput");
      const guessButton = document.getElementById("guessButton");
      let magicNumber = null;

      startButton.addEventListener("click", () => {
        magicNumber = Math.floor(Math.random() * 100) + 1;
        console.log(magicNumber);
        startButton.style.display = "none";
        gameContainer.style.display = "block";
      });

      guessButton.addEventListener("click", () => {
        const userGuess = parseInt(guessInput.value);
        if (userGuess === magicNumber) {
          alert("¡Felicitaciones! Adivinaste el número.");
          startButton.style.display = "block";
          gameContainer.style.display = "none";
          guessInput.value = "";
        } else if (userGuess < magicNumber) {
          alert("El número que ingresaste es menor al número mágico.");
        } else {
          alert("El número que ingresaste es mayor al número mágico.");
        }
      });
    });