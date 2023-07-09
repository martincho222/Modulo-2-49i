# Introducción a Objetos

Los objetos son estructuras de datos que nos permiten almacenar y organizar información relacionada en propiedades y métodos( datos de un vehículo, datos de una persona, datos de un producto ) . Están compuestos por pares clave-valor, donde cada clave es un identificador único y cada valor puede ser cualquier tipo de dato válido en JavaScript, como numbers, strings, arrays, funciones e incluso otros objetos.

Existen dos formas principales de crear objetos en JavaScript: la notación literal de objetos y la función constructora `Object`(obshect).


1. Notación literal de objetos: 
La forma más común de crear objetos en JavaScript es utilizando la notación literal de objetos, que consiste en encerrar los pares clave-valor entre llaves `{}`. Por ejemplo:

```javascript
// Crear un objeto utilizando la notación literal de objetos
const persona = {
  nombre: ‘Pinky’,
  edad: 10,
  profesion: 'Diseñadora Gráfica y Desarrolladora',
  saludar: function() {
    console.log('🌈¡Holis!');
  }
};

//¿Cómo acceder a los valores del objeto?
console.log(persona.nombre); // Output: Juan
console.log(persona.edad); // Output: 25

//Llamar a un método del objeto
persona.saludar(); // Output: ¡Hola!
```



2. Función Constructora `Object`:
También pueden crear objetos utilizando el constructor `Object`. Este constructor nos permite crear un objeto vacío y luego agregarle propiedades y métodos. Por ejemplo:

```javascript
// Crear un objeto utilizando el constructor Object
const persona = new Object();

// Agregar propiedades al objeto
persona.nombre = 'Juan';
persona.edad = 25;
persona.profesion = 'Desarrollador';

// Agregar un método al objeto
persona.saludar = function() {
  console.log('¡Hola!');
};

// Acceder a los valores del objeto
console.log(persona.nombre); // Output: Juan
console.log(persona.edad); // Output: 25

// Llamar a un método del objeto
persona.saludar(); // Output: ¡Hola!
```

## Clases

Las clases son una forma de crear objetos basados en un modelo o plantilla utilizando la palabra reservada ”class”, la cual en javascript nos indica que vamos a crear  un objeto. Imaginen que una clase es como un plano o un molde que define cómo se debe crear un objeto y qué propiedades y métodos debe tener.

Para entender mejor las clases, vamos a tomar como ejemplo el concepto de un monito. Si queremos crear varios monitos con características similares, podemos utilizar una clase para definir cómo se ven y cómo se comportan.

```javascript
// Definición de una clase de Monito
class Monito {
  // Constructor: define las propiedades del Monito
  constructor(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }

  // Método
  chillido() {
    console.log('¡Boh ah ah! ¡Boh ah ah!');
  }

  // Método
  saludar() {
    console.log(`¡Holis! Mi nombre es ${this.nombre} y soy un ${this.raza}.`);
  }
}

// Crear instancias (objetos) de la clase Monito
const monito1 = new Monito('Nach', 'Orangutan', 16);
const monito2 = new Monito('Nestor', 'Bonobo', 23);

// Acceder a las propiedades y métodos de los objetos
console.log(monito1.nombre); // Output: Max
console.log(monito2.raza); // Output: Bulldog
monito1.ladrar(); // Output: ¡Guau! ¡Guau!
monito2.saludar(); // Output: ¡Hola! Mi nombre es Nestor y soy un Bonobo.
```

En este ejemplo, hemos definido una clase llamada `Monito` que tiene un constructor para establecer las propiedades del monito (nombre, raza y edad). También tiene dos métodos: `chillido()` y `saludar()`, que nos permiten interactuar con los monitos creados a partir de la clase.

*`El constructor` es una función especial que se utiliza para crear e inicializar objetos a partir de una clase. Es como un conjunto de instrucciones que se ejecutan automáticamente cuando creamos una instancia (objeto) de una clase.

Al crear instancias de la clase utilizando el operador `new`, podemos crear objetos individuales con diferentes valores para las propiedades, pero que comparten los mismos métodos y su comportamiento básico.

Las clases son útiles porque nos permiten organizar y reutilizar código de manera más estructurada. Pueden definir tantas clases como necesiten y crear múltiples objetos a partir de ellas.



## Herencia

La herencia es un concepto que nos permite crear nuevas clases basadas en las clases existentes. Imaginen que tienen una clase llamada `Animalito` que tiene propiedades y métodos básicos compartidos por diferentes tipos de animalitos, como perritos, gatitos y aves. En lugar de volver a escribir esas propiedades y métodos en cada clase de animalito, puedes utilizar la herencia para crear subclases que hereden esas características de la clase principal.

Para entender mejor la herencia, vamos a utilizar el ejemplo de la clase `Animalito` y crear subclases para perritos y gatitos.

```javascript
// Definición de la clase principal Animal
class Animalito {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}.`);
  }
}

// Definición de la subclase Perro
class Perrito extends Animalito {
  constructor(nombre, raza) {
    super(nombre); // Llama al constructor de la clase Animal
    this.raza = raza;
  }

  ladrar() {
    console.log('¡Guau! ¡Guau!');
  }
}

// Definición de la subclase Gato
class Gatito extends Animalito {
  constructor(nombre, color) {
    super(nombre); // Llama al constructor de la clase Animal
    this.color = color;
  }

  maullar() {
    console.log('¡Miau! ¡Miau!');
  }
}

// Crear instancias (objetos) de las subclases
const perro = new Perrito('Orco', 'Rottweiler');
const gato = new Gatito('Cosme Felinito', 'Naranja');

// Acceder a las propiedades y métodos de los objetos
console.log(perro.nombre); // Output: Orco
console.log(gato.color); // Output: Naranja
perro.saludar(); // Output: Hola, soy Orco.
gato.maullar(); // Output: ¡Miau! ¡Miau!
```

En este ejemplo, hemos definido una clase principal llamada `Animalito` que tiene una propiedad `nombre` y un método `saludar()`. Luego, creamos dos subclases: `Perrito` y `Gatito`. Estas subclases utilizan la palabra clave `extends` para indicar que heredan de la clase `Animalito`. Cada subclase tiene su propio constructor que llama al constructor de la clase principal utilizando `super()` y agrega propiedades adicionales y métodos específicos de esa subclase.

Al crear instancias de las subclases (`perrito` y `gatito`), podemos acceder a las propiedades y métodos heredados de la clase principal (`Animalito`), así como a las propiedades y métodos propios de cada subclase.

La herencia nos permite reutilizar código y organizar nuestras clases de forma jerárquica. Podemos crear múltiples niveles de herencia, donde una subclase puede convertirse en la clase principal para otra subclase.

Otros conceptos más avanzados, son los métodos estáticos;


## Métodos estáticos

Los métodos estáticos son métodos que se definen directamente en la clase en lugar de en las instancias individuales (objetos) de esa clase. Estos métodos no están disponibles en las instancias, sino que se pueden invocar directamente desde la clase misma.

```javascript
// Ejemplo de clase con método estático
class Calculadora {
  static sumar(a, b) {
    return a + b;
  }

  static restar(a, b) {
    return a - b;
  }
}

// Invocación de métodos estáticos
console.log(Calculadora.sumar(5, 3)); // Output: 8
console.log(Calculadora.restar(10, 4)); // Output: 6
```

En este ejemplo, hemos definido una clase `Calculadora` con dos métodos estáticos: `sumar()` y `restar()`. Estos métodos pueden ser invocados directamente desde la clase sin necesidad de crear una instancia de la clase.

Los métodos estáticos son útiles cuando necesitamos realizar operaciones o tareas que no dependen de un objeto específico, sino que son comunes a toda la clase. Por ejemplo, en una clase `Math` imaginaria, podríamos tener métodos estáticos como `Math.sumar()` o `Math.restar()`.




## Setters y Getters
Los setters y getters son funciones especiales que nos permiten definir la forma en que se establecen y obtienen los valores de las propiedades de un objeto. Estas funciones se utilizan para controlar el acceso y la manipulación de las propiedades, proporcionando una interfaz más segura y controlada.

**Setters:**

Un setter se utiliza para establecer el valor de una propiedad en un objeto. Nos permite realizar validaciones, cálculos u otras acciones antes de asignar el valor a la propiedad.

```javascript
// Ejemplo de setter en JavaScript
class Persona {
  constructor(nombre) {
    this._nombre = nombre;
  }

  // Setter para la propiedad "nombre"
  set nombre(nuevoNombre) {
    // Realizar alguna validación o procesamiento adicional
    if (typeof nuevoNombre === 'string') {
      this._nombre = nuevoNombre;
    } else {
      console.error('El nombre debe ser una cadena de texto.');
    }
  }
}

// Crear instancia (objeto) de la clase Persona
const persona = new Persona(“Sheldon Cooper”');

// Asignar un nuevo valor a la propiedad utilizando el setter
persona.nombre = 'Rajesh Kutrepali'; // Utiliza el setter "nombre"

console.log(persona._nombre); // Output: Rajesh Kutrepali
```
En este ejemplo, hemos definido un setter para la propiedad `nombre` en la clase `Persona`. El setter se llama automáticamente cuando asignamos un valor a la propiedad `nombre` utilizando la sintaxis de asignación (`persona.nombre = 'Rajesh Kutrepali'`).

Dentro del setter, podemos realizar validaciones o procesamientos adicionales antes de asignar el valor a la propiedad. En este caso, verificamos si el nuevo nombre es una cadena de texto y, si es así, lo asignamos a la propiedad `_nombre` del objeto `persona`.

**Getters:**

Un getter se utiliza para obtener el valor de una propiedad en un objeto. Nos permite realizar acciones o cálculos adicionales antes de devolver el valor de la propiedad.

```javascript
// Ejemplo de getter en JavaScript
class Persona {
  constructor(nombre) {
    this._nombre = nombre;
  }

  // Getter para la propiedad "nombre"
  get nombre() {
    // Realizar alguna acción o cálculo adicional
    return this._nombre.toUpperCase();
  }
}

// Crear instancia (objeto) de la clase Persona
const persona = new Persona('Fito Paez');

// Obtener el valor de la propiedad utilizando el getter
console.log(persona.nombre); // Utiliza el getter "nombre"
// Output: FITO PAEZ
```

En este ejemplo, hemos definido un getter para la propiedad `nombre` en la clase `Persona`. El getter se llama automáticamente cuando accedemos al valor de la propiedad `nombre` utilizando la sintaxis de lectura (`persona.nombre`).

Dentro del getter, podemos realizar acciones o cálculos adicionales antes de devolver el valor de la propiedad. En este caso, convertimos el nombre a mayúsculas utilizando el método `toUpperCase()` antes de devolverlo.

Los setters y getters nos permiten tener un mayor control sobre el acceso y manipulación de las propiedades de un objeto. Podemos establecer restricciones, realizar validaciones, aplicar transformaciones u ofrecer una interfaz más segura para interactuar con las propiedades.

Recuerden  que los setters y getters se utilizan para acceder a propiedades "privadas" de un objeto, por convención, utilizando una convención de nombres con un guion bajo (por ejemplo, `_nombre`). Esto no impide que alguien acceda directamente a la propiedad sin utilizar los setters y getters, pero establece una convención de uso para mantener la integridad del objeto.



## This
`This` es una palabra clave especial que se refiere al contexto de ejecución actual, es decir, al objeto en el que se está ejecutando el código en un momento determinado. El valor de `this` depende de cómo se invoca una función o de cómo se accede a un método.

El valor de `this` puede variar dependiendo del modo de invocación:

1. Cuando se utiliza `this` en el ámbito global (fuera de cualquier función o método), `this` hace referencia al objeto global, que en un navegador web es el objeto `window`. Por ejemplo:

```javascript
console.log(this); // Output: [object Window]
```

2. Cuando se utiliza `this` dentro de una función regular, el valor de `this` depende de cómo se llama o se invoca la función. Si la función se llama directamente, `this` hace referencia al objeto global (`window` en un navegador). Si la función se llama como método de un objeto, `this` hace referencia al objeto que contiene el método. Por ejemplo:

```javascript
function saludar() {
  console.log(this);
}

saludar(); // Output: [object Window]

const persona = {
  nombre: 'Gustavo Ceratti',
  saludar: function() {
    console.log(this);
  }
};

persona.saludar(); // Output: { nombre: 'Juan', saludar: [Function: saludar] }
```


En resumen, `this` en JavaScript se refiere al contexto de ejecución actual, que puede ser el objeto global, un objeto que contiene un método.
Es importante entender el valor de `this` en diferentes situaciones para utilizarlo correctamente y acceder a los objetos y propiedades adecuados en tu código.

Recuerden que la comprensión de `this` puede volverse más compleja en escenarios avanzados, como en el uso de eventos o en el contexto de funciones asíncronas.

Cuando se utiliza `this` dentro de una clase o un objeto en JavaScript, su comportamiento es similar, pero con algunas diferencias sutiles.

Dentro de una clase, `this` se refiere al objeto que se está creando a partir de esa clase. Se utiliza para acceder y modificar las propiedades y métodos de ese objeto específico.

```javascript
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const persona1 = new Persona('Ernesto');
const persona2 = new Persona('Fidel');

persona1.saludar(); // Output: Hola, soy Ernest
persona2.saludar(); // Output: Hola, soy Fidel
```

En este ejemplo, `this.nombre` hace referencia a la propiedad `nombre` del objeto específico que se está creando a partir de la clase `Persona`. En la función `saludar()`, `this` también se refiere al objeto que invoca el método (es decir, `persona1` y `persona2` en este caso).

En un objeto literal, `this` también se refiere al objeto actual en el que se encuentra. Se utiliza de la misma manera para acceder y modificar las propiedades y métodos del objeto.

```javascript
const persona = {
  nombre: 'Ernesto',
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

persona.saludar(); // Output: Hola, soy Juan
```

En este ejemplo, `this.nombre` hace referencia a la propiedad `nombre` del objeto `persona` actual.

En resumen, tanto dentro de una clase como dentro de un objeto, `this` se utiliza para hacer referencia al objeto actual en el que se encuentra el código. Permite acceder y manipular las propiedades y métodos de ese objeto específico.

Recuerden que `this` puede tener diferentes valores dependiendo de cómo se invoca una función o método. Es importante comprender cómo se comporta `this` en diferentes contextos para evitar confusiones y utilizarlo correctamente en tu código.
