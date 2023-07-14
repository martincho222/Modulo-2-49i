# DOM
El DOM (Document Object Model) es una representación estructurada de un documento HTML. Básicamente, el DOM te permite acceder y manipular los elementos de una página web utilizando JavaScript.
El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML. Facilita una representación estructurada del documento(HTML) y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido. El DOM da una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos. Esencialmente, conecta las páginas web a scripts o lenguajes de programación.
Una página web es un documento. Éste documento puede exhibirse en la ventana de un navegador o también como código fuente HTML. Pero, en los dos casos, es el mismo documento. El modelo de objeto de documento (DOM) proporciona otras formas de presentar, guardar y manipular este mismo documento. El DOM es una representación completamente orientada al objeto de la página web y puede ser modificado con un lenguaje de script como JavaScript.
Imaginen que tienen una página web simple con un encabezado `<h1>` y un botón `<button>`. El DOM sería como una "foto" de esa página web, donde cada elemento HTML es representado por un objeto en JavaScript.

1. Seleccionar elementos:

Para seleccionar elementos del DOM, pueden utilizar métodos como `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector` y `querySelectorAll`.


Por Ejemplo:

1- `getElementById`, pueden seleccionar un elemento del html por su id
 
 ```javascript
    console.log(document.getElementById("dom").textContent);
```

 2- `getElementsByClassName`, pueden seleccionar un elemento del html por su clase

```javascript
    console.log(document.getElementsByClassName("dom"));
```

 3- `getElementsByTagName`, pueden seleccionar un elemento del html por su etiqueta

```javascript
    console.log(document.getElementsByTagName("p"));
```
 

 4 - `getElementsByName`, pueden seleccionar un elemento del html por el atributo name

```javascript
    console.log(document.getElementsByName("dom1"));
```


5 - `querySelector`, pueden seleccionar un elemento del html por su selector

```javascript
    console.log(document.querySelector("#dom"));
    console.log(document.querySelector(".dom"));
    const p = document.querySelector("#dom");
    console.log(p);
```


6 - `querySelectorAll`, pueden seleccionar todos los elementos del html por su selector

```javascript
    console.log(document.querySelectorAll("p")[0].textContent);
```


HTML:
```html
<div id="miDiv">¡Hola, soy un div!</div>
```

JavaScript:
```javascript
var divElement = document.getElementById("miDiv");
console.log(divElement.innerHTML);
```

En este ejemplo, utilizamos `getElementById("miDiv")` para seleccionar el elemento con el ID "miDiv" y luego imprimimos su contenido utilizando `innerHTML`.



HTML:
```html
<h1 id="titulo">¡Holis, mundo!</h1>
<button id="boton">Haz clic aquí</button>
```

JavaScript:
```javascript
// Accediendo al elemento h1 y modificando su contenido
var titulo = document.getElementById("titulo");
titulo.innerHTML = "¡Hola, DOM!";

// Agregando un evento al botón
var boton = document.getElementById("boton");
boton.addEventListener("click", function() {
  alert("¡Has hecho clic en el botón!");
});
```

En el ejemplo, primero accedemos al elemento `<h1>` con `getElementById("titulo")` y luego modificamos su contenido utilizando la propiedad `innerHTML`.

Luego, accedemos al elemento `<button>` con `getElementById("boton")` y le añadimos un evento de clic utilizando `addEventListener() `. Cuando se hace clic en el botón, se muestra una ventana emergente con el mensaje "¡Has hecho clic en el botón!".

Es importante tener en cuenta que el DOM puede ser más complejo en aplicaciones web más grandes, pero este ejemplo básico debería darles una idea de cómo funciona el DOM en JavaScript.

El DOM es útil para interactuar con los elementos de una página web y realizar acciones dinámicas. Pueden acceder a elementos por su ID, etiqueta, clase, etc., y luego modificar sus propiedades, estilos, contenido o agregar eventos según sea necesario.


2. Agregar nodos:
Pueden agregar nuevos nodos o elementos al DOM utilizando métodos como `createElement` y `appendChild`. Aquí hay un ejemplo de cómo agregar un nuevo párrafo al final de un elemento:

HTML:
```html
<div id="contenedor"></div>
```

JavaScript:
```javascript
var contenedor = document.getElementById("contenedor");
var nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = "¡Soy un nuevo párrafo!";
contenedor.appendChild(nuevoParrafo);
```

En este ejemplo, creamos un nuevo elemento `<p>` utilizando `createElement("p")`, le asignamos contenido utilizando `innerHTML` y luego lo agregamos como hijo del elemento con el ID "contenedor" utilizando `appendChild`.

3. Clonar nodos:
Pueden clonar elementos existentes del DOM utilizando el método `cloneNode`. Aquí hay un ejemplo de cómo clonar un elemento de lista:

HTML:
```html
<ul id="miLista">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>
```

JavaScript:
```javascript
var listaOriginal = document.getElementById("miLista");
var listaClonada = listaOriginal.cloneNode(true);
document.body.appendChild(listaClonada);
```

En este ejemplo, clonamos el elemento `<ul>` con el ID "miLista" utilizando `cloneNode(true)`, lo que significa que también se clonarán todos los elementos hijos. Luego, agregamos la lista clonada como un hijo del elemento `<body>` utilizando `appendChild`.

4. Insertar un nodo:
Pueden insertar un nodo antes o después de otro nodo utilizando los métodos `insertBefore` e `insertAdjacentElement`. Aquí hay un ejemplo de cómo insertar un nuevo párrafo después de un elemento existente:

HTML:
```html
<div id="contenedor">
  <p>Soy el primer párrafo</p>
</div>
```

JavaScript:
```javascript
var contenedor = document.getElementById("contenedor");
var nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = "¡Soy el segundo párrafo!";
contenedor.insertAdjacentElement("afterend", nuevoParrafo); // primer parametro es la ubicación del elemento o nodo(ver tabla mas abajo).
```

En este ejemplo, creamos un nuevo elemento `<p>` y le asignamos contenido. Luego, utilizamos `insertAdjacentElement("afterend", nuevoParrafo)` para insertar el nuevo párrafo después del elemento existente con el ID "contenedor".

* 'beforebegin': Antes del elementoObjetivo.
* 'afterbegin': Dentro del elementoObjetivo, antes de su primer hijo.
* 'beforeend': Dentro del elementoObjetivo, después de su último hijo.
* 'afterend': Después del elementoObjetivo.

5. Remover y reemplazar un nodo:
Pueden remover y reemplazar nodos utilizando los métodos `removeChild` y `replaceChild`. Aquí hay un ejemplo de cómo remover un elemento de lista y reemplazarlo por otro:

HTML:
```html
<ul id="miLista">
  <li>Elemento 1</li>
  <li id="elemento2">Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

JavaScript:
```javascript
var lista = document.getElementById("miLista");
var elemento2 = document.getElementById("elemento2");
var nuevoElemento = document.createElement("li");
nuevoElemento.innerHTML = "Elemento nuevo";

lista.removeChild(elemento2);
lista.replaceChild(nuevoElemento, lista.childNodes[1]);
```

En este ejemplo, seleccionamos el elemento de lista que queremos remover utilizando `getElementById("elemento2")` y luego utilizamos `removeChild(elemento2)` para eliminarlo de la lista. Luego, creamos un nuevo elemento `<li>` y lo reemplazamos por el segundo elemento de la lista utilizando `replaceChild(nuevoElemento, lista.childNodes[1])`.

Estos son solo algunos ejemplos básicos de cómo seleccionar elementos, agregar nodos, clonar nodos, insertar un nodo, remover y reemplazar un nodo en el DOM utilizando JavaScript. El DOM ofrece muchas más posibilidades y métodos para interactuar con los elementos de una página web.
