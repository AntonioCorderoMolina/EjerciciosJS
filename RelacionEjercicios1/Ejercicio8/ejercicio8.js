/****************************************
 * 
 *      JS para ejercicio8.html
 * 
 ****************************************/

/* lo mismo que tenía el evento onsubmit en la etiqueta form, está trasladado el acrhivo js */
/*document.getElementById("myform").addEventListener("submit", diviEuclides);*/


function diviEuclides() {
    
    let dividendo = parseInt(document.getElementById("dividendo").value);
    let divisor = parseInt(document.getElementById("divisor").value);
    let cociente = 0;
    let resto;
    /* el resto es lo que queda en el montón después del último reparto */
    
    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
        /* console.log(cociente) */
    }

    document.getElementById("resultado").innerHTML = "El cociente es: " + cociente + " y el resto es: " + resto;

    return false;

}