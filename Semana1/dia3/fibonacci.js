/*
programa para realizar la serie de fibonacci
*/


let a=0;
let b=1;
let limite=10;
let impresion=a+" "+b+" ";
let aux=0;

if(limite === 1){
    console.log(a);
}
else if(limite === 2){
        console.log(impresion)
        }
        else{
            console.log(impresion)
            for(i=2;i<limite;i++){
                aux=b+a;
                console.log(aux)
                a=b;
                b=aux;
            }
        }   







