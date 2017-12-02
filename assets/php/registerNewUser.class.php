<?php

require_once('config.php');

class Registro {

    private $mMysqli;

    // constructor opens database connection
    function __construct() {
    	$this->mMysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
    }

    // destructor closes database connection
    function __destruct() {
    	$this->mMysqli->close();
    }

    public function crearNuevoUsuario($nombre,$apellidos,$telefono,$pais,$cp,$email,$usuario,$password){

    $_nombre_ = $this->mMysqli->real_escape_string(trim($nombre));
    $_apellidos_ = $this->mMysqli->real_escape_string(trim($apellidos));
    $_telefono_ = $this->mMysqli->real_escape_string(trim($telefono));
    $_pais_ = $this->mMysqli->real_escape_string(trim($pais));
    $_cp_ = $this->mMysqli->real_escape_string(trim($cp));
    $_email_ = $this->mMysqli->real_escape_string(trim($email));
    $_usuario_ = $this->mMysqli->real_escape_string(trim($usuario));
    $_password_ = $this->mMysqli->real_escape_string(trim($password));


    if( $_nombre_ == null )
        return 0;
    if( $_apellidos_ == null )
        return 0;
    if( $_telefono_ == null )
        return 0;
    if( $_pais_ == null )
        return 0;
    if( $_cp_ == null )
        return 0;
    if( $_email_ == null )
        return 0;
    if( $_usuario_ == null )
        return 0;
    if( $_password_ == null )
        return 0;

    $query = null;
    $sql = 'INSERT INTO user(nombre, apellidos, telefono, pais, cp, email, usuario, contraseña) VALUES('$_nombre_','$_apellidos_','$_telefono_','$_pais_','$_cp_','$_email_','$_usuario_','$_password_')';

    echo '<br/><br/>Consulta: '.$sql.'<br/>';

    $query = $this->mMysqli->query($sql.";");

    echo '<br/>Numero de filas: '.$query->num_rows.'<br/>';

    return $query;

    }
 }
?>