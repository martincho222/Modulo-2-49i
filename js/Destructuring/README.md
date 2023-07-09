# Destructuring y Spread Operator

Es una característica que permite extraer valores de arrays y objetos y asignarlos a variables individuales de una manera más concisa. En lugar de acceder a los elementos o propiedades uno por uno, el destructuring nos permite descomponer la estructura de datos y asignar los valores a variables de manera más directa.

El destructuring puede aplicarse tanto a arrays como a objetos. Al utilizar el destructuring, se especifica un patrón de asignación que indica cómo se deben extraer los valores. A continuación, te mostraré ejemplos de cómo se utiliza el destructuring en diferentes contextos.

## Destructuring de Arrays:
```javascript
const numeros = [1, 2, 3, 4, 5];

// Destructuring de array
const [a, b, ...resto] = numeros;

console.log(a);       // Output: 1
console.log(b);       // Output: 2
console.log(resto);   // Output: [3, 4, 5]
```

En este ejemplo, utilizamos el destructuring de arrays para asignar los primeros dos elementos del array `numeros` a las variables `a` y `b`, respectivamente. Luego, utilizamos el operador `...` (rest operator) para asignar el resto de los elementos a la variable `resto`.

## Destructuring de Objetos:
```javascript
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Barcelona'
};

// Destructuring de objeto
const { nombre, edad, ciudad } = persona;

console.log(nombre);  // Output: Juan
console.log(edad);    // Output: 30
console.log(ciudad);  // Output: Barcelona
```

En este ejemplo, utilizamos el destructuring de objetos para extraer las propiedades `nombre`, `edad` y `ciudad` del objeto `persona` y asignarlas a las variables del mismo nombre.

El destructuring también permite asignar valores predeterminados en caso de que la propiedad no exista en el objeto o el elemento no esté presente en el array. Además, es posible asignar un nuevo nombre a la variable extraída.

El destructuring es una herramienta muy útil en JavaScript para trabajar de manera más eficiente y legible con arrays y objetos. Ayuda a evitar la repetición de código y a simplificar el acceso a los valores.

## Spread Operator (Operador de propagación):
El operador de propagación (spread operator) se representa con tres puntos (`...`) y se utiliza para descomponer arrays u objetos en elementos individuales. Veamos cómo se utiliza:

```javascript
// Spread Operator con Arrays
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

console.log(array2);  // Output: [1, 2, 3, 4, 5, 6]
```

En este ejemplo, utilizamos el operador de propagación para crear `array2`. El operador de propagación `...array1` descompone `array1` en elementos individuales, y luego los combinamos con los elementos adicionales `[4, 5, 6]`.

```javascript
// Spread Operator con Objetos
const objeto1 = { a: 1, b: 2 };
const objeto2 = { ...objeto1, c: 3, d: 4 };

console.log(objeto2);  // Output: { a: 1, b: 2, c: 3, d: 4 }
```

En este ejemplo, utilizamos el operador de propagación para crear `objeto2`. Los pares clave-valor del `objeto1` se copian en `objeto2`, y luego agregamos nuevos pares clave-valor `c: 3` y `d: 4`.

