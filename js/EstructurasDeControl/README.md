# Estructuras de Control

Las estructuras de control en JavaScript son herramientas que te permiten controlar el flujo de ejecución de un programa. Son como indicaciones que le das al código para que haga diferentes acciones dependiendo de ciertas condiciones. Son útiles cuando quieres que tu programa tome decisiones o repita tareas automáticamente.

Imagina que estás siguiendo una receta de cocina. Las estructuras de control serían como las instrucciones que te dicen qué hacer en diferentes situaciones. Por ejemplo, si la receta te dice "si la sartén está caliente, añade los ingredientes", estás usando una estructura de control condicional para tomar una decisión basada en si la sartén está caliente o no.

Las estructuras de control más comunes en JavaScript son:

1. Estructuras condicionales
2. Estructuras condicionales múltiples
3. Estructuras de control de bucle:

En resumen, estas estructuras de control te permiten escribir programas más poderosos y flexibles, ya que puedes tomar decisiones y repetir tareas automáticamente.

## 1 - Estructuras condicionales

Permiten ejecutar un bloque de código si se cumple una condición. Las estructuras condicionales más comunes en JavaScript son, if, else, else if.

ejemplos:

- `if`:
  Se utiliza para ejecutar un bloque de código si una condición es verdadera.

```javascript
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
}
```

- `else`:
  Se utiliza para ejecutar un bloque de código si la condición de un `if` no es verdadera.

```javascript
let edad = 15;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

- `else if`:
  Se utiliza para evaluar múltiples condiciones.

```javascript
let nota = 80;
if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("D");
}
```

## 2 - Estructuras condicionales múltiples

    Pueden utilizar la estructura de control condicional `switch` para evaluar múltiples casos y ejecutar diferentes bloques de código dependiendo del valor de una expresión. La sintaxis básica de `switch` es la siguiente:

```javascript
switch (expresión) {
  case valor1:
    // código a ejecutar si la expresión es igual a valor1
    break;
  case valor2:
    // código a ejecutar si la expresión es igual a valor2
    break;
  case valor3:
    // código a ejecutar si la expresión es igual a valor3
    break;
  // más casos...
  default:
  // código a ejecutar si la expresión no coincide con ninguno de los valores anteriores
}
```

que significa el ejemplo anterior:

1. La expresión dentro del `switch` se evalúa y luego se compara con los valores de cada caso.
2. Si la expresión coincide con un valor de caso, se ejecuta el bloque de código correspondiente a ese caso y se utiliza la palabra clave `break` para salir del `switch`.
3. Si la expresión no coincide con ninguno de los valores de caso, se ejecuta el bloque de código del `default` (opcional) y se sale del `switch`.
4. El `break` es importante para evitar que se ejecuten los bloques de código de otros casos una vez que se ha encontrado una coincidencia. Sin `break`, el flujo de ejecución continuaría en el siguiente caso sin importar si coincide o no.

Aquí tienes un ejemplo para ilustrar su uso:

```javascript
var opcion = 2;

switch (opcion) {
  case 1:
    console.log("Opción 1 seleccionada");
    break;
  case 2:
    console.log("Opción 2 seleccionada");
    break;
  case 3:
    console.log("Opción 3 seleccionada");
    break;
  default:
    console.log("Opción no válida");
}
```

En este caso, si `opcion` tiene el valor `2`, se imprimirá "Opción 2 seleccionada" en la consola. Si `opcion` tiene un valor diferente, se imprimirá "Opción no válida".

El `break` después de cada bloque de código es para evitar que se ejecuten los casos siguientes accidentalmente. También puedes omitir el `default` si no necesitas un caso por defecto.

## 3 - Bucles

    Existen diferentes tipos de bucles que permiten ejecutar un bloque de código repetidamente. Estos bucles son estructuras de control fundamentales en programación y les permiten automatizar tareas repetitivas. Los bucles más comunes son:

1. Bucle while: El bucle `while` ejecuta un bloque de código siempre que una condición especificada sea verdadera. La sintaxis básica es la siguiente:

```javascript
while (condición) {
  // código a ejecutar mientras la condición sea verdadera
}
```

Antes de cada iteración, se evalúa la condición. Si es verdadera, se ejecuta el bloque de código y luego se vuelve a evaluar la condición. El bucle se repetirá mientras la condición sea verdadera.

2. Bucle do-while: El bucle `do-while` es similar al bucle `while`, pero la evaluación de la condición se realiza después de ejecutar el bloque de código. Esto garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es falsa. La sintaxis básica es la siguiente:

```javascript
do {
  // código a ejecutar al menos una vez
} while (condición);
```

3. Bucle for: El bucle `for` se utiliza cuando se conoce la cantidad exacta de iteraciones que se deben realizar. La sintaxis básica es la siguiente:

```javascript
for (inicio; condición; incremento) {
  // código a ejecutar en cada iteración
}
```

El `inicio` se ejecuta antes de la primera iteración. La `condición` se evalúa antes de cada iteración y, si es verdadera, se ejecuta el bloque de código. Después de cada iteración, se ejecuta la expresión `incremento`. El bucle se repite mientras la condición sea verdadera.

Cada tipo de bucle tiene su propio propósito y se elige según la situación y los requisitos específicos de tu código. Puedes utilizarlos para repetir tareas y controlar el flujo de ejecución en tu programa.

EJEMPLO DE BUCLES

Cómo utilizar los diferentes tipos de bucles en JavaScript:

1. Bucle while:

```javascript
var contador = 0;

while (contador < 5) {
  console.log("El contador es: " + contador);
  contador++;
}
```

Este bucle `while` imprimirá los valores del contador del 0 al 4 en la consola.

2. Bucle do-while:

```javascript
var i = 0;

do {
  console.log("El valor de i es: " + i);
  i++;
} while (i < 5);
```

En este caso, el bucle `do-while` imprimirá los valores del 0 al 4 en la consola, aunque la condición se evalúe al final.

3. Bucle for:

```javascript
for (var i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}
```

Este bucle `for` imprimirá los valores del contador del 0 al 4 en la consola. La variable `i` se incrementa en cada iteración.
