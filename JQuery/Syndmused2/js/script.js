/*$(function() {
    var inputFields = $("input:text, input:password, textarea");
    inputFields.focus(function() {
        $(this).css("box-shadow", "0 0 4px #666")
    });

    inputFields.blur(function() {
        $(this).css("box-shadow", "none");
    });
});*/

/*$(function() {
    $("#checkbox").change(function() {
        var isChecked = $(this).prop("checked");
        if(isChecked){
            $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #00FF00");
        }
        else {
            $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #FF0000");
        }
    });
});*/

/*$(function() {
    $("#btn-click").click({
        user:"Hanna"
    }, function(event){
        greetUser(event.data);
    });

    function greetUser(userdata){
        console.log(userdata);
        username = userdata.user || "Anonüüm";
        alert("Tere tulemast " + username + "!");
    }
});

$(function() {
    $("#btn-click").click(function() {
        alert("Vajutasid nupule.");
        console.log(event);
    });
});*/

/*$(function(){
    $("#form").submit(function(event) {
        var textArea = $("#message");
        if(textArea.val().trim()==""){
            textArea.css("box-shadow","0 0 4px #FF0000");
            event.preventDefault();
        } else {
            //serverisse edastamine
        }
    })
})*/




//Ülesanne 1:
/*
$(function() {
    var name = $("#name");

    name.focus(function() {
        $(this).css("box-shadow", "0 0 4px #666");
    });

    name.blur(function() {
        $(this).css("box-shadow", "none");
    });


    $("#name").blur(function() {
        var text=$(this).val();
        if (text.length < 3) {
            $(this).css("box-shadow", "0 0 4px #FF0000");
        }
        else {
            $(this).css("box-shadow", "0 0 4px #00FF00");
        }
    });
});
*/



//Ülesanne 2:

/*
$(function () {
	$("#submit").click(function(event) {
	   		greetMessage(event);
	   });
	   function greetMessage(userData) {
	   		selection = document.getElementById("selection");
			chosenValueText = selection.options[selection.selectedIndex].text;
			alert("Valisid: " + chosenValueText);
	   }
});
*/

//Ülesanne 3:

/*
$(function() {
    $("#form").submit(function(event) {
        var name = $("#name").val();
        var password = $("#password").val();
        var message = $("#message").val();
        var checked = $("#checked").is(":checked");

        validateNameField(name, event);
        validatePasswordField(password, event);
        validateMessageField(message, event);
        validateCheckboxField(checked, event)
    });
});

function validateNameField(name, event) {
    if(!isValidName(name)){
        $("#name-feedback").text("Palun sisesta vähemalt 2 tähemärki");
        event.preventDefault();
    } else {
        $("#name-feedback").text("");
    }
}

function isValidName(name) {
    return name.length >= 2;
}

function validatePasswordField(password, event) {
    if(!isValidPassword(password)){
        $("#password-feedback").text("Parool peab olema vähemalt 6 sümbolit pikk");
        event.preventDefault();
    } else {
        $("#password-feedback").text("");
    }
}

function isValidPassword(password){
    return password.length >= 6;
}

function validateMessageField(message, event){
    if(!isValidMessage(message)) {
        $("#message-feedback").text("Palun sisesta sõnum");
        event.preventDefault();
    } else {
        $("#message-feedback").text("");
    }
}

function isValidMessage(message){
    return message.trim() !="";
}

function validateCheckboxField(isChecked, event){
    if(!isChecked){
        $("#checkbox-feedback").text("Palun nõustuda");
        event.preventDefault();
    } else {
        $("#message-feedback").text("");
    }
}
*/



//Ülesanne 4:

/*
$(function() {
    var form = $("#form");
    enableFastFeedback(form);

    form.submit(function(event) {
        var name = $("#name").val();
        var password = $("#password").val();
        var message = $("#message").val();
        var checked = $("#checked").is(":checked");

        validateNameField(name, event);
        validatePasswordField(password, event);
        validateMessageField(message, event);
        validateCheckboxField(checked, event)
    });
});

function enableFastFeedback(formElement){
    var nameInput = formElement.find("#name");
    var passwordInput = formElement.find("#password");
    var messageInput = formElement.find("#message");
    var checkboxInput = formElement.find("#checkbox");

    nameInput.blur(function (event) {
        var name = $(this).val();
        validateNameField(name, event);

        if(!isValidName(name)){
            $(this).css(
                {
                    "box-shadow":"0 0 4px #811",
                    "border":"1px solid #600"
                }
            );
        } else {
            $(this).css(
                {
                    "box-shadow":"0 0 4px #181",
                    "border":"1px solid #060"
                }
            );
        }
    });

    passwordInput.blur(function (event) {
        var password = $(this).val();
        validatePasswordField(password, event);

        if(!isValidPassword(password)){
            $(this).css(
                {
                    "box-shadow":"0 0 4px #811",
                    "border":"1px solid #600"
                }
            );
        } else {
            $(this).css(
                {
                    "box-shadow":"0 0 4px #181",
                    "border":"1px solid #060"
                }
            );
        }
    });

    messageInput.blur(function (event) {
        var message = $(this).val();
        validateMessageField(message, event);

        if(!isValidMessage(message)){
            $(this).css(
                {
                    "box-shadow":"0 0 4px #811",
                    "border":"1px solid #600"
                }
            );
        } else {
            $(this).css(
                {
                    "box-shadow":"0 0 4px #181",
                    "border":"1px solid #060"
                }
            );
        }
    });

    checkboxInput.blur(function (event) {
        var isChecked = $(this).is(":checked");
        validateCheckboxField(isChecked, event);

        if(!isChecked){
            $(this).add("label[for='cb']").css(
                {
                    "box-shadow":"0 0 4px #811",
                    "border":"1px solid #600"
                }
            );
        } else {
            $(this).add("label[for='cb']").css(
                {
                    "box-shadow":"0 0 4px #181",
                    "border":"1px solid #060"
                }
            );
        }
    });
}
*/
