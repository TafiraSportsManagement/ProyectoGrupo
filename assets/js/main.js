
var seccionLogin = document.getElementById("seccionLogin");
var seccionContenedores = document.getElementById("seccionContenedores");
var seccionSeleccion = document.getElementById('seccionSeleccion');
var registrarUsuario = document.getElementById('registrarUsuario');

var inicio = document.getElementById('inicio');
var registro = document.getElementById('registro');
var salir = document.getElementById('salir');
var login = document.getElementById('login');
var logout = document.getElementById('logout');

var navDeportes = document.getElementById('navDeportes');
var navMarcas = document.getElementById('navMarcas');
var navHombre = document.getElementById('navHombre');
var navMujer = document.getElementById('navMujer');
var navNinos = document.getElementById('navNiños');
var navNovedades = document.getElementById('navNovedades');

var botonLoginRegistro = document.getElementById('submitFormLogin');


function mostrarFormularioLogin(event) {
    seccionLogin.style.display = "block";

    var elementoFuente = event.target || event.srcElement;
    if ( elementoFuente.id == registro.id )
        registrarUsuario.style.display = "block";
    else
        registrarUsuario.style.display = "none";

    seccionContenedores.style.display = "none";
    seccionSeleccion.style.display = "none";
}

inicio.addEventListener('click', mostrarFormularioLogin, false);
registro.addEventListener('click', mostrarFormularioLogin, false);


function mostrarFormularioSeleccion() {
    seccionLogin.style.display = "none";
    seccionContenedores.style.display = "none";
    seccionSeleccion.style.display = "block";
}

navDeportes.addEventListener('click', mostrarFormularioSeleccion, false);
navMarcas.addEventListener('click', mostrarFormularioSeleccion, false);
navHombre.addEventListener('click', mostrarFormularioSeleccion, false);
navMujer.addEventListener('click', mostrarFormularioSeleccion, false);
navNinos.addEventListener('click', mostrarFormularioSeleccion, false);
navNovedades.addEventListener('click', mostrarFormularioSeleccion, false);


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