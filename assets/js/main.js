
var seccionLogin = document.getElementById("seccionLogin");
var seccionRegistro = document.getElementById("seccionRegistro");
var seccionContenedores = document.getElementById("seccionContenedores");

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


function mostrarFormularioLogin(event) {
    console.log("mostrarFormularioLogin");

    modalLogin.style.display = "block";


    /* */
    //seccionLogin.style.display = "block";

    /*
    var elementoFuente = event.target || event.srcElement;
    if ( elementoFuente.id == registro.id )
        registrarUsuario.style.display = "block";
    else
        registrarUsuario.style.display = "none";
    */

//    seccionRegistro.style.display = "none";
    seccionContenedores.style.display = "none";
    seccionSeleccion.style.display = "none";
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

function validarFormularioLoginRegistro(event) {

    <!-- console.log("registrarUsuario.style.display: " + registrarUsuario.style.display); -->

    if ( registrarUsuario.style.display == "block" ) {

        var contraseña = document.getElementById('contraseña');
        var repContraseña = document.getElementById('repContraseña');
        if ( contraseña.value != repContraseña.value ) {
            window.alert('ERROR');
            return;
        }
    }

    logOut(event);
    restablecerContenido();
}

//botonLoginRegistro.addEventListener('click', validarFormularioLoginRegistro, false);


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

function restablecerContenido() {
    seccionLogin.style.display = "none";
    seccionContenedores.style.display = "block";
    seccionSeleccion.style.display = "none";
}