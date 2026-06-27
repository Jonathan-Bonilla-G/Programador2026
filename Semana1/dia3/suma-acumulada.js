/*

Una empresa quiere un programa muy 
sencillo para hacer cálculos rápidos.
El programa debe calcular la suma 
de todos los números desde el 1 
hasta un número determinado.
Por ejemplo, si el límite es 5, 
el programa debe obtener el 
resultado de sumar:

*/

let conteoaux=0;
let i=1;
let numfinal;
let cadeaux="";
numfinal = 13;

//console.log(cadeaux);

while (i <= numfinal) {
    if(i === 1){
        cadeaux=i;
    }else{
    cadeaux= cadeaux+" + "+i;}

    conteoaux=conteoaux+i;
    i++;
}

console.log(`${cadeaux} = ${conteoaux}`);
