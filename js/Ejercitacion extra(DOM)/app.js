// Ejercicio de funciones: Crea una función que reciba un número entero como parámetro y devuelva la suma de todos los dígitos del número. Por ejemplo, si el número es 123, la función debería devolver 6 (1 + 2 + 3).

let etiquetaP=document.getElementById("textoModificable");
etiquetaP.innerHTML ="Ingrese un número";


const sumarDigitos = (numero) => {
 let suma=0;
  for (let digito of numero){
    suma+=parseFloat(digito);
  }
  console.log(suma);
let resultado = document.createElement("p");
resultado.innerHTML = `El resultado de la suma de los digitos es: ${suma}`;
document.getElementById("contenedor").insertAdjacentElement("afterend",resultado);

}

document.getElementById("calculo").addEventListener("click",function(){
  let valor=document.getElementById("key").value   
  console.log(valor)
  sumarDigitos(valor);
});
