var usuario = document.getElementById("usuario");
var contraseña = document.getElementById("contraseña");
var repContraseña = document.getElementById("repContraseña");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var tfn = document.getElementById("telefono");
var direccion = document.getElementById("direccion");
var pais = document.getElementById("pais");
var cp = document.getElementById("codigoPostal");
var email = document.getElementById("email");

function validatePass(){
    error = [];
    if(contraseña.length < 8){
        error.push("La contraseña debe tener al menos 8 caract.");
    }if(contraseña.search(/[a-z]/i) < 0){
        error.push("Tu contraseña debe tener al menos 1 letra.");
    }if(contraseña.search(/[0-9]/) < 0){
        error.push("Tu contraseña debe tener al menos 1 numero.");
    }if(error.length > 0){
        alert(error.join("\n"));
        return false;
    }
    return true;
}

function validateForm(){
    alerta = "Rellena este campo";

    if(usuario.length == 0){
        alert(alerta);
    }if(contraseña.value != repContraseña.value){
        alert("Contraseñas no coinciden");
    }if(nombre.length == 0){
        alert(alerta);
    }if(apellidos.length == 0){
        alert(alerta);
    }if(tfn.length < 9 || tfn.search(/[0-9]/) < 9){
        alert ("Introduzca un telefono valido");
    }if(direccion == 0){
        alert(alerta);
    }if(pais.value == ""){
        alert("Seleccione su pais");
    }if(cp.length < 5 || cp.search(/[0-9]/) < 5){
        alert("Introduzca un codigo postal valido");
    }if(email.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) < 1){
        alert("Introduzca un email valido");
    }if(validatePass()){
        return false;
    }
    return true;

}