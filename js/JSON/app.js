// JSON
// const objetoJSON = {
//     "nombre": 'Pinky',
//     "edad": 10,
//     "ciudad": "Micuman",
//     "arrya": [] || {} || true || undefined || null
// }

// console.log(objetoJSON);


// LocalStorage


//setItem
// localStorage.setItem("email", "ejemplo@gmail.com");

// //getItem

// console.log(localStorage.getItem("email"));

// //removeItem

// localStorage.removeItem("email")


// const persona = [
//     {
//         nombre: "Nach",
//         edad: 16,
//         ciudad: "Micuman"
//     },
//     {
//         nombre: "Nach",
//         edad: 16,
//         ciudad: "Micuman"
//     },
//     {
//         nombre: "Nach",
//         edad: 16,
//         ciudad: "Micuman"
//     },
//     {
//         nombre: "Nach",
//         edad: 16,
//         ciudad: "Micuman"
//     }
// ]

// localStorage.setItem("personas", JSON.stringify(persona))

// const valor = JSON.parse(localStorage.getItem("personas"));
// console.log(valor[2]);

const guardarLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data))
}

const traerDatosLocalStorage = () => {
    return console.log(JSON.parse(localStorage.getItem("data")));
}

const usuario = {
    email: "martin@gmail.com",
    nombre: "Martin",
    ciudad: "Micuman",
    contrasenia: "1234567"
};

guardarLocalStorage(usuario)

traerDatosLocalStorage();
