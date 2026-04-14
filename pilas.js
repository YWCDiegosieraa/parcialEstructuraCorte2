let pila = [];

// Agregar objeto a la pila
function agregar(nombre, edad) {
    let persona = {
        nombre: nombre,
        edad: edad
    };

    pila.push(persona);
    console.log("Se agregó:", persona);
}

// Eliminar objeto de la pila
function eliminar() {
    if (pila.length > 0) {
        let eliminado = pila.pop();
        console.log("Se eliminó:", eliminado);
    } else {
        console.log("La pila está vacía");
    }
}

// PRUEBAS
agregar("Orlando", 30);
agregar("Maria", 25);
eliminar();