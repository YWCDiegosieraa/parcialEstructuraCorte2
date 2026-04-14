let cola = [];

// Agregar número a la cola
function agregarNumero(num) {
    cola.push(num);
    console.log("Se agregó:", num);
}

// Eliminar número de la cola
function eliminarNumero() {
    if (cola.length > 0) {
        let eliminado = cola.shift();
        console.log("Se eliminó:", eliminado);
    } else {
        console.log("La cola está vacía");
    }
}

// PRUEBAS
agregarNumero(10);
agregarNumero(20);
eliminarNumero();