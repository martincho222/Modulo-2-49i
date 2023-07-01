//1-Determinar si un número es positivo, negativo o cero.

let num = 2;

if(num===0){
console.log(`el numero ${num} es igual a 0`)
}else if (num>0){
console.log(`el numero ${num} es positivo`)
}else {
console.log(`el numero ${num} es negativo`)
}

//2-Determinar si un número es par o impar.

let numParImpar = 2;

if(numParImpar%2===0){
console.log(`el numero ${numParImpar} es par`)
}else {
console.log(`el numero ${numParImpar} es impar`)
}

//3-Verificar si un número es divisible por 3.

let numDiv3 = 6;

if(numDiv3%3===0){
console.log(`el numero ${numDiv3} es divisible en 3`)
}else {
console.log(`el numero ${numDiv3} no es divisible en 3`)
}

//4- Calcular el mayor de tres números.

let num1=0;
let num2=0;
let num3=10;

if(num1==num2 && num2==num3){

console.log(`son todos iguales`)

}else if(num1>num2){

if(num1>num3){

console.log(`el mayor es el numero ${num1} `)

}else{

console.log(`el mayor es el numero ${num3} `)

}
    
}else if(num2>num3){
   
console.log(`el mayor es el numero ${num2} `)
    
}else{

console.log(`el mayor es el numero ${num3} `)

}


//5-Determinar si un año es bisiesto.

 
let anioBisiesto = 2020;

if(anioBisiesto%4===0){
console.log(`el año ${anioBisiesto} es bisiesto`)
}else {
console.log(`el año ${anioBisiesto} no es bisiesto`)
}

//6- Ordenar tres números de forma ascendente.

let numOrdenado1=1;
let numOrdenado2=5;
let numOrdenado3=8;

if(numOrdenado1<numOrdenado2 && numOrdenado1<numOrdenado3){
   if (numOrdenado2<numOrdenado3){
console.log(`${numOrdenado1} ${numOrdenado2} ${num3} `)
   }else{
console.log(`${numOrdenado1} ${num3} ${numOrdenado2} `)
 }
}else if(numOrdenado2<numOrdenado1 && numOrdenado2<numOrdenado3){
   if (numOrdenado1<numOrdenado3){
      console.log(`${numOrdenado2} ${numOrdenado1} ${numOrdenado3} `)
    }else{
        console.log(`${numOrdenado2} ${numOrdenado3} ${numOrdenado1} `)
    }
 }else if(numOrdenado3<numOrdenado1 && numOrdenado3<numOrdenado2){
    if (numOrdenado1<numOrdenado2){
        console.log(`${numOrdenado3} ${numOrdenado1} ${numOrdenado2} `)
    }else{
         console.log(`${numOrdenado3} ${numOrdenado2} ${numOrdenado1} `)
    }
 }

//7-Calcular el descuento aplicable a una compra según el monto.

let importe = 1250;
let totalApagar
let descuento=0;

if(importe<0){
    totalApagar="valor nulo"
 }else if(importe<500){
    totalApagar=importe
 }else if (importe<1000){
    totalApagar=importe*0.95;
    descuento=5;
 }else if (importe<1500){
     totalApagar=importe*0.90;
   descuento=10;
 }else if(importe>=1500){
    totalApagar=importe*0.85;
    descuento=15;
 }

 if(descuento==0){
    console.log(`usted tiene para pagar ${totalApagar}$ sin descuento`)
 }else{
    console.log(`usted tiene para pagar ${totalApagar}$ con descuento del ${descuento}% (monoto original ${importe})$`)
 }


//8- Determinar el tipo de triángulo según sus lados.

let ladoTrianguloUno =1;
let ladoTrianguloDos =2;
let ladoTrianguloTres =3;

if(ladoTrianguloUno===ladoTrianguloDos && ladoTrianguloDos==ladoTrianguloTres){
    console.log(`Triángulo equilátero`)
 }else if(ladoTrianguloUno===ladoTrianguloDos || ladoTrianguloDos===ladoTrianguloTres || ladoTrianguloUno===ladoTrianguloTres){
console.log(`Triángulo isósceles`)
 }else {
console.log(`Triángulo escaleno`)
 }
