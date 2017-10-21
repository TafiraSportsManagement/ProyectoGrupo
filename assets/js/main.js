
var seccionLogin = document.getElementById("seccionLogin");
var seccionContenedores = document.getElementById("seccionContenedores");
var seccionSeleccion = document.getElementById('seccionSeleccion');
var registrarUsuario = document.getElementById('registrarUsuario');

var inicio = document.getElementById('inicio');
var registro = document.getElementById('registro');

var navDeportes = document.getElementById('navDeportes');
var navMarcas = document.getElementById('navMarcas');
var navHombre = document.getElementById('navHombre');
var navMujer = document.getElementById('navMujer');
var navNinos = document.getElementById('navNiños');
var navNovedades = document.getElementById('navNovedades');


function mostrarFormularioLogin(event) {
    seccionLogin.style.display = "block";

    var elementoFuente = event.target || event.srcElement;
    console.log(elementoFuente);

    if ( elementoFuente.id == "registro" )
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
