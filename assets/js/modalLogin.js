/* var modal = document.getElementById('modalLogin'); */
var btnCancelLogin = document.getElementById("btnCancelarLogin");
var userLogin = document.forms["formLoginModal"]["usuarioLogin"];
var userPass = document.forms["formLoginModal"]["contraseñaLogin"];

function checkFormLogin(){
    /*function to check userid & password*/


    // /*the following code checkes whether the entered userid and password are matching*/
    // if(userLogin.value == "123" && userPass.value == "123")
    // {
    //     /*opens the target page while Id & password matches*/
    //     onValidarFormularioLogin();
    // }
    // else
    // {
    //     alert("Error Password or Username")/*displays error message*/
    // }
}


// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
    if ( event.target == modalLogin ) {
        cancelFormularioLogin();
        logout.style.display = "none";
    }
}

function onValidarFormularioLogin(event) {
    log.style.display ="none";
    logout.style.display = "block";
    modalLogin.style.display = "none";
}

// btnLogin.addEventListener('click', onValidarFormularioLogin, false);



function cancelFormularioLogin() {
    /* console.log("cancelarFormularioLogin"); */
    modalLogin.style.display = "none";
    logout.style.display = "none";

}
btnCancelLogin.addEventListener('click', cancelFormularioLogin, false);

$("#formLoginModal").submit(function(event){

    // Prevent default posting of form - put here to work in case of errors
    event.preventDefault();

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "php/checkLogin.php",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        onValidarFormularioLogin();
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

});

