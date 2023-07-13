let persona = [];

class Persona {
    constructor(nombre,edad,DNI,sexo,peso,altura,fechaNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.fechaNacimiento = fechaNacimiento;
    }

    mostrarGeneracion(){
        let generacion = document.getElementById("gen");
        let marcoTemporal = document.getElementById("marcoTemporal");
        let poblacion = document.getElementById("poblacion");
        let circunstancia = document.getElementById("circunstancia");
        let rasgo = document.getElementById("rasgo");
        info.classList.remove("table-secondary");
        info.classList.remove("table-info");
        info.classList.remove("table-warning");
        info.classList.remove("table-primary");
        info.classList.remove("table-danger");
        let fecha = new Date (this.fechaNacimiento)
        if (fecha.getFullYear()>=1930 && fecha.getFullYear()<=1948 ){
            generacion.innerHTML="Silent Generation";
            marcoTemporal.innerHTML="1930-1948";
            poblacion.innerHTML="6.300.000";
            circunstancia.innerHTML="Conflictos bélicos";
            rasgo.innerHTML="Austeridad";
            info.classList.add("table-secondary"); 
            info.classList.remove("d-none"); 

        }
        else if(fecha.getFullYear()>=1949 && fecha.getFullYear()<=1968 ){
            generacion.innerHTML="Baby Boom";
            marcoTemporal.innerHTML="1949-1968";
            poblacion.innerHTML="12.200.000";
            circunstancia.innerHTML="Paz y explosión demográfica";
            rasgo.innerHTML="Ambición";  
            info.classList.add("table-info");
            info.classList.remove("d-none");    
        }
        else if(fecha.getFullYear()>=1969 && fecha.getFullYear()<=1980 ){
            generacion.innerHTML="Generacion X";
            marcoTemporal.innerHTML="1969-1980";
            poblacion.innerHTML="9.300.000";
            circunstancia.innerHTML="Crisis del 73 y transición española";
            rasgo.innerHTML="Obsesión por el éxito"; 
            info.classList.add("table-warning");
            info.classList.remove("d-none");   
        }
        else if(fecha.getFullYear()>=1981 && fecha.getFullYear()<=1993 ){
            generacion.innerHTML="Generacion Y";
            marcoTemporal.innerHTML="1981-1993";
            poblacion.innerHTML="7.200.000";
            circunstancia.innerHTML="Inicio de la digitalización";
            rasgo.innerHTML="Frustración";   
            info.classList.add("table-primary");
            info.classList.remove("d-none"); 
        }
        else if(fecha.getFullYear()>=1994 && fecha.getFullYear()<=2010 ){
            generacion.innerHTML="Generacion Z";
            marcoTemporal.innerHTML="1994-2010";
            poblacion.innerHTML="7.800.000";
            circunstancia.innerHTML="Expansión masiva de internet";
            rasgo.innerHTML="Irreverencia";  
            info.classList.add("table-danger");
            info.classList.remove("d-none"); 
        }
    }

    esMayorDeEdad(){
          let fechaHoy=new Date();
          let fechaNacimiento=new Date(this.fechaNacimiento)
        
        let checkEdad = Math.floor((fechaHoy.getTime()-fechaNacimiento.getTime() )/31536000000);
        if (checkEdad>=18){
            alert("La persona es mayor de edad");
        }
        else
        {
            alert("La persona es menor de edad")
        }
    }

    mostrarDatos(){
        const fecha = new Date(this.fechaNacimiento)
        const fechaFormateada =fecha.toLocaleString()
        alert(`Datos de la persona:
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        DNI: ${this.DNI}
        Sexo: ${this.sexo}
        Peso: ${this.peso} Kg
        Altura: ${this.altura} cm
        Fecha de nacimiento: ${fechaFormateada}
        `)

    }
}

    

document.getElementById("cargar").addEventListener("click",()=>{
    let nombre=document.getElementById("nombre").value
    let edad=document.getElementById("edad").value
    let DNI=document.getElementById("nombre").value
    let sexo=document.getElementById("sexo").value
    let peso=document.getElementById("peso").value
    let altura=document.getElementById("altura").value
    let fechaNacimiento=new Date(document.getElementById("fechaNacimiento").value)

    persona.push(new Persona(nombre,edad,DNI,sexo,peso,altura,fechaNacimiento))
    console.log(persona)
    localStorage.setItem("persona", JSON.stringify(persona))


    document.getElementById("caracteristicas").classList.remove("d-none")
    document.getElementById("esMayor").classList.remove("d-none")
    document.getElementById("mostrar").classList.remove("d-none")
    document.getElementById("cargar").classList.add("d-none")
    document.getElementById("contenedorForm").classList.add("d-none")
    
})

document.getElementById("caracteristicas").addEventListener("click",()=>{
    let persona = JSON.parse(localStorage.getItem("persona"))
    let nombre=persona[0].nombre
    let edad=persona[0].edad
    let DNI=persona[0].DNI
    let sexo=persona[0].sexo
    let peso=persona[0].peso
    let altura=persona[0].altura
    let fechaNacimiento=persona[0].fechaNacimiento

    const personaObj = new Persona(nombre,edad,DNI,sexo,peso,altura,fechaNacimiento);
    personaObj.mostrarGeneracion();
})


document.getElementById("esMayor").addEventListener("click",()=>{
    let persona = JSON.parse(localStorage.getItem("persona"))
    let nombre=persona[0].nombre
    let edad=persona[0].edad
    let DNI=persona[0].DNI
    let sexo=persona[0].sexo
    let peso=persona[0].peso
    let altura=persona[0].altura
    let fechaNacimiento=persona[0].fechaNacimiento

    const personaObj = new Persona(nombre,edad,DNI,sexo,peso,altura,fechaNacimiento);
    personaObj.esMayorDeEdad();
})


document.getElementById("mostrar").addEventListener("click",()=>{
    let persona = JSON.parse(localStorage.getItem("persona"))
    let nombre=persona[0].nombre
    let edad=persona[0].edad
    let DNI=persona[0].DNI
    let sexo=persona[0].sexo
    let peso=persona[0].peso
    let altura=persona[0].altura
    let fechaNacimiento=persona[0].fechaNacimiento

    const personaObj = new Persona(nombre,edad,DNI,sexo,peso,altura,fechaNacimiento);
    personaObj.mostrarDatos();
})


document.getElementById("formulario").addEventListener("submit",(evento)=>{
    evento.preventDefault();
})



