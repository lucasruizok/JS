const resultadoArray = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

const dniInputHtml = document.getElementById('dni');
const resultadoMostrarHtml = document.querySelector('#resultado');

function cargarFormulario(e){
    e.preventDefault(); // ESTE EVENTO EVITA QUE REFRESQUE LA PAGINA
    //console.log(e); IMPRIME EN PANTALLA EL OBJETO COMPLETO DE FORM
    const dni = dniInputHtml.value;
    console.log(dni);
    const posicionArray = dni % 23;
    console.log(posicionArray + 1);
    console.log(resultadoArray[posicionArray]);
    resultadoMostrarHtml.innerText = resultadoArray[posicionArray];
}

// ejercicio 2

for(i=0; i<30; i++){
    document.write(i+1);

}