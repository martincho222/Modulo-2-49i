# Eventos

## ¿Que son los Eventos en Javascript?
Los eventos son acciones que ocurren en el navegador, como hacer clic en un elemento, mover el mouse, presionar una tecla, cargar una página, etc. En JavaScript, podemos "escuchar" estos eventos y realizar acciones en respuesta a ellos.
Los eventos son cosas que suceden en el sistema que están programando. El sistema se encarga de producir una señal de cierto tipo cuando un evento ocurre, y proporciona un mecanismo para que una acción se lleve a cabo (es decir que se ejecute el código) de forma automática cuando el evento ocurra. Los eventos se lanzan dentro de la ventana del navegador y usualmente están asociados a un elemento en específico dentro de dicha ventana. Esto puede ser un solo elemento, un grupo de elementos, el documento HTML, cargando la pestaña actual, o la ventana del navegador en su totalidad. Existen distintos tipos de eventos que pueden ocurrir. Por ejemplo:

* El usuario selecciona, hace clic o pasa el mouse por encima de cierto elemento.
* El usuario presiona una tecla del teclado.
* El usuario redimensiona o cierra la ventana del navegador.
* Una página web terminó de cargarse.
* Un formulario fue enviado.
* Un vídeo se reproduce, se pausa o termina.
* Ocurrió un error.


## Que son los Event Handlers en Javascript:
Los event handlers son funciones de JavaScript que se ejecutan cuando ocurre un evento específico. Estas funciones están asociadas a elementos HTML y se activan cuando se produce el evento correspondiente. Se utilizan para manejar y responder a los eventos.

Aquí tienes un ejemplo de cómo usar un event handler para mostrar un mensaje cuando se hace clic en un botón:

HTML:
```html
<button id="miBoton">Haz clic aquí</button>
```

JavaScript:
```javascript
var boton = document.getElementById("miBoton");

function mostrarMensaje() {
  console.log("¡Has hecho clic en el botón!");
}

boton.addEventListener("click", mostrarMensaje)
;
```

En este ejemplo, definimos una función llamada `mostrarMensaje` que simplemente imprime un mensaje en la consola. Luego, utilizamos `addEventListener` para asignar el event handler `mostrarMensaje` al evento de clic en el botón.

## Modelos o Tipo de Eventos:
Existen dos modelos de eventos en JavaScript: el modelo de eventos de nivel superior y el modelo de eventos basado en objetos. Estos modelos determinan cómo se manejan y propagan los eventos en el DOM.

- Modelo de eventos de nivel superior: En este modelo, se utilizan atributos HTML como `onclick`, `onload`, `onkeydown`, etc., para asignar directamente funciones a los eventos de los elementos. Sin embargo, este enfoque no es recomendado debido a que mezcla el código HTML con JavaScript y puede dificultar el mantenimiento y la organización del código.

HTML:
```html
<button onclick="mostrarMensaje()">Haz clic aquí</button>
```

- Modelo de eventos basado en objetos: Este modelo utiliza métodos como `addEventListener` para asignar event handlers de forma más estructurada y desacoplada. Este enfoque es más flexible y permite adjuntar múltiples event handlers al mismo evento.

JavaScript:
```javascript
var boton = document.getElementById("miBoton");

function mostrarMensaje() {
  console.log("¡Has hecho clic en el botón!");
}

boton.addEventListener("click", mostrarMensaje);
```

En este ejemplo, utilizamos el modelo de eventos basado en objetos, donde `addEventListener` permite adjuntar la función `mostrarMensaje` al evento de clic en el botón.

## Tipos de eventos:

Existen muchos tipos de eventos en JavaScript, como eventos de clic, eventos de teclado, eventos de carga de página, eventos de cambio de valor, eventos de enfoque y desenfoque, entre otros. Cada tipo de evento se activa en una determinada acción del usuario o del navegador.

1. Evento de clic (`click`):
Este evento se activa cuando se hace clic en un elemento con el mouse. Es ampliamente utilizado para manejar acciones o interacciones del usuario, como botones, enlaces y elementos interactivos.

```javascript
elemento.addEventListener("click", function() {
  // Acciones a realizar cuando se hace clic en el elemento
});
```

2. Evento de teclado (`keydown`, `keyup`, `keypress`):
Estos eventos se activan cuando se presiona, suelta o mantiene presionada una tecla en el teclado. Se utilizan para manejar la entrada de texto, realizar validaciones o ejecutar acciones específicas basadas en las teclas presionadas.

```javascript
elemento.addEventListener("keydown", function(event) {
  // Acciones a realizar cuando se presiona una tecla en el elemento
});
```
3. Evento de carga de página (`load`)(loud):
Este evento se activa cuando se ha cargado completamente una página web y todos sus recursos asociados, como imágenes, estilos y scripts. Se utiliza para realizar acciones una vez que la página está lista para ser utilizada.

```javascript
window.addEventListener("load", function() {
  // Acciones a realizar cuando la página ha sido cargada completamente
});
```
4. Evento de cambio de valor (`change`):
Este evento se activa cuando el valor de un elemento de formulario ha cambiado, como un campo de texto, un cuadro de selección o un botón de opción. Se utiliza para detectar y manejar los cambios en los datos ingresados por el usuario.

```javascript
elemento.addEventListener("change", function() {
  // Acciones a realizar cuando el valor del elemento ha cambiado
});
```
5. Evento de enfoque y desenfoque (`focus`, `blur`):
Estos eventos se activan cuando un elemento recibe o pierde el foco, es decir, cuando se selecciona o se deja de seleccionar. Son útiles para realizar validaciones, resaltar elementos o ejecutar acciones específicas al interactuar con un campo de formulario.

```javascript
elemento.addEventListener("focus", function() {
  // Acciones a realizar cuando el elemento recibe el foco
});

elemento.addEventListener("blur", function() {
  // Acciones a realizar cuando el elemento pierde el foco
});


```

6. Evento de mouse:
```javascript
    // onmousedown event, cuando se pulsa el botón del mouse
window.onmousedown = () => {
    console.log("botón del mouse pulsado");
}

// // onmouseup event, cuando se suelta el botón del mouse
window.onmouseup = () => {
    console.log("botón del mouse suelto");
}

// onscroll event, cuando se hace scroll en la página
window.onscroll = () => {
    console.log("scroll");
}
```

Estos son solo algunos ejemplos de tipos de eventos en JavaScript. Existen muchos más, y pueden encontrar una lista completa de ellos en la documentación de JavaScript.
[Más eventos](https://developer.mozilla.org/es/docs/Web/Events)


## Cómo remover event handlers en JavaScript?
 Hay diferentes métodos para hacerlo, pero uno de los enfoques más comunes es utilizando el método `removeEventListener`.

Aquí tienes un ejemplo sencillo de cómo agregar y luego remover un event handler en un botón:

HTML:
```html
<button id="miBoton">Haz clic aquí</button>
```

JavaScript:
```javascript
var boton = document.getElementById("miBoton");

function mostrarMensaje() {
  console.log("¡Has hecho clic en el botón!");
}

// Agregar el event handler
boton.addEventListener("click", mostrarMensaje);

// Remover el event handler
boton.removeEventListener("click", mostrarMensaje);
```

En este ejemplo, primero definimos la función `mostrarMensaje`, que simplemente imprime un mensaje en la consola. Luego, utilizamos `addEventListener` para asignar el event handler `mostrarMensaje` al evento de clic en el botón.

Después, utilizamos `removeEventListener` para quitar el event handler del botón. Esto asegura que la función `mostrarMensaje` ya no se ejecutará cuando se haga clic en el botón.

Es importante tener en cuenta que para poder remover un event handler, la función que se pasa como argumento a `removeEventListener` debe ser exactamente la misma función que se pasó anteriormente a `addEventListener`. Esto significa que si utilizan una función anónima como event handler, no podrán removerla posteriormente, ya que no tienen una referencia a esa función específica.

Aquí tienen un ejemplo adicional que muestra cómo remover un event handler utilizando una función con nombre y una función anónima:


JavaScript:
```javascript
var boton = document.getElementById("miBoton");

// Agregar un event handler con función con nombre
function mostrarMensaje() {
  console.log("¡Has hecho clic en el botón!");
}

boton.addEventListener("click", mostrarMensaje);

// Agregar un event handler con función anónima
var otroEvent = boton.addEventListener("click", function() {
  console.log("¡Este es otro event handler!");
});

// Remover el event handler con función con nombre
boton.removeEventListener("click", mostrarMensaje);

// Remover el event handler con función anónima
boton.removeEventListener("click", otroEvent);
```

En este ejemplo, agregamos dos event handlers al botón, uno utilizando una función con nombre `mostrarMensaje` y otro utilizando una función anónima. Luego, utilizamos `removeEventListener` para remover ambos event handlers, pasando la función correcta como argumento.

Recuerdan que es importante asegurarse de remover los event handlers cuando ya no los necesites, especialmente si están agregando y removiendo event handlers dinámicamente en su código, para evitar posibles problemas de rendimiento y memoria.


Los eventos son acciones que ocurren en el navegador, los event handlers son funciones que se ejecutan en respuesta a esos eventos, los modelos de eventos determinan cómo se manejan los eventos en el DOM, y los tipos de eventos representan las diferentes acciones que pueden ocurrir.


# Propagación de Eventos

## Existen dos fases principales en la propagación de eventos: la fase de captura y la fase de burbujeo.

1. Fase de captura o Capturing:
En la fase de captura, el evento se propaga desde el elemento superior hacia el elemento objetivo. En esta fase, el evento desciende en el árbol del DOM, pasando por los elementos padre hacia el elemento objetivo.



2. Fase de burbujeo o Bubbling:
En la fase de burbujeo, el evento se propaga desde el elemento objetivo hacia el elemento superior. En esta fase, el evento asciende en el árbol del DOM, pasando por los elementos hijo hacia los elementos padre.

Por defecto, los eventos en JavaScript siguen el modelo de propagación de eventos de burbujeo, es decir, el evento se propaga primero desde el elemento objetivo hasta el elemento superior y luego desde el elemento superior hacia el documento.

Un ejemplo sencillo que muestra la propagación de eventos en el modelo de burbujeo:

HTML:
```html
<div id="contenedor">
  <button id="boton">Haz clic aquí</button>
</div>
```

JavaScript:
```javascript
var contenedor = document.getElementById("contenedor");
var boton = document.getElementById("boton");

function manejarContenedor() {
  console.log("Evento capturado por el contenedor");
}

function manejarBoton() {
  console.log("Evento capturado por el botón");
}

contenedor.addEventListener("click", manejarContenedor);
boton.addEventListener("click", manejarBoton);
```

En este ejemplo, tenemos un contenedor (`<div>`) y un botón dentro de él. Hemos agregado event handlers a ambos elementos. Cuando se hace clic en el botón, el evento de clic se propaga primero al botón y luego al contenedor.

En la consola, verán que el mensaje "Evento capturado por el botón" se imprimirá antes del mensaje "Evento capturado por el contenedor". Esto ocurre porque el evento se propaga primero en la fase de burbujeo, desde el botón hacia el contenedor.

Es importante destacar que pueden controlar la propagación de eventos utilizando el método `stopPropagation()`. Este método se utiliza dentro de un event handler y detiene la propagación del evento en el momento en que se llama. Esto significa que el evento no se propagará más allá del elemento actual.

Aquí tienes un ejemplo de cómo usar `stopPropagation()` para detener la propagación de eventos:

JavaScript:
```javascript
var contenedor = document.getElementById("contenedor");
var boton = document.getElementById("boton");

function manejarContenedor(event) {
  console.log("Evento capturado por el contenedor");
  event.stopPropagation();
}

function manejarBoton(event) {
  console.log("Evento capturado por el botón");
}

contenedor.addEventListener("click", manejarContenedor);
boton.addEventListener("click", manejarBoton);
```

En este ejemplo, hemos agregado `event.stopPropagation()` dentro del event handler del contenedor. Cuando se hace clic en el botón, el evento se propagará al botón, pero no más allá. El mensaje "Evento capturado por el contenedor" no se imprimirá en la consola.

Recuerden que pueden utilizar `stopPropagation()` de manera selectiva para controlar la propagación de eventos según sus necesidades.
