# BOM (Browser Object Model)
BOM significa "Browser Object Model" (Modelo de Objeto del Navegador) y se refiere a un conjunto de objetos proporcionados por el navegador web que permiten interactuar con la ventana del navegador y manipular aspectos relacionados con la interfaz de usuario.

Una explicación básica de algunos objetos comunes del BOM en JavaScript:

1. Objeto `window`: El objeto `window` representa la ventana del navegador y es el objeto principal del BOM. Proporciona métodos y propiedades para interactuar con la ventana del navegador, como redireccionar a otra página, abrir nuevas ventanas, acceder a la barra de direcciones, etc.

2. Objeto `document`: El objeto `document` representa el contenido de una página web cargada en la ventana del navegador. Proporciona métodos y propiedades para manipular el contenido del documento, como agregar elementos HTML, cambiar estilos, modificar el contenido de elementos existentes, etc.

3. Objeto `navigator`: El objeto `navigator` proporciona información sobre el navegador del usuario, como el nombre del navegador, la versión, el sistema operativo, etc. Pueden utilizar este objeto para detectar características específicas del navegador y adaptar su código en consecuencia.

4. Objeto `location`: El objeto `location` proporciona información sobre la URL actual de la página cargada en el navegador y permite redirigir a otras páginas. Pueden acceder a diferentes propiedades de este objeto, como `href`, `protocolo`, `hostname`, `pathname`, etc., para obtener información sobre la URL y modificarla si es necesario.

5. Objeto `history`: El objeto `history` permite acceder al historial del navegador y manipularlo. Pueden usar métodos como `back()`, `forward()`, `go()`, para navegar hacia atrás y adelante en el historial del navegador.

Estos son solo algunos de los objetos más utilizados en el BOM de JavaScript. 

Ejemplos prácticos:

1. Objeto `window.navigator`:

```javascript
console.log(window.navigator.userAgent);
```

2. Objeto `window.location`:

```javascript
// Redirigir a una URL específica
window.location.href = 'https://www.ejemplo.com';
// Recargar la página actual
window.location.reload();
```

3. Objeto `window.history`:

```javascript
// Navegar hacia atrás en el historial del navegador
window.history.back();
// Navegar hacia adelante en el historial del navegador
window.history.forward();
```

4. Objeto `window.screen`:
El objeto `window.screen` proporciona información sobre la pantalla del usuario, como la altura, el ancho y la profundidad de color. Ejemplo:

```javascript
console.log(window.screen.width);  // Ancho de la pantalla
console.log(window.screen.height); // Altura de la pantalla
console.log(window.screen.colorDepth); // Profundidad de color
```

Recuerden que estos ejemplos son solo una introducción básica. Cada uno de estos objetos tiene más propiedades y métodos disponibles que pueden explorar para realizar tareas más avanzadas.

# Funciones para manejo del tiempo
Hay varias funciones y objetos para el manejo del tiempo que te permiten trabajar con fechas, obtener información sobre el tiempo actual, manipular fechas y realizar operaciones relacionadas.

1. `setInterval()`:
La función `setInterval()` se utiliza para ejecutar una función repetidamente cada cierto intervalo de tiempo especificado en milisegundos. La función se ejecutará una y otra vez hasta que se llame a `clearInterval()` para detenerla.

```javascript
// Ejecutar una función cada 2 segundos
const intervalID = setInterval(function() {
  console.log('Ejecutando la función repetidamente');
}, 2000); // 2000 milisegundos = 2 segundos
```

En este ejemplo, la función pasada como argumento se ejecutará cada 2 segundos. La función devuelve un identificador (`intervalID`) que puede utilizarse posteriormente con `clearInterval()` para detener la ejecución del intervalo.

2. `clearInterval()`: 
La función `clearInterval()` se utiliza para detener la ejecución de un intervalo creado con `setInterval()`. Deben proporcionar el identificador del intervalo devuelto por `setInterval()` como argumento. Aquí tienes un ejemplo:

```javascript
// Ejemplo de clearInterval()
clearInterval(intervalID); // Detener el intervalo creado anteriormente
```
En este caso, se llama a `clearInterval()` pasando el identificador (`intervalID`) del intervalo que queremos detener. Esto hará que la función programada ya no se ejecute repetidamente.

3. `setTimeout()`:
La función `setTimeout()` se utiliza para ejecutar una función después de un cierto período de tiempo especificado en milisegundos. La función se ejecutará una sola vez. Vamos con  un ejemplo:

```javascript
// Ejecutar una función después de 5 segundos
setTimeout(function() {
  console.log('La función se ejecutó después de 5 segundos');
}, 5000); // 5000 milisegundos = 5 segundos
```
En este ejemplo, la función pasada como argumento se ejecutará una vez después de 5 segundos. Después de ese período de tiempo, la función se ejecutará y no se repetirá automáticamente.

Estas funciones son muy útiles cuando se trabaja con tareas que requieren ejecuciones repetidas o retrasos específicos. Recuerden que es importante tener en cuenta el rendimiento y la optimización al utilizar intervalos y tiempos de espera prolongados para evitar problemas en la experiencia del usuario.


# Objeto Date

1. Objeto `Date`:
El objeto `Date` se utiliza para trabajar con fechas y horas en JavaScript. Pueden crear una nueva instancia del objeto `Date` para representar una fecha específica o utilizar los métodos disponibles para obtener y manipular la fecha y la hora actuales. Aquí tienen algunos ejemplos:

```javascript
// Obtener la fecha y hora actual
const fechaActual = new Date();
console.log(fechaActual);
// Obtener el año actual
const añoActual = fechaActual.getFullYear();
console.log(añoActual);
// Obtener el mes actual (0-11, donde 0 es enero)
const mesActual = fechaActual.getMonth();
console.log(mesActual);
// Obtener el día actual (1-31)
const diaActual = fechaActual.getDate();
console.log(diaActual);
```

2. Método `getTime()`:
El método `getTime()` se utiliza para obtener el valor numérico que representa el tiempo transcurrido en milisegundos desde el 1 de enero de 1970 (conocido como el "epoch" (époc) en JavaScript). Pueden utilizar este método para realizar cálculos con fechas. Veamos un ejemplo:

```javascript
const fechaInicio = new Date('2022-01-01');
const fechaFin = new Date('2022-12-31');
const tiempoTranscurrido = fechaFin.getTime() - fechaInicio.getTime();
console.log(tiempoTranscurrido); // Tiempo transcurrido en milisegundos
```

3. Método `toLocaleDateString()`:
El método `toLocaleDateString()` se utiliza para obtener una representación legible de la fecha en función de la configuración regional del usuario. Esto te permite mostrar la fecha en un formato adecuado para el idioma y las preferencias del usuario. Aquí tienen un ejemplo:

```javascript
const fecha = new Date();
const fechaFormateada = fecha.toLocaleDateString();
console.log(fechaFormateada); // Formato de fecha según la configuración regional
```