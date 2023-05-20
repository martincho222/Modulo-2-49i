function ejemploVar() {
    var x = 5;
    
    if (true) {
      var x = 10; // La variable "x" es redeclarada dentro del bloque, afectando su valor fuera del bloque también
      console.log(x); // Imprime 10
    }
    
    console.log(x); // Imprime 10 debido al alcance a nivel de función
  }
  
  ejemploVar();

  function ejemploLet() {
    let x = 5;
    
    if (true) {
      let x = 10; // La variable "x" se declara dentro del bloque, no afectando su valor fuera del bloque
      console.log(x); // Imprime 10
    }
    
    console.log(x); // Imprime 5 debido al alcance a nivel de bloque
  }
  
  ejemploLet();


  function ejemploConst() {
    const PI = 3.1416;
    
    console.log(PI); // Imprime 3.1416
    
    // PI = 3.14; // Esto dará un error, no se puede reasignar un valor a una variable constante
    
    const persona = {
      nombre: "Juan",
      edad: 30
    };
    
    persona.edad = 31; // Las propiedades de un objeto constante pueden ser modificadas
    
    console.log(persona); // Imprime { nombre: "Juan", edad: 31 }
  }
  
  ejemploConst();