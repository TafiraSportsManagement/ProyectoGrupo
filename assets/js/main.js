
var seccionLogin = document.getElementById("seccionLogin");
var seccionRegistro = document.getElementById("seccionRegistro");
var seccionContenedores = document.getElementById("seccionContenedores");
var seccionSeleccion = document.getElementById("seccionSeleccion");
var leyendaSeleccion = document.getElementById("leyendaSeleccion");

var formSeleccion = document.getElementById("formSeleccion");
var divRopa = document.getElementById("ropa"),
    divCalzado = document.getElementById("calzado"),
    divAccesorios = document.getElementById("accesorios");

var registrarUsuario = document.getElementById('registrarUsuario');

var log = document.getElementById('log');
var login = document.getElementById('login');
var modalLogin = document.getElementById('modalLogin');
var cancelarLogin = document.getElementById('btnCancelarLogin');
var registro = document.getElementById('registro');
var salir = document.getElementById('salir');
var logout = document.getElementById('logout');

var formLogin = document.getElementById('formLoginModal');
var btnLogin = document.getElementById('btnLogin');

//var botonLoginRegistro = document.getElementById('submitFormLogin');
var carrito = document.getElementById('carrito');
var modalCarrito = document.getElementById('modalCarrito');

var opcionMenu, ulContenedor;

var formDeportes = document.getElementById('formSeleccionDeportes');

var elementoSelect = document.getElementById("deporte_articulo");
var enviarSeleccionDeportes = document.getElementById("enviarSeleccionDeportes");
var contenedorItem = document.getElementById('contenedorItem');


function mostrarFormularioLogin(event) {
    console.log("mostrarFormularioLogin");
    modalLogin.style.display = "block";
    logout.style.display = "none";
}

log.addEventListener('click', mostrarFormularioLogin, false);

function mostrarCarritoModal(){
    modalCarrito.style.display = "block";
}

carrito.addEventListener('click', mostrarCarritoModal, false);


function iraFormulario(elemento) {

    ulContenedor = elemento.parentNode.parentNode;
    opcionMenu = elemento.innerHTML.toLowerCase();

    /* Guardamos la 'cookie'*/
    document.cookie = "navegacion="+ulContenedor.id;
    document.cookie = "opcion="+opcionMenu;

    /**/

    seccionContenedores.style.display = "none";

    if ( ulContenedor.id == "deportes" ) {

        formDeportes.style.display = "block";
        formSeleccion.style.display = "none";

    } else {

        formDeportes.style.display = "none";
        formSeleccion.style.display = "block";

        if (opcionMenu == "ropa") {
            divRopa.style.display = "block";
            divCalzado.style.display = "none";
            divAccesorios.style.display = "none";
        } else {
            if (opcionMenu == "calzado") {
                divRopa.style.display = "none";
                divCalzado.style.display = "block";
                divAccesorios.style.display = "none";
            } else {
                if (opcionMenu == "accesorios") {
                    divRopa.style.display = "none";
                    divCalzado.style.display = "none";
                    divAccesorios.style.display = "block";
                }
            }
        }
    }

    seccionSeleccion.style.display = "block";

}

function selectCheckValidity() {
    return elementoSelect.selectedIndex > 0;
}

function validaFormularioDeportes(event) {


    if ( ! selectCheckValidity() ) {
        // event.preventDefault();

        elementoSelect.setCustomValidity('Este campo es obligatorio');
    } else {
        elementoSelect.setCustomValidity('');

        formDeportes.submit;
    }

}

enviarSeleccionDeportes.addEventListener('click', validaFormularioDeportes, false);


function validaFormulario(event) {

    var error = false;

    var tipo = document.getElementById("tipo_"+opcionMenu),
        modelo = document.getElementById("modelo_"+opcionMenu),
        marca = document.getElementById("marca_"+opcionMenu);

    if ( (tipo.value.trim()).length == 0 ) {
        error = true;
        tipo.setAttribute("class", "campoErroneo");
        //tipo.selectedIndex=1;
    } else
        tipo.removeAttribute("class");

    if ( (modelo.value.trim()).length == 0 ) {
        error = true;
        modelo.setAttribute("class", "campoErroneo");
    } else
        modelo.removeAttribute("class");

    if ( (marca.value.trim()).length == 0 ) {
        error = true;
        marca.setAttribute("class", "campoErroneo");
    } else
        marca.removeAttribute("class");


    if ( opcionMenu == "ropa" ) {
        var talla = document.getElementById("talla_"+opcionMenu);
        if ( (talla.value.trim()).length == 0 ) {
            error = true;
            talla.setAttribute("class", "campoErroneo");
        } else
            talla.removeAttribute("class");
    } else {
        if ( opcionMenu == "calzado" ) {
            var numero = document.getElementById("numero_"+opcionMenu);
            if ( (numero.value.trim()).length == 0 ) {
                error = true;
                numero.setAttribute("class", "campoErroneo");
            } else
                numero.removeAttribute("class");
        } else {
            if ( opcionMenu == "accesorios" ) {

            }
        }
    }


    if ( error ) {
        event.preventDefault();

        alert("Algun/os campo/s no están cumplimentado/s");
    }

}

formSeleccion.addEventListener('submit', validaFormulario, false);


function restablecerContenido() {
    seccionLogin.style.display = "none";
    seccionContenedores.style.display = "block";
    seccionSeleccion.style.display = "none";
    logout.style.display = "block";
}