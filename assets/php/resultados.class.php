<?php

// Carga la configuracion de la base de datos
require_once ('config.php');

class Resultados {
	// stored database connection
	private $mMysqli;

	// constructor opens database connection
	function __construct() {
		$this->mMysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
	}

	// destructor closes database connection
	function __destruct() {
		$this->mMysqli->close();
	}


	public function consultaOpcionesFormularioDeporte($deporte, $articulo) {

		$_deporte_ = $this->mMysqli->real_escape_string(trim($deporte));
		$_articulo_ = $this->mMysqli->real_escape_string(trim($articulo));

		if ( $_deporte_ == null )
            return 0;
        if ( $_articulo_ == null )
            return 0;

        $sql = 'SELECT nombre, modelo, marca, precio FROM producto WHERE id_deporte=(SELECT id_deporte FROM deporte WHERE nombre="'. $_deporte_ . '")';
		$calificaSQL = '';

		if ( $_articulo_ != 'todos'  ) {
			$calificaSQL = ' AND id_tipopro=(SELECT id_tipopro FROM tipoproducto WHERE tipopro="'. $_articulo_ .'")';
		}

		// echo "QUERY:  ".$sql.$calificaSQL;

		return $this->mMysqli->query($sql.$calificaSQL);

	}


	public function consultaOpcionesFormulario($navegacion, $opcion, $nombre, $modelo, $marca, $talla) {

        $_navegacion_ = $this->mMysqli->real_escape_string(trim($navegacion));
        $_opcion_ = $this->mMysqli->real_escape_string(trim($opcion));
        $_nombre_ = $this->mMysqli->real_escape_string(trim($nombre));
        $_modelo_ = $this->mMysqli->real_escape_string(trim($modelo));
        $_marca_ = $this->mMysqli->real_escape_string(trim($marca));
        $_talla_ = $this->mMysqli->real_escape_string(trim($talla));

        if ( $_navegacion_ == null )
            return 0;
        if ( $_opcion_ == null )
            return 0;

        if ( $_nombre_ == null )
            return 0;
        if ( $_modelo_ == null )
            return 0;
        if ( $_marca_ == null )
            return 0;


        $query = null;
        $sql = 'SELECT nombre, modelo, marca, precio FROM producto WHERE id_sexo=(SELECT id_sexo FROM sexo WHERE sexo="'. $_navegacion_ . '") AND id_tipopro=(SELECT id_tipopro FROM tipoproducto WHERE tipopro="'. $_opcion_ .'")';


		$calificaSQL = '';
		/* $calificaSQL = ' AND marca="'. $_marca_ . '" AND nombre="'. $_nombre_ . '" AND modelo="'. $_modelo_ .'"'; */

		if ( $_marca_ != 'todos'  ) {
			$calificaSQL = ' AND marca="'. $_marca_ . '"';
		}

		if ( $_modelo_ != 'todos' ) {
			$calificaSQL = $calificaSQL.' AND modelo="'. $_modelo_ .'"';
		}

		if ( $_nombre_ != 'todos' ) {
			$calificaSQL = $calificaSQL.' AND nombre="'. $_nombre_ . '"';
		}

//		echo '<br/><br/>Consulta: '.$sql.$calificaSQL.'<br/>';


        if ( $_opcion_ == 'ropa' || $_opcion_ == 'calzado' ) {

            if ( $_talla_ == null )
                return 0;

            // TODO: falta contemplar la cuestión de la talla.

            $query = $this->mMysqli->query($sql.$calificaSQL.";");

        } else {

            if ( $_opcion_ == 'accesorios' ) {

                $query = $this->mMysqli->query($sql.$calificaSQL.";");

            }

        }

//		echo '<br/>Numero de filas: '.$query->num_rows.'<br/>';

		return $query;

	}

}
?>