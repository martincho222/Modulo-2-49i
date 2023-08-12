document.getElementById('startButton').addEventListener('click', function() {
    const numRandom = Math.floor(Math.random() * 10) + 1;
    const gameInput = document.getElementById('gameInput');
    const input = document.getElementById('input');
    const boton = document.getElementById('boton');

    console.log(numRandom);

    gameInput.classList.remove('d-none');

    boton.addEventListener('click', () => {
      const userGuess = +input.value;
      if (userGuess === numRandom) {
        alert('¡Adivinaste el número! ¡Felicidades!');
        gameInput.classList.remove('d-none');
      } else if (userGuess < numRandom) {
        alert('El número que ingresaste es menor.');
      } else {
        alert('El número que ingresaste es mayor.');
      }
    });
  });