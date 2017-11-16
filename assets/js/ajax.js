// stores the reference to the XMLHttpRequest object
var xmlHttpRequest = creaXmlHttpRequestObject();

// retrieves the XMLHttpRequest object
function creaXmlHttpRequestObject() {
    // stores the reference to the XMLHttpRequest object
    var xmlHttp;
    // if running Internet Explorer 6 or older
    if( window.ActiveXObject ) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {
            xmlHttp = false;
        }
    } else { // if running Mozilla or other browsers
        try {
            xmlHttp = new XMLHttpRequest();
        }
        catch (e) {
            xmlHttp = false;
        }
    }

    // return the created object or display an error message
    if ( ! xmlHttp )
        alert("Error al crear el objeto XMLHttpRequest.");
    else
        return xmlHttp;
}

/**
 * Codigo tomado de: https://cybmeta.com/cookies-en-javascript
 * @param name
 * @returns {string|null}
 */
function leerCookie(name) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}


// make asynchronous HTTP request using the XMLHttpRequest object
function procesar() {
    // proceed only if the xmlHttpRequest object isn't busy
    if ( xmlHttpRequest.readyState == 4 || xmlHttpRequest.readyState == 0 )     {

         /*
           Ejecuta la pagina respuestaTexto.php desde el "servidor"
           La variable 'opcionMenu' debe haber sido establecida previamente en 'main.js'
         */
        xmlHttpRequest.open("GET", "assets/php/respuestaTexto.php?opcion=" + leerCookie('opcion'), true);
        // Define le metodo que maneja la respuesta del servidor
        xmlHttpRequest.onreadystatechange = handlerServerResponse;
        // make the server request
        xmlHttpRequest.send(null);
    } else
    // if the connection is busy, try again after one second
        setTimeout('procesar()', 1000);
}


// callback function executed when a message is received from the server
function handlerServerResponse() {
    // move forward only if the transaction has completed
    if ( xmlHttpRequest.readyState == 4 ) {
        // status of 200 indicates the transaction completed successfully
        if ( xmlHttpRequest.status == 200 ) {
/*
            // extract the XML retrieved from the server
            // xmlResponse = xmlHttpRequest.responseXML;

            // obtain the document element (the root element) of the XML structure
            // xmlDocumentElement = xmlResponse.documentElement;

            var resultadoArray = xmlDocumentElement.getElementsByTagName("resultado");
            var html = "";
            for (var i=0; i<resultadoArray.length; i++)
                html += "<p><i>" + resultadoArray.item(i).firstChild.data +"</i></p><br/>";
*/

            textResponse = xmlHttpRequest.responseText;

            textDocument = textResponse.toString();
            var resultadoArray = textDocument.split(' ');
            var html = "";
            for (var i=0; i<resultadoArray.length; i++)
                html += "<p><i>" + resultadoArray[i] +"</i></p>";


            // display the data received from the server
            document.getElementById("divResultados").innerHTML = html;

            // restart sequence
            setTimeout('procesar()', 1000);
        } else {  // a HTTP status different than 200 signals an error
            alert("Existen problemas de acceso al servidor: " + xmlHttpRequest.statusText);
        }
    }
}
