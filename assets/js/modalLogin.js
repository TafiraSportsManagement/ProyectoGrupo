/* var modal = document.getElementById('modalLogin'); */
var btnCancelLogin = document.getElementById("btnCancelarLogin");
var userLogin = document.forms["formLoginModal"]["usuarioLogin"];
var userPass = document.forms["formLoginModal"]["contraseñaLogin"];

function checkFormLogin(){
    /*function to check userid & password*/


    /*the following code checkes whether the entered userid and password are matching*/
    if(userLogin.value == "123" && userPass.value == "123")
    {
        /*opens the target page while Id & password matches*/
        onValidarFormularioLogin();
    }
    else
    {
        alert("Error Password or Username")/*displays error message*/
    }
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

btnLogin.addEventListener('click', onValidarFormularioLogin, false);



function cancelFormularioLogin() {
    /* console.log("cancelarFormularioLogin"); */
    modalLogin.style.display = "none";
    logout.style.display = "none";

}
btnCancelLogin.addEventListener('click', cancelFormularioLogin, false);

