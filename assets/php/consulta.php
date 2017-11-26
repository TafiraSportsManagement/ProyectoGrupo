<?php

	// Inicia la sesion PHP
	session_start();

	// Carga el manejador de errores y la clase consulta.class.php
	require_once ('error_handler.php');
	require_once ('consulta.class.php');

	// Crea un nuevo obj. Consulta
	$consulta = new Consulta();

    // NOTA: quizás no es necesario las siguientes asignaciones de $opcionMenu y $tipo.
    //       O como alternativa comprobar si los valores $_GET existen y no están vacíos
    //       para que en caso contrario devolvamos directamente un valor "null" sin llamar
    //       al mét. que consulta la BD.
    $opcionMenu = '';
    if ( isset($_GET['opcionMenu']) ) {
    	$opcionMenu = $_GET['opcionMenu'];
    }

    $tipo = '';
    if ( isset($_GET['tipo']) ) {
        $tipo = $_GET['tipo'];
    }

    $respuesta = array('result' => $consulta->consultaOpcionesFormulario($_GET['opcionMenu'], $_GET['tipo']));

    // Genera respuesta
    if ( ob_get_length() )
        ob_clean();

    header('Content-Type: application/json');
    echo json_encode($respuesta);

?>