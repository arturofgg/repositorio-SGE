//funcion basica
// let funcion = function(nombre){
//     return ("Hola " + nombre);
// }
// document.write(funcion("Paco<br>"));

//funciones flecha
// let a = a => "Hola" + a;
// let funcion2 = (a, b) => {
//     let c = 2;
//     return a+b+c;
// }
// document.write(funcion2(2,3));

//edades
// let verificarEdad = (edad) => {
//     edad < 18
//         ? alert("Usted es menor de edad")
//         : alert("Usted es mayor de edad");
// }

// let vedad;

// do {
//     vedad = parseInt(prompt("Escribe tu edad"));
// } while (isNaN(vedad));

// verificarEdad(vedad);

//color
function cambiocolor() {
    let campo = document.getElementById("dato").value;
    campo.toLowerCase();
    switch (campo) {
        case campo = 'rojo':
            document.body.style.background = "red";
            break;
        case campo = 'azul':
            document.body.style.background = "blue";
            break;
        case campo = 'verde':
            document.body.style.background = "green";
            break;
    }
}