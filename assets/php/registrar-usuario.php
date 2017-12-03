<?php

 $host_db = "localhost";
 $user_db = "root";
 $pass_db = "root";
 $db_name = "tiendatafirasport";
 $tbl_name = "user";

 $form_pass = $_POST['contraseña'];
$hash = password_hash($form_pass, PASSWORD_DEFAULT);

 $conexion = new mysqli($host_db, $user_db, $pass_db, $db_name);

 if ($conexion->connect_error) {
 die("La conexion falló: " . $conexion->connect_error);
}

 $buscarUsuario = "SELECT * FROM $tbl_name
 WHERE usuario = '$_POST[usuario]' ";

 $result = $conexion->query($buscarUsuario);

 $count = mysqli_num_rows($result);

 if ($count == 1) {
 echo "<br />". "El Nombre de Usuario ya ha sido tomado." . "<br />";

 echo "<a href=../../register.html>Por favor escoja otro Nombre</a>";
 }
 else{

 $query = "INSERT INTO user (usuario, password, apellidos, cp, email, nombre, pais, telefono)
 VALUES ('$_POST[usuario]', '$hash', '$_POST[apellidos]', '$_POST[codigoPostal]', '$_POST[email]', '$_POST[nombre]', '$_POST[pais]', '$_POST[telefono]')";

 if ($conexion->query($query) === TRUE) {

 echo "<br />" . "<h2>" . "Usuario Creado Exitosamente!" . "</h2>";
 echo "<h4>" . "Bienvenido: " . $_POST['usuario'] . "</h4>" . "\n\n";
 echo "<h5>" . "Hacer Login: " . "<a href=../../main.html>Página Principal</a>" . "</h5>";
 }

 else {
 echo "Error al crear el usuario." . $query . "<br>" . $conexion->error;
   }
 }

 mysqli_close($conexion);
?>

