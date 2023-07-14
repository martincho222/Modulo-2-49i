# Expresiones regulares

Las expresiones regulares son patrones utilizados para buscar y manipular texto. Pueden ser muy útiles para realizar tareas como la validación de formularios, la extracción de información de cadenas de texto y la búsqueda de patrones específicos. 

Las expresiones regulares se crean utilizando la clase `RegExp` o utilizando una sintaxis de literal con barras diagonales. 
Ejemplos para comprender mejor cómo funcionan:

1. **Coincidencia básica:** Pueden buscar una coincidencia simple de caracteres en una cadena. Por ejemplo, `/hello/` buscará la palabra "hello" en cualquier parte de la cadena.

```javascript
const string = "Buenas noches, como estan?"
const patron = /estan/;
console.log(patron.test(string)) // true
```

2. **Coincidencia de múltiples opciones:** Pueden buscar múltiples opciones utilizando el operador `|`. Por ejemplo, `/hola|adiós/` buscará tanto la palabra "hola" como la palabra "adiós".

```javascript
const texto = "Hola Pinky, te extrañamos";
const patron = /hola|adios/;
console.log(patron.test(texto.toLowerCase())); // true
```

3. **Cuantificadores:** Pueden utilizar cuantificadores para especificar la cantidad de veces que un carácter o grupo debe aparecer. Algunos cuantificadores comunes son `*` (cero o más veces), `+` (una o más veces) y `?` (cero o una vez).

```javascript
const texto = "No pisen el main, por que habra tabla";
const patron = /main?/;

console.log(patron.test(texto)); // true
```

4. **Clases de caracteres:** Pueden definir una clase de caracteres utilizando corchetes `[]` para especificar un conjunto de caracteres permitidos en esa posición. Por ejemplo, `[aeiou]` buscará cualquier vocal.

```javascript
const text = "Pinky va a estar el sabado";
const patron = /[aeiou]/
console.log(patron.test(text)); // true
```

5. **Metacaracteres y secuencias de escape:** Algunos caracteres tienen un significado especial en las expresiones regulares. Por ejemplo, `.` coincide con cualquier carácter excepto un salto de línea. Si deseas buscar un metacaracter literal, debes escaparlo con una barra diagonal invertida `\`.

```javascript
const texto = "Hola, como estan?";
const patron = /\?/;
console.log(patron.test(texto)); // true
```

# Metodos
Los métodos son funciones incorporadas en JavaScript que se utilizan para realizar operaciones con expresiones regulares. Estos métodos se aplican a un objeto de expresión regular y permiten realizar tareas como buscar coincidencias, reemplazar texto y dividir cadenas en base a un patrón.
Algunos métodos importantes que puedes utilizar con expresiones regulares son:

1. **`test()`:** Este método verifica si una cadena coincide con un patrón de expresión regular. Devuelve `true` si encuentra una coincidencia y `false` si no la encuentra.

```javascript
const textoTest = "El que dice Java, hace 20 ejercicios mas";
const patron = /Java/;
console.log(patron.test(textoTest)); // output = true
```

2. **`exec()`:** Este método busca una coincidencia en una cadena utilizando una expresión regular. Devuelve un array que contiene la primera coincidencia encontrada, o `null` si no hay coincidencias. El array también tiene propiedades adicionales como `index` (la posición de la coincidencia) y `input` (la cadena original).

```javascript
const textExec = "Hola, como estan?";
const patron = /estan/;
console.log(patron.exec(textExec)); // ["estan", index: 11, input: "Hola, cómo estan?"]
```

3. **`match()`:** Este método busca todas las coincidencias en una cadena utilizando una expresión regular. Devuelve un array que contiene todas las coincidencias encontradas, o `null` si no hay coincidencias.

```javascript
const textMatch = "El sabado va a sonar peso pluma en el break";
const patron = /pluma/;
console.log(textMatch.match(patron));
```

4. **`replace()`:** Este método reemplaza las coincidencias de una expresión regular en una cadena con un texto especificado. Devuelve una nueva cadena con las sustituciones realizadas.

```javascript
const textoToReplace = "Hola a todos";
const patron = /todos/;
const nuevoTexto = textoToReplace.replace(patron, "todes");
console.log(nuevoTexto);
```

5. **`search()`:** Este método busca una expresión regular en una cadena y devuelve la posición de la primera coincidencia encontrada. Si no se encuentra ninguna coincidencia, devuelve `-1`.

```javascript
const texto = "jueguense con una oracion";
const patron = /oracion/;
console.log(texto.search(patron))
```

Estos son solo algunos de los métodos más comunes que pueden utilizar con expresiones regulares en JavaScript. Recuerden que los métodos pueden variar según el lenguaje de programación, por lo que es posible que encuentres diferencias en su implementación en otros entornos.


# Patrones

1. **`g` (global):** El modificador `g` se utiliza para buscar todas las coincidencias en una cadena en lugar de detenerse después de encontrar la primera coincidencia. Si deseas encontrar todas las coincidencias de un patrón en una cadena, debes agregar el modificador `g` al final de la expresión regular.

Ejemplo:
```javascript
const texto = "hola, hola, hola, hola";
const patron = /hola/g;
console.log(texto.match(patron)); // ["hola", "hola", "hola"]
```

2. **`i` (ignore case):** El modificador `i` se utiliza para hacer que la búsqueda sea insensible a mayúsculas y minúsculas. Con este modificador, la expresión regular coincidirá con caracteres independientemente de si están en mayúsculas o minúsculas.

Ejemplo:
```javascript
const texto = "Hola, hola, hola, hola";
const patron = /hola/i;
console.log(patron.test(texto)); // true
```

3. **`m` (multiline):** El modificador `m` se utiliza cuando deseas que una expresión regular coincida con múltiples líneas en una cadena de texto. Normalmente, una expresión regular busca solo en una línea, pero al agregar el modificador `m`, se realizará una búsqueda en varias líneas.

Ejemplo:
```javascript
const texto = "Línea 1\nLínea 2\nLínea 3";
const patron = /^Línea/m;
console.log(patron.test(texto)); // true
```

Estos son los patrones más utilizados con expresiones regulares. Pueden combinar estos modificadores según tus necesidades para obtener los resultados deseados al buscar y manipular texto en su código.


# Rangos, cuantificadores, anclas y metacaracteres básicos

1. **Rangos `[ ]`:** Los rangos te permiten especificar un conjunto de caracteres permitidos en una posición determinada. Pueden definir un rango utilizando corchetes `[ ]` y un guion `-` para indicar un rango de caracteres. Por ejemplo, `[a-z]` coincidirá con cualquier letra minúscula de la "a" a la "z".

Ejemplo:
```javascript
const texto = "avioncito de rolling"; // SI FUERA TODO EN MAYUSCULA EL RESULTADO SERIA FALSE
const patron = /[a-z]/;
console.log(patron.test(texto)); // true
```

2. **Cuantificadores `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`:** Los cuantificadores se utilizan para especificar la cantidad de veces que un carácter o grupo debe aparecer en una cadena. Los cuantificadores mas comunes son:

   - `*` : Coincide con cero o más ocurrencias del carácter o grupo anterior.
   - `+` : Coincide con una o más ocurrencias del carácter o grupo anterior.
   - `?` : Coincide con cero o una ocurrencia del carácter o grupo anterior.
   - `{n}` : Coincide exactamente con "n" ocurrencias del carácter o grupo anterior.
   - `{n,}` : Coincide con al menos "n" ocurrencias del carácter o grupo anterior.
   - `{n,m}` : Coincide con al menos "n" y hasta "m" ocurrencias del carácter o grupo anterior.

Ejemplo:
```javascript
const texto = "hola, holaaa, hola"
const patron = /hol?a/;
console.log(patron.test(texto)); // true
```

3. **Anclas `^`, `$`:** Las anclas se utilizan para indicar el inicio `^` y el final `$` de una cadena. Si colocas un patrón entre estas anclas, la expresión regular solo coincidirá si el patrón se encuentra al principio o al final de la cadena, respectivamente.

Ejemplo:
```javascript
const texto = "no se nos ocurre ningun texto";
const patron = /^se/; //const patron = /^no/; // output: true
console.log(patron.test(texto)); // false
```

4. **Metacaracteres `.` y `\`:** Los metacaracteres tienen un significado especial en las expresiones regulares. Algunos de los metacaracteres más utilizados son:
   - `.` : Coincide con cualquier carácter, excepto un salto de línea.
   - `\` : Se utiliza para escapar un metacaracter y tratarlo como un carácter literal. Por ejemplo, si deseas buscar un punto literal, debes escaparlo con `\.`.

Ejemplo:
```javascript
const texto = "Ponganse las pilas para el proximo proyecto. ";
const patron = /proyecto./;
console.log(patron.test(texto)); // true
```

Pueden combinarlos y utilizarlos según tus necesidades para crear expresiones regulares más poderosas y flexibles

# Ejemplos

## Validar contraseñas

```javascript
const validarContrasena = (contrasena) => {
    /*
    contraseña cumple con los siguientes criterios:
        - Tiene al menos una letra minúscula.
        - Tiene al menos una letra mayúscula.
        - Tiene al menos un dígito numérico.
        - Tiene una longitud mínima de 8 caracteres.
    
    */
    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return patron.test(contrasena);

}
console.log(validarContrasena("Abcd1234"));
console.log(validarContrasena("abc123"));
```
- `^`: Marca el inicio de la cadena.
- `(?=.*[a-z])`: Utiliza una "búsqueda hacia adelante" para verificar si hay al menos una letra minúscula en cualquier parte de la contraseña.
- `(?=.*[A-Z])`: Utiliza otra "búsqueda hacia adelante" para verificar si hay al menos una letra mayúscula en cualquier parte de la contraseña.
- `(?=.*\d)`: Utiliza una tercera "búsqueda hacia adelante" para verificar si hay al menos un dígito numérico en cualquier parte de la contraseña.
- `.{8,}`: Coincide con cualquier carácter (`.`) y asegura que haya al menos 8 caracteres (`{8,}`).
- `$`: Marca el final de la cadena.


## validar email

```javascript
const validarEmail = (email) => {
    const patron = /^[^\s@!#$%^&]+@[^\s@\d]+\.[^\s@]+$/;

    return patron.test(email);
}

console.log(validarEmail("martin123@gmail.com"));
console.log(validarEmail("martin!123@gmail.com"));
```
- `^`: Marca el inicio de la cadena.
- `[^\s@]+`: Coincide con uno o más caracteres que no sean espacio en blanco (`\s`) ni el símbolo `@`. Esta parte representa el nombre de usuario de la dirección de correo electrónico antes del `@`.
- `@`: Coincide con el símbolo `@` literal.
- `[^\s@]+`: Coincide con uno o más caracteres que no sean espacio en blanco (`\s`) ni el símbolo `@`. Esta parte representa el dominio de la dirección de correo electrónico después del `@`.
- `\.`: Coincide con el símbolo de punto `.` literal.
- `[^\s@]+`: Coincide con uno o más caracteres que no sean espacio en blanco (`\s`) ni el símbolo `@`. Esta parte representa la extensión del dominio de la dirección de correo electrónico.
- `$`: Marca el final de la cadena.

# Algunos ejercicios para practicar:

1. Verifica si una cadena contiene el número de teléfono "555-1234".

2. Encuentra todas las coincidencias de palabras de tres letras en una cadena.

3. Valida si una dirección de correo electrónico es válida.