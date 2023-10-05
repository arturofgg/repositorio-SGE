// 1
// alert("Hola " + prompt("Escriba su nombre"));

// 2
// document.write("Hola arturo");

// 3
// document.write(3+5);

// 4
// let num1 = prompt("Escribe un numero");
// let num2 = prompt("Escribe otro numero");
// document.write(num1+num2);

// 5
// let num1 = prompt("Escribe un numero");
// let num2 = prompt("Escribe un segundo numero");
// if (num1>num2){
//     document.write("El numero mas alto es "+ num1);
// }else document.write("El numero mas alto es "+ num2);

// 6
// let num1 = prompt("Escribe un numero");
// let num2 = prompt("Escribe un segundo numero");
// let num3 = prompt("Escribe un tercer numero");
// if (num1>num2 && num1>num3){
//     document.write("El numero mas alto es "+ num1);
// }else if (num2>num1 && num2>num3){
//     document.write("El numero mas alto es "+ num2);
// }else document.write("El numero mas alto es "+ num3);

// 7
// let num1 = prompt("Escribe un numero");
// if(num1%2==0){
//     document.write("El numero "+num1+ " es dividible entre 2");
// }else document.write("El numero "+num1+ " no es dividible entre 2");

// 8
// let frase=prompt("Escribe una frase");
// let contador = 0;
// let contador2 = 0;

// do{
//     if(frase[contador] == "a" || frase[contador] == "A"){
//         contador2++;
//     }
//     contador++;
// }while(contador < frase.length)
// document.write("Hay "+contador2+" as");

//9 
// let frase=(prompt("Escribe una frase").toLowerCase());
// if (frase.includes("a")){
//     document.write("a ");
// }
// if (frase.includes("e")){
//     document.write("e ");
// }
// if (frase.includes("i")){
//     document.write("i ");
// }
// if (frase.includes("o")){
//     document.write("o ");
// }
// if (frase.includes("u")){
//     document.write("u ");
// }

// 10
// let frase=prompt("Escribe una frase");
// let contador = 0;
// let contador2 = 0;
// do{
//     if(frase[contador] == "a" || frase[contador] == "A" || frase[contador] == "e" || frase[contador] == "E" || frase[contador] == "i" || frase[contador] == "I" || frase[contador] == "o" || frase[contador] == "O" || frase[contador] == "u" || frase[contador] == "U"){
//         contador2++;
//     }
//     contador++;
// }while(contador < frase.length)
// document.write("Hay "+contador2+" vocales");

// 11
// let frase=(prompt("Escribe una frase").toLowerCase());
// let ca=0;
// let ce=0;
// let ci=0;
// let co=0;
// let cu=0;
// let contador=0;
// do{
//     switch(frase[contador]){
//         case 'a':
//             ca++;
//             break;
//         case 'e':
//             ce++;
//             break;
//         case 'i':
//             ci++;
//             break;
//         case 'o':
//             co++;
//             break;
//         case 'u':
//             cu++;
//             break;
//     }
//     contador++;
// }while(contador < frase.length)
// document.write("Hay " +ca+ " as, "+ce+" es, "+ci+" is, "+co+" os, "+cu+" us.")

//12
// let num=prompt("Escribe un numero");
// if(num%2==0 || num%3==0 || num%5==0 || num%7==0){
//     document.write("El numero es divisible");
// } else document.write("El numero no es divisible");

//13
// let num=prompt("Escribe un numero");
// let divisible2=false;
// let divisible3=false;
// let divisible5=false;
// let divisible7=false;
// if(num%2==0){
//     document.write("entre 2 <bR>");
// }
// if(num%3==0){
//     document.write("entre 3 <bR>");
// }
// if(num%5==0){
//     document.write("entre 5 <bR>");   
// }
// if(num%7==0){
//     document.write("entre 7");
// }

//14
// let num = prompt("Escribe un numero");
// let num2=num;
// do{
//     if(num%num2 == 0){
//         document.write(num +" es divisible eentre "+num2+"<br>")
//     }
//     num2--;
// }while(num2>0)

//15
let num = prompt("Escribe un numero");
let num2 = prompt("Escribe otro numero");
let cont=0;
if (num>num2){
    cont=num;
}else cont=num2;

do{
    if(num%cont == 0 && num2%cont == 0){
        document.write(num +" y "+ num2+ " es divisible entre "+cont+"<br>")
    }
    cont--;
}while(cont>0)