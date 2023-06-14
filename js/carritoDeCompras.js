let Carrito = (function() {
    //variable donde almacenamos los productos
    const productos = [];
    //funcion para buscar un producto en la collecion o array
    function buscarProducto(id) {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id === id) {
                return -1;
            }
        }
    }
    return {
        agregarProducto: function(id, nombre, precio) {
            let index = buscarProducto(id);
            if (index !== -1) {
                productos[index].cantidad++;
            } else {
                let nuevoproducto = {
                    id: id,
                    nombre: nombre,
                    precio: precio,
                    cantidad: 1
                }
                productos.push(nuevoProducto)
            }
            console.log("producto agregado al carrito: " + nombre);
        }
    }
})()