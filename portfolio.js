function abrirPagina(paginaNombre,elemento,color){
    var i, contenido, fondo;
    contenido= document.getElementsByClassName("contenido");
    for(i=0; i<contenido.length; i++){
        contenido[i].style.display="none";
    }
    fondo= document.getElementsByClassName("fondo");
    for(i=0; i<fondo.length; i++){
        fondo[i].style.backgroundColor="";
    }
    document.getElementById(paginaNombre).style.display="block";
    elemento.style.backgroundColor= color;
}
function cerrarPagina(paginaNombre,elemento,color){
    var i, contenido, fondo;
    contenido= document.getElementsByClassName("contenido");
    for(i=0; i<contenido.length; i++){
        contenido[i].style.display="none";
    }
}
