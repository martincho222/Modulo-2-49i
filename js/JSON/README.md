# JSON

JSON (JavaScript Object Notation)(shavascript obshect noteishon) es un formato de texto ligero que se utiliza para almacenar y transmitir datos de manera sencilla. Es muy común en la programación web y se utiliza para intercambiar información entre diferentes aplicaciones y sistemas.
Imaginen que quieren guardar información sobre una persona en un archivo. En lugar de escribir esa información en un formato complicado, como una tabla o un documento de texto complejo, pueden usar JSON para organizar los datos de manera más fácil de entender.
Un ejemplo sencillo de cómo se ve un objeto JSON que contiene información sobre una persona:

```json
{
  "nombre": "pinky",
  "edad": 10,
  "ciudad": "micuman"}
```

En este ejemplo, el objeto JSON representa a una persona llamada Pinky, de 10 años de edad y que vive en Micuman. Observen que los datos están organizados en pares de "clave" y "valor". La clave (como "nombre", "edad" y "ciudad") es una cadena de texto que identifica cada dato, y el valor (como "Pinky", 10 y "Micuman") es el contenido asociado a esa clave.
El formato JSON también puede representar listas de elementos. Por ejemplo una lista de colores:

```json
{
  "colores": ["rosa", "rojo", "azul"]
}
```

En este caso, el valor asociado a la clave "colores" es una lista de colores. Cada color está representado por una cadena de texto y se separan entre sí por comas.
JSON es fácil de leer y escribir tanto para los humanos como para las máquinas, lo que lo hace muy útil para intercambiar datos entre diferentes sistemas.




# LocalStorage
El localStorage es una característica de JavaScript que permite almacenar datos en el navegador web de manera persistente. Es una forma sencilla de guardar información en la computadora del usuario para que pueda ser accedida y utilizada incluso después de que se cierre el navegador.
Imaginen que están construyendo una aplicación de notas y quieren que los usuarios puedan guardar sus notas en su navegador. Aquí es donde el localStorage resulta útil. Pueden guardar los datos de las notas en el localStorage y recuperarlos cuando el usuario vuelva a abrir la aplicación.
Para utilizar el localStorage en JavaScript, tienen algunos métodos clave a su disposición:

1. **setItem**: Este método te permite guardar un par clave-valor en el localStorage. La clave y el valor son cadenas de texto. Por ejemplo:

```javascript
localStorage.setItem("nombre", "Nach");
```

En este caso, se guarda la clave "nombre" con el valor "Nach" en el localStorage.

2. **getItem**: Con este método, pueden recuperar el valor almacenado en el localStorage utilizando su clave. Por ejemplo:

```javascript
var nombre = localStorage.getItem("nombre");
console.log(nombre); // Imprime "Nach"
```

Aquí, el valor asociado a la clave "nombre" es recuperado y almacenado en la variable "nombre". Luego se imprime en la consola.

3. **removeItem**: Si quieren eliminar un elemento del localStorage, pueden utilizar este método. Por ejemplo:

```javascript
localStorage.removeItem("nombre");
```
En este caso, el elemento con la clave "nombre" es eliminado del localStorage.
El localStorage almacena los datos como cadenas de texto, por lo que si desean guardar y recuperar datos más complejos, como objetos JavaScript, es necesario convertirlos a formato de cadena utilizando la función `JSON.stringify()`  y `JSON.parse()`  respectivamente. Aquí tienen un ejemplo:

```javascript
var persona = {
  nombre: "Nach",
  edad: 16,
  ciudad: "Micuman"
};

localStorage.setItem("persona", JSON.stringify(persona));

var personaGuardada = JSON.parse(localStorage.getItem("persona")); //
console.log(personaGuardada.nombre); // Imprime "Nach"
```
En este caso, el objeto `persona` se convierte en una cadena utilizando `JSON.stringify()` antes de ser guardado en el localStorage. Luego, se recupera del localStorage utilizando `JSON.parse()` y se almacena en la variable `personaGuardada`.
El localStorage es útil para almacenar pequeñas cantidades de datos en el navegador del usuario, como preferencias, configuraciones o información temporal. Sin embargo, tengan en cuenta que el localStorage tiene un límite de almacenamiento, generalmente alrededor de 5 MB a 10 MB, y que los datos almacenados en el localStorage están disponibles solo para ese dominio específico en el que se guardaron.




## JSON.stringify() y JSON.parse()
Son funciones en JavaScript que se utilizan para convertir datos entre el formato JSON y el formato JavaScript.

1. **JSON.stringify()**: Esta función toma un objeto o un valor en JavaScript y lo convierte en una cadena de texto en formato JSON. Es útil cuando desean enviar datos a través de una red o almacenarlos en un archivo en formato JSON. 
Aquí tienen un ejemplo:

```javascript
var persona = {
  nombre: "Conti",
  edad: 25,
  ciudad: "Micuman"
};
var personaJSON = JSON.stringify(persona); //
console.log(personaJSON); // Imprime '{"nombre":"Conti","edad":25,"ciudad":"Micuman"}'
```

En este caso, el objeto `persona` se convierte en una cadena de texto en formato JSON utilizando JSON.stringify(). Luego, la cadena `personaJSON` se imprime en la consola.
Es importante tener en cuenta que JSON.stringify()  solo incluirá las propiedades enumerables del objeto en la cadena JSON resultante. Si el objeto contiene propiedades no enumerables o métodos, no se incluirán en la cadena JSON.

2. **JSON.parse()**: Esta función toma una cadena de texto en formato JSON y la convierte en un objeto o un valor en JavaScript. Es útil cuando reciben datos en formato JSON y desean utilizarlos en su código como objetos JavaScript. 
Ejemplo:

```javascript
var personaJSON = '{"nombre":"Tincho","edad":37,"ciudad":"Micuman"}';
var persona = JSON.parse(personaJSON);
console.log(persona.nombre); // Imprime "Tincho"
console.log(persona.edad); // Imprime 37
console.log(persona.ciudad); // Imprime "Micuman"
```
En este caso, la cadena `personaJSON` que contiene el formato JSON se convierte en un objeto JavaScript utilizando JSON.parse(). Luego, pueden acceder a las propiedades del objeto como `persona.nombre`, `persona.edad` y `persona.ciudad`.
Si la cadena de texto en formato JSON no es válida, es decir, si no sigue la sintaxis correcta del JSON, la función JSON.parse() lanzará un error.

En resumen, JSON.stringify() convierte un objeto o valor en JavaScript en una cadena de texto en formato JSON, mientras que JSON.parse() convierte una cadena de texto en formato JSON en un objeto o valor en JavaScript. Estas funciones son útiles para intercambiar datos entre diferentes sistemas o para almacenarlos de manera estructurada en formato JSON.

