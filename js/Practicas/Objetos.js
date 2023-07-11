
// **Nivel básico:**

// 1. Crea una clase `Rectangulo` que tenga propiedades de ancho y alto, y métodos para calcular el área y el perímetro del rectángulo.

    class Rectangulo{
        constructor (ancho,alto){
            this.ancho = ancho;
            this.alto = alto;
        }

        area(){

            return this.ancho * this.alto

        }
        perimetro(){

            return (this.ancho*2) + (this.alto*2)

        }

    }

    let rectangulito= new Rectangulo(2,2) ;

    console.log(rectangulito.area());
    console.log(rectangulito.perimetro());


// 2. Implementa una clase `Perro` con propiedades como nombre, raza y edad, y un método para ladrar.

    class Perro{
        constructor (nombre, raza, edad){

            this.nombre = nombre;
            this.raza = raza;
            this.edad = edad;
        }

        ladra(){
            return "Guau guau"
        };
    }

    let perrito = new Perro ("Ayudante de satán", "Galgo", 6)

    console.log(perrito.ladra())

// 3. Crea una clase `Calculadora` con métodos para sumar, restar, multiplicar y dividir dos números.

    class Calculadora{

        constructor (numeroUno, numeroDos){
            this.numeroUno = numeroUno;
            this.numeroDos = numeroDos;
        }

        suma(){
            return this.numeroUno + this.numeroDos
        }
        resta(){
            return this.numeroUno - this.numeroDos
        }
        multiplicacion(){
            return this.numeroUno * this.numeroDos
        }
        division(){
            if(this.numeroDos ===0){
                
                return "No se puede dividir en cero"
            }else{
                
                return this.numeroUno / this.numeroDos
            }
        }
        
    }

    let calculon = new Calculadora (2,1);

    console.log(calculon.division())

// 4. Implementa una clase `Libro` con propiedades como título, autor y año de publicación, y un método para obtener la información completa del libro.

    class Libros {
        constructor (titulo, autor, publicacion){
            this.titulo = titulo;
            this.autor = autor;
            this.publicacion = publicacion;
        }
        infoLibro(){
            return `"${this.titulo}" fué escrito por ${this.autor} en el año ${this.publicacion}`
        }
    }

    let librito = new Libros ("El Corazón Arponeado", "Marge", 1990);

    console.log(librito.infoLibro())

// 5. Crea una clase `Vehiculo` con propiedades como marca, modelo y año, y un método para obtener la descripción del vehículo.

    class Vehiculo{
        constructor (marca, modelo ,anio){
            this.marca = marca;
            this.modelo = modelo;
            this.anio = anio;
        }
        infoVehiculo(){
            return `El vehiculo es "${this.marca}", modelo ${this.modelo}, fabricado en el año ${this.anio}`
        }
    }

    let auto = new Vehiculo ("fiat", "cronos", 2021)

    console.log(auto.infoVehiculo())
// **Nivel intermedio:**

// 6. Extiende la clase `Rectangulo` del ejercicio anterior para incluir un método que verifique si el rectángulo es cuadrado (es decir, si tiene igual ancho y alto).

    class VerificadorCuadrado extends Rectangulo{
        constructor(ancho,alto) {

            super(ancho,alto);
        }
        esCuadrado(){
            if (this.ancho === this.alto){
                return `Es un cuadrado`
            }else{
                return `Es un rectangulo`
            }
        }

    }

    let cuadrado = new VerificadorCuadrado(5,4);

    console.log(cuadrado.esCuadrado())

// 7. Crea una clase `Tiempo` que represente una hora y minutos, y proporciona métodos para sumar y restar minutos a un objeto `Tiempo`.




// 8. Implementa una clase `Estudiante` con propiedades como nombre, edad y una lista de notas, y un método para calcular el promedio de las notas.

    class Estudiante{
        constructor(nombre, edad, notas){
            this.nombre = nombre;
            this.edad = edad;
            this.notas = notas;
        }
        promedio(){
            this.acumulador = 0
            for (let i=0;i<this.notas.length;i++){
                this.acumulador += this.notas[i];
            }
            return this.acumulador/this.notas.length;
        }
    }

    let alumno = new Estudiante ("pepe", 25 , [10,8,7,6])

    console.log(alumno.promedio())

// 9. Crea una clase `Circulo` con una propiedad de radio y métodos para calcular el área y la circunferencia del círculo.

    class Circulo{
        constructor (radio){
            this.radio = radio;
        }
        area(){
            return 2*Math.Pi*this.radio;
        }
        circunferencia(){
            return Math.PI*Math.pow(this.radio,2);
        }
    } 

    let tapaRedonda = new Circulo (10);

    console.log(tapaRedonda.circunferencia())

// 10. Extiende la clase `Vehiculo` del ejercicio anterior para incluir un método que verifique si el vehículo es nuevo (es decir, si su año de fabricación es mayor a un valor específico).

    class Auto0 extends Vehiculo{
        constructor(marca, modelo ,anio){
            super(marca,modelo,anio);
        }
        nuevo(){
            if(this.anio>=2023){
                return `Es un auto nuevo`;
            }else{
                return `No es un auto nuevo`;
            }
        }
    }


    let tito = new Auto0 ("ford", "ranger", 2023);

    console.log(tito.nuevo());

// **Nivel avanzado:**

// 11. Implementa una clase `ListaTareas` que permita agregar, eliminar y mostrar tareas. Cada tarea debe tener un título y una descripción.

    class ListaTareas{
        constructor (){
            this.tareas =  [];
        }
        agrear(tarea){
            this.tareas.push(tarea);
        }
        mostrarTareas(){
            if(this.tareas.length===0){
                return `Lista vacia`
            }else{
                return console.log(this.tareas)
            }
        }
        quitar(elementoEliminar){
            if(this.tareas.length===0){
                return `sin tareas para eliminar`
            }else{
                this.tareas.splice(elementoEliminar-1,1)
            }
        }

    }


    let compras = new ListaTareas();

    compras.agrear("comprar frutas");
    console.log(compras.tareas)
    compras.agrear("comprar verduras");
    compras.agrear("comprar Fernet");
    console.log(compras);
    compras.mostrarTareas();
    compras.quitar(2)
    compras.mostrarTareas();



// 12. Crea una clase `Persona` con propiedades como nombre, edad y género, y un método para presentarse (por ejemplo, "Hola, soy Juan, tengo 25 años y soy hombre").

    class Persona {
        constructor(nombre, edad, genero){

            this.nombre = nombre;
            this.edad = edad;
            this.genero =  genero;
        }
        persentarse(){
            return `Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}`
        }
    }

    let juanitoChulo = new Persona ("juan", 25, "hombre");

    console.log(juanitoChulo.persentarse());


// 13. Extiende la clase `Estudiante` del ejercicio anterior para incluir un método que determine si el estudiante está aprobado (es decir, si su promedio de notas es mayor a un valor específico).

    class EstudianteCursando extends Estudiante{
        constructor(nombre, edad, notas){
            super(nombre,edad,notas)
        }
        aprueba(){
            if(super.promedio()>6){
                return `aprobado`
            }else{
                return `Desaprobado`
            }
        }
    }
    
    let juancito = new EstudianteCursando ("junito", 25, [10,7,5,8])
    let juancito2 = new EstudianteCursando ("junito", 25, [10,0,5,8])

    console.log(juancito.aprueba())
    console.log(juancito2.aprueba())
// 14. Implementa una clase `CalculadoraCientifica` que herede de la clase `Calculadora` y agregue métodos para calcular funciones matemáticas como seno, coseno y logaritmo.

    class CalculadoraCientifica extends Calculadora{
        constructor (numeroUno, numeroDos, angulo){
            super (numeroUno, numeroDos);
            this.angulo = angulo;
        }
        seno(){
            return Math.sin(this.angulo)
        }
        coseno(){
            return Math.cos(this.angulo)
        }
        tangente(){
            return Math.tan(this.angulo)
        }
    }

    let calculito = new CalculadoraCientifica (1,1,90);

    console.log(calculito.seno())
    console.log(calculito.coseno())
    console.log(calculito.tangente())
    calculito.angulo = 120;
    console.log(calculito.tangente())



// 15. Crea una clase `Pelicula` con propiedades como título, director, duración y una lista de actores, y métodos para agregar y eliminar actores de la lista.


    class Pelicula{
        constructor (titulo, director, duracion){
            this.titulo = titulo;
            this.director = director;
            this.duracion = duracion;
            this.actores = [];
        }
        agregarActores(actor){
            this.actores.push(actor);
        }
        elimanrActores(elemento){
            if (this.actores === 0){
                return `Lista de acotres vacia`
            }else{
                
                this.actores.splice(elemento-1,1);
            }
        }
    }

    let pelicula = new Pelicula("La desaparicion de Natch", "M. j. Leal", 3);
    pelicula.agregarActores("C. Moom")
    console.log(pelicula.actores);
    pelicula.elimanrActores(1)
    console.log(pelicula.actores);
    pelicula.elimanrActores(1)
    
