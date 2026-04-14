let pila = [];

// Agregar elemento (push)
function agregar(nombre, edad) {
    let persona = {
        nombre: nombre,
        edad: edad
    };

    pila.push(persona);
    console.log("Agregado:", persona);
}

// Eliminar elemento (pop)
function eliminar() {
    if (pila.length > 0) {
        let eliminado = pila.pop();
        console.log("Eliminado:", eliminado);
    } else {
        console.log("La pila está vacía");
    }
}

// Prueba
agregar("Orlando", 30);
agregar("Maria", 25);
eliminar();