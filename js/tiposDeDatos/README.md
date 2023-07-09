# TIPOS DE DATOS

Los tipos de datos son categorías que se utilizan para definir el tipo de información que se puede almacenar en una variable. Aunque JavaScript es un lenguaje de programación de tipado dinámico, lo que significa que no se requiere declarar explícitamente el tipo de dato de una variable, existen tipos de datos que se utilizan para representar diferentes tipos de información.


## 1 - Numbers
Representa valores numéricos, ya sea enteros o decimales

```javascript
let edad = 24;
let precio = 19.99;
```

## 2 - Strings
Representa una secuencia de caracteres. Se utilizan comillas simples o dobles para definir una cadena de texto.

```javascript
let nombre = "Juan";
let mensaje = 'Hola, ¿cómo estás?';
```
## 3 - Boolean
Representa un valor de verdadero o falso. Es útil en las expresiones condicionales, cuando queremos realizar una accion dependiendo de un resultado.

```javascript
let activo = true;
let logueado = false;
```

## 4 - Array(Arreglos)
Representa una colección ordenada de elementos. Puede contener diferentes tipos de datos. Los elementos se acceden mediante un índice que comienza en cero y son separados por comas, todo esto encerrados en corchetes [].

```javascript
let numeros = [1, 2, 3, 4, 5];
let nombres = ["Juan", "María", "Carlos"];
puede guardar cualquier tipo de dato por ej…
let tipoDeDatos = [number, string, objetos, booleanos, arrays];
```
## 5 - Object(Objetos)
Representa una entidad que puede tener propiedades y métodos. Las propiedades se definen mediante pares clave-valor, separados por : .

```javascript
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 24,
  direccion: {
    calle: "Av. Independencia",
    numero: 123,
    ciudad: "Chaco"
  }
};
```

## 6 - Undefined
Representa un valor no definido. Si una variable ha sido declarada, pero aún no tiene un valor asignado, su valor es undefined .

```javascript
let x;
console.log(x); // undefined
```

## 7 - Null
Representa un valor nulo. Significa que a la variable se le ha asignado intencionalmente la ausencia de un valor.

```javascript
let y = null;
```