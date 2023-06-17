// la sintaxis

// const array = []; // sintaxis literal
// const array2 = new Array() // 

// push

// const number = [1,2,3,4,5];
// number.push(6);
// number.push(true)
// console.log(number);

//pop
// const arrayPop = [1,2,3,4,5,6,7,8,9];
// arrayPop.pop();
// console.log(arrayPop);

// shift
// const shiftArr = [1,2,3,4,5];
// shiftArr.shift();
// console.log(shiftArr);

// unsifht
// const unshiftArr = ['hola', true, 2, undefined];
// unshiftArr.unshift('mundo');
// console.log(unshiftArr);

// slice
// const sliceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// sliceArr.slice(1, 5);
// console.log(sliceArr.slice(1, 5));

// concat

// const arr1 = [true, undefined, null];
// const arr2 = [1, "string", []]
// const variable = arr1.concat(arr2);
// console.log(variable);

//splice 

// let spliceArr = [1,2,3,4,5];
// spliceArr.splice(2, 2, 'a', 'b', 'c');
// console.log(spliceArr);// output: [1, 2, 'a', 'b', 'c', 5]

// let meses = ["enero", "febrero", "lunes", "martes"];
// let dias = meses.splice(2, 2, "marzo", "abril");

// console.log(dias); // ["lunes", "martes"]
// console.log(meses); // ["enero", "febrero", "marzo", "abril"]


//reverse

// const reverseArr = [1,2,3,4,5,6,7];
// const variable = reverseArr.reverse();
// console.log(variable);

//sort
// const sortArr = [3,1,2,5,4];
// console.log(sortArr.sort());
// let interrogante = ["🥚", "🐔"].sort();
// console.log(interrogante);

//includes
// const includesArr = [1,2,3,4,5,6,7];
// console.log(includesArr.includes(1));

//forEach
// const forEachArr = [1,2,3,4,5,6,7,8,9];

// forEachArr.forEach(function(elemento, indice){
//    return console.log(`${indice} : ${elemento}`);
// });




//map()

// const mapArr = [1,2,3,4,5,6,7,8,9];
// const newArray = mapArr.map(function(elemento){
//   if(elemento > 2) {
//     return elemento * 2
//   } else {
//     return elemento
//   }
// });

// console.log(newArray);

//reduce
// const numberArr = [1,2,3,4,5,6,7,8];
// const suma = numberArr.reduce(function(acumulador, elemento){
//   console.log("acumulador", acumulador);
//   // console.log("elemento", elemento);
//   return acumulador + elemento
// })

// console.log(suma);

//filter()
// const filterArr = [1,2,3,4,5,6,7,8,9];
// const arrayNuevo = filterArr.filter(function(elemento){
//   return elemento % 2 === 0
// });

// console.log(arrayNuevo);

//find
// const findArr = [1,2,3,4,5,6,7,8,9];
// const encontrado = findArr.filter(function(elemento){
//     return elemento % 2 === 0
//   }).find(function(elemento){
//   return elemento > 4
// })

// console.log(encontrado);