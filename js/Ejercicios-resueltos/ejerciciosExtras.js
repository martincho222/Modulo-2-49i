// // The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// // What if the string is empty? Then the result should be empty object literal, {}.

// const contarLetra=(string)=> {
//     const cantidadDeCadaCaracter={};
//     const arregloString=string.split("");
//     for (let i=0;i<arregloString.length;i++)
//       {
//         let letra=arregloString[i];
//         console.log(letra)
//         if(cantidadDeCadaCaracter.hasOwnProperty(letra)){
//             // console.log("entro")
//           cantidadDeCadaCaracter[letra]++
//         }
//         else          
//           {
//           cantidadDeCadaCaracter[letra]=1;
//           }
//       }
//     return cantidadDeCadaCaracter;
//   }



//   function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
        

//        count[s] ? count[s]++ : count[s] = 1; //utiliza condicional ternario
//        count[s] ? console.log("count true:", count) : console.log("count false:", count);
//     });
//     return count;
//   }  
// // console.log(contarLetra("aba"));

// console.log(count("aba"));





// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// function findUniq(arr) {
//     // do magic
//     let valorUnico=0;
//     for (numero of arr){
//       let incluido =arr.filter((elemento)=>{
//         return elemento===numero});
//       if(incluido.length===1){
//         valorUnico=numero;
//       }
//     }
//       return valorUnico;
//   }

// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));


const secuenciaFibo = (cantidad) => {
    let secuencia = [0,1];
    let ultimo =1;
    for (let i=2; ultimo.toString().length<cantidad; i++){
        let siguiente = secuencia [i-1] + secuencia[i-2];
        secuencia.push(siguiente);
        ultimo = siguiente;
    }
    return secuencia;
}
console.log(secuenciaFibo(2));