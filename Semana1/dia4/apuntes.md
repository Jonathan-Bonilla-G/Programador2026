Funciones

las funciones son. uno de los bloques de construccion fundamentales en javascrip. una funcion en javascript es similar a un procedimiento- un conjunto de instrucciones que realiza una tarea o calcula un balor, pero para que un procedimiento califique como funcion, debe tomar alguna entrada y devolver una salida donde hay alguna relacion obvia entre la entrada y la salida. para usar una funcion, debes definirla en algun lugar del ambito desde el que desae llamarla.

declaracion de funcion

una definicion de funcion (tambien denominada declaracion de funcion o expresion de funcion) consta de la palabra clave function, seguida de:

-nombre de la funcion.
-una lista de parametros de la funcion, entre parentesis y separados por comas.
-las declaracions de javascript que definen la funcion, encerradas entre llaves { }

las funciones permiten escribir un codigo una sola ves y reutilizarlo cuando lo necesites.

ejemplo

function saludar() {
    console.log("Hola Jonathan");
}

function --- palabra reservada
saludar --- nombre de la funcion
() --- aqui van los parametros
{} --- contiene codigo que ejecutara la funcion

Parametros

los parametros primitivos (comoun number) se pasan a las funciones por el valor; el valor se pasa a la funcion, pero si la funcion cambia el valor del parametro, este cambio no se refleja globalmente ni en la funcion que llama

si pasas un objeto (es decir, un valor no primitivo, como un Array o un objeto definido por el usuario) como parametro y la funcion cambia las propiedades del objeto, ese cambio es visible fuera de la funcion.

los parametros permiten que una funcion reciba informacion

ejemplo

function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar("Jonathan");
saludar("Carlos");
saludar("María");

varios parametro

function sumar(a, b) {
    console.log(a + b);
}

sumar(5, 3);
sumar(10, 8);
sumar(100, 250);

que es return

hasta ahora nuestras funciones solo muestran informacion con console.log

con return la funcion devuelve un valor para poder seguir utilizandolo

function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 8);

console.log(resultado);

ARROW FUNCTIONS

apartir de es6 aparecio una forma mas corta de escribir funciones

es una forma mas corta de escribir una funcion

por ejemplo, estas dos funciones hacen exactamente lo mismo

tradicional

function saludar(nombre) {
    return "Hola " + nombre;
}

arrowe function

const saludar = (nombre) => {
    return "Hola " + nombre;
};

=> .- se lee como va hacia o produce. es el simbolo que identifica una arrow 

solo si hay una linea se puede omitir las llaver y el return

const cuadrado = (numero) => {
    return numero * numero;
};

const cuadrado = (numero) => {
    return numero * numero;
};



