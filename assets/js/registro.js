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
    if(contraseña.length < 8){
        contraseña.setCustomValidity("La contraseña debe tener al menos 8 caract.");
        return false;
    }if(contraseña.search(/[a-z]/i) < 0){
        contraseña.setCustomValidity("Tu contraseña debe tener al menos 1 letra.");
        return false;
    }if(contraseña.search(/[0-9]/) < 0){
        contraseña.setCustomValidity("Tu contraseña debe tener al menos 1 numero.");
        return false;
    }
    return true;
}

function validateForm(){
    alerta = "Rellena este campo";

    if(usuario.length == 0 || usuario.search(/[0-9]/) < 1){
        usuario.setCustomValidity("Introduzca usuario valido");
        return false;
    }else if(validatePass()){
        return false;
    }else if(contraseña.value != repContraseña.value){
        repContraseña.setCustomValidity("Contraseñas no coinciden");
        return false;
    }else if(nombre.length == 0){
        nombre.setCustomValidity(alerta);
        return false;
    }else if(apellidos.length == 0){
        apellidos.setCustomValidity(alerta);
        return false;
    }else if(tfn.length < 9 || tfn.search(/[0-9]/) < 9){
        tfn.setCustomValidity("Introduzca un telefono valido");
        return false;
    }else if(direccion == 0){
        direccion.setCustomValidity(alerta);
        return false;
    }else if(pais.value == ""){
        pais.setCustomValidity("Seleccione su pais");
        return false;
    }else if(cp.length < 5 || cp.search(/[0-9]/) < 5){
        cp.setCustomValidity("Introduzca un codigo postal valido");
        return false;
    }else if(email.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) < 1){
        email.setCustomValidity("Introduzca un email valido");
        return false;
    }else{
        return true;
    }


}