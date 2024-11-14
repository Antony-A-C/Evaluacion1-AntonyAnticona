// Crea una función que reciba una temperatura en grados Celsius y la convierta a Fahrenheit. La fórmula es:
// Fahrenheit = (Celsius * 9/5) + 32
// Llama a la función con varios valores de prueba y muestra los resultados.

let Celsius = parseInt(prompt("ingrese la temperartura en grados Celcius"))

let Fahrenheit = 0;

function calculo(temp){
    return (temp * 9/5) + 32;
}

console.log(`${Celsius}°Celsius es: ${calculo(Celsius).toFixed(2)}°Fahrenheit`)