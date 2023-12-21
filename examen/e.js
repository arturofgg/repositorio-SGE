document.addEventListener("DOMContentLoaded", cargar);

function cargar() {

    aniadirKoala();
    pasoPorEncima();

    let titulo = document.getElementsByTagName("h1")[0];
    titulo.addEventListener("mouseover", pasoPorEncima);

    let pie = document.getElementsByTagName("footer")[0];
    pie.addEventListener("mouseover", salgoDelFooter);

    let b1 = document.getElementById("idadd");
    b1.addEventListener("click",aniadirNombre);

    let botones=document.getElementsByTagName("button");
    for(let i=0;i<=5;i++){
        botones[i].addEventListener("click",function(){
            pulsaBoton(botones[i]);
        });
    }
}

function aniadirKoala() {
    //1 pillar padre
    let divGrande=document.getElementsByClassName("caja")[0];
    
    //2 crear hijos
    let divPeque=document.createElement("div");
    divPeque.className="imgbox";
    divPeque.id="cinco";
    // divPeque.setAttribute("class", "imgbox")
    
    //3 hijos a padres
    divGrande.appendChild(divPeque);

    //1 El padre es divPeque

    //2
    let p5=document.createElement("p");
    let p5t = document.createTextNode("Koala 5 -25€");
    let img5=document.createElement("img");
    let b5=document.createElement("button");
    let b5t = document.createTextNode("Añade a la cesta");
    p5.id="idp5";
    img5.id="idimg5";
    img5.src="koala5.jpg";
    b5.id="idb5";

    //3
    b5.appendChild(b5t);
    p5.appendChild(p5t);
    divPeque.appendChild(p5);
    divPeque.appendChild(img5);
    divPeque.appendChild(b5);
}

function pasoPorEncima() {
    let vTitulo=document.getElementsByTagName("h1")[0];
    vTitulo.style.color="pink";
    vTitulo.style.backgroundColor="blue"
}

function salgoDelFooter() {
    let vFooter=document.getElementsByTagName("footer")[0];
    var colores = ["red", "orange", "yellow", "green","blue","indigo","violet"]
    var coloresAleatorios = colores[Math.floor(Math.random()*colores.length)];
    vFooter.style.backgroundColor=coloresAleatorios;
}

function aniadirNombre() {
    // let valorinput = document.getElementsByTagName("input")[0];
    // let parrafo = document.getElementsByTagName("p") [0];

    // if(!parrafo) {
    //     parrafo = document.createElement("p");
    //     document.body.appendChild(parrafo)
    // }
    // let salida = valorinput.value.split('').reverse().join('');
    // parrafo.textContent = "Bienvenido a Koalate, "+salida;

    let valor = document.getElementsByTagName("input")[0].value;
    console.log(valor);
    let rever = "";
    for(let i=valor.length-1;i>=0;i--){
        rever =rever+valor[i];
    }
    let parr = document.getElementsByTagName("p")[0];
    parr.textContent = "Bienvenido a Koalate, "+rever;
}

function pulsaBoton(b) {
    alert("Han pulsado el boton: "+b.id);
}