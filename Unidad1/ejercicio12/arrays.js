let miArray = [1, 2, 3, 4, 5];
let miArray2 = new Array(1, 2, 3, 4, 5);
let miArray3 = new Array(5);
let miArray4 = Array.from("hello");
let miArray5 = Array.of(1, "hello", true);

//map():
let numerosM  = [1, 2, 3, 4, 5];
let numerosDobles = numerosM.map(function(numeroM) {
  return numeroM * 2;
});
console.log(numerosDobles); // [2, 4, 6, 8, 10]

//filter():
let numerosF = [1, 2, 3, 4, 5];
let numerosPares = numerosF.filter(function(numeroF) {
  return numeroF % 2 === 0;
});
console.log(numerosPares); // [2, 4]

//reduce():
let numerosR = [1, 2, 3, 4, 5];
let suma = numerosR.reduce(function(acumulador, numeroR) {
  return acumulador + numeroR;
});
console.log(suma); // 15

//forEach():
let numerosFE = [1, 2, 3, 4, 5];
numeros.forEach(function(numeroFE) {
  console.log(numeroFE);
});

//sort()
let numerosS = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numeros.sort();
console.log(numerosS); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

//slice():
let numerosSL = [1, 2, 3, 4, 5];
let numerosCopia = numerosSL.slice(1, 4);
console.log(numerosCopia); // [2, 3, 4]

//splice()
let numerosSP = [1, 2, 3, 4, 5];
numerosSP.splice(2, 1, 6);
console.log(numerosSP); // [1, 2, 6, 4, 5]

//concat()
let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];
let numerosConcatenados = numeros1.concat(numeros2);
console.log(numerosConcatenados); // [1, 2, 3, 4, 5, 6]


//join()
let numerosJ = [1, 2, 3, 4, 5];
let numerosComoCadena = numerosJ.join("-");
console.log(numerosComoCadena); // "1-2-3-4-5"


//indexOf()
let numerosIO = [1, 2, 3, 4, 5];
let indiceDelTres1 = numerosIO.indexOf(3);
console.log(indiceDelTres1); // 2

//lastIndexOf()
let numerosLIO = [1, 2, 3, 4, 5, 3];
let indiceDelTres2 = numerosLIO.lastIndexOf(3);
console.log(indiceDelTres2); // 5

//includes()
let numerosIN = [1, 2, 3, 4, 5];
let incluyeTres = numerosIN.includes(3);
console.log(incluyeTres); // true