$("h1").css("color", "red");

$(document).keypress(function(){
    $("h1").css("color", "purple");
});

$(document).on("click", function(){
    $("h1").css("color", "orange");
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});
