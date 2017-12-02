<?php
//Iniciamos la sesion de PHP
session_start();

require_once('registerNewUser.class.php');

$registro = new Registro();


$nombre='';
$apellidos='';
$telefono='';
$pais='';
$cp='';
$email='';
$usuario='';
$password='';

if ( isset($_POST['nombre']) )
$nombre = $_POST['nombre'];
if ( isset($_POST['apellidos']) )
$apellidos = $_POST['apellidos'];
if ( isset($_POST['telefono']) )
$telefono = $_POST['telefono'];
if ( isset($_POST['pais']) )
$pais = $_POST['pais'];
if ( isset($_POST['codigoPostal']) )
$cp = $_POST['codigoPostal'];
if ( isset($_POST['email']) )
$email = $_POST['email'];
if ( isset($_POST['usuario']) )
$usuario = $_POST['usuario'];
if ( isset($_POST['contraseña']) )
$password = $_POST['contraseña'];


echo "Nombre: ".$nombre." Apellidos: ".$apellidos."	Telefono: ".$telefono."	Pais: ".$pais."	CP: ".$cp." Email: ".$email." Contraseña: ".$password;

$respuesta = $registro->crearNuevoUsuario($nombre,$apellidos,$telefono,$pais,$cp,$email,$usuario,$password);

if ( $respuesta == null ) {
	echo "No se pudo ejecutar con exito la consulta en la BD";
}else{
    echo "Usuario registrado con exito";

?>
