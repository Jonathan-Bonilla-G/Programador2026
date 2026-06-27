const conversionDolaPes=(a)=> a*18/1;
const conversionPesaDol=(a)=> a*1/18;

let peso=359;
let dolar=25;

console.log(`${peso} pesos son ${conversionPesaDol(peso)} dolares`);
console.log(`${dolar} dolares son ${conversionDolaPes(dolar)} pesos`);


   