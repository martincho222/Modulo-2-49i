# ARRAYS

Un array es una estructura de datos que se utiliza para almacenar una colección ordenada de elementos. Pueden pensar en un array como una lista de elementos en la que cada uno tiene un índice numérico para acceder a él.

Para crear un array en JavaScript, pueden utilizar la siguiente sintaxis:

```javascript
var miArray = []; // Sintaxis literal(siempre se utilizara para crear un array esta sintaxis)
var miArray = new Array(); // Constructor o crear una instancia de un array
```

Una vez creado el array, pueden utilizar varios métodos incorporados para manipularlo y realizar diversas operaciones. Algunos de los métodos más comunes son:

1. `push()`: Agrega uno o más elementos al final del array.

```javascript
var miArray = [1, 2, 3];
miArray.push(4);
console.log(miArray); // Imprime [1, 2, 3, 4]
```

2. `pop()`: Elimina el último elemento del array y lo devuelve.

```javascript
var miArray = [1, 2, 3, 4];
var ultimoElemento = miArray.pop();
console.log(miArray); // Imprime [1, 2, 3]
console.log(ultimoElemento); // Imprime 4
```

3. `shift()`: Elimina el primer elemento del array y lo devuelve.

```javascript
var miArray = [1, 2, 3];
var primerElemento = miArray.shift();
console.log(miArray); // Imprime [2, 3]
console.log(primerElemento); // Imprime 1
```

4. `unshift()`: Agrega uno o más elementos al principio del array.
anshift
```javascript
var miArray = [2, 3];
miArray.unshift(1);
console.log(miArray); // Imprime [1, 2, 3]
```

5. `slice()`: Devuelve una copia superficial de una porción del array, especificada por un índice inicial y un índice final.

```javascript
var miArray = [1, 2, 3, 4, 5];
var subArray = miArray.slice(1, 4);
console.log(subArray); // Imprime [2, 3, 4]
```

6. `concat()`: Combina dos o más arrays y devuelve un nuevo array resultante.

```javascript
var array1 = [1, 2];
var array2 = [3, 4];
var arrayConcatenado = array1.concat(array2);
console.log(arrayConcatenado); // Imprime [1, 2, 3, 4]
```

7. `splice()`: Este método se utiliza para modificar el contenido de un array eliminando, reemplazando o agregando elementos en una posición específica. Toma tres parámetros: el índice inicial desde donde se realizarán los cambios, la cantidad de elementos a eliminar y, opcionalmente, los elementos que se agregarán.

```javascript
var miArray = [1, 2, 3, 4, 5];
miArray.splice(2, 2, "a", "b", "c");
console.log(miArray); // Imprime [1, 2, "a", "b", "c", 5]
```

En el ejemplo anterior, `splice(2, 2, "a", "b", "c")` elimina dos elementos a partir del índice 2 y luego agrega los elementos `"a"`, `"b"` y `"c"` en esa posición.

8. `reverse()`: Este método invierte el orden de los elementos en el array, modificándolo directamente.

```javascript
var miArray = [1, 2, 3, 4, 5];
miArray.reverse();
console.log(miArray); // Imprime [5, 4, 3, 2, 1]
```

En el ejemplo anterior, `reverse()` invierte el orden de los elementos en el array.

9. `sort()`: Este método se utiliza para ordenar los elementos de un array alfabéticamente o numéricamente, modificando el array original. Por defecto, se realiza una ordenación en base a los valores de los elementos convertidos a cadenas de texto.

```javascript
var miArray = [3, 1, 2, 5, 4];
miArray.sort();
console.log(miArray); // Imprime [1, 2, 3, 4, 5]

let interrogante = ["🥚", "🐔"].sort();
console.log(interrogante);

```

En el ejemplo anterior, `sort()` ordena los elementos del array en orden numérico ascendente.

10.c `includes()`: buscar dentro de un array y encontrar una coincidencia.

11. `forEach()`: Este método permite ejecutar una función proporcionada una vez por cada elemento del array. Recibe una función de devolución de llamada que se ejecuta en cada iteración, y se pasa el elemento actual, el índice y el array completo como argumentos.

```javascript
var miArray = [1, 2, 3, 4, 5];
miArray.forEach(function(elemento, indice) {
  console.log("Elemento " + elemento + " en el índice " + indice);
});
```

En el ejemplo anterior, `forEach()` recorre el array y ejecuta la función de devolución de llamada para cada elemento, mostrando el elemento y su índice en la consola.

12. `filter()`: Este método crea un nuevo array con todos los elementos que cumplan una condición determinada por una función de devolución de llamada.

```javascript
var miArray = [1, 2, 3, 4, 5];
var newArray = miArray.filter(function(elemento) {
  return elemento > 2;
});
console.log(newArray); // Imprime [3, 4, 5]
```

En el ejemplo anterior, `filter()` crea un nuevo array (`newArray`) que contiene los elementos mayores que 2 del array original (`miArray`).

13. `map()`: Este método crea un nuevo array con los resultados de aplicar una función de devolución de llamada a cada elemento del array original.

```javascript
var miArray = [1, 2, 3];
var newArray = miArray.map(function(elemento) {
  return elemento * 2;
});
console.log(newArray); // Imprime [2, 4, 6]
```

En el ejemplo anterior, `map()` crea un nuevo array (`newArray`) que contiene los elementos del array original (`miArray`) multiplicados por 2.

14. `reduce()`: Este método aplica una función de devolución de llamada a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

```javascript
var miArray = [1, 2, 3, 4, 5];
var suma = miArray.reduce(function(acumulador, elemento) {
  return acumulador + elemento;
}, 0);
console.log(suma); // Imprime 15
```

En el ejemplo anterior, `reduce()` suma todos los elementos del array (`miArray`) comenzando desde un valor inicial de 0.

15. `find()`: Este método devuelve el primer elemento del array que cumpla una condición determinada por una función de devolución de llamada.

```javascript
var miArray = [1, 2, 3, 4, 5];
var encontrado = miArray.find(function(elemento) {
  return elemento > 3;
});
console.log(encontrado); // Imprime 4
```

En el ejemplo anterior, `find()` busca el primer elemento del array (`miArray`) que sea mayor que 3 y lo devuelve.
