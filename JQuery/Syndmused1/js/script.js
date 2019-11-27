/*$(function() {
    $("#btn-click").click(function() {
        alert("Vajutasid nupule.");
        console.log(event);
    });
});*/

//Ülesanne 1:

/*
$(function() {
    $(".red-box").click(function() {
        $(".red-box").fadeTo(5000, 0.2);
      });
    $(".green-box").click(function() {
        $(".green-box").fadeTo(5000, 0.5);
      });
     $(".blue-box").click(function() {
        $(".blue-box").fadeTo(5000, 0.8);
      });
});
*/

/*$(function() {
    $("#btn-hover").hover(function() {
        alert("Hõljusid nupu peale.");
        console.log(event);
    });
});*/

//Ülesanne 2:

/*
$(function() {
    $(".green-box").hover(function() {
        $(this).text("Hiir on peal");
      });
});
*/

/*$(function() {
    var blueBox = $(".blue-box");
    blueBox.mouseenter(function() {
        $(this).fadeTo(500, 0.7);
    });

    blueBox.mouseleave(function() {
        $(this).fadeTo(500, 1);
    })
});*/

//Ülesanne 3:

/*
$(function() {
    var blueBox = $(".blue-box");
    blueBox.hover(function() {
        $(this).stop().fadeTo(500, 0.7);
    }, function() {
        $(this).stop().fadeTo(500, 1);
    });
});
*/

/*$(function() {
    $("html").on("click keydown hover", function() {
        console.log("Toimus hiire klõps või klahvi vajutus.");
    });
});*/


//Ülesanne 4:

/*
$(function() {
    var images = [
        "img/laptop-mobile_small.jpg",
        "img/laptop-on-table_small.jpg",
        "img/people-office-group-team_small.jpg"
    ];

    var i = 0;
    $(".gallery").find("img").on("click", function(){
        i=(i + 1) % images.length;
        //pilt fadeoutib
        $(this).fadeOut(function(){
            //järgmise pildi kätte saamiseks
            $(this).attr("src", images[i]).fadeIn();
        });
    });
});
*/

/*$(function() {
    function logEvent() {
        console.log("Toimus hiire klõps või klahvi vajutus.");
    };

    $("html").on("click keydown", logEvent);
});*/

//Ülesanne 5:

/*
$(function() {
    var images = [
        "img/laptop-mobile_small.jpg",
        "img/laptop-on-table_small.jpg",
        "img/people-office-group-team_small.jpg"
    ];

    var i = 0;
    var galleryImage = $(".gallery").find("img");
    galleryImage.on("click", switchToNextImage);

    function switchToNextImage() {
        i=(i + 1) % images.length;

        galleryImage.fadeOut(function() {
            galleryImage.attr("src", images[i]).fadeIn();
        });
    };
});
*/

/*$(function() {
    $("p").click(function() {
        $(this).slideUp();
    });
    $("#content").append("<p>Dünaamiliselt lisatud paragrahv</p>");
});*/

/*$(function() {
    $("#content").on("click", "p", function() {
        $(this).slideUp();
    });
    $("#content").append("<p>Dünaamiliselt lisatud paragrahv</p>");
});*/

//Ülesanne 6:

/*
$(document).ready(function() {
    $("#list").mouseenter(function() {
        $(".li:nth-child(1)").css("color", "#666");
        $(".li:nth-child(2)").css("color", "#666");
    });
    $("#list").mouseleave(function() {
        $(".li:nth-child(1)").css("color", "black");
        $(".li:nth-child(2)").css("color", "black");
    });
});
*/

/*$(function() {
    $("#btn-click").click({
        user:"Hanna"
    }, function(event){
        greetUser(event.data);
    });

    function greetUser(userData){
        console.log(userData);
        username = userData.user || "Anonüüm";
        alert("Tere tulemast " + username + "!");
    }
});*/

//Ülesanne 7:

/*
$(function () {
    $("#btn-click").click({
        user: "Hanna",
        domain: "KHK"
    }, function(event) {
        greetMessage(event.data);
    });
    function greetMessage(userData) {
        userName = "Tere tulemast, ";
        if (userData.user) {
            userName = userName + userData.user;
        } else {
            userName = "kasutaja";
        }
        if (userData.domain) {
            userDomain = " " + userData.domain + "-st!";
        } else {
            userDomain = " example.com-st!";
        }
        alert(userName + userDomain);
    }
 });
*/

//Koondülesanne
/*
$(function () {
    var galleryItems = $(".gallery").find("img");
    galleryItems.css("width", "33%").css("opacity", "0.7");

    galleryItems.mouseenter(function() {
        $(this).stop().fadeTo(500, 1);
    });

    galleryItems.mouseleave(function() {
        $(this).stop().fadeTo(500, 0.7);
    });

    galleryItems.click(function(){
        var source = $(this).attr("src");
        var image = $("<img>").attr("src", source).css("width", "100%");
        $(".lightbox").empty().append(image).fadeIn(2000);
    });

    $(".lightbox").click(function(){
        $(this).stop().fadeOut();
    });
});
*/

/*$(function() {
    $("html").keydown(function(event) {
        console.log(event.which);
    });
});*/

/*$(function() {
    var arrow_right = 39;
    $("html").keydown(function(event){
        if(event.which == arrow_right){
            var blueBox = $(".blue-box");
            blueBox.stop().animate({
                "margin-left": "+=10px"
            }, 500);
            console.log(event.which);
            console.log(blueBox.css("margin-left"));
        }
    });
});/*
