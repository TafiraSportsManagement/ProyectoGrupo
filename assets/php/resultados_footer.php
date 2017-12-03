<?php


echo '<section class="row" id="seccionContenedores">

    <article class="column middle" id="contenedorImagenes">


        <div id="slides">
            <img src="https://www.modaes.es/thumb/max/727x356/files//000_2016/0109recursos/Corredor%20728.jpg">
            <img src="http://www.practicodeporte.com/wp-content/uploads/2016/03/decathlon-630x330.jpg">
            <img src="https://mundoentrenamiento.com/wp-content/uploads/nadador-en-los-JJOO.jpg">
        </div>

    </article>

    <article class="column side" id="contenedorMapa">
        <style>
            #map {
                height: 400px;
                width: 100%;
            }
        </style>
        <div id="map"></div>
        <script>
            function initMap() {
                var uluru = {lat: 28.0716607, lng: -15.4538076};
                var map = new google.maps.Map(document.getElementById(\'map\'), {
                    zoom: 15,
                    center: uluru
                });
                var marker = new google.maps.Marker({
                    position: uluru,
                    map: map
                });
            }
        </script>
        <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC47HElbJq-vhGOmssUcioyZusV0wurYoI&callback=initMap">
        </script>
    </article>


<footer>
    <nav class="botnav">
        <a id="primero" href="javascript:void(0)">Quienes somos</a>
        <a href="javascript:void(0)">Contacto</a>
        <a href="javascript:void(0)">FAQ</a>
        <a href="#">Google+</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Youtube</a>
        <a id="ultimo" href="#">Twitter</a>
    </nav>

    <script src="./../js/main.js" language="JavaScript" type="text/javascript"></script>
    
    <script src="./../js/seleccion.js" language="JavaScript" type="text/javascript"></script>
    
</footer>
</body>
</html>';

?>