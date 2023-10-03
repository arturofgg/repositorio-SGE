//PRUEBA STRINGS
var nombre1 = "Arturo";
console.log(`Hola ${nombre} un placer`);
console.log("Tu no,bre tiene una variable de tipo: " + typeof nombre);
console.log(`Tu nombre tiene una longitud de `+ nombre.length + 'caracteres');
console.log("La cadena contiene ie?" + nombre.includes("ie"));
console.log("cortamos mi nombre:" + nombre.slice(2,5));

let frase = "   Mi:cobaya:es:muy:simpatica:tiene:ojos:grandes   ";
console.log("frase original: " + frase);
console.log("Quitar todos los espacios: " + frase.trim());
console.log("Quitamos el espacio y usamos el replace; " + frase.trim().replace('grandes', "pequeños"));
console.log("remplazamos todos los '*' por espacios: " +frase.replaceAll('*', " "));

let array=frase.trim().split("*");
console.log(array);

//EJERCICIO
const cuota=110;
var nombre=prompt("Escribe tu nombre");
let edad;
let resultado;

do{
    edad=parseInt(prompt("Escribe tu edad"));
}while(isNaN(edad));

    if (edad>30 && edad<65){
        resultado=cuota-(cuota*0.1);
    }else if (edad>=65){
        resultado=cuota-(cuota*0.3);
    }else{
        resultado=cuota;
    }

var carta=`Hola vecina ${nombre}, tienes ${edad} años y por lo tanto, te corresponde pagar ${resultado}`;
console.log(carta);