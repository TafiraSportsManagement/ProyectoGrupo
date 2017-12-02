<?php
session_start();
?>

<?php

$host_db = "localhost";
$user_db = "root";
$pass_db = "root";
$db_name = "tiendatafirasport";
$tbl_name = "user";

$conexion = new mysqli($host_db, $user_db, $pass_db, $db_name);


if ($conexion->connect_error) {
 die("La conexion falló: " . $conexion->connect_error);
}

$username = $_POST['usuarioLogin'];
$password = $_POST['contraseñaLogin'];

$sql = "SELECT * FROM $tbl_name WHERE usuario = '$username'";

$result = $conexion->query($sql);


if ($result->num_rows > 0) {
 }
 $row = $result->fetch_array(MYSQLI_ASSOC);
 if (password_verify($password, $row['password'])) {


    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $username;
    $_SESSION['start'] = time();
    $_SESSION['expire'] = $_SESSION['start'] + (5 * 60);

    echo "Bienvenido! " . $_SESSION['username'];
    echo "<br><br><a href=../../main.html>Página Principal</a>";


 } else {
   echo "Username o Password son incorrectos.";

   echo "<br><a href=../../main.html>Volver a intentarlo</a>";
 }
 mysqli_close($conexion);
 ?>

