var btnCancelCheck = document.getElementById('btnCancelarCheck');


function checkFormCarrito(){
 /*Funcion que hara checout de los elementos de la compra*/
 alert("Producto añadido al carrito");
 onValidarFormularioCarrito();
}

window.onclick = function(event) {
    if ( event.target == modalLogin ) {
        cancelFormCarrito();
    }
}

function cancelFormCarrito() {
    modalCarrito.style.display = "none";

}
btnCancelCheck.addEventListener('click',cancelFormCarrito,false);

function onValidarFormularioCarrito() {
    modalCarrito.style.display = "none";
}