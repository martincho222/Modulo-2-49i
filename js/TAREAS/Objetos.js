
    // **Nivel básico:**

    // 1. Crea una clase `Rectangulo` que tenga propiedades de ancho y alto, y métodos para calcular el área y el perímetro del rectángulo.
    // class Rectangulo {
    //     constructor (ancho,alto){
    //         this.ancho=ancho;
    //         this.alto=alto;
    //     }
    //     area(){
    //         return this.ancho*this.alto;
    //     }
    //     perimetro(){
    //         return (this.ancho*2+this.alto*2);
    //     }
    // }
    // const rectangulo1=new Rectangulo(2,3);
    // console.log("Datos del rectangulo 1 ", rectangulo1)
    // console.log("El perimetro del rectangulo1 ",rectangulo1.perimetro())

    // 2. Implementa una clase `Perro` con propiedades como nombre, raza y edad, y un método para ladrar
    // class Perro{
    //     constructor(nombre,raza,edad){
    //         this.nombre=nombre;
    //         this.raza=raza;
    //         this.edad=edad;
    //     }
    //     ladrar(){
    //         console.log("guau guau guau guau");
    //     }
    // }
    // const bobi=new Perro("Bobi","Cordon cuneta",4);
    // console.log("Datos del perro ", bobi)

    // 3. Crea una clase `Calculadora` con métodos para sumar, restar, multiplicar y dividir dos números.
    // class Calculadora {
    //     sumar(a,b){
    //         return a+b;
    //     }
    //     restar(a,b){
    //         return a-b;
    //     }
    //     multiplicar(a,b){
    //         return a*b;
    //     }
    //     dividir(a,b){
    //         return a/b;
    //     }
    // }
    // const calculo1=new Calculadora();
    // console.log(calculo1.dividir(2,2));

    // 4. Implementa una clase `Libro` con propiedades como título, autor y año de publicación, y un método para obtener la información completa del libro.
        // class Libro{
        //     constructor(título,autor,año){
        //         this.titulo=título;
        //         this.autor=autor;
        //         this.año=año;
        //     }
        //     info(){
        //         console.log("Titulo: ",this.titulo);
        //         console.log("Autor: ",this.autor);
        //         console.log("Año: ",this.año);
        //     }
        // }

        // const libro1=new Libro("El angel gris","Alejandro dolinas",1998);
        // libro1.info();

    // 5. Crea una clase `Vehiculo` con propiedades como marca, modelo y año, y un método para obtener la descripción del vehículo.
    // class Vehiculo{
    //     constructor(marca,modelo,año){
    //         this.marca=marca;
    //         this.modelo=modelo;
    //         this.año=año;
    //     }
    //     info(){
    //                 console.log("Marca: ",this.marca);
    //                 console.log("Modelo: ",this.modelo);
    //                 console.log("Año: ",this.año);
    //             }
    // }
    // const auto1=new Vehiculo("Toyota","Hilux",1998);
    //     auto1.info();


    // **Nivel intermedio:**

    // 6. Extiende la clase `Rectangulo` del ejercicio anterior para incluir un método que verifique si el rectángulo es cuadrado (es decir, si tiene igual ancho y alto).
    // class Rectangulo {
    //     constructor (ancho,alto){
    //         this.ancho=ancho;
    //         this.alto=alto;
    //     }
    //     area(){
    //         return this.ancho*this.alto;
    //     }
    //     perimetro(){
    //         return (this.ancho*2+this.alto*2);
    //     }
    //     esCuadrado(){
    //         if (this.ancho===this.alto){
    //             return true;
    //         }
    //         else
    //         {
    //             return false
    //         }
    //     }
    // }
    // const rectangulo1=new Rectangulo(2,2);
    // if (rectangulo1.esCuadrado()){
    //     console.log("Es un cuadrado");
    // }
    // else{
    //     console.log("No es un cuadrado");
    // }

    // 7. Crea una clase `Tiempo` que represente una hora y minutos, y proporciona métodos para sumar y restar minutos a un objeto `Tiempo`.
    // class Tiempo {
    //     constructor(hora,minutos){
    //         this.hora=hora;
    //         this.minutos=minutos;
    //     }
    //     sumarMinutos(minutos){
    //         const totalMinutos = this.hora * 60 + this.minutos + minutos;
    //         this.hora = Math.floor(totalMinutos / 60);
    //         this.minutos = totalMinutos % 60;
    //     }

    //     restarMinutos(minutos){
    //         const totalMinutos=this.hora * 60 + this.minutos - minutos;
    //         if (totalMinutos<0){
    //             return console.log("No se puede restar la cantidad de minutos")
    //         }
    //         else{
                
    //             this.hora = Math.floor(totalMinutos / 60);
    //             this.minutos = totalMinutos % 60;
    //         }
    //     }

    //     consultarHora(){
    //         let muestraMinutos=this.minutos.toString().padStart(2,"0");
    //         let muestraHora=this.hora.toString().padStart(2,"0");
    //         console.log(`La hora es ${muestraHora}:${muestraMinutos}`);
    //     }
        
    // }

    // const tiempo1=new Tiempo(1,45);
    // tiempo1.consultarHora()
    // tiempo1.sumarMinutos(20);
    // tiempo1.consultarHora();
    // tiempo1.restarMinutos(50);
    // tiempo1.consultarHora();

    // 8. Implementa una clase `Estudiante` con propiedades como nombre, edad y una lista de notas, y un método para calcular el promedio de las notas.
    // class Estudiante{
    //     constructor(nombre,edad,notas){
    //         this.nombre=nombre;
    //         this.edad=edad;
    //         this.notas=notas;
    //     }

    //     promedio(){
    //         let suma=this.notas.reduce(function(a,b){
    //             return a+b;
    //         })
    //         return suma/this.notas.length;
    //     }
    // }

    // const estudiante1=new Estudiante("Juan",28,[5,7,8,9]);
    // console.log("El promedio de notas es: ", estudiante1.promedio())

    // 9. Crea una clase `Circulo` con una propiedad de radio y métodos para calcular el área y la circunferencia del círculo.
    // class Circulo{
    //     constructor(radio){
    //         this.radio=radio;
    //     }

    //     area(){
    //         return Math.PI*Math.pow(this.radio,2);
    //     }
    //     circunsferencia(){
    //         return Math.PI*(2*this.radio);
    //     }

    // }

    // const circulo1=new Circulo(3);
    // console.log("El area del circulo es ",circulo1.area());
    // console.log("La circunsferencua del circulo es ",circulo1.circunsferencia());


    // 10. Extiende la clase `Vehiculo` del ejercicio anterior para incluir un método que verifique si el vehículo es nuevo (es decir, si su año de fabricación es mayor a un valor específico).
    // class Vehiculo{
    //     constructor(marca,modelo,año){
    //         this.marca=marca;
    //         this.modelo=modelo;
    //         this.año=año;
    //     }
    //     info(){
    //                 console.log("Marca: ",this.marca);
    //                 console.log("Modelo: ",this.modelo);
    //                 console.log("Año: ",this.año);
    //             }
    //     esNuevo(){
    //         if (this.año>2021) {
    //             return true;
    //         }
    //         else{
    //             return false;
    //         }
    //     }
    // }
    // const auto1=new Vehiculo("Toyota","Hilux",2023);
    //     auto1.info();
    // if (auto1.esNuevo()) {
    //     console.log("El auto es nuevo");
    // } else {
    //     console.log("El auto no es nuevo");
    // }

    // **Nivel avanzado:**

    // 11. Implementa una clase `ListaTareas` que permita agregar, eliminar y mostrar tareas. Cada tarea debe tener un título y una descripción.
    // class ListaTareas{
    //     constructor (){
    //         this.tareas=[];
    //     }
    //     agregar(titulo,descripción){
    //         const tareaNueva= {
    //             titulo:titulo,
    //             descripción:descripción
    //         }
    //         this.tareas.push(tareaNueva);

    //     }
    //     mostrar(){
    //         console.log("Listado de tareas guardadas: ", this.tareas)
    //     }
    //     eliminar(indice){
    //         this.tareas.splice(indice-1,1);
    //     }
    // }

    // const lista1=new ListaTareas();
    // lista1.agregar("Estudiar","Tengo que practicar programacion")
    // lista1.agregar("Gym","ir a entrenar al gimnasio")
    // lista1.eliminar(1)
    // lista1.mostrar();

    // 12. Crea una clase `Persona` con propiedades como nombre, edad y género, y un método para presentarse (por ejemplo, "Hola, soy Juan, tengo 25 años y soy hombre").
    // class Persona {
    //     constructor(nombre,edad,genero){
    //         this.nombre=nombre;
    //         this.edad=edad;
    //         this.genero=genero;
    //     }
    //     presentar(){
    //         console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}`)
    //     }
    // }

    // const person1=new Persona("Juan",38,"Hombre");
    // person1.presentar();

    // 13. Extiende la clase `Estudiante` del ejercicio anterior para incluir un método que determine si el estudiante está aprobado (es decir, si su promedio de notas es mayor a un valor específico).
    // class Estudiante{
    //     constructor(nombre,edad,notas){
    //         this.nombre=nombre;
    //         this.edad=edad;
    //         this.notas=notas;
    //     }

    //     promedio(){
    //         let suma=this.notas.reduce(function(a,b){
    //             return a+b;
    //         })
    //         return suma/this.notas.length;
    //     }
    //     aprobado(){
    //         if(this.promedio()>=6){
    //             console.log("Alumno aprobado");
    //         }
    //         else
    //         {
    //             console.log("Alumno desaprobado")
    //         }
    //     }
    // }

    // const estudiante1=new Estudiante("Juan",28,[5,7,3,2]);
    // console.log("El promedio de notas es: ", estudiante1.promedio())
    // estudiante1.aprobado();

    // 14. Implementa una clase `CalculadoraCientifica` que herede de la clase `Calculadora` y agregue métodos para calcular funciones matemáticas como seno, coseno y logaritmo.
    // class Calculadora {
    //     sumar(a,b){
    //         return a+b;
    //     }
    //     restar(a,b){
    //         return a-b;
    //     }
    //     multiplicar(a,b){
    //         return a*b;
    //     }
    //     dividir(a,b){
    //         return a/b;
    //     }
    // }

    // class CalculadoraCientifica extends Calculadora{
    //     seno(a){
    //         return Math.sin(a);
    //     }
    //     coseno(a){
    //         return Math.cos(a);
    //     }
    //     logaritmo(a){
    //         return Math.log(a);
    //     }
    // }

    // const calculo1=new CalculadoraCientifica();
    // console.log(calculo1.logaritmo(2));

    // 15. Crea una clase `Pelicula` con propiedades como título, director, duración y una lista de actores, y métodos para agregar y eliminar actores de la lista.
    // class Pelicula{
    //     constructor(titulo,director,duracion,actores){
    //         this.titulo=titulo;
    //         this.director=director;
    //         this.duracion=duracion;
    //         this.actores=actores;
    //     }
    //     agregarActor(actor){
    //         this.actores.push(actor);
    //     }
    //     eliminarActor(actor){
    //         for(let i=0;i<this.actores.length;i++){
    //             if (this.actores[i]===actor){
    //                 this.actores.splice(i,1);
    //             }
    //         }
    //     }
    // }

    // const pelicula1=new Pelicula("El secreto de sus ojos", "Campanella","180 min",["Ricardo Darin","Guillero Francella","Soledad Pastoruti"]);
    // pelicula1.eliminarActor("Soledad Pastoruti");
    // pelicula1.agregarActor("Soledad Villamil");

    // console.log("Detalles de la pelicula",pelicula1)