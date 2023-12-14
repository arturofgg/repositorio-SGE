document.addEventListener("DOMContentLoaded", function() {

    // Añadir h1
    let h1Format = document.createElement("h1");
    h1Format.textContent = "Cuento de Denchen";
    var body = document.body;
    var primerHijo = body.firstChild;
    body.insertBefore(h1Format, primerHijo);

    // Estilo css
    var parrafos = document.querySelectorAll("p");
    parrafos.forEach(function(parrafo) {
        parrafo.style.fontFamily = "Comic Sans MS, cursive";
        parrafo.style.fontSize = "20px";
        parrafo.style.lineHeight = "1.6";
    });

    var enlaces = document.querySelectorAll("a");
    enlaces.forEach(function(enlace) {
        enlace.style.textDecoration = "none";
        enlace.style.color = "#0078d4";
        enlace.style.fontWeight = "bold";
        enlace.addEventListener("click", function() {
            muestraOculta(enlace.dataset.parrafo, enlace.id);
        });
    });

    // Ocultar/ mostrar imágenes
    var divImagenes = document.querySelectorAll("div[id^='id_div_imagen']");
    divImagenes.forEach(function(divImagen) {
        divImagen.addEventListener("mouseover", function() {
            muestraImagen(divImagen.id, divImagen.dataset.imagen);
        });
    });

    document.body.style.backgroundColor = "#f0f0f0";

    // Función para mostrar/ocultar párrafos
    function muestraOculta(parrafoId, enlaceId) {
        let parrafo = document.getElementById(parrafoId);
        let enlace = document.getElementById(enlaceId);

        if (parrafo.style.display === "block" || parrafo.style.display === "") {
            parrafo.style.display = "none";
            enlace.textContent = "Mostrar contenido del párrafo";
        } else {
            parrafo.style.display = "block";
            enlace.textContent = "Ocultar contenido del párrafo";
        }
    }

    // Función para mostrar imágenes
    function muestraImagen(divId, imagenSrc) {
        let divImagen = document.getElementById(divId);
        if (!divImagen.querySelector("img")) {
            imagen = document.createElement("img");
            imagen.src = imagenSrc;
            divImagen.appendChild(imagen);
        }
    }
});
