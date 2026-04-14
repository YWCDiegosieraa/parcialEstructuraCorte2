let cola = [];

function agregarNumero(num) {
    cola.push(num);
    console.log("Se agregó:", num);
}

function eliminarNumero() {
    if (cola.length > 0) {
        let eliminado = cola.shift();
        console.log("Se eliminó:", eliminado);
    } else {
        console.log("La cola está vacía");
    }
}

// Prueba
agregarNumero(10);
agregarNumero(20);
agregarNumero(30);

eliminarNumero();
eliminarNumero();

