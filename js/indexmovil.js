// JS del boton sobremi
let screenWidth= screen.availWidth;
console.log(screenWidth);

 if (screenWidth<500){


    function boton(){

        let boton1 = document.getElementById("boton_sobremi");
        let boton2 = document.getElementById("boton_proyecto");
        let boton3 = document.getElementById("boton_contacto");
             document.getElementById("boton_proyecto").style.display = "none";
             document.getElementById("boton_contacto").style.display = "none";
        
    }
    function boton1(){

      let boton1 = document.getElementById("boton_sobremi");
      let boton2 = document.getElementById("boton_proyecto");
      let boton3 = document.getElementById("boton_contacto");
           document.getElementById("boton_sobremi").style.display = "none";
           document.getElementById("boton_contacto").style.display = "none";
      
  }
  function boton2(){

   let boton1 = document.getElementById("boton_sobremi");
   let boton2 = document.getElementById("boton_proyecto");
   let boton3 = document.getElementById("boton_contacto");
        document.getElementById("boton_sobremi").style.display = "none";
        document.getElementById("boton_proyecto").style.display = "none";
   
}
 }