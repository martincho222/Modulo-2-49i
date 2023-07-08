//Destructuring

//Arrays Destructuring
// const numbers = [1,2,3,4,5,6,7,8,9];
// console.log(numbers[0]);

// const [a, b, c, ,cinco] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(cinco);

//Object Destructuring
const personas = [
    {
        nombre:"Pinky",
        edad: 10,
        ciudad:"Micuman",
        saludar: () => {
            console.log("Buenas noches a todos");
        }
    },
    {
        nombre:"Pinky",
        edad: 10,
        ciudad:"Micuman",
        saludar: () => {
            console.log("Buenas noches a todos");
        }
    },
    {
        nombre:"Pinky",
        edad: 10,
        ciudad:"Micuman",
        saludar: () => {
            console.log("Buenas noches a todos");
        }
    },
    {
        nombre:"Pinky",
        edad: 10,
        ciudad:"Micuman",
        saludar: () => {
            console.log("Buenas noches a todos");
        }
    }
]



// const { nombre, edad, ciudad, saludar, apellido = "Moon" } = persona;
// const [{nombre},{ciudad},{edad},{saludar}] = personas;
// const destMap = personas.map((persona) => {
//     const {nombre, edad, ciudad, saludar, apellido = "Moon" } = persona;
//     console.log(nombre);
// })

// console.log(persona.nombre, persona.edad, persona.ciudad);


//Spread Operator (...)

// const array1 = [1,2,3];
// console.log("array1", array1);
// const array2 = [...array1, 4, 5, 6]
// console.log("array2", array2);

// const objeto1 = {a:1, b:2}
// const objeto2 = {...objeto1, c:3, d:4}

// console.log(objeto2);

// const array = [1,2,3,4,5,6,7,8,9]
// const [a, b, c, ...resto] = array;
// console.log(resto);