// programa para dar el indice de masa corporal de una persona
/*Infrapeso: Menos de 18.5.
Peso normal: 18.5 - 24.9.
Sobrepeso: 25.0 - 29.9.
Obesidad: 30.0 o más. */

let imc=0;
let peso=66;
let altura= 1.70;

imc=(peso/(altura**2));

if(imc< 18.5){
    console.log(`${imc} es infrapeso`);
}
else if(imc>=18.5 && imc<25){
    console.log(`${imc} es peso normal`);
}
else if(imc>=25 && imc<30){
    console.log(`${imc} es sobrepeso`);
}
else if(imc>=30){
    console.log(`${imc} obesidad`);

}
