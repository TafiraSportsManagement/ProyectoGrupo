/* var modal = document.getElementById('modalLogin'); */

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if ( event.target == modalLogin ) {
        cancelarFormularioLogin(event);
        logout.style.display = "none";

    }
    logout.style.display = "block";
}

function validarFormularioLogin(event) {
    log.style.display ="none";
    logout.style.display = "block";
    modalLogin.style.display = "none";
}

btnLogin.addEventListener('click', validarFormularioLogin, false);


function cancelarFormularioLogin(event) {
    /* console.log("cancelarFormularioLogin"); */
    modalLogin.style.display = "none";
    logout.style.display = "none";

}
cancelarLogin.addEventListener('click', cancelarFormularioLogin, false);