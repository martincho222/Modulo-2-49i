# VARIABLES
En JavaScript, las variables son contenedores utilizados para almacenar datos. Puedes pensar en ellas como cajas etiquetadas en las que puedes guardar diferentes tipos de información, como números, cadenas de texto, booleanos, objetos, arreglos, funciones, etc.

Para declarar una variable en JavaScript, se utiliza la palabra clave "var", "let" o "const", seguida del nombre de la variable. Aquí tienes algunos ejemplos:

```javascript
var edad; // Declaración de una variable llamada "edad" utilizando "var"
let nombre = "Juan"; // Declaración de una variable llamada "nombre" utilizando "let" e inicializada con el valor "Juan"
const PI = 3.1416; // Declaración de una variable constante llamada "PI" inicializada con el valor 3.1416
```

En el ejemplo anterior, "edad", "nombre" y "PI" son nombres de variables. Las variables declaradas con "var" y "let" pueden cambiar de valor a lo largo del programa, mientras que las variables declaradas con "const" son constantes y su valor no puede ser modificado una vez asignado.

Además de declarar variables utilizando palabras clave, también puedes asignarles valores en el momento de la declaración. Aquí tienes un ejemplo:

```javascript
var x = 5; // Declaración y asignación de un valor a la variable "x"
let y = "Hola"; // Declaración y asignación de un valor a la variable "y"
```

JavaScript es un lenguaje de programación de tipado dinámico, lo que significa que no es necesario especificar el tipo de dato que contendrá una variable al declararla. El tipo de dato se determina automáticamente en tiempo de ejecución según el valor asignado a la variable.

Puedes utilizar las variables en expresiones y operaciones, combinarlas con otros valores, modificar su contenido y mucho más. Las variables son una parte fundamental de la programación en JavaScript y te permiten almacenar y manipular datos de manera dinámica en tu código.

# Cual es la diferencia entre var, let y const

En JavaScript, existen tres palabras clave para declarar variables: `var`, `let` y `const`. Cada una tiene diferentes características y se utiliza en diferentes situaciones.

1. `var`: Es la forma más antigua de declarar variables en JavaScript. Con `var`, puedes declarar una variable que tenga un alcance a nivel de función o, si se declara fuera de una función, un alcance global. Las variables declaradas con `var` también tienen elevación (hoisting), lo que significa que se mueven automáticamente al principio del ámbito en el que están declaradas. Además, las variables declaradas con `var` pueden ser redeclaradas y modificadas dentro de su ámbito.

   Ejemplo:
   ```javascript
   var x = 5;
   var y = "Hola";
   x = 10; // Modificando el valor de la variable "x"
   ```

2. `let`: Fue introducido en ES6 (ECMAScript 2015) como una alternativa mejorada a `var`. Las variables declaradas con `let` tienen un alcance a nivel de bloque, lo que significa que solo están disponibles dentro del bloque en el que fueron declaradas. También respetan el concepto de elevación (hoisting), pero a diferencia de `var`, no se inicializan automáticamente con un valor `undefined`, sino que deben ser inicializadas explícitamente antes de su uso. Además, las variables declaradas con `let` pueden ser reasignadas dentro de su ámbito, pero no pueden ser redeclaradas dentro del mismo bloque.

   Ejemplo:
   ```javascript
   let x = 5;
   let y = "Hola";
   x = 10; // Modificando el valor de la variable "x"
   ```

3. `const`: También fue introducido en ES6 y se utiliza para declarar variables constantes, es decir, variables cuyo valor no puede ser reasignado una vez que se les ha asignado un valor inicial. Las variables declaradas con `const` tienen un alcance a nivel de bloque y también deben ser inicializadas al momento de la declaración. Las variables `const` no pueden ser reasignadas ni redeclaradas en el mismo ámbito, pero si son objetos o arreglos, sus propiedades o elementos pueden ser modificados.

   Ejemplo:
   ```javascript
   const PI = 3.1416;
   const nombre = "Juan";
   // PI = 3.14; // Esto dará un error, no se puede reasignar un valor a una variable constante
   ```

En general, se recomienda utilizar `let` para la mayoría de las variables en JavaScript, ya que proporciona un alcance a nivel de bloque y evita algunos problemas asociados con `var`. Se debe utilizar `const` cuando se desea declarar una variable cuyo valor no cambiará a lo largo del programa. `var` todavía se utiliza en ciertos casos específicos o en código más antiguo, pero se recomienda evitar su uso en nuevos proyectos.