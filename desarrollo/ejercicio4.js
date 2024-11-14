// Crea una función que reciba tres números como parámetros y retorne el mayor de los tres.
// Llama a la función con diferentes conjuntos de números para verificar que funcione correctamente.

let num1, num2, num3;

num1 = parseInt(prompt("Ingrese el primer numero"));
num2 = parseInt(prompt("Ingrese el segundo numero"));
num3 = parseInt(prompt("Ingrese el tercer numero"));

function mayor(n1,n2,n3){
    return Math.max(n1,n2,n3);
}  

console.log(`El numero mayo es: ${mayor(num1,num2,num3)}`)