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

let screenWidth= screen.availWidth;
console.log(screenWidth);

 if (screenWidth<500){


    function botones(){

        let boton1 = document.getElementById("boton_sobremi");
        let boton2 = document.getElementById("boton_proyecto");
        let boton3 = document.getElementById("boton_contacto");
             document.getElementById("boton_proyecto").style.display = "none";
             document.getElementById("boton_contacto").style.display = "none";
        
    }
    
    function botones1(){

        let boton1 = document.getElementById("boton_sobremi");
        let boton2 = document.getElementById("boton_proyecto");
        let boton3 = document.getElementById("boton_contacto");
             document.getElementById("boton_sobremi").style.display = "none";
             document.getElementById("boton_contacto").style.display = "none";
        
    }
    
    function botones2(){

        let boton1 = document.getElementById("boton_sobremi");
        let boton2 = document.getElementById("boton_proyecto");
        let boton3 = document.getElementById("boton_contacto");
             document.getElementById("boton_sobremi").style.display = "none";
             document.getElementById("boton_proyecto").style.display = "none";
        
    }
    function boton1(){

        let boton1 = document.getElementById("boton_sobremi");
        let boton2 = document.getElementById("boton_proyecto");
        let boton3 = document.getElementById("boton_contacto");
             document.getElementById("boton_proyecto").style.display = "block";
             document.getElementById("boton_contacto").style.display = "block";
        
    }
    
    function boton2(){

        let boton1 = document.getElementById("boton_sobremi");
        let boton2 = document.getElementById("boton_proyecto");
        let boton3 = document.getElementById("boton_contacto");
             document.getElementById("boton_sobremi").style.display = "block";
             document.getElementById("boton_contacto").style.display = "block";
        
    }
    
    function boton3(){

        let boton1 = document.getElementById("boton_sobremi");
        let boton2 = document.getElementById("boton_proyecto");
        let boton3 = document.getElementById("boton_contacto");
             document.getElementById("boton_sobremi").style.display = "block";
             document.getElementById("boton_proyecto").style.display = "block";
        
    }
 }