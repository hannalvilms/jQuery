/*$(function() {
    var redBox = $(".red-box");
    console.log(redBox.css("width"));
    console.log(redBox.width());
});*/

/*$(function() {
    var redBox = $(".red-box");
    redBox.css("background-color", "#AA7700");
    $("p").css("font-size", "18px");
});*/

//Ülesanne 1:
/*
$(function() {
    var box = $(".red-box, .blue-box, .green-box");
    box.css("height", "50px");
});
*/

/*$(function() {
    var properties = $("p").css(["font-size","line-height","color"]);
    console.log(properties);
    console.log(properties["font-size"]);
});*/

/*$(function() {
    var redBox = $(".red-box");
    redBox.css("user-select", "none");
});*/

/*$(function() {
    $("a").addClass("fancy-link");
});*/

/*$(function() {
    $("p:first").addClass("large emphasize");
});*/

/*$(function(){
    $("li li").addClass(function(index){
        $(this).addClass("item-" + index);
    });
});*/

/*$(function() {
    $("div").addClass(function(index, currentClass) {
        if(currentClass === "dummy"){
            $(".dummy").addClass("red-box");
        };
    });
});*/

/*$(function() {
    $(".red-box").removeClass("red-box");
});*/

/*$(function() {
    $(".red-box").removeClass("red-box").addClass("blue-box");
});*/

//Ülesanne 2:
/*
$(function() {
    $("div").addClass(function(index, currentClass) {
        if(currentClass === "dummy"){
            $(".dummy").removeClass("dummy").addClass("green-box")
        };
        if(currentClass === "red-box"){
            $(".red-box").removeClass("red-box").addClass("blue-box");
        }
    });
});
*/

/*$(function() {
    var gallery = $(".gallery");

    var images = [
        "img/laptop-mobile_small.jpg",
        "img/laptop-on-table_small.jpg",
        "img/people-office-group-team_small.jpg"
    ];

    gallery.data("availableImages", images);
    console.log(gallery.data("availableImages"));
    gallery.data("name", "Mingi galerii");
    console.log(gallery.data());

});*/

/*$(function() {
    var firstPar = $("p:first");
    console.log(firstPar.data("mydata"));
});*/

/*$(function() {
    var firstPar = $("p:first");
    console.log(firstPar.text());
    console.log(firstPar.html());
})*/

//Ülesanne 3:
/*
$(function() {
    var firstPar = $("p:first");
    //firstPar.html("<strong>Tere</strong> Maailm!");
    firstPar.html("<strong>Tere</strong> Maailm!");
});
*/

//Ülesanne 4:
/*

$(function() {
    $("p").append("See on just lisatud");
});*/

$(function() {
    var firstPar = $("p:first")
    $(firstPar).append(" See on just lisatud");
});










