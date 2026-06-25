//La idea es que un programa reciba el monto de una compra y aplique un descuento según ciertas condiciones.

let pro1=1400;
let pro2=900;

if((pro1+pro2)>=1000){
    console.log(`tienes un descuento de 10% tu total es ${((pro1+pro2)-(((pro1+pro2)*10)/(100)))}`);
}else{
    console.log(`tu total es de ${pro1+pro2}`);
}



/*
a------b
c------d
suma---100%
-------10%

*/