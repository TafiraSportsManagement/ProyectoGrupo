<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

echo '<response>';

$opcion = trim($_GET['opcion']);

if ( $opcion == 'ropa' ) {

    echo '<resultados><resultado>articulo_ropa_1</resultado><resultado>articulo_ropa_2</resultado><resultado>articulo_ropa_3</resultado><resultado>articulo_ropa_4</resultado><resultado>articulo_ropa_5</resultado><resultado>articulo_ropa_6</resultado></resultados>';

} else {
   if ( $opcion == 'calzado' ) {

       echo '<resultados><resultado>articulo_calzado_1</resultado><resultado>articulo_calzado_2</resultado><resultado>articulo_calzado_3</resultado><resultado>articulo_calzado_4</resultado><resultado>articulo_calzado_5</resultado><resultado>articulo_calzado_6</resultado></resultados>';

   } else {
       if ( $opcion == 'accesorios' ) {

           echo '<resultados><resultado>articulo_accesorio_1</resultado><resultado>articulo_accesorio_2</resultado><resultado>articulo_accesorio_3</resultado><resultado>articulo_accesorio_4</resultado><resultado>articulo_accesorio_5</resultado><resultado>articulo_accesorio_6</resultado></resultados>';

       } else {

             echo '<resultados><resultado>primer_resultados</resultado></resultados>';

       }

}

echo '</response>';
?>

