// JS de los botones para abrir página
function abrirPagina(paginaNombre,elemento,color){
    var i, contenido, fondo;
    contenido= document.getElementsByClassName("fondo_container_sobremi");
    for(i=0; i<contenido.length; i++){
        contenido[i].style.display="none";
    }
    fondo= document.getElementsByClassName("fondo_container_navegacion");
    for(i=0; i<fondo.length; i++){
        fondo[i].style.backgroundColor="";
    }
    document.getElementById(paginaNombre).style.display="block";
    elemento.style.backgroundColor= color;
}
function abrirPagina(paginaNombre,elemento,color){
    var i, contenido, fondo;
    contenido= document.getElementsByClassName("fondo_container_contacto");
    for(i=0; i<contenido.length; i++){
        contenido[i].style.display="none";
    }
    fondo= document.getElementsByClassName("fondo_container_navegacion");
    for(i=0; i<fondo.length; i++){
        fondo[i].style.backgroundColor="";
    }
    document.getElementById(paginaNombre).style.display="block";
    elemento.style.backgroundColor= color;
}

// JS de la flecha para cerrar página
function cerrarPagina(paginaNombre,elemento,color){
    var i, contenido, fondo;
    contenido= document.getElementsByClassName("fondo_container_sobremi");
    for(i=0; i<contenido.length; i++){
        contenido[i].style.display="none";
    }
}