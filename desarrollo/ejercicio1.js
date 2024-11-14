const numeros =[23,4,6,7,99,12,19,8,43,21,65]

function sumaValores(array){
    let suma = 0;
    for(let i = 0; i< array.length ; i++){
        suma += array[i];
    }
    return suma;
}

console.log(`la suma de valos es: ${sumaValores(numeros)}`)
