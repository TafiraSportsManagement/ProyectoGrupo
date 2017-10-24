
var seccionLogin = document.getElementById("seccionLogin");
var seccionRegistro = document.getElementById("seccionRegistro");
var seccionContenedores = document.getElementById("seccionContenedores");

var registrarUsuario = document.getElementById('registrarUsuario');

var log = document.getElementById('log');
var registro = document.getElementById('registro');
var salir = document.getElementById('salir');
var login = document.getElementById('login');
var logout = document.getElementById('logout');

var botonLoginRegistro = document.getElementById('submitFormLogin');


function mostrarFormularioLogin(event) {
    seccionLogin.style.display = "block";

    var elementoFuente = event.target || event.srcElement;
    if ( elementoFuente.id == registro.id )
        registrarUsuario.style.display = "block";
    else
        registrarUsuario.style.display = "none";

    seccionRegistro.style.display = "none";
    seccionContenedores.style.display = "none";
    seccionSeleccion.style.display = "none";
}

log.addEventListener('click', mostrarFormularioLogin, false);

function mostrarFormularioRegistro(event) {
    seccionRegistro.style.display = "block";

    var elementoFuente1 = event.target || event.srcElement;
    if ( elementoFuente1.id == registro.id )
        registrarUsuario.style.display = "block";
    else
        registrarUsuario.style.display = "none";
    seccionLogin.style.display = "none";
    seccionContenedores.style.display = "none";
    seccionSeleccion.style.display = "none";
}

registro.addEventListener('click', mostrarFormularioRegistro, false);


// function mostrarFormularioSeleccion() {
//     seccionLogin.style.display = "none";
//     seccionRegistro.style.display = "none";
//     seccionContenedores.style.display = "none";
//     seccionSeleccion.style.display = "block";
// }
//
// navDeportes.addEventListener('click', mostrarFormularioSeleccion, false);
// navMarcas.addEventListener('click', mostrarFormularioSeleccion, false);
// navHombre.addEventListener('click', mostrarFormularioSeleccion, false);
// navMujer.addEventListener('click', mostrarFormularioSeleccion, false);
// navNinos.addEventListener('click', mostrarFormularioSeleccion, false);
// navNovedades.addEventListener('click', mostrarFormularioSeleccion, false);


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

botonLoginRegistro.addEventListener('click', validarFormularioLoginRegistro, false);


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


function restablecerContenido() {
    seccionLogin.style.display = "none";
    seccionContenedores.style.display = "block";
    seccionSeleccion.style.display = "none";
}