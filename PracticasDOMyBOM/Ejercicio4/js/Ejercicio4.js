function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date')
    const now = new Date();

    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const dia = diasSemana[now.getDay()];
    const fecha = now.getDate();
    const mes = meses[now.getMonth()];
    const año = now.getFullYear();
    let hora = now.getHours();
    const minutos = now.getMinutes();
    const segundos = now.getSeconds();
    const ampm = hora >= 12 ? 'PM' : 'AM';

    // Convertimos la hora al formato de 12 horas
    if (hora > 12) {
      hora -= 12;
    } else if (hora === 0) {
      hora = 12;
    }

    // Formateamos la salida del reloj
    const timeString = `${dia} ${fecha} de ${mes} del ${año}`;
    const hourString = `${hora}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')} ${ampm}`;

    clockElement.textContent = timeString;
    dateElement.textContent = hourString

  }

  // Actualizamos el reloj cada segundo
  setInterval(updateClock, 1000);

  // Inicialmente llamamos a la función para mostrar la hora actual
  updateClock();