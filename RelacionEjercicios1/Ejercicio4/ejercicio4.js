/******************************************
 * 
 *   JS del Cálculo de la letra del DNI
 * 
 ******************************************/

function calculoLetra () {

    const LETRA = "TRWAGMYFPDXBNJZSQVHLCKE"

    let dni = parseInt(document.getElementById("dni").value);

    let resto = dni % 23;

    document.getElementById("resultado").innerHTML = "La letra es: " + LETRA[resto];

    /*alert("aaaaaaaaaaaaaaaaaaaaaaaaaaa")*/

    return false;

}