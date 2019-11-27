/*$(function () {
    $("ul ul:first").append("<li>Lisaelement</li>");
});*/

/*$(function () {
    $("<li>Lisaelement</li>").appendTo("ul ul:first");
});*/

/*$(function () {
    $("ul ul:first").prepend("<li>Olen esimene alaelement</li>");
});*/

/*$(function () {
    $("<li>Olen esimene alaelement</li>").prependTo("ul ul:first");
});*/

//Ülesanne 1:
/*
$(function () {
    $("#content h1").prepend("<p>Hanna-Liisa Vilms</p>");
});
*/

/*$(function () {
    $(".red-box").after("<div class='red-box'>Punane 1</div>");
});*/

/*$(function () {
    $(".blue-box").before("<div class='blue-box'>Sinine 0</div>");
});*/

/*$(function() {
    $(function() {
        $(".blue-box").before(function () {
            return "<div class='blue-box'>Sinine 0</div>";
         });
    });
});*/

//Ülesanne 2:
/*
$(function() {
	$('.green-box').remove().insertBefore($('.red-box'));
	$('.blue-box').remove().insertBefore($('.red-box'));
});
*/


/*$(function () {
    $(".red-box, .blue-box").replaceWith("<div class='green-box'>Roheline</div>");
});*/

/*$(function () {
    $("<div class='green-box'>Roheline</div>").replaceAll(".red-box, .blue-box");
});*/


//Ülesanne 3:
/*
$(function () {
    $(".li").find("li:first").replaceWith("<li'>Asendatus alaelement 1</li>");
});
*/

/*$(function() {
    $("li").remove();
})*/

//Ülesanne 4:
/*
$(function(){
    $("input, textarea").not("textarea, :text").remove();
});
*/

/*$(function() {
    var detachedListItem = $("li").detach();
    $("#content").append(detachedListItem);
});*/

/*$(function() {
    $("p:first").empty();
});*/

//Ülesanne 5:
/*
$(function() {
    $(".red-box, .green-box, .blue-box").empty();
});
*/

/*$(function() {
    var specialLink = $("#special-link");
    console.log(specialLink.attr("href"));
});*/

/*$(function() {
    var checkbox = $("input:checkbox");
    console.log(checkbox.prop("checked"));
    console.log(checkbox.attr("checked"));
});*/

/*$(function() {
    var textinput = $("input:text");
    console.log(textinput.val());

    var rangeInput = $("input[type='range']");
    console.log(rangeInput.val());
});*/

//Ülesanne 6:
/*
$(function() {
    var galeryImage = $(".gallery").find("img").first();

    var images = [
        "img/laptop-mobile_small.jpg",
        "img/laptop-on-table_small.jpg",
        "img/people-office-group-team_small.jpg"
    ];

    var i = 0;
    setInterval(function(){
        i=(i + 1) % images.length;
        galeryImage.fadeOut(function() {
            $(this).attr("src", images[i]);
            $(this).fadeIn();
        });
        console.log(galeryImage.attr("src"));
    }, 2000);
});
*/