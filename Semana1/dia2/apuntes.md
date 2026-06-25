control de flujo y manejo de errores

javascript admite un compacto conjunto de declaraciones especificamente declaradores de control de flujo, que puedes utilizar para incorporar una gran cantidad de interactividad en tu aplicacion


condicionales y logica

que es una condicional

una condicional permite que el programa tome decisiones.

ejemplo

si llueve-> llevo paraguas
si no llueve-> no llevo paraguas

en programacion es exactamente igual

let llueve = true;

if (llueve){

    console.log("lleva paraguas");
}


sentencia IF

se utiliza la expresion if para ejecutar una instruccion si una conmdicion logica es true. utiliza la clausula opcional else para ejecutar una instruccion si la condicion es false

una declaracion if se ve asi

if(condicion){

    statement_1;

}else{
    statement_2

}

la condiccion puede ser cualquier exprecion que se evalue como true o false

si se evalue true se ejecuta statement 1 de lo contrario el 2

en el caso de multiples condiciones, solo se ejecutrara la primera condicion logica que se evalie como true. ára ejecutar multiples declaraciones , agrupalas dentro de una declaracion de bloque.

ELSE

sirve para ejecutar algo cuando la condicion es falsa

ELSE IF

permite evaluar varias condiciones

let calificacion = 80;

if (calificacion >= 90) {
    console.log("Excelente");
}
else if (calificacion >= 70) {
    console.log("Aprobado");
}
else {
    console.log("Reprobado");
}

mejores practicas

en general, es una buena practica usar siempre declaraciones de blpque, especialmente al ani9dar declaraciones irif (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}


operadores de compracion son los que estan dentro del ir

mayor que
>

menor que 
<

mayor o igual
>=

menor o igual
<=

igual estricto
===

cabe mencionar que se puede igualar de dos formas 

== pero puede converitir automaticamente los tipos de datos

5 == "5" ------ true

=== compara el valor y el tipo de dato 

5 === "5" ---- false


diferente
!==

OPERADORES LOGICOS

AND.- y

&&

if (edad >= 18 && licencia) {
    console.log("Puede conducir");
}

or .- o

||

if (tieneDinero || tieneTarjeta) {
    console.log("Puede pagar");
}

not.- invierte un valor. booleano

un bololeano solo puede tener dos valores

true y false

el operador not (!) hace exactamente lo cointrario: cambia el estado

true ----- false
false ----- true

ejemplo

let activo = false;

console.log(activo); // devuelve false

console.los(!activo); // devueklve true

ejemplo

let passwordCorrecta = false;

if (!passwordCorrecta) {
    console.log("Contraseña incorrecta");
}



