var array = [1, 2, 3, 2, 1];
var suma = 0;

//for1 
for(let i=0; i<array.length; i++){
    suma = array[i]+suma;
}
document.write(suma+"<br>");

//for con in
for(let i in array){
    suma = array[i]+suma;
}

document.write(suma+"<br>");
for(let i of array){
    suma += i;
}
document.write(suma+"<br>");


let cadena = 'PACO Sanz'

for(let i of cadena){
    suma = i;
}


//Sacar impares con for
let numero;

do{
    numero = parseInt(prompt("Escribe un numero"));
}while(numero>=1 && isNaN(numero));

for(let i=numero; i>0; i--){
    if (i%2!=0){
        document.write(i+"<br>");
    }
}