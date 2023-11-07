function cargar(){
    let boton, texto;

    //1 forma de hacerlo
    texto=document.getElementsByTagName("input")[0];
    texto.placeholder="Cual es su compra";
    texto.id="id_texto";
    texto.name="texto_nombre";

    //2 forma de hacerlo
    boton=document.getElementsByTagName("input")[1];
    boton.setAttribute("type","button");
    boton.setAttribute("id","id_button");
    boton.setAttribute("value","Pulsa para añadir");

    //productos unicos -> creo array
    let array = ["pan","huevo","agua","papel"];
    let listaArray = document.createElement("div");
    document.body.appendChild(listaArray);

    // Asignar la función listaObjetos al evento onclick del botón
    boton.onclick = function() {
        let valor = texto.value.toLowerCase();
        if (array.indexOf(valor) !== -1) {
            listaObjetos(valor, listaArray);
        }
    }
}

function listaObjetos(valor, listaArray){
    let lista=document.createElement("ul");

    //<div><ul></ul></div>
    listaArray.appendChild(lista);

    let producto=document.createElement("li");

    let texto1=document.createTextNode(valor);
    //<li>texto1</li>
    producto.appendChild(texto1);  

    //<div><ul><li>texto1</li></ul></div>
    lista.appendChild(producto);
}

