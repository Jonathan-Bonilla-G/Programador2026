/*
Una empresa está desarrollando una 
calculadora científica.
Uno de los cálculos que necesita 
realizar es el factorial de un número.
Te asignan la tarea de crear un 
programa que calcule ese valor.
*/

let numero=4;
let factorial=1;

for(let i=1;i<=numero;i++){
    factorial*=i;
}

console.log(`el factorial de ${numero} es ${factorial}`);

