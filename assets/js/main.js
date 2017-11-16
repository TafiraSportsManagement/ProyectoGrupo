
var seccionLogin = document.getElementById("seccionLogin");
var seccionRegistro = document.getElementById("seccionRegistro");
var seccionContenedores = document.getElementById("seccionContenedores");
var seccionSeleccion = document.getElementById("seccionSeleccion");
var leyendaSeleccion = document.getElementById("leyendaSeleccion");

var formSeleccion = document.getElementById("formSeleccion");
//var submitFormSeleccion = document.getElementById("submitFormSeleccion");
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

var opcionMenu, ulContenedor;


function mostrarFormularioLogin(event) {
    console.log("mostrarFormularioLogin");
    modalLogin.style.display = "block";
    logout.style.display = "none";
}

log.addEventListener('click', mostrarFormularioLogin, false);

/*
function procesarLogOut(event) {

    console.log("procesarLogOut");

    if ( event.submit ) {
        login.style.display = "none";
        logout.style.display = "block";
    } else {
        if ( event.onclick ) {
            logout.style.display = "none";
            login.style.display = "block";
        }
    }

}

formLogin.addEventListener('submit', procesarLogOut, false);
//btnLogin.addEventListener('click', procesarLogOut, false);
salir.addEventListener('click', procesarLogOut, false);
*/

/*
function logOut(event) {

    var elementoFuente = event.target || event.srcElement;
    if ( elementoFuente.id == salir.id ) {
        document.getElementById('usuario').value = "";
        document.getElementById('contraseña').value = "";
        document.getElementById('repContraseña').value = "";

        logout.style.display = "none";
        login.style.display = "block";
    } else {
        logout.style.display = "block";
        login.style.display = "none";
    }

}

salir.addEventListener('click', logOut, false);
*/

var formDeportes = document.getElementById("formSeleccionDeportes");

function iraFormulario(elemento) {
    console.log("iraFormulario");

    ulContenedor = elemento.parentNode.parentNode;
    opcionMenu = elemento.innerHTML.toLowerCase();

    console.log("elemento.value -> opcionMenu: " + opcionMenu + ", elemento.padre.padre -> ulContenedor.id: " + ulContenedor.id);

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

    /**/

}


var elementoSelect = document.getElementById("deporte_articulo");
var enviarSeleccionDeportes = document.getElementById("enviarSeleccionDeportes");

function selectCheckValidity() {
    return elementoSelect.selectedIndex > 0;
}

function validaFormularioDeportes(event) {
//    event.preventDefault();

    console.log("validaFormularioDeportes");

    console.log("validaFormularioDeportes, select.value: " + elementoSelect.selectedIndex +
    ",  checkValidity: " + elementoSelect.checkValidity() +
    ",  validity.valueMissing: " + elementoSelect.validity.valueMissing);

    if ( ! selectCheckValidity() ) {
        elementoSelect.setCustomValidity('Este campo es obligatorio');
    } else {
        console.log("formDeportes.submit");
//        formDeportes.action = "http://localhost:63342/ProyectoGrupo/pruebaMain.html";
        formDeportes.submit;
        return true;
    }

}

enviarSeleccionDeportes.addEventListener('click', validaFormularioDeportes, true);


function validaFormulario() {
    console.log("validaFormulario");

    /**/
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


    if ( error )
        alert("Algun/os campo/s no están cumplimentado/s");
}

formSeleccion.addEventListener('submit', validaFormulario, false);
//submitFormSeleccion.addEventListener('submit', procesaFormulario, false);



function restablecerContenido() {
    seccionLogin.style.display = "none";
    seccionContenedores.style.display = "block";
    seccionSeleccion.style.display = "none";
    logout.style.display = "block";
}