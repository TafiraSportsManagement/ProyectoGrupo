<?php

echo '<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name=”keywords” content=”HTML5,CSS3,Javascript”>
    <title>Tienda de deportes</title>
    
    <link rel="stylesheet" href="./../css/main.css">

    <link rel="stylesheet" type="text/css" href="./../css/pro_dropdown_3.css" />
    <script src="./../js/stuHover.js" type="text/javascript"></script>
</head>

<body id="main-container">

<header>
    <div class="titulo">
        <div class="logo">
            <a href="../../main.html">
                <img src="./../imagenes/002-basketball.png" height="70" width="70"/>
            </a>
        </div>
        <h1> Tienda de deportes </h1>
    </div>

    <div class="login">

        <div class="carrito-icon">
            <img id="carrito" src="./../imagenes/001-cart.png" height="50" width="50"/>
        </div>

        <div class="user-icon">
            <img src="./../imagenes/003-profile.png" height="50" width="50"/>
        </div>


        <a id="registro" href="register.html">Registro</a>

        <div id="login">
            <a id="log" style="width:auto;">Login</a>
        </div>

        <div id="logout">
            <a id="salir" style="width:auto;">Log out</a>
        </div>
    </div>

    <div id="modalLogin" class="modal">
        <form id="formLoginModal" class="formLoginModal">
            <div class="container">
                <label for="usuarioLogin">Usuario</label>
                <input id="usuarioLogin" type="text" placeholder="usuario" required />
                <br/>
                <label for="contraseñaLogin">Contraseña</label>
                <input id="contraseñaLogin" type="password" placeholder="contraseña" required/>
                <br/>
                <input type="button" value="Login" onclick="checkFormLogin()">
                <input type="checkbox" checked="checked"/> Remember me
            </div>
            <div class="container" style="background-color:#f1f1f1">
                <button id="btnCancelarLogin" type="button" class="cancelbtn" onclick="cancelFormularioLogin()">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    </div>

    <div id="modalCarrito" class="modal">
        <form id="formCarritoModal" class="formCarritoModal">
            <div class="container">
                <label id="usuarioConectado">Nombre Usuario Conectado</label>
                <br>
                <br>
                <br>
                
                <input type="button" onclick="location.href=\'cart.html\';" value="Ver Carrito" />
           </div>
            <div class="container" style="background-color:#f1f1f1">
                <button id="btnCancelarCheck" type="button" class="cancelbtn" onclick="cancelFormCarrito()">Cancel</button>
                <span class="psw">¿Alguna duda con el <a href="#">pago?</a></span>
            </div>
       </form>
   </div>

</header>


<nav>
    
    <span class="preload1"></span>
    <span class="preload2"></span>

    <ul id="nav">
        <li class="top">
            <a href="../../main.html" class="top_link"><span>Inicio</span></a>
        </li>
    </ul>

</nav>';

?>