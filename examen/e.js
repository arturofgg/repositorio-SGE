document.addEventListener("DOMContentLoaded", cargar);

function cargar() {

    aniadirKoala();

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
    let img5=document.createElement("img");
    let b5=document.createElement("button");
    p5.id="idp5";
    img5.id="idimg5";
    img5.src="koala5.jpg";
    b5.id="idb5";
    b5.value="Añadir al carrito";

    //3
    divPeque.appendChild(p5);
    divPeque.appendChild(img5);
    divPeque.appendChild(b5);

}

function pasoPorEncima() {
 
}

function salgoDelFooter() {

}

function aniadirNombre() {

}

function pulsaBoton(b) {
    alert("Han pulsado el boton: "+b.id);
}

