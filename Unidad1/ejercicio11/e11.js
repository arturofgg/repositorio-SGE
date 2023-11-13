document.addEventListener("DOMContentLoaded", carga);

function carga(){
    let b1 = document.getElementById("boton1");
    b1.addEventListener("click", colorFondo);

    function pulsar(){
        alert("Hola, has pulsado");
    }

    function colorFondo(){
        if (document.body.style.backgroundColor=="blue"){
            document.body.style.backgroundColor="white";
        }else document.body.style.backgroundColor="blue";
         
    }
}