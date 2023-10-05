var ordenador = 700, cascos = 50, teclado = 70;
let total = (ordenador+cascos+teclado)*0.9;
document.write(`El total que te vas a gastar es: ${total}`);

cascos = parseInt(prompt("Cuanto cuestan los cascos"));
raton = parseInt(prompt("Cuanto cuesta el raton"));

let total2= cascos+raton;
document.write("<br> El total2 que te vas a gastar es "+ total2);
alert(total2);