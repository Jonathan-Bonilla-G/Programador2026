/*
programa que declara mayor o menor de 3 numeros 

*/

let num1 = 281;
let num2 = 21;
let num3 = 281;

if((num1 > num2 && num1 > num3) ){
    console.log(`${num1} es mayor que ${num2} y ${num3}`);
} 
else if(num2 > num3 && num2 > num1){
        console.log(`${num2} es mayor que ${num1} y ${num3}`);
    }
else if(num3 > num2 && num3 > num1){
            console.log(`${num3} es mayor que ${num1} y ${num2}`);
        }
else if(num1 === num2 && num1 === num3){
                console.log(`los numeros son iguales`);
            }
else if(num1 === num2 && num1 > num3){
                    console.log(`${num1} y ${num2} son mayores a ${num3}`);
                }
else if(num1 === num3 && num1 > num2){
                        console.log(`${num1} y ${num3} son mayores a ${num2}`);

                    }
else if(num2 === num3 && num3 > num1){
                            console.log(`${num2} y ${num3} son mayores a ${num1}`);

                        }