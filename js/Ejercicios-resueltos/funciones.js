//funciones de callback

// const numero1=parseFloat(prompt("Ingrese un número:"));
// const numero2=parseFloat(prompt("Ingrese otro número:"));

// function asincrona (a,b,callback){
    
//     let resultado=a+b;
//     return callback(resultado);
// }

// function miCallBack (parametro){
//     return Swal.fire('El resultado de la suma es '+ parametro);
// }


// asincrona(numero1,numero2,miCallBack);




//Practica de metodos de arreglos
//Filter
// const arreglo=[1,2,3,4,5,6,7,8,9]

// const nuevoArreglo= arreglo.filter(function(elemento){
//     return elemento %2 ===0;
// }
// )
// Swal.fire('Los elementos filtrados son ' +  nuevoArreglo);


//SPLICE
// const arreglo=[1,2,3,4,5,6,7,8,9]
// const nuevoArreglo= arreglo.splice(2,3,"Hola");
// // Swal.fire('Los elementos filtrados son ' +  nuevoArreglo);
// Swal.fire('Los elementos filtrados son ' +  arreglo);

//FIND
// const arreglo=[1,2,3,4,5,6,7,8,9]
// const valorCompara=prompt("Ingrese el valor a buscar")*1;

// const nuevoArreglo= arreglo.find(function(elemento){
    
//     return elemento===valorCompara;
// }
// )

// Swal.fire('Los elementos filtrados son ' +  nuevoArreglo);

//MAP
// const arreglo=[1,2,3,4,5,6,7,8,9]
// const valorCompara=prompt("Ingrese el numero a multiplicar los pares")*1;

// const nuevoArreglo= arreglo.map(function(elemento){
    
//     if(elemento%2===0)
//     return elemento*valorCompara;
//     else
//     return elemento
// }
// )
// Swal.fire('El arreglo resultantes es ' +  nuevoArreglo);

// let arreglo=[-52, -56,-57,-58, -120, 0, -110];
// Swal.fire('El menor es ' +  (arreglo.reduce(function(a,b){
//     console.log("El valor anterior de a ",a);
//     return Math.min(a,b);
// }
//     )));
// console.log(typeof arreglo[0]); 