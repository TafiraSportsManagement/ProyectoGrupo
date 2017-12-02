$(document).ready(function(){

    $("#submit").click(function(){

        var usuario = $("#usuario").val();
        var password = $("#contraseña").val();
        var nombre = $("#nombre").val();
        var apellidos = $("#apellidos").val();
        var telefono = $("#telefono").val();
        var direccion = $("#direccion").val();
        var pais = $("#pais").val();
        var cp = $("#codigoPostal").val();
        var email = $("#email").val();
        // Returns successful data submission message when the entered information is stored in database.
        var dataString = 'usuario='+ usuario + '&email='+ email + '&password='+ password + '&nombre='+ nombre + '&apellidos='+apellidos+'&telefono='+telefono+'&direccion='+direccion+'&pais='+pais+'&cp='+cp;
        if(usuario==''||password==''||nombre==''||apellidos==''||telefono==''||direccion==''||pais==''||cp==''||email=='')
        {
            alert("Please Fill Fields");
        }
        else
        {
        // AJAX Code To Submit Form.
            $.ajax({
                type: "POST",
                url: "php/registerNewUser.php",
                data: dataString,
                cache: false,
                success: function(result){
                    alert(result);
                }
            });
        }
        return false;
    });
});