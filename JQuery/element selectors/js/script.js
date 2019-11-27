/*$(function(){
    $("p, h2, input").css("background-color", "rgba(180, 180, 30, 0.8)");
    $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");
    $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
    $("input[type-text]").css("background-color", "rgba(180, 180, 30, 0.8)");

});*/

/*$(function(){
    $("li:first").css("background-color", "rgba(180, 180, 30, 0.8)");
    $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
    $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)");
});*/

/*$(function(){
    $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
});*/

/*$(function(){
    $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
});*/

/*$(function () {
    $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)");
});*/

/*$(function () {
    $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)");
});*/

/*$(function(){
    $("#list").siblings("div").css("background-color", "rgba(180, 180, 30, 0.8)");
});*/

/*$(function(){
    $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");
    $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");
});*/

/*$(function(){
    $("li").filter(function(index) {
        return index%3===1;
    }).css("background-color", "rgba(180, 180, 30, 0.8)");
});*/

/*$(function(){
    $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
    $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");
});*/

/*$(function(){
    $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
});*/

/*$(function(){
    $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");
});*/


/*
//ülesanne1:
$(function(){
    $("#list").find(".li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
});
*/

//ülesanne2:
/*$(function(){
    $("li").filter(function(index) {
        return index%3===2;
    }).css("background-color", "rgba(180, 180, 30, 0.8)");
});
*/

//ülesanne3:
$(function(){
    $("#list").find(".li").find("li").not(function(index) {
        return index%2===1;
    }).css("background-color", "rgba(180, 180, 30, 0.8)");
    $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
});
