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

//FIBO
// const secuenciaFibo = (cantidad) => {
//     let secuencia = [0,1];
//     let ultimo =1;
//     for (let i=2; ultimo.toString().length<cantidad; i++){
//         let siguiente = secuencia [i-1] + secuencia[i-2];
//         secuencia.push(siguiente);
//         ultimo = siguiente;
//     }
//     return secuencia;
// }
// console.log(secuenciaFibo(2));

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str){
//   //Code here
//   let cadena = str.split(" ");
//   let nuevaCadena=[];
//   for (let i=0; i<cadena.length;i++){
//     console.log("Cadena [i]", cadena[i]);
//     let marks="!¿¡?.,"
//     let firstLetter=cadena[i];
//     if (!marks.includes(firstLetter)){
//         console.log("First letter",firstLetter.slice(1)); 
//     nuevaCadena[i]=firstLetter.slice(1)+firstLetter[0]+"ay"
//     console.log("Elemento de la cadena:",nuevaCadena);
//     }
//     else{
//         nuevaCadena[i]=firstLetter;
//     }
    
//   }
//   return console.log(nuevaCadena.join(" "));
// }
// pigIt('O tempora o mores !');


// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

    // Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// function rot13(message){
//     //your code here
//     let abcedario="abcdefghijklmnñopqrstuvxyz";
//     let abc=abcedario.split("");
//     let arregloMensaje=message.split(" ");
//     let mensajeCifrado=[];
//     for (let i=0; i<arregloMensaje.length;i++){
//         let letrasMensaje=arregloMensaje[i].split("");

//     }
//   }

//redirigir a una nueva url despues de un cierto tiempo
    // let tiempo=0;
    // setInterval(()=>{
    //     document.write(tiempo++)
    // },1000)
    // setTimeout(()=>{
    //     window.location.href="https://ole.com.ar"
    // },5000) alt program soport

        
//practica de DOM
    // let input = document.getElementById("key");
        
    //     input.addEventListener("input", (evento) => {
    //       console.log(evento.target.value);
    //     });


    


      
  
      