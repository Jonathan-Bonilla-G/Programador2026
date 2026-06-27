Bucles e iteraciones
los bucles ofrecen una forma rapida y sencilla de hacer algo repetidamente.se puede pensar en un bucle como una version computarizada delñ juego en la que le dices a alguien que se c pasos en una direccion y luego pasos en otra

hay muchos tipos de bucles, pero esencialmente, todos hacen lo mismo; repiten una accion v arias vecer(¡ten en cuenta que es posible que ese numero sea cera!)

los diversos mecanismos de bucle ofrecen diferentes formas de determinar los puntos de inicio y terminacion del bucle. hay varias situaciones que son facilmente atendidas por un tipo de bucle que por otros

la computadora es excelente haciendo tareas repetivtivas 

recorrer una lista de usuarios
calcular impuestos
imprimir facturas
recorrer un arreglo
buscar un dato
validar informacion


las declaraciones para bucles proporcionadas en javasript son 

For

un ciclo for se repite hasta que una condicion especificada se evalue como false.El bucle for de javascript es similar al bucle for de java y c

una declaraciopn for tiene el siguiente aspecto

for(inicializacion; condicion; incremento){


}
ejemplo

for (let i = 1; i <= 100; i++) {
    console.log(i);
}


en la coindicion mientras sea verdadera el ciclo continua, pero cuando sea falsa el ciclo termina

porque empieza de 0

en programacion casi todo comienza desde cero


i++ suma i+1
i+=2 ---- i=i+2
i-- resta i-1

do while

la instruccion do while se repite hasta que una condicion especifica se evalue como falsa

una declaracion do while tiene el siguiente aspecto

do
    exprecion
    while(condicion);

    en javascript crea un bucle que siempre ejecuta su bloque de codigo almenos una vez antes de evaluar la condicon.despues, continuara repitiendose mientras dichas condicion sea verdadera

sintaxis

do {
  // Código a ejecutar
} while (condición);

ejemplo

let contador = 1;

do {
  console.log(`El contador es: ${contador}`);
  contador++;
} while (contador <= 3);

While

una declaracion while ejecutas sus instrucciones siempre que una condicion especificada se evalue como true. en javascrip un bucle se ejecuta solo si la condicion es verdadera desde el principio. si la condicion es falsa desde la primeer vez, al codigo dentro nunca se ejecuta

while (condición) {
  // Código a ejecutar mientras la condición sea verdadera
}

ejemplo

let contador = 1;

while (contador <= 3) {
  console.log(`El contador es: ${contador}`);
  contador++; // Importante para evitar un bucle infinito
}

biucle infinito

el bucoe infinito es uno de los errores mas comunes cuando se empieza a programar.

un bucle infinito ocurre cuando un ciclo nunca llega a terminar, porque la condicion siempre sigue siendo verdadera.

la computadora sigue ejecutando el mismo bloque de codigo una yh otra vez
ejemplo

let i = 1;

while (i <= 5) {
    console.log(i);
}

diferencia entre while do while y for

la diferencia principal entre while, so while y for radica en cuando evaluan la condicion y si sabes de entemano cuantas veces se va a repetir el codigo 

for ideal cuando conoces el numero de repeticiones

se usa cuando sabes exactamente cuantas veces quieres ejecutar el bucle antes de que empiece. todo el control se escribe en una solo linea

while
ideal cuando dependes de una condicon externa
se usa cuando no sabes cuantas vueltas dara el bucle, ya que depende de una condicion dinamica

do while
ideal cuando necesitas ejecutar el codigo almenos una vez
se usa cuando necesitas que la accion se realize obligatoriamente la primera vez y luego decidad si se debe repetir o no segun el resultado obtenido

break

rompe completamente el ciclo

if(i ===5){
    break;
}

continue
no rompe el ciclo solo salta una vuelta

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);

}

cuando usar break y continue 

break cuando ya encontraste lo que buscabar y no tiene sentido seguir recorriendo el ciclo

continue: cuando quiere ingnorar un caso especifico y continuar con los demas

labeled

un bucle labeled es una herramienta que te permite darle un nombre a un bucle

sirve especificamente para controlar bucles anidados. con una etiqueta, puedes usar break o cintinue en el bicle interno para afectar direntamente al bucle externo

buclePrincipal: 
for (let i = 1; i <= 3; i++) {
  
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break buclePrincipal; // ✅ Detiene TODO el bucle externo de golpe
    }
    console.log(`i=${i}, j=${j}`);
  }

}

// Resultado en consola:
// i=1, j=1
// i=1, j=2
// i=1, j=3
// i=2, j=1
// (Aquí se detiene por completo)


aunque no son muy utiles en algoritmos compldjos, as etiquetas no se usan muy sehuro en e dia a tu returj

aunque so muy utiles en algoritmos algos complejos, porque jo es mas du+ificil de leer. muchas veces en mejor mover el codigo 

ejemplo

for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}

ejemplo

let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Bucles externos: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Bucles internos: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

dor of crea un vucle que se repite sobre obejteos iterables  (array map setg argumentes) invocados un bucle de iteracion personalizado con declaracionesque se ejecutar
const arr = [3, 5, 7];
arr.foo = "hola";

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs 3, 5, 7
}
