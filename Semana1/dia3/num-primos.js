let numero = 10;
let esPrimo = true; // Asumimos que es primo hasta que se demuestre lo contrario

// 1. Descartar números menores o iguales a 1
if (numero <= 1) {
    esPrimo = false;
} else {
    // 2. Buscamos divisores (corregido a <=)
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            esPrimo = false; // Encontramos un divisor, ya no es primo
            break;           // Rompemos el bucle de inmediato para ahorrar tiempo
        }
    }
}

// 3. Imprimimos el resultado final según lo que guardó la variable
if (esPrimo) {
    console.log(`${numero} es primo`);
} else {
    console.log(`${numero} no es primo`);
}
