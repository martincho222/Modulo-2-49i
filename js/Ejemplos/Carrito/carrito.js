// let Carrito = (function(){
//     // variable donde almacenaremos productos
//     let productos = [];
//     // funcion paara buscar un  producto en la coleccion o array
//     function buscarProducto(id) {
//         for(let i = 0; i < productos.length; i++) {
//             if(productos[i].id === id) {
//                 return i
//             }
//         }
//         return -1;
//     }
// console.log(productos);
//     return {
//         //funcion para agregar productos al carrito
//         agregarProducto: function(id, nombre, precio) {
//             let index = buscarProducto(id);
//             if (index !== -1){
//                 productos[index].cantidad++;
//             } else {
//                 let nuevoProducto = {
//                     id: id,
//                     nombre: nombre,
//                     precio: precio,
//                     cantidad: 1
//                 }
//                 productos.push(nuevoProducto)
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'success',
//                     title: 'Producto Agregado Correctamente',
//                     showConfirmButton: false,
//                     timer: 1500
//                   })
//             }
//             console.log("Producto agregado al carrito: " + nombre);
//         },
//         //funcion para traer todos los productos del carrito
//         obtenerProductos: function() {
//             return productos;
//         },
//         //funcion para eliminar un producto del carrito
//         eliminarProducto: function(id) {
//             let index = buscarProducto(id);
//             if(index !== -1){
//                 productos.splice(index, 1);
//                 // Swal.fire({
//                 //     title: 'Error!',
//                 //     text: 'Do you want to continue',
//                 //     icon: 'error',
//                 //     confirmButtonText: 'Cool'
//                 //   })
//             }
//         },
//         //Elimina todos los elementos del carrito
//         vaciarCarrito: function() {
//             productos = [];
//             console.log("Carrito Vacio");
//         }
//     }
// })()


// Carrito.agregarProducto(1, "Camisa", 100);
// Carrito.agregarProducto(2, "Pantalon", 150);
// Carrito.agregarProducto(3,"Zapatos", 398);
// Carrito.eliminarProducto(3)

// Carrito.vaciarCarrito()

// console.log("Productos en el carrito: ", Carrito.obtenerProductos());


alert("Vamos a jugar al piedra, papel o tijera!");
alert("Gana el que primero llegue a tres");

let puntuacionJugador = 0;
let puntuacionComputadora = 0;
while (puntuacionJugador < 3 || puntuacionComputadora < 3) {

    // // JUGADOR
    let ingresoJugador = prompt(`Escribe piedra, papel o tijera (o 1, 2 y 3)`);
    let respuestaJugador = ``;

    switch (ingresoJugador) {
        case `1`:
        case `piedra`:
        case `Piedra`:
            respuestaJugador = "PIEDRA";
            break
        case `2`:
        case `papel`:
        case `Papel`:
            respuestaJugador = "PAPEL";
            break
        case `3`:
        case `tijera`:
        case `Tijera`:
            respuestaJugador = "TIJERA";
            break
        default:
            alert(`Has ingresado una respuesta inválida`);
            break
    }

    // // COMPUTADORA

    let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    let respuestaComputadora = ``;

    switch (numeroAleatorio) {
        case 1:
            respuestaComputadora = "PIEDRA";
            break;
        case 2:
            respuestaComputadora = "PAPEL";
            break;
        case 3:
            respuestaComputadora = "TIJERA";
            break;
    }

    // // PARTIDA

    if (respuestaJugador !== respuestaComputadora) {
        if (respuestaJugador === `PAPEL` && respuestaComputadora == `PIEDRA` ||
            respuestaJugador === `PIEDRA` && respuestaComputadora == `TIJERA` ||
            respuestaJugador === `TIJERA` && respuestaComputadora == `PAPEL`) {
            puntuacionJugador++;
            console.log(`jugador ${respuestaJugador} - computadora ${respuestaComputadora}\nGANA JUGADOR\n \nJugador: ${puntuacionJugador} \nComputadora: ${puntuacionComputadora}`)
            alert(`jugador ${respuestaJugador} - computadora ${respuestaComputadora}\nGANA JUGADOR\n\nJugador: ${puntuacionJugador} \nComputadora: ${puntuacionComputadora}`);
        } else if (respuestaComputadora === `PAPEL` && respuestaJugador == `PIEDRA` ||
            respuestaComputadora === `PIEDRA` && respuestaJugador == `TIJERA` ||
            respuestaComputadora === `TIJERA` && respuestaJugador == `PAPEL`) {
            puntuacionComputadora++;
            console.log(`jugador ${respuestaJugador} - computadora ${respuestaComputadora}\nGANA COMPUTADORA\n \nJugador: ${puntuacionJugador} \nComputadora: ${puntuacionComputadora}`);
            alert(`jugador ${respuestaJugador} - computadora ${respuestaComputadora}\nGANA COMPUTADORA\n\nJugador: ${puntuacionJugador} \nComputadora: ${puntuacionComputadora}`);
        }
    } else {
        console.log(`computadora ${respuestaComputadora} - jugador ${respuestaJugador}\n EMPATE\n\nJugador: ${puntuacionJugador} \nComputadora: ${puntuacionComputadora}`);
        alert(`computadora ${respuestaComputadora} - jugador ${respuestaJugador}\n EMPATE\n\nJugador: ${puntuacionJugador} \nComputadora: ${puntuacionComputadora}`);
    }

    if (puntuacionJugador === 3) {
        alert(`Ganaste:)`);
        break;
    } else if (puntuacionComputadora === 3) {
        alert(`Perdiste;(`);
        break;
    } else {}
}