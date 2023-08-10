# Funciones

Una función es un bloque de código reutilizable que realiza una tarea específica. Las funciones permiten dividir un programa en partes más pequeñas y modularizarlo, lo que facilita la comprensión, el mantenimiento y la reutilización del código.
En general, una función en JavaScript tiene la siguiente estructura básica:

```javascript
function nombreDeLaFuncion(parametro1, parametro2, ...) {
  // Código a ejecutar
  // Puede incluir declaraciones, operaciones y retornos
}
```
Los elementos principales de una función:

- **nombreDeLaFuncion**: Es el nombre que se le da a la función, y debe ser único dentro del ámbito en el que se define. Puede ser cualquier identificador válido en JavaScript.
- **parámetro1, parámetro2, ...**: Son variables opcionales que representan los valores que la función espera recibir cuando se llama. Estos parámetros son utilizados dentro de la función para realizar cálculos o manipular datos.
- **Código a ejecutar**: Aquí se escribe el conjunto de instrucciones que la función realizará cuando sea llamada. Puede contener cualquier declaración o expresión válida en JavaScript.
- **retorno**: Una función puede tener una declaración de retorno opcional que especifica el valor que se devolverá al finalizar la ejecución de la función. Si no se especifica un valor de retorno, la función devuelve `undefined` de forma implícita.

Una vez definida una función, se puede llamar o invocar en cualquier parte del programa utilizando su nombre y pasando los argumentos correspondientes, si los tiene. Por ejemplo:

```javascript
nombreDeLaFuncion(argumento1, argumento2, ...);
```

Al llamar a la función, se ejecutará el código que contiene y, si hay una declaración de retorno, devolverá el valor correspondiente.

Las funciones también pueden ser asignadas a variables o almacenadas en estructuras de datos, y se les puede pasar como argumentos a otras funciones (funciones de orden superior). Esto permite una gran flexibilidad y poder expresivo en el uso de funciones en JavaScript.
				
## Funciones declarativas

Las funciones declarativas, también conocidas como funciones con declaración de función, son uno de los métodos para definir funciones en JavaScript. Se llaman "declarativas" porque se declaran mediante una sentencia específica y se alzan al principio del ámbito en el que están definidas. Esto significa que se pueden llamar antes de su declaración en el código, ya que JavaScript las "eleva" durante la fase de compilación.

A diferencia de las funciones anónimas o expresivas, las funciones declarativas tienen un nombre que se utiliza para invocarlas. Esta característica hace que sean más legibles y fáciles de entender en comparación con las funciones anónimas.

Un ejemplo de una función declarativa sería:

```javascript
function sumar(a, b) {
  return a + b;
}
```

En este caso, la función declarativa "sumar" acepta dos parámetros, "a" y "b", y devuelve la suma de estos dos valores.

Para invocar una función declarativa, simplemente se utiliza su nombre seguido de paréntesis y los argumentos correspondientes:

```javascript
var resultado = sumar(2, 3);
console.log(resultado); // Imprime 5
```

Las funciones declarativas tienen la ventaja de que se pueden utilizar en cualquier parte del ámbito en el que están definidas, incluso antes de su declaración. Esto se debe a la fase de "hoisting" (elevación) que realiza JavaScript durante la compilación, moviendo las declaraciones de funciones al principio del ámbito. Sin embargo, es una buena práctica colocar las declaraciones de funciones al comienzo del código para evitar posibles confusiones y errores.
**hoisting: En JavaScript, hoisting te permite usar funciones y variables antes de que se hayan declarado.

## Funciones Anónimas

Una función anónima en JavaScript es una función que no tiene un nombre asignado. A diferencia de las funciones declarativas, que tienen un nombre específico para invocarlas, las funciones anónimas se definen directamente como expresiones dentro de una asignación, una llamada a otra función o cualquier otro contexto en el que se espera una expresión.

La estructura básica de una función anónima es la siguiente:

```javascript
var nombreVariable = function(parametro1, parametro2, ...) {
  // Código a ejecutar
  // Puede incluir declaraciones, operaciones y retornos
};
```

En este caso, la función se asigna a una variable y se define como una expresión de función sin un nombre explícito. La variable actúa como un identificador para la función y se puede utilizar para invocarla posteriormente.

Un ejemplo de una función anónima sería:

```javascript
var sumar = function(a, b) {
  return a + b;
};
```

En este ejemplo, se crea una función anónima que suma dos números y se asigna a la variable "sumar". La función se puede invocar llamando a la variable seguida de paréntesis y los argumentos correspondientes:

```javascript
var resultado = sumar(2, 3);
console.log(resultado); // Imprime 5
```

Las funciones anónimas son especialmente útiles cuando se necesitan utilizar como argumentos en otras funciones, como las funciones de orden superior (como `map`, `filter` o `forEach`).
Es importante tener en cuenta que las funciones anónimas no se alzan (hoisting) como las funciones declarativas, por lo que deben estar definidas antes de ser invocadas. Sin embargo, se pueden utilizar inmediatamente después de su definición en el código.


## Scope o Ámbito

El "scope" o ámbito en JavaScript se refiere a la visibilidad y accesibilidad de variables, funciones y objetos en una parte específica de un programa. El scope determina dónde se pueden utilizar y acceder estos elementos dentro del código.

En JavaScript, existen dos tipos principales de scope:

1. Scope global: El scope global es el ámbito más amplio y se refiere a las variables, funciones y objetos que están disponibles en todo el programa. Se definen fuera de cualquier función o bloque de código y se pueden acceder desde cualquier parte del código.

   ```javascript
   var globalVariable = 'Soy global';

   function globalFunction() {
     console.log(globalVariable);
   }
   ```

   En este ejemplo, `globalVariable` y `globalFunction` están en el scope global y se pueden acceder desde cualquier lugar del programa.

2. Scope local: El scope local se refiere a las variables, funciones y objetos que están declarados dentro de una función o bloque de código. Estos elementos solo son accesibles dentro del ámbito en el que se definen y no están disponibles fuera de él.

   ```javascript
   function localFunction() {
     var localVariable = 'Soy local';
     console.log(localVariable);
   }
   ```

   En este ejemplo, `localVariable` está en el scope local de la función `localFunction` y solo se puede acceder dentro de esa función.

El scope en JavaScript sigue la regla de "alcance léxico" o "scope estático", lo que significa que el alcance de una variable o función se determina en tiempo de compilación, según la ubicación física en el código fuente. Esto implica que las variables y funciones internas pueden acceder a las variables y funciones externas, pero no al revés.

Además de estos dos scopes principales, JavaScript también tiene otros ámbitos más específicos, como el scope de bloque (introducido en ECMAScript 6) que se aplica a variables declaradas con `let` y `const` dentro de bloques de código delimitados por llaves `{}`.

Es importante comprender y gestionar adecuadamente el scope en JavaScript para evitar problemas de conflicto de nombres, colisiones y comportamientos inesperados en el código. Un buen manejo del scope ayuda a modularizar y estructurar el código de manera más clara y eficiente.


## Return

En JavaScript, la palabra clave `return` se utiliza dentro de una función para especificar el valor que se va a devolver como resultado de esa función. Cuando se alcanza una declaración de retorno, la ejecución de la función se detiene y se devuelve el valor especificado.

Es importante tener en cuenta que `return` finaliza la ejecución de la función en el punto donde se encuentra, por lo que cualquier código después de una declaración de retorno no se ejecutará. Además, si no se especifica una expresión de retorno, la función devolverá `undefined` de forma implícita.


## Callback

En JavaScript, un "callback" es una función que se pasa como argumento a otra función y se invoca en algún momento posterior dentro de esta ultima. El propósito principal de los callbacks es permitir la ejecución asíncrona de código y manejar tareas que dependen de eventos, respuestas de servidor u otras operaciones no bloqueantes.


* `Asíncrona:` La programación asíncrona es una técnica que permite a tu programa iniciar una tarea de larga duración y seguir respondiendo a otros eventos mientras esa tarea se ejecuta, en lugar de tener que esperar hasta que esa tarea haya terminado. Una vez que dicha tarea ha finalizado, tu programa presenta el resultado.

Un callback puede ser una función definida previamente o una función anónima creada en el lugar donde se utiliza como argumento. La función que recibe el callback puede invocarlo en el momento adecuado, pasándole los resultados o cualquier otro dato relevante.

Aquí tienes un ejemplo para ilustrar cómo se utiliza un callback en JavaScript:

```javascript
function operacionAsincrona(parametro1, parametro2, callback) {
  // Realizar alguna tarea asíncrona o demorada

  // Una vez que la tarea se completa, se llama al callback
  callback(resultado);
}

function miCallback(resultado) {
  console.log('El resultado es: ' + resultado);
}

operacionAsincrona(5, 10, miCallback);
```

En este caso, `operacionAsincrona` es una función que realiza una tarea asíncrona y espera un tiempo para simular una operación demorada. Cuando la tarea se completa, se invoca el callback pasándole el resultado como argumento.

El callback simplemente imprime el resultado recibido en la consola. Puedes definir cualquier lógica dentro del callback, como manipulación de datos, actualización de la interfaz de usuario o llamadas a otras funciones.

El uso de callbacks es común en JavaScript para trabajar con eventos, llamadas asíncronas a servidores, temporizadores, promesas y otras operaciones que no bloquean el hilo de ejecución principal. Los callbacks permiten que el código sea más flexible y adaptable, ya que se puede definir el comportamiento que se ejecutará después de que una tarea asincrónica se complete.

La diferencia entre una función y un método es que un método está asociado a un objeto específico y se invoca a través de ese objeto utilizando la notación de punto, mientras que una función es un bloque de código independiente que puede ser invocado directamente. Los métodos representan el comportamiento de los objetos, mientras que las funciones son más genéricas y pueden ser utilizadas en diferentes contextos.

## IIFE: Expresión de función ejecutada inmediatamente

IIFE (Immediately Invoked Function Expression) es una expresión de función en JavaScript que se ejecuta inmediatamente después de ser definida. Es una forma de encapsular el código dentro de un ámbito local y evitar la contaminación del ámbito global.

La sintaxis básica de una IIFE es la siguiente:

```javascript
(function() {
  // Código a ejecutar
})();
```

Aquí hay un ejemplo que demuestra cómo se utiliza una IIFE:

```javascript
(function() {
  var mensaje = "Hola desde la IIFE";
  console.log(mensaje); // Output: "Hola desde la IIFE"
})();
```
En este ejemplo, se define una IIFE que contiene una variable llamada `mensaje` y se muestra el mensaje por consola.

La principal ventaja de utilizar una IIFE es que el código dentro de la función se ejecuta de inmediato y las variables y funciones definidas dentro de la IIFE no afectan al ámbito global. Esto es útil para evitar conflictos de nombres y mantener el código organizado.

Además, las IIFE también pueden aceptar parámetros si se necesitan valores externos dentro de la función. Aquí hay un ejemplo que muestra cómo se puede pasar un parámetro a una IIFE:

```javascript
(function(nombre) {
  console.log("Hola, " + nombre);
})("Juan"); // Output: "Hola, Juan"
```

En este caso, se define una IIFE que acepta un parámetro `nombre` y se pasa el valor "Juan" al ejecutar la función.

Las IIFE son una herramienta poderosa en JavaScript para encapsular el código y mantener la privacidad de las variables y funciones. Son comúnmente utilizadas en bibliotecas y frameworks para evitar conflictos de nombres con otras librerías o scripts en una página web.


## Funciones de orden superior

Las funciones de orden superior en JavaScript son funciones que pueden recibir otras funciones como argumentos y/o devolver funciones como resultado. Estas funciones son muy flexibles y poderosas, ya que permiten operar sobre funciones y manipular el flujo de ejecución de manera dinámica.

Aquí tienes una explicación sencilla de las funciones de orden superior con ejemplos:

1. Pasar una función como argumento:

```javascript
function ejecutarOperacion(num1, num2, operacion) {
  return operacion(num1, num2);
}

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

console.log(ejecutarOperacion(5, 3, suma)); // Output: 8
console.log(ejecutarOperacion(5, 3, resta)); // Output: 2
```

En este ejemplo, la función `ejecutarOperacion` recibe dos números y una función como argumentos. Dependiendo de la función que se pase como tercer argumento, se realizará una operación diferente.

2. Devolver una función como resultado:

```javascript
function crearOperacion(operador) {
  if (operador === "+") {
    return function(a, b) {
      return a + b;
    };
  } else if (operador === "-") {
    return function(a, b) {
      return a - b;
    };
  }
}

const suma = crearOperacion("+");
const resta = crearOperacion("-");

console.log(suma(5, 3)); // Output: 8
console.log(resta(5, 3)); // Output: 2
```

En este ejemplo, la función `crearOperacion` devuelve una función dependiendo del operador que se pase como argumento. Luego, se pueden asignar esas funciones devueltas a variables y usarlas posteriormente.

3. Utilizar métodos de funciones de orden superior:

```javascript
const numeros = [1, 2, 3, 4, 5];

const numerosDobles = numeros.map(function(numero) {
  return numero * 2;
});

const numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosDobles); // Output: [2, 4, 6, 8, 10]
console.log(numerosPares); // Output: [2, 4]
```

Se utilizan los métodos de orden superior `map` y `filter` que están disponibles en los arreglos en JavaScript. Estos métodos reciben una función como argumento y la aplican a cada elemento del arreglo, devolviendo un nuevo arreglo con los resultados filtrados o transformados.

Las funciones de orden superior son una herramienta poderosa en JavaScript que permiten escribir código más modular, reutilizable y expresivo. Al utilizar funciones de orden superior, pueden abstraer la lógica común y realizar operaciones complejas de manera más sencilla y flexible.
