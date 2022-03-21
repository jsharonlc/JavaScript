/*
    ===================================================
    ALERT
    ===================================================
*/
//alert('HolaMundo');


/*
    ===================================================
    PROMPT
    ===================================================
*/
//prompt => es como un alert, pregunatara al usuario su nombre
const nombre = prompt('¿Cuál es tu nombre?');
//Esto lo que nos permite es seleccionar elementos del HTML
//Todo lo del .contenido lo sustituirá por: ${nombre} está aprendiendo JavaScript`
document.querySelector('.contenido').innerHTML =`${nombre} está aprendiendo JavaScript`;


/*
    ===================================================
    Formas de comentar código
    ===================================================
*/
//Las dos // diagonales
/* Para múltiples líneas  */