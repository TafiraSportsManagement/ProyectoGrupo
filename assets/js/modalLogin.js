/* var modal = document.getElementById('modalLogin'); */
var btnCancelLogin = document.getElementById("btnCancelarLogin");
var userLogin = document.forms["formLoginModal"]["usuarioLogin"];
var userPass = document.forms["formLoginModal"]["contraseñaLogin"];




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