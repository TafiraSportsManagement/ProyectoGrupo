/* var modal = document.getElementById('modalLogin'); */

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if ( event.target == modalLogin ) {
        cancelarFormularioLogin(event);
    }
}


function cancelarFormularioLogin(event) {

    /* console.log("cancelarFormularioLogin"); */

    modalLogin.style.display = "none";

}

cancelarLogin.addEventListener('click', cancelarFormularioLogin, false);