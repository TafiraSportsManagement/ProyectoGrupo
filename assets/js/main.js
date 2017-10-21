
var seccionLogin = document.getElementById("seccionLogin");
var seccionContenedores = document.getElementById("seccionContenedores");
var seccionSeleccion = document.getElementById('seccionSeleccion');
var registrarUsuario = document.getElementById('registrarUsuario');

var inicio = document.getElementById('inicio');
var registro = document.getElementById('registro');


function mostrarFormularioLogin(event) {
    seccionLogin.style.display = "block";

    var elementoFuente = event.target || event.srcElement;
    console.log(elementoFuente);

    <!-- identificar el elemento -->
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