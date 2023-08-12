function actualizarReloj() {
    const fecha = new Date();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const ampm = horas >= 12 ? 'PM' : 'AM';

    const horaElemento = document.getElementById('hora');
    const ampmElemento = document.getElementById('ampm');

    horaElemento.textContent = `${formatoDosDigitos(horas)}:${formatoDosDigitos(minutos)}:${formatoDosDigitos(segundos)}`;
    ampmElemento.textContent = ampm;
  }

  function formatoDosDigitos(numero) {
    return numero < 10 ? `0${numero}` : numero;
  }

  setInterval(actualizarReloj, 1000);