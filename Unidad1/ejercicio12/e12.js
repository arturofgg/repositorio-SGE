document.addEventListener("DOMContentLoaded", function() {
//4.1
    const nombre = new Array(3);
    for(let i=0; i<=2; i++){
        nombre[i]=prompt("Escribe un nombre");
        document.write("El nombre: "+nombre[i]+ " tiene de indice "+nombre.indexOf(nombre[i])+"<br>");
    }

    document.write("Hay un total de "+nombre.length+" socios<br>");
    sortnombre=nombre.sort();
    document.write("Socios ordenados alfabeticamente: "+sortnombre+"<br>");
    document.write("Orden inverso:<br>");
    for(let i=2; i>=0; i--){
        document.write(nombre[i]+ " ");
    }
    document.write(nombre[0], nombre[1], nombre[2]);
    
});