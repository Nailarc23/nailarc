$(document).ready(function(){
    $(".portada").mouseenter(function(){
        $(".titulo").css("color", "black");
        $(".titulo").css("font-size", "50px");
        $(".portada").css("background-color", "white");
    });
});

$(document).ready(function(){
    $(".portada").mouseout(function(){
        $(".titulo").css("color", "#A49144");
        $(".titulo").css("font-size", "30px");
        $(".portada").css("background-color", "#1B1B1B");
    });
});
