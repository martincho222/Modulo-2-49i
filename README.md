# Fundamentos de Programación

Los fundamentos de programación son los conceptos y principios básicos que se deben conocer y entender para poder crear programas de computadora. Algunos de estos conceptos son:

* `Lógica de programación`: es la capacidad de estructurar la solución de un problema en pasos lógicos que se puedan traducir a un lenguaje de programación.
* `Estructuras de control`: son las instrucciones que permiten controlar el flujo de un programa, como las estructuras de repetición (for, while) y las estructuras de decisión (if-else, switch-case).
* `Variables y tipos de datos`: son los elementos fundamentales para almacenar información en un programa, incluyendo números, texto, booleanos, entre otros.
* `Funciones y procedimientos`: son bloques de código que realizan una tarea específica y se pueden llamar varias veces en un programa.
* `Arreglos y estructuras de datos`: son las herramientas para organizar y almacenar grandes cantidades de información.
* `Algoritmos`: son secuencias ordenadas de instrucciones que permiten resolver un problema.
* `Paradigmas de programación`: son las formas de abordar y resolver problemas de programación, como la programación orientada a objetos, la programación funcional y la programación estructurada.
* `Depuración y manejo de errores`: son las técnicas para encontrar y corregir errores en un programa.

## Principios Básicos de la Programación

Existen varios principios básicos en la programación que son esenciales para cualquier programador. A continuación, se presentan algunos de los más importantes:

1. Abstracción: la abstracción es la capacidad de simplificar un problema o un concepto complejo, eliminando detalles innecesarios y enfocándose en los aspectos más importantes. En programación, la abstracción se logra mediante el uso de funciones, clases y objetos, que permiten dividir el código en piezas más pequeñas y manejables.
2. Modularidad: la modularidad es la capacidad de dividir el código en módulos o bloques de código independientes que pueden ser reutilizados en diferentes partes del programa. Esto hace que el código sea más fácil de entender, depurar y mantener.
3. Encapsulamiento: el encapsulamiento es la capacidad de ocultar detalles internos de un objeto o una función y exponer sólo una interfaz pública. Esto hace que el código sea más seguro, ya que los usuarios sólo tienen acceso a la interfaz pública y no pueden modificar accidentalmente los detalles internos.
4. Simplicidad: la simplicidad es la clave para escribir un código fácil de entender y mantener. Esto significa que el código debe ser lo más claro y conciso posible, utilizando nombres de variables y funciones descriptivos y evitando complejidades innecesarias.
5. Flexibilidad: la flexibilidad se refiere a la capacidad del código para adaptarse a diferentes situaciones y cambios en los requisitos del programa. Esto se logra mediante la creación de código modular, fácil de entender y fácil de cambiar.
6. Eficiencia: la eficiencia se refiere a la capacidad del código para realizar una tarea en el menor tiempo posible y con el menor consumo de recursos posible. Esto se logra mediante el uso de algoritmos y estructuras de datos eficientes, y la optimización del código cuando sea necesario.
7. Legibilidad: la legibilidad se refiere a la capacidad del código para ser fácilmente leído y comprendido por otros programadores. Esto se logra mediante el uso de un estilo de código consistente, comentarios descriptivos y una organización clara del código.

# ¿Que son Algoritmos y Programas?

Los algoritmos y programas son elementos fundamentales de la programación.
Un algoritmo es una secuencia de instrucciones ordenadas y finitas que permiten resolver un problema. Es decir, es una serie de pasos o procedimientos que se siguen para alcanzar un objetivo específico.
Por otro lado, un programa es un conjunto de instrucciones escritas en un lenguaje de programación que permiten a una computadora realizar una tarea específica. Es decir, es el resultado de la traducción de un algoritmo a un lenguaje de programación, que permite su ejecución en una computadora.
En otras palabras, un algoritmo es la idea o el plan para resolver un problema, mientras que un programa es la implementación concreta de ese plan en un lenguaje de programación para que una computadora pueda ejecutarlo.
Los algoritmos y programas son esenciales en la programación ya que permiten resolver problemas de manera eficiente y automatizada. Los programadores utilizan algoritmos para diseñar soluciones a problemas y luego los implementan en programas para que puedan ser ejecutados por las computadoras.

## Caracteristicas de los Algoritmos


Las características principales de un algoritmo son:

* Precisión: Un algoritmo debe ser preciso y detallado en cada paso para poder producir el resultado esperado.
* Finitud: Un algoritmo debe tener un número finito de pasos. Debe tener una condición de parada clara para evitar la ejecución infinita.
* Determinismo: Un algoritmo debe ser determinista, es decir, para una entrada dada, siempre producirá el mismo resultado.
* Claridad: Un algoritmo debe ser claro y fácil de entender por cualquier persona que lo lea.
* Generalidad: Un algoritmo debe ser lo suficientemente general para poder aplicarse a diferentes problemas de la misma categoría.
* Eficiencia: Un algoritmo debe ser eficiente y tener un rendimiento razonable. No se debe utilizar más tiempo o recursos de los necesarios para producir el resultado esperado.
* Modularidad: Un algoritmo debe ser modular para facilitar la comprensión y el mantenimiento del código. Se debe dividir en bloques o módulos que puedan ser probados y depurados individualmente.
* Abstracción: Un algoritmo debe utilizar la abstracción para simplificar un problema complejo y dividirlo en piezas más manejables y fáciles de entender.

## ejemplos de Algoritmos
### Algoritmo para encontrar el máximo de dos números:
```
Inicio
    Leer num1
    Leer num2
    Si num1 > num2 Entonces
        Mostrar num1 es el máximo
    Sino
        Mostrar num2 es el máximo
    Fin Si
Fin
```

### Algoritmo para calcular el factorial de un número:
```
Inicio
    Leer n
    Inicializar factorial como 1
    Para i desde 1 hasta n hacer
        Multiplicar factorial por i y almacenar el resultado en factorial
    Fin Para
    Mostrar El factorial de n es factorial
Fin
```

### Algoritmo para buscar un elemento en una lista:
```
Inicio
    Leer lista
    Leer elemento
    Inicializar encontrado como falso
    Para cada elemento en lista hacer
        Si elemento es igual a elemento_actual Entonces
            Mostrar El elemento se encuentra en la lista
            Asignar verdadero a encontrado
            Romper el bucle
        Fin Si
    Fin Para
    Si encontrado es falso Entonces
        Mostrar El elemento no se encuentra en la lista
    Fin Si
Fin
```


# ¿Qué es Javascript?

JavaScript es un lenguaje de programación interpretado y orientado a objetos que se utiliza principalmente para crear interactividad en sitios web y aplicaciones web. Fue desarrollado en los años 90 por Brendan Eich en Netscape Communications Corporation, y desde entonces se ha convertido en uno de los lenguajes de programación más populares y utilizados en todo el mundo.

JavaScript se ejecuta en la mayoría de los navegadores web, lo que lo convierte en una herramienta ideal para crear aplicaciones web interactivas y dinámicas. También se utiliza en el lado del servidor a través de plataformas como Node.js.

Entre las características más importantes de JavaScript se incluyen:

* Es un lenguaje de programación de alto nivel y fácil de aprender.
* Es un lenguaje de programación interpretado, lo que significa que el código se compila y se ejecuta en tiempo real.
* Es un lenguaje orientado a objetos, lo que significa que permite la programación basada en objetos.
* Tiene una gran cantidad de bibliotecas y frameworks que facilitan la creación de aplicaciones web interactivas y dinámicas.
* Permite la manipulación de HTML y CSS, lo que permite cambiar la apariencia de una página web en tiempo real.
* Es un lenguaje multiplataforma, lo que significa que se puede ejecutar en diferentes sistemas operativos y dispositivos.

## Caracteristicas principales de Javascript

JavaScript, comúnmente abreviado como "JS", es un lenguaje de programación interpretado que se ejecuta en el navegador web. Es un dialecto del estándar ECMAScript, el cual establece la especificación del lenguaje.
Una de las características más importantes de JavaScript es que se define como orientado a objetos, lo que significa que se basa en la creación de objetos y la manipulación de sus propiedades y métodos. Esto lo convierte en un lenguaje muy útil para la creación de aplicaciones web interactivas y dinámicas.
Otra característica importante de JavaScript es que está basado en prototipos. Esto significa que no se utilizan clases para definir objetos, sino que se crean objetos a partir de otros objetos ya existentes, a través de una técnica llamada herencia de prototipos.
JavaScript es también un lenguaje imperativo, lo que significa que se enfoca en las instrucciones a seguir para llevar a cabo una tarea. Además, es débilmente tipado, lo que significa que no es necesario declarar el tipo de dato de una variable antes de usarla. Finalmente, JavaScript es dinámico, lo que significa que se pueden agregar y eliminar propiedades de un objeto en tiempo de ejecución.

# ¿Que es el ECMASCRIPT?

ECMAScript (también conocido como ES) es una especificación de lenguaje de programación estándar que define el conjunto de características y comportamientos que deben ser implementados por los motores de JavaScript. Especifica cómo deben funcionar los elementos fundamentales del lenguaje, como la sintaxis, tipos de datos, estructuras de control, funciones, objetos y más.
ECMAScript es el estándar subyacente que define la sintaxis y las características del lenguaje JavaScript. Los navegadores web, los motores de JavaScript y otros entornos de ejecución implementan ECMAScript para proporcionar soporte a JavaScript.
A lo largo de los años, diferentes versiones de ECMAScript se han lanzado, cada una con nuevas características y mejoras. Las versiones más conocidas son:

* ECMAScript 5 (ES5): lanzado en 2009 y ampliamente compatible en los navegadores modernos.
* ECMAScript 6 (ES6) o ECMAScript 2015 (ES2015): lanzado en 2015 e introdujo muchas características nuevas como let/const, arrow functions, classes, modules, etc.
* ECMAScript 2016 (ES2016) y posteriores: se han lanzado nuevas versiones de ECMAScript cada año a partir de 2016, introduciendo gradualmente nuevas características y mejoras.

La adopción de las características de ECMAScript en los navegadores y entornos de ejecución puede variar, por lo que es importante verificar la compatibilidad de las características específicas con los navegadores y entornos en los que se planea utilizar el código JavaScript.
