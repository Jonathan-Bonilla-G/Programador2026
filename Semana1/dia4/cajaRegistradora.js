var producto1;
var producto2;
var producto3;

const suma=(a,b,c)=>a+b+c;

function descuento(suma){

    if(suma>1000){
        return suma-(suma*.10);
    }
    else if(suma>1500){
        return suma-(suma*.15);
    }else return suma;
}

function ticket(a,b,c,subtotal,total){

    console.log("-----TICKET-----");
    console.log(`producto 1----${a}`);
    console.log(`producto 2----${b}`);
    console.log(`producto 3----${c}`);
    console.log(`subtotal ${subtotal}`)
    console.log(`total ${total}`)


}


function principal(){
    producto1=900;
    producto2=150;
    producto3=800;

    let subtotal=suma(producto1,producto2,producto3);
    let total=descuento(subtotal);
}

principal();