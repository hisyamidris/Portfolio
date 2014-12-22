$(document).ready(function() {
    $("#cardboard").click(function(){
        $("#body").removeClass();
        $("#body").addClass("cardboard");
    });
    $("#green_dust_scratch").click(function() {
        $("#body").removeClass();
        $("#body").addClass("green_dust_scratch");
    });
    $("#grid").click(function(){
        $("#body").removeClass();
        $("#body").addClass("grid");
    });
    $("#retina_wood").click(function(){
        $("#body").removeClass();
        $("#body").addClass("retina_wood");
    });
    $("#solid").click(function(){
        $("#body").removeClass();
        $("#body").addClass("solid");
    });
});
