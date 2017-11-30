<?php

	// Inicia la sesion PHP
	session_start();

	// Carga el manejador de errores y la clase consulta.class.php
	//require_once ('error_handler.php');
	require_once ('resultados.class.php');

	// Crea un nuevo obj. Consulta
	$resultados = new Resultados();

    // NOTA: quizás no es necesario las siguientes asignaciones de $opcion y $navegacion.
    //       O como alternativa comprobar si los valores $_GET existen y no están vacíos
    //       para que en caso contrario devolvamos directamente un valor "null" sin llamar
    //       al mét. que consulta la BD.
    $navegacion = '';
    if ( isset($_COOKIE['navegacion']) ) {
    	$navegacion = $_COOKIE['navegacion'];
    }

    $nombre='';  $opcion='';  $modelo='';  $marca='';  $talla='';  $articulo='';
    if ( isset($_COOKIE['opcion']) ) {
        $opcion = $_COOKIE['opcion'];

        if ( isset($_GET["tipo_". $opcion]) )
            $nombre = $_GET["tipo_". $opcion];

        if ( isset($_GET["modelo_". $opcion]) )
            $modelo = $_GET["modelo_". $opcion];

        if ( isset($_GET["marca_". $opcion]) )
            $marca = $_GET["marca_". $opcion];

        if ( isset($_GET["talla_". $opcion]) )
            $talla = $_GET["talla_". $opcion];

		if ( isset($_GET["numero_". $opcion]) )
            $talla = $_GET["numero_". $opcion];

		if ( isset($_GET["deporte_articulo"]) )
            $articulo = $_GET["deporte_articulo"];
    }

	// echo " Navegacion: ".$navegacion.'	Opcion menu: '.$opcion."	Marca: ".$marca."	Modelo: ".$modelo."		Nombre: ".$nombre;

	if ( $navegacion == 'deportes' )
		$respuesta = $resultados->consultaOpcionesFormularioDeporte($opcion, $articulo);
	else
		$respuesta = $resultados->consultaOpcionesFormulario($navegacion, $opcion, $nombre, $modelo, $marca, $talla);


	if ( $respuesta == null ) {
		echo "No se pudo ejecutar con exito la consulta en la BD";
		// exit;
	} else {

		if ( mysqli_num_rows($respuesta) == 0 ) {

			echo "No se han encontrado artículos de las características solicitadas.";

		} else {

			echo "<table border='1' style='border-collapse: collapse'>";
			echo "<th>Nombre</th><th>Modelo</th><th>Marca</th><th>Precio (€)</th>";

			while ( $fila = mysqli_fetch_array($respuesta, MYSQLI_ASSOC) ) {
				//printf("ID: %s  Nombre: %s", $fila["id"], $fila["nombre"]);

				echo"<tr><td>".$fila['nombre']."</td><td>".$fila['modelo']."</td><td>".$fila['marca']."</td><td>".$fila['precio']."</td></tr><br/>";
			}

			echo "</table><br/>";

		}
	}

	echo '<br/><a href="../../main.html">Volver a buscar</a>';

	/*
	$row=mysqli_fetch_array($respuesta, MYSQLI_ASSOC);
	printf ("%s %s %s\n",$row["nombre"], $row["modelo"], $row["precio"]);
	*/

?>