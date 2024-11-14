// Descripción: Escribe un algoritmo que reciba una nota de un examen (de 0 a 20) y determine si el estudiante aprobó o reprobó. 
// Considera que una nota mayor o igual a 11 es aprobatoria. Luego, implementa el código JavaScript.

let nota = Math.floor(Math.random()* 20)

function final(nota){
    if(nota >= 11){
        rpta = `usted aprobo con ${nota}`;
    }
    else{
        rpta = `usted desaprobo con ${nota}`;
    }
    return rpta;
}

console.log(final(nota));